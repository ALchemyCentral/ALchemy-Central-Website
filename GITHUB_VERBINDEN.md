# 🔗 Website mit GitHub Repository verbinden

## Schritt-für-Schritt Anleitung

### **Methode 1: GitHub Desktop (Einfachste Methode)**

#### 1. GitHub Desktop installieren
- Download: https://desktop.github.com/
- Installieren und mit Ihrem GitHub-Account anmelden

#### 2. Repository erstellen oder verbinden

**Option A: Neues Repository erstellen**
1. Öffnen Sie GitHub Desktop
2. Klicken Sie auf **"File"** → **"New Repository"**
3. Name: `alchemy-central-website` (oder Ihr Wunschname)
4. Local Path: `C:\Users\seiju\Desktop\ALchemy Central Website`
5. **WICHTIG**: Haken bei "Initialize this repository with a README" NICHT setzen
6. Klicken Sie auf **"Create Repository"**
7. Klicken Sie auf **"Publish repository"**
8. Wählen Sie, ob öffentlich oder privat
9. Klicken Sie auf **"Publish repository"**

**Option B: Mit bestehendem Repository verbinden**
1. Öffnen Sie GitHub Desktop
2. Klicken Sie auf **"File"** → **"Add Local Repository"**
3. Wählen Sie: `C:\Users\seiju\Desktop\ALchemy Central Website`
4. Falls Fehler "This directory does not appear to be a Git repository":
   - Klicken Sie auf **"create a repository"**
   - Dann: **"File"** → **"Repository Settings"** → **"Remote"**
   - URL Ihres GitHub Repos eintragen: `https://github.com/IHR-USERNAME/IHR-REPO.git`

#### 3. Dateien committen
1. Sie sehen alle Dateien in der linken Spalte
2. Summary: `Initial commit - ALchemy Central Website mit Formspree`
3. Description: `Kontaktformular, Sicherheitsmaßnahmen, alle Seiten`
4. Klicken Sie auf **"Commit to main"**

#### 4. Auf GitHub pushen
1. Klicken Sie oben auf **"Push origin"**
2. Warten Sie, bis alle Dateien hochgeladen sind
3. Fertig!

---

### **Methode 2: Git Bash / Command Line**

#### 1. Git Bash öffnen
- Rechtsklick im Ordner `ALchemy Central Website`
- Wählen Sie **"Git Bash Here"**

#### 2. Git initialisieren
```bash
git init
```

#### 3. Alle Dateien hinzufügen
```bash
git add .
```

#### 4. Ersten Commit erstellen
```bash
git commit -m "Initial commit - ALchemy Central Website mit Formspree"
```

#### 5. Branch auf 'main' setzen (falls nötig)
```bash
git branch -M main
```

#### 6. Remote Repository verbinden
Ersetzen Sie `IHR-USERNAME` und `IHR-REPO`:
```bash
git remote add origin https://github.com/IHR-USERNAME/IHR-REPO.git
```

#### 7. Auf GitHub pushen
```bash
git push -u origin main
```

Falls Fehler wegen bestehendem Repository:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

### **Methode 3: Visual Studio Code**

#### 1. VS Code öffnen
- Öffnen Sie den Ordner: `C:\Users\seiju\Desktop\ALchemy Central Website`

#### 2. Source Control öffnen
- Klicken Sie auf das **Git-Symbol** in der linken Leiste (Verzweigungssymbol)
- Oder drücken Sie **Ctrl + Shift + G**

#### 3. Repository initialisieren
- Klicken Sie auf **"Initialize Repository"**

#### 4. Dateien stagen
- Klicken Sie auf das **+** Symbol neben "Changes"
- Oder klicken Sie auf **"Stage All Changes"**

#### 5. Commit erstellen
- Geben Sie eine Commit-Message ein:
  ```
  Initial commit - ALchemy Central Website mit Formspree
  ```
- Klicken Sie auf das **✓** Symbol oder drücken Sie **Ctrl + Enter**

#### 6. Remote Repository hinzufügen
- Öffnen Sie das Terminal in VS Code: **Ctrl + `**
- Führen Sie aus:
  ```bash
  git remote add origin https://github.com/IHR-USERNAME/IHR-REPO.git
  git branch -M main
  git push -u origin main
  ```

---

## 🌐 GitHub Pages aktivieren

Nach dem Upload:

1. **Gehen Sie zu Ihrem Repository auf GitHub.com**
   ```
   https://github.com/IHR-USERNAME/IHR-REPO
   ```

2. **Settings öffnen**
   - Klicken Sie auf **"Settings"** (Zahnrad-Symbol)

3. **Pages konfigurieren**
   - Scrollen Sie zu **"Pages"** in der linken Sidebar
   - Source: **"Deploy from a branch"**
   - Branch: **"main"** oder **"master"**
   - Folder: **"/ (root)"**
   - Klicken Sie auf **"Save"**

4. **Warten Sie 1-2 Minuten**
   - GitHub Pages baut Ihre Website

5. **URL erhalten**
   - Oben erscheint: "Your site is live at https://IHR-USERNAME.github.io/IHR-REPO/"
   - Klicken Sie auf **"Visit site"**

---

## ✅ Checkliste - Ist alles verbunden?

Nach dem Setup prüfen Sie:

### Auf GitHub.com:
- [ ] Repository existiert
- [ ] Alle Dateien sind hochgeladen
- [ ] `js/contact.js` enthält Formspree ID `maqwvgja` (Zeile 35)
- [ ] GitHub Pages ist aktiviert
- [ ] Website ist erreichbar

### Lokal:
- [ ] `.git` Ordner existiert
- [ ] Git Status zeigt "nothing to commit, working tree clean"
- [ ] Remote ist verbunden: `git remote -v` zeigt GitHub URL

---

## 🔄 Zukünftige Updates

Nach Änderungen an Ihrer Website:

### Mit GitHub Desktop:
1. Änderungen werden automatisch angezeigt
2. Commit-Message eingeben
3. "Commit to main" klicken
4. "Push origin" klicken

### Mit Git Bash:
```bash
git add .
git commit -m "Beschreibung der Änderung"
git push origin main
```

### Mit VS Code:
1. Source Control öffnen (Ctrl + Shift + G)
2. Änderungen stagen (+)
3. Commit-Message eingeben
4. Commit (✓)
5. Push (Sync-Symbol oben)

---

## 🚨 Troubleshooting

### "Permission denied" oder "Authentication failed"

**Lösung 1: Personal Access Token verwenden**
1. Gehen Sie zu: https://github.com/settings/tokens
2. Klicken Sie auf **"Generate new token"** → **"Classic"**
3. Scopes: Wählen Sie **"repo"**
4. Generieren und kopieren Sie den Token
5. Verwenden Sie den Token als Passwort beim Push

**Lösung 2: SSH Key einrichten**
1. Folgen Sie: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### "Repository not found"

**Prüfen Sie:**
- URL ist korrekt: `https://github.com/IHR-USERNAME/IHR-REPO.git`
- Repository existiert auf GitHub
- Sie haben Zugriff auf das Repository

### "Failed to push some refs"

**Lösung:**
```bash
git pull origin main --allow-unrelated-histories
git push origin main
```

---

## 📞 Weitere Hilfe

- GitHub Desktop Docs: https://docs.github.com/en/desktop
- Git Basics: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
- GitHub Pages: https://docs.github.com/en/pages

---

**Viel Erfolg! 🚀**
