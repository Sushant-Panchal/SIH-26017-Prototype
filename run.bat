@echo off
setlocal

:: ============================================================
::  BHOOMI SAKHA - SIH 26017 Launcher
:: ============================================================

:: 1. Dynamically detect repository root directory from run.bat location
set "ROOT_DIR=%~dp0"
if "%ROOT_DIR:~-1%"=="\" set "ROOT_DIR=%ROOT_DIR:~0,-1%"

:: 2. Ensure current working directory is the repository root
cd /d "%ROOT_DIR%"

:: 3. Define paths and port configurations
set "PYTHON_EXE=%ROOT_DIR%\.venv\Scripts\python.exe"
set "FRONTEND_DIR=%ROOT_DIR%\frontend"
set "BACKEND_PORT=8000"
set "FRONTEND_PORT=5173"
set "BACKEND_URL=http://127.0.0.1:%BACKEND_PORT%"
set "FRONTEND_URL=http://localhost:%FRONTEND_PORT%"

:: 4. Banner display
echo ==========================================
echo   BHOOMI SAKHA
echo   SIH 26017
echo ==========================================
echo.

:: 5. Validate Python Virtual Environment
if not exist "%PYTHON_EXE%" (
    echo [ERROR] Python virtual environment not found!
    echo Expected location: "%ROOT_DIR%\.venv"
    echo.
    echo Please create the virtual environment and install dependencies:
    echo   python -m venv .venv
    echo   .venv\Scripts\python.exe -m pip install -r requirements.txt
    echo.
    pause
    exit /b 1
)

:: 6. Validate Node.js / npm availability
where npm >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js / npm was not found in your system PATH!
    echo Please install Node.js from https://nodejs.org to run the frontend.
    echo.
    pause
    exit /b 1
)

:: 7. Validate Frontend directory and dependencies
if not exist "%FRONTEND_DIR%" (
    echo [ERROR] Frontend directory not found at "%FRONTEND_DIR%"!
    echo.
    pause
    exit /b 1
)

if not exist "%FRONTEND_DIR%\node_modules" (
    echo [ERROR] Frontend dependencies not found!
    echo Expected directory: "%FRONTEND_DIR%\node_modules"
    echo.
    echo Please install frontend dependencies first:
    echo   cd frontend
    echo   npm install
    echo.
    pause
    exit /b 1
)

:: 8. Start FastAPI Backend (in a separate terminal window)
echo Starting backend...
netstat -ano | findstr ":%BACKEND_PORT%" | findstr "LISTENING" >nul 2>&1
if not errorlevel 1 (
    echo Backend is already running on %BACKEND_URL%
) else (
    start "BHOOMI SAKHA - Backend" cmd /k "cd /d "%ROOT_DIR%" && "%PYTHON_EXE%" -m uvicorn src.api:app --reload --host 127.0.0.1 --port %BACKEND_PORT%"
)
echo Backend: %BACKEND_URL%
echo.

:: 9. Start Vite Frontend (in a separate terminal window)
echo Starting frontend...
netstat -ano | findstr ":%FRONTEND_PORT%" | findstr "LISTENING" >nul 2>&1
if not errorlevel 1 (
    echo Frontend is already running on %FRONTEND_URL%
) else (
    start "BHOOMI SAKHA - Frontend" cmd /k "cd /d "%FRONTEND_DIR%" && npm run dev"
)
echo Frontend: %FRONTEND_URL%
echo.

:: 10. Wait briefly for servers to initialize
echo Waiting for servers to initialize...
timeout /t 3 /nobreak >nul 2>&1 || ping -n 4 127.0.0.1 >nul 2>&1

:: 11. Open Frontend in default browser
echo Opening BHOOMI SAKHA...
start "" "%FRONTEND_URL%"

echo.
echo ==========================================
echo   BHOOMI SAKHA started successfully!
echo   Frontend: %FRONTEND_URL%
echo   Backend:  %BACKEND_URL%
echo ==========================================
echo   Keep the server terminal windows open.
echo   To stop both servers, run stop.bat
echo ==========================================
echo.
timeout /t 2 /nobreak >nul 2>&1

exit /b 0
