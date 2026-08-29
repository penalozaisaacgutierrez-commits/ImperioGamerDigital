@echo off
REM Si WAMP (Apache) esta apagado, use el servidor PHP en el puerto 8766.
start http://localhost:8766/
if exist "C:\wamp64\bin\php\php8.3.28\php.exe" (
  start "ImperioGamerDigital" /MIN "C:\wamp64\bin\php\php8.3.28\php.exe" -S localhost:8766 -t "C:\wamp64\www\imperio-gamer-digital"
)
