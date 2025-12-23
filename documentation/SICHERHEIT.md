# 🔒 Sicherheitsmaßnahmen - ALchemy Central Website

## Übersicht
Diese Website wurde mit umfassenden Sicherheitsmaßnahmen ausgestattet, um vor gängigen Angriffen zu schützen.

---

## ✅ Implementierte Sicherheitsmaßnahmen

### 1. **HTTP Security Headers** (`_headers`)
Schützt vor verschiedenen Angriffsarten durch Browser-Sicherheitsrichtlinien:

#### X-Frame-Options: DENY
- ✅ Verhindert Clickjacking-Angriffe
- ✅ Website kann nicht in iframes eingebettet werden

#### X-XSS-Protection
- ✅ Aktiviert Browser-eigenen XSS-Schutz
- ✅ Blockiert verdächtige Skripte automatisch

#### X-Content-Type-Options: nosniff
- ✅ Verhindert MIME-Type Sniffing
- ✅ Browser respektiert Content-Type Header

#### Strict-Transport-Security (HSTS)
- ✅ Erzwingt HTTPS-Verbindungen
- ✅ Gültig für 1 Jahr (31536000 Sekunden)
- ✅ Gilt auch für alle Subdomains

#### Content-Security-Policy (CSP)
- ✅ Verhindert XSS-Angriffe
- ✅ Kontrolliert, welche Ressourcen geladen werden dürfen
- ✅ Blockiert Inline-JavaScript (außer explizit erlaubt)
- ✅ Erlaubt nur vertrauenswürdige Quellen (Formspree, EmailJS CDN)

#### Permissions-Policy
- ✅ Deaktiviert unnötige Browser-Features
- ✅ Blockiert Zugriff auf: Geolocation, Mikrofon, Kamera, Payment API, USB, etc.

#### Referrer-Policy
- ✅ Schützt Privatsphäre der Nutzer
- ✅ Kontrolliert, welche Referrer-Informationen gesendet werden

---

### 2. **Kontaktformular-Sicherheit** (`js/contact.js`)

#### Input Sanitization
```javascript
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}
```
- ✅ Entfernt HTML-Tags und JavaScript
- ✅ Verhindert XSS-Angriffe über Formulareingaben

#### Input Validation
- ✅ **Name**: 2-100 Zeichen
- ✅ **E-Mail**: RFC-konformes Format, max. 254 Zeichen
- ✅ **Nachricht**: 10-5000 Zeichen
- ✅ Erkennt verdächtige Muster:
  - `<script>` Tags
  - `javascript:` URLs
  - Event-Handler (`onerror=`, `onclick=`)
  - `<iframe>` Tags
  - `eval()` Funktionen

#### Rate Limiting
- ✅ Max. 1 Nachricht pro 60 Sekunden
- ✅ Verwendet localStorage für Client-seitige Kontrolle
- ✅ Verhindert Spam und Brute-Force-Angriffe
- ✅ Benutzerfreundliche Fehlermeldung

---

### 3. **HTML Security Meta Tags**

Alle HTML-Seiten enthalten:
```html
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta name="referrer" content="strict-origin-when-cross-origin">
```

---

### 4. **Security.txt** (`.well-known/security.txt`)
- ✅ RFC 9116 konform
- ✅ Kontaktinformationen für Sicherheitsforscher
- ✅ Zeigt verantwortungsvolle Offenlegung

---

### 5. **Client-Side Protection** (`js/security.js`)

#### Console Protection (Produktion)
- ✅ Deaktiviert Console-Ausgaben in Produktion
- ✅ Verhindert Informationslecks

#### DevTools Detection
- ✅ Erkennt geöffnete Browser-DevTools
- ✅ Erschwert Reverse Engineering

#### Keyboard Shortcuts Disabled (Produktion)
- ✅ F12 (DevTools)
- ✅ Ctrl+Shift+I (Inspect)
- ✅ Ctrl+Shift+J (Console)
- ✅ Ctrl+U (View Source)

#### Right-Click Protection (Produktion)
- ✅ Verhindert Kontextmenü
- ✅ Erschwert Code-Diebstahl

**Hinweis**: Alle Schutzmaßnahmen sind in Localhost deaktiviert für Entwicklung.

---

### 6. **.gitignore Security**
Verhindert versehentliches Committen von:
- ✅ Umgebungsvariablen (`.env`)
- ✅ API-Keys und Zertifikate (`.key`, `.pem`)
- ✅ Sensible Konfigurationsdateien
- ✅ IDE-Konfigurationen
- ✅ Backup-Dateien

---

## 🛡️ Schutz vor gängigen Angriffen

### Cross-Site Scripting (XSS)
**Schutz durch:**
- Content-Security-Policy Header
- Input Sanitization
- Input Validation mit Pattern Detection
- X-XSS-Protection Header
- HTML Meta Tags

### SQL Injection
**Nicht relevant:**
- Keine Datenbank vorhanden
- Statische Website auf GitHub Pages
- Formular nutzt Drittanbieter (Formspree/EmailJS)

### Cross-Site Request Forgery (CSRF)
**Schutz durch:**
- SameSite Cookie Policy (Browser-Standard)
- Formspree/EmailJS haben eigenen CSRF-Schutz
- Referrer-Policy Header

