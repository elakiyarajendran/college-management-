"""
RM COLLEGE OF ARTS AND SCIENCE
Full-Stack Application Launcher (Django REST Backend + React Vite Frontend)
"""
import subprocess
import sys
import os
import time

def run():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    backend_dir = os.path.join(base_dir, "backend")
    frontend_dir = os.path.join(base_dir, "frontend")

    print("=" * 65)
    print("  RM COLLEGE OF ARTS AND SCIENCE • CAMPUS PORTAL & RIMI AI")
    print("=" * 65)
    print("Launching Django REST API Server on http://127.0.0.1:8000...")
    
    django_cmd = [sys.executable, "manage.py", "runserver", "127.0.0.1:8000"]
    django_proc = subprocess.Popen(django_cmd, cwd=backend_dir)

    print("Launching Vite React Dev Server on http://localhost:5173...")
    npm_cmd = "npm.cmd run dev" if os.name == 'nt' else "npm run dev"
    vite_proc = subprocess.Popen(npm_cmd, cwd=frontend_dir, shell=True)

    print("\n[OK] Both servers are starting up:")
    print("     - Frontend Portal: http://localhost:5173")
    print("     - Django API & SPA: http://127.0.0.1:8000")
    print("     - Core AI Engine: gemini-3.5-flash")
    print("     - Virtual Assistant: RIMI (Campus Buddy)")
    print("\nPress Ctrl+C to terminate both servers.")

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nShutting down servers...")
        django_proc.terminate()
        vite_proc.terminate()
        print("Done.")

if __name__ == "__main__":
    run()
