@echo off
echo ========================================
echo ALchemy Central - GitHub Deployment
echo ========================================
echo.

cd /d "%~dp0"

echo [1/4] Git Status pruefen...
git status
echo.

echo [2/4] Alle Aenderungen hinzufuegen...
git add .
echo.

echo [3/4] Commit erstellen...
git commit -m "Kontaktformular mit Formspree - Sicherheitsupdate"
echo.

echo [4/4] Auf GitHub pushen...
git push origin main
echo.

echo ========================================
echo Deployment abgeschlossen!
echo ========================================
echo.
echo Ihre Website wird in 1-2 Minuten aktualisiert sein.
echo Testen Sie dann: https://IHR-USERNAME.github.io/IHR-REPO/contact.html
echo.
pause
