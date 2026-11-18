from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Conversation, Message
from .gemini_client import generate_chat_reply
import logging

logger = logging.getLogger(__name__)

class ChatEndpointView(APIView):
    def post(self, request):
        user_message = request.data.get('message', '').strip()
        conversation_id = request.data.get('conversation_id')
        user_name = request.data.get('user_name', 'Elakiya Rajendran')
        user_email = request.data.get('user_email', 'elakiya.rajendran@student.rmcas.edu.in')

        if not user_message:
            return Response({'error': 'Message cannot be empty.'}, status=status.HTTP_400_BAD_REQUEST)

        # Get or create conversation
        conversation = None
        if conversation_id:
            try:
                conversation = Conversation.objects.get(id=conversation_id, is_deleted=False)
            except Conversation.DoesNotExist:
                conversation = None

        if not conversation:
            # Auto-generate title from first 6 words
            words = user_message.split()
            title = " ".join(words[:6])
            if len(title) > 40:
                title = title[:37] + "..."
            conversation = Conversation.objects.create(
                user_name=user_name,
                user_email=user_email,
                title=title or "Campus Query"
            )

        # Save user message
        user_msg_obj = Message.objects.create(
            conversation=conversation,
            role='user',
            content=user_message
        )

        # Retrieve recent history turns
        recent_msgs = conversation.messages.order_by('-created_at')[:8]
        history = [{'role': m.role, 'content': m.content} for m in reversed(recent_msgs)]

        # Call Gemini 3.5 Flash
        reply_text = generate_chat_reply(user_message, conversation_history=history)

        # Save assistant message
        asst_msg_obj = Message.objects.create(
            conversation=conversation,
            role='assistant',
            content=reply_text
        )

        conversation.save() # update updated_at

        return Response({
            'conversation_id': str(conversation.id),
            'conversation_title': conversation.title,
            'user_message': {
                'id': str(user_msg_obj.id),
                'role': 'user',
                'content': user_msg_obj.content,
                'created_at': user_msg_obj.created_at.isoformat()
            },
            'assistant_message': {
                'id': str(asst_msg_obj.id),
                'role': 'assistant',
                'content': asst_msg_obj.content,
                'created_at': asst_msg_obj.created_at.isoformat()
            }
        })

class ConversationListView(APIView):
    def get(self, request):
        conversations = Conversation.objects.filter(is_deleted=False).order_by('-updated_at')
        data = [{
            'id': str(c.id),
            'title': c.title,
            'user_name': c.user_name,
            'created_at': c.created_at.isoformat(),
            'updated_at': c.updated_at.isoformat(),
            'message_count': c.messages.count()
        } for c in conversations]
        return Response(data)

    def post(self, request):
        title = request.data.get('title', 'New Chat')
        c = Conversation.objects.create(
            user_name=request.data.get('user_name', 'Elakiya Rajendran'),
            user_email=request.data.get('user_email', 'elakiya.rajendran@student.rmcas.edu.in'),
            title=title
        )
        return Response({
            'id': str(c.id),
            'title': c.title,
            'created_at': c.created_at.isoformat(),
            'updated_at': c.updated_at.isoformat()
        }, status=status.HTTP_201_CREATED)

class ConversationDetailView(APIView):
    def get(self, request, pk):
        try:
            c = Conversation.objects.get(id=pk, is_deleted=False)
        except Conversation.DoesNotExist:
            return Response({'error': 'Conversation not found'}, status=status.HTTP_404_NOT_FOUND)

        msgs = [{
            'id': str(m.id),
            'role': m.role,
            'content': m.content,
            'feedback': m.feedback,
            'created_at': m.created_at.isoformat()
        } for m in c.messages.all().order_by('created_at')]

        return Response({
            'id': str(c.id),
            'title': c.title,
            'created_at': c.created_at.isoformat(),
            'messages': msgs
        })

    def patch(self, request, pk):
        try:
            c = Conversation.objects.get(id=pk, is_deleted=False)
        except Conversation.DoesNotExist:
            return Response({'error': 'Conversation not found'}, status=status.HTTP_404_NOT_FOUND)

        new_title = request.data.get('title')
        if new_title:
            c.title = new_title
            c.save()
        return Response({'id': str(c.id), 'title': c.title})

    def delete(self, request, pk):
        try:
            c = Conversation.objects.get(id=pk)
            c.is_deleted = True
            c.save()
            return Response({'status': 'deleted'})
        except Conversation.DoesNotExist:
            return Response({'error': 'Conversation not found'}, status=status.HTTP_404_NOT_FOUND)

class MessageFeedbackView(APIView):
    def post(self, request, pk):
        try:
            m = Message.objects.get(id=pk)
            feedback = request.data.get('feedback') # 'thumbs_up' or 'thumbs_down'
            m.feedback = feedback
            m.save()
            return Response({'status': 'feedback recorded', 'feedback': feedback})
        except Message.DoesNotExist:
            return Response({'error': 'Message not found'}, status=status.HTTP_404_NOT_FOUND)
