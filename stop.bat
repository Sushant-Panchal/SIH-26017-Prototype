@echo off
setlocal

:: ============================================================
::  BHOOMI SAKHA - SIH 26017 Stopper
:: ============================================================

set "BACKEND_PORT=8000"
set "FRONTEND_PORT=5173"
set "STOPPED_ANY=0"

echo ==========================================
echo   Stopping BHOOMI SAKHA Services...
echo ==========================================
echo.

:: Stop Backend (Port 8000) only
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":%BACKEND_PORT%" ^| findstr "LISTENING"') do (
    echo Stopping backend process [PID %%a] on port %BACKEND_PORT%...
    taskkill /F /T /PID %%a >nul 2>&1
    set "STOPPED_ANY=1"
)

:: Stop Frontend (Port 5173) only
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":%FRONTEND_PORT%" ^| findstr "LISTENING"') do (
    echo Stopping frontend process [PID %%a] on port %FRONTEND_PORT%...
    taskkill /F /T /PID %%a >nul 2>&1
    set "STOPPED_ANY=1"
)

if "%STOPPED_ANY%"=="1" (
    echo.
    echo ==========================================
    echo   BHOOMI SAKHA services stopped cleanly.
    echo ==========================================
) else (
    echo No active BHOOMI SAKHA processes found on port %BACKEND_PORT% or %FRONTEND_PORT%.
)

echo.
timeout /t 2 /nobreak >nul 2>&1

exit /b 0
