# Kontaktformular - Schnellstart für GitHub Pages

## ✅ Was wurde geändert?

Ihr Kontaktformular öffnet jetzt **nicht mehr Outlook**, sondern sendet E-Mails direkt über einen externen Service.

## 🚀 Schnellstart mit Formspree (Empfohlen)

### 1. Formspree Account erstellen
- Gehen Sie zu: **https://formspree.io**
- Registrieren Sie sich kostenlos
- Bestätigen Sie Ihre E-Mail

### 2. Formular erstellen
- Klicken Sie auf **"+ New Form"**
- Name: `ALchemy Central Contact`
- E-Mail: `info@alchemy-central.com`
- Kopieren Sie die **Form ID** (z.B. `xyzabc123`)

### 3. Form ID eintragen
Öffnen Sie: `js/contact.js` (Zeile 29)

**Vorher:**
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

**Nachher:**
```javascript
const response = await fetch('https://formspree.io/f/xyzabc123', {
```
*(Ersetzen Sie `xyzabc123` mit Ihrer echten Form ID)*

### 4. Auf GitHub pushen
```bash
git add .
git commit -m "Kontaktformular aktiviert"
git push origin main
```

### 5. Fertig! 🎉
- Ihre Website ist live auf GitHub Pages
- Das Kontaktformular funktioniert sofort
- E-Mails gehen an `info@alchemy-central.com`

---

## 📧 Alternative: EmailJS

Wenn Sie mehr Kontrolle über E-Mail-Templates möchten, lesen Sie die vollständige Anleitung in:
**`GITHUB_PAGES_SETUP.md`**

---

## 📁 Dateien-Übersicht

### Aktive Dateien (Formspree)
- ✅ `contact.html` - Kontaktseite (bereits konfiguriert)
- ✅ `js/contact.js` - Formular-Handler (nur Form ID eintragen)

### Alternative Dateien (EmailJS)
- 📄 `contact-emailjs.html` - Kontaktseite für EmailJS
- 📄 `js/contact-emailjs.js` - EmailJS Handler
- 📄 `js/contact-formspree.js` - Backup der Formspree-Version

### Dokumentation
- 📖 `GITHUB_PAGES_SETUP.md` - Vollständige Anleitung (Deutsch)
- 📖 `KONTAKTFORMULAR_README.md` - Diese Datei

### Alte Azure-Dateien (können gelöscht werden)
- ❌ `api/` - Azure Functions (nicht für GitHub Pages)
- ❌ `CONTACT_FORM_SETUP.md` - Azure-Anleitung (veraltet)

---

## 🧪 Testen

### Lokal testen
```bash
# Einfacher HTTP-Server
python -m http.server 8000
# oder
npx http-server -p 8000
```

Dann öffnen: `http://localhost:8000/contact.html`

### Auf GitHub Pages testen
Nach dem Push ist Ihre Website verfügbar unter:
`https://IHR-USERNAME.github.io/IHR-REPO-NAME/`

---

## ❓ Häufige Probleme

**"Form not found" Fehler**
→ Form ID in `js/contact.js` überprüfen

**E-Mails kommen nicht an**
→ Spam-Ordner prüfen
→ E-Mail in Formspree Dashboard bestätigen

**Formular sendet nicht**
→ Browser-Konsole öffnen (F12)
→ Fehler in der Console prüfen

---

## 💰 Kosten

**Formspree Free:**
- ✅ 50 E-Mails/Monat kostenlos
- ✅ Spam-Schutz inklusive
- ✅ Keine Kreditkarte erforderlich

Für mehr E-Mails: Upgrade auf Formspree Gold ($10/Monat)

---

## 📞 Support

Bei Fragen zur vollständigen Einrichtung:
→ Siehe `GITHUB_PAGES_SETUP.md`

Formspree Support:
→ https://help.formspree.io