### Clickjacking
**Schutz durch:**
- X-Frame-Options: DENY
- CSP frame-ancestors 'none'

### Man-in-the-Middle (MITM)
**Schutz durch:**
- HTTPS erzwungen (GitHub Pages Standard)
- Strict-Transport-Security Header
- HSTS Preload bereit

### Brute Force / Spam
**Schutz durch:**
- Rate Limiting (60 Sekunden Cooldown)
- Formspree hat eigenen Spam-Schutz
- Input Length Limits

### Information Disclosure
**Schutz durch:**
- Console deaktiviert in Produktion
- Keine sensiblen Daten im Frontend
- .gitignore für sensible Dateien

---

## 🔐 HTTPS & SSL/TLS

GitHub Pages bietet automatisch:
- ✅ Kostenloses SSL-Zertifikat
- ✅ Automatische Erneuerung
- ✅ TLS 1.2+ Support
- ✅ HTTPS erzwungen

---

## 📊 Sicherheits-Checkliste

### Vor Deployment
- [ ] Formspree Form ID eingetragen
- [ ] Alle HTML-Seiten haben Security Meta Tags
- [ ] `_headers` Datei ist vorhanden
- [ ] `.gitignore` ist aktuell
- [ ] Keine sensiblen Daten im Code
- [ ] Security.js ist eingebunden (optional)

### Nach Deployment
- [ ] HTTPS funktioniert
- [ ] Kontaktformular funktioniert
- [ ] Rate Limiting funktioniert
- [ ] Security Headers aktiv (Test mit securityheaders.com)
- [ ] CSP funktioniert ohne Fehler (Browser Console prüfen)

---

## 🧪 Sicherheit Testen

### 1. Security Headers Test
```
https://securityheaders.com/?q=https://ihre-domain.com
```
**Ziel**: A+ Rating

### 2. SSL Test
```
https://www.ssllabs.com/ssltest/analyze.html?d=ihre-domain.com
```
**Ziel**: A+ Rating

### 3. CSP Evaluator
```
https://csp-evaluator.withgoogle.com/
```
Kopieren Sie Ihre CSP-Policy und prüfen Sie auf Schwachstellen.

### 4. Mozilla Observatory
```
https://observatory.mozilla.org/
```
**Ziel**: A+ Score

---

## 🚨 Was zu tun ist bei Sicherheitsvorfällen

### 1. Sofortmaßnahmen
- Website offline nehmen (GitHub Pages deaktivieren)
- Alle API-Keys rotieren (Formspree/EmailJS)
- Logs prüfen

### 2. Analyse
- Art des Angriffs identifizieren
- Betroffene Bereiche ermitteln
- Schaden bewerten

### 3. Behebung
- Sicherheitslücke schließen
- Code-Review durchführen
- Patches deployen

### 4. Kommunikation
- Betroffene Nutzer informieren (falls nötig)
- Sicherheitsforscher danken (falls responsible disclosure)

---

## 📝 Best Practices

### Entwicklung
1. **Niemals** sensible Daten im Frontend speichern
2. **Immer** Input validieren und sanitizen
3. **Regelmäßig** Dependencies updaten
4. **Testen** Sie Sicherheitsmaßnahmen lokal

### Deployment
1. **Überprüfen** Sie alle Umgebungsvariablen
2. **Aktivieren** Sie alle Security Headers
3. **Testen** Sie die Website nach Deployment
4. **Monitoren** Sie Formular-Submissions

### Wartung
1. **Monatlich** Security Headers testen
2. **Vierteljährlich** Dependencies updaten
3. **Jährlich** Security Audit durchführen
4. **Bei Bedarf** Formspree/EmailJS Logs prüfen

---

## 🔗 Nützliche Ressourcen

### Security Testing
- [Security Headers](https://securityheaders.com/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)
- [Mozilla Observatory](https://observatory.mozilla.org/)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)

### Dokumentation
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Content Security Policy](https://content-security-policy.com/)

### Tools
- [GitHub Security Advisories](https://github.com/advisories)
- [Snyk](https://snyk.io/) - Vulnerability Scanner
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit)

---

## ⚠️ Bekannte Einschränkungen

### GitHub Pages
- Keine serverseitigen Sicherheitsmaßnahmen möglich
- Keine WAF (Web Application Firewall)
- Keine DDoS-Protection (außer GitHub-Standard)
- Keine Server-Logs verfügbar

### Client-Side Protection
- JavaScript kann deaktiviert werden
- DevTools-Schutz ist umgehbar
- Rate Limiting kann mit anderen Browsern umgangen werden

**Lösung**: Diese Einschränkungen sind für eine statische Marketing-Website akzeptabel. Für sensible Anwendungen sollte ein Backend mit Server-Side Security verwendet werden.

---

## 📞 Support & Fragen

Bei Sicherheitsfragen oder -bedenken:
- E-Mail: info@alchemy-central.com
- Security.txt: `/.well-known/security.txt`

---

## 📅 Letzte Aktualisierung
24. Dezember 2025

## 🔄 Nächste Review
24. März 2026

---

**Hinweis**: Diese Sicherheitsmaßnahmen bieten einen robusten Schutz für eine statische Website. Kein System ist 100% sicher, aber diese Implementierung folgt aktuellen Best Practices und Industry Standards.
