# Kontaktformular für GitHub Pages - Setup Anleitung

## Übersicht
Da GitHub Pages keine serverseitigen Funktionen unterstützt, nutzen wir einen Drittanbieter-Service für das Kontaktformular. Es gibt zwei Optionen:

1. **Formspree** (Empfohlen - Einfacher)
2. **EmailJS** (Alternative - Mehr Kontrolle)

---

## Option 1: Formspree (Empfohlen)

### Vorteile
- ✅ Kostenlos bis 50 Submissions/Monat
- ✅ Sehr einfache Einrichtung
- ✅ Spam-Schutz integriert
- ✅ Keine zusätzlichen Skripte erforderlich

### Setup-Schritte

#### 1. Formspree Account erstellen
1. Gehen Sie zu [https://formspree.io](https://formspree.io)
2. Registrieren Sie sich mit Ihrer E-Mail-Adresse
3. Bestätigen Sie Ihre E-Mail-Adresse

#### 2. Neues Formular erstellen
1. Klicken Sie auf **"New Project"** oder **"+ New Form"**
2. Geben Sie einen Namen ein (z.B. "ALchemy Central Contact")
3. Wählen Sie Ihre E-Mail-Adresse aus (z.B. info@alchemy-central.com)
4. Kopieren Sie die **Form ID** (Format: `xyzabc123`)

#### 3. Form ID in contact.js eintragen
Öffnen Sie `js/contact.js` und ersetzen Sie `YOUR_FORM_ID`:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Ersetzen Sie durch:
```javascript
const response = await fetch('https://formspree.io/f/xyzabc123', {
```

#### 4. Testen
1. Öffnen Sie Ihre Website lokal oder auf GitHub Pages
2. Füllen Sie das Kontaktformular aus
3. Beim ersten Mal müssen Sie die E-Mail-Adresse in Formspree bestätigen
4. Danach funktioniert alles automatisch

### Formspree Konfiguration (Optional)

Im Formspree Dashboard können Sie:
- **Spam-Schutz** aktivieren (reCAPTCHA)
- **Autoresponder** einrichten (automatische Antwort an Absender)
- **Webhooks** konfigurieren
- **Custom Redirect** nach dem Absenden

---

## Option 2: EmailJS (Alternative)

### Vorteile
- ✅ Kostenlos bis 200 E-Mails/Monat
- ✅ Mehr Anpassungsmöglichkeiten
- ✅ E-Mail-Templates anpassbar
- ✅ Mehrere E-Mail-Provider unterstützt

### Setup-Schritte

#### 1. EmailJS Account erstellen
1. Gehen Sie zu [https://www.emailjs.com](https://www.emailjs.com)
2. Registrieren Sie sich kostenlos
3. Bestätigen Sie Ihre E-Mail-Adresse

#### 2. E-Mail-Service verbinden
1. Gehen Sie zu **"Email Services"**
2. Klicken Sie auf **"Add New Service"**
3. Wählen Sie Ihren E-Mail-Provider (Gmail, Outlook, etc.)
4. Folgen Sie den Anweisungen zur Verbindung
5. Notieren Sie die **Service ID**

#### 3. E-Mail-Template erstellen
1. Gehen Sie zu **"Email Templates"**
2. Klicken Sie auf **"Create New Template"**
3. Verwenden Sie folgende Variablen:
   ```
   Subject: Kontaktanfrage von {{from_name}}
   
   Name: {{from_name}}
   E-Mail: {{from_email}}
   
   Nachricht:
   {{message}}
   ```
4. Speichern Sie das Template
5. Notieren Sie die **Template ID**

#### 4. Public Key abrufen
1. Gehen Sie zu **"Account"** → **"General"**
2. Kopieren Sie den **Public Key**

#### 5. Konfiguration in Website eintragen

**Option A: Verwenden Sie die vorgefertigte EmailJS-Version**

1. Benennen Sie `contact.html` um in `contact-formspree.html`
2. Benennen Sie `contact-emailjs.html` um in `contact.html`
3. Öffnen Sie `js/contact-emailjs.js`
4. Ersetzen Sie die Platzhalter:

```javascript
emailjs.init('YOUR_PUBLIC_KEY');  // Ihr Public Key

// In der send-Funktion:
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
```

**Option B: Passen Sie die bestehende contact.html an**

Fügen Sie vor `</head>` hinzu:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```

Ändern Sie in `contact.html` die letzte Zeile:
```html
<script src="js/contact-emailjs.js"></script>
```

#### 6. Testen
1. Öffnen Sie Ihre Website
2. Füllen Sie das Kontaktformular aus
3. Überprüfen Sie Ihren Posteingang

---

## GitHub Pages Deployment

### Voraussetzungen
- GitHub Repository mit Ihrer Website
- GitHub Pages aktiviert

### Deployment-Schritte

1. **Änderungen committen**
   ```bash
   git add .
   git commit -m "Kontaktformular für GitHub Pages eingerichtet"
   git push origin main
   ```

2. **GitHub Pages aktivieren** (falls noch nicht geschehen)
   - Gehen Sie zu Repository → Settings → Pages
   - Wählen Sie Branch: `main` oder `master`
   - Wählen Sie Folder: `/ (root)`
   - Klicken Sie auf **Save**

3. **Website testen**
   - Ihre Website ist verfügbar unter: `https://username.github.io/repository-name/`
   - Testen Sie das Kontaktformular

---

## Vergleich der Optionen

| Feature | Formspree | EmailJS |
|---------|-----------|---------|
| Kostenlose E-Mails/Monat | 50 | 200 |
| Setup-Komplexität | Sehr einfach | Mittel |
| Spam-Schutz | ✅ Integriert | ⚠️ Manuell |
| E-Mail-Templates | ❌ | ✅ |
| Autoresponder | ✅ | ✅ |
| Zusätzliche Skripte | ❌ | ✅ (CDN) |
| DSGVO-konform | ✅ | ✅ |

---

## Troubleshooting

### Formspree

**Problem: "Form not found"**
- Überprüfen Sie die Form ID in `contact.js`
- Stellen Sie sicher, dass das Formular in Formspree aktiviert ist

**Problem: E-Mails kommen nicht an**
- Überprüfen Sie Ihren Spam-Ordner
- Bestätigen Sie die E-Mail-Adresse in Formspree
- Prüfen Sie das Formspree Dashboard auf Fehler

### EmailJS

**Problem: "Invalid public key"**
- Überprüfen Sie den Public Key in `contact-emailjs.js`
- Stellen Sie sicher, dass Sie `emailjs.init()` aufrufen

**Problem: "Service not found"**
- Überprüfen Sie Service ID und Template ID
- Stellen Sie sicher, dass der Service in EmailJS aktiviert ist

**Problem: CORS-Fehler**
- EmailJS sollte keine CORS-Probleme haben
- Überprüfen Sie die Browser-Konsole auf Details

### Allgemein

**Problem: Formular sendet nicht**
1. Öffnen Sie die Browser-Konsole (F12)
2. Überprüfen Sie auf JavaScript-Fehler
3. Prüfen Sie die Network-Tab auf fehlgeschlagene Requests
4. Stellen Sie sicher, dass alle IDs korrekt sind

---

## Sicherheit & Datenschutz

### DSGVO-Konformität
- Beide Services sind DSGVO-konform
- Fügen Sie einen Hinweis in Ihrer Datenschutzerklärung hinzu
- Informieren Sie Nutzer über die Datenverarbeitung

### Spam-Schutz
- **Formspree**: Integrierter Spam-Schutz, optional reCAPTCHA
- **EmailJS**: Implementieren Sie reCAPTCHA manuell wenn nötig

### Best Practices
- Verwenden Sie HTTPS (GitHub Pages bietet dies automatisch)
- Validieren Sie Eingaben im Frontend
- Setzen Sie Rate Limits (beide Services bieten dies)

---

## Empfehlung

**Für die meisten Fälle: Verwenden Sie Formspree**
- Einfacher Setup
- Weniger Code
- Integrierter Spam-Schutz
- Perfekt für statische Websites

**Verwenden Sie EmailJS wenn:**
- Sie mehr als 50 E-Mails/Monat erwarten
- Sie anpassbare E-Mail-Templates benötigen
- Sie mehrere E-Mail-Provider nutzen möchten

---

## Support

- **Formspree Dokumentation**: https://help.formspree.io
- **EmailJS Dokumentation**: https://www.emailjs.com/docs/
- **GitHub Pages Dokumentation**: https://docs.github.com/pages
