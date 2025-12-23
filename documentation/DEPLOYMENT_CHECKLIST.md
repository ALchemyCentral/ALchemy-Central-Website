# ✅ Deployment Checkliste - ALchemy Central

## Vor dem Deployment

### 1. Kontaktformular Konfiguration
- [ ] Formspree Account erstellt
- [ ] Form ID in `js/contact.js` eingetragen (Zeile 35)
- [ ] Kontaktformular lokal getestet
- [ ] E-Mail-Empfang bestätigt

### 2. Sicherheit
- [ ] Alle Azure-Dateien gelöscht (✅ Bereits erledigt)
- [ ] `_headers` Datei vorhanden
- [ ] Security Meta Tags in allen HTML-Dateien
- [ ] `.gitignore` aktualisiert
- [ ] Keine sensiblen Daten im Code
- [ ] `js/security.js` optional eingebunden

### 3. Code-Qualität
- [ ] Alle Links funktionieren
- [ ] Bilder laden korrekt
- [ ] CSS/JS ohne Fehler
- [ ] Browser-Console auf Fehler prüfen
- [ ] Mobile Ansicht getestet

### 4. Content
- [ ] Impressum aktuell
- [ ] Datenschutzerklärung aktuell
- [ ] Kontaktdaten korrekt
- [ ] Alle Texte Korrektur gelesen

---

## GitHub Deployment

### 1. Repository vorbereiten
```bash
# Alle Änderungen committen
git add .
git commit -m "Website mit Sicherheitsmaßnahmen bereit für Deployment"
git push origin main
```

### 2. GitHub Pages aktivieren
1. Gehen Sie zu: Repository → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` oder `master`
4. Folder: `/ (root)`
5. Klicken Sie auf **Save**

### 3. Custom Domain (Optional)
Wenn Sie eine eigene Domain haben:
1. Fügen Sie `CNAME` Datei im Root hinzu mit Ihrer Domain
2. Konfigurieren Sie DNS bei Ihrem Domain-Provider:
   ```
   Type: CNAME
   Name: www (oder @)
   Value: username.github.io
   ```
3. Aktivieren Sie "Enforce HTTPS" in GitHub Pages Settings

---

## Nach dem Deployment

### 1. Funktionalität testen
- [ ] Website lädt korrekt
- [ ] HTTPS funktioniert
- [ ] Navigation funktioniert
- [ ] Kontaktformular sendet E-Mails
- [ ] Rate Limiting funktioniert (2x schnell hintereinander testen)
- [ ] Mobile Ansicht funktioniert

### 2. Sicherheit testen

#### Security Headers
```
https://securityheaders.com/?q=https://ihre-domain.com
```
**Erwartetes Ergebnis**: A oder A+ Rating

#### SSL/TLS
```
https://www.ssllabs.com/ssltest/analyze.html?d=ihre-domain.com
```
**Erwartetes Ergebnis**: A+ Rating

#### Mozilla Observatory
```
https://observatory.mozilla.org/
```
**Erwartetes Ergebnis**: A oder höher

### 3. Performance testen
- [ ] Google PageSpeed Insights: https://pagespeed.web.dev/
- [ ] GTmetrix: https://gtmetrix.com/
- [ ] Lighthouse Audit im Chrome DevTools

### 4. Browser-Kompatibilität
- [ ] Chrome/Edge (aktuell)
- [ ] Firefox (aktuell)
- [ ] Safari (aktuell)
- [ ] Mobile Browser (iOS Safari, Chrome Mobile)

---

## Wartung & Updates

### Wöchentlich
- [ ] Formspree Dashboard auf Spam prüfen
- [ ] E-Mail-Empfang testen

### Monatlich
- [ ] Security Headers Test durchführen
- [ ] Website auf tote Links prüfen
- [ ] Analytics prüfen (falls vorhanden)

### Vierteljährlich
- [ ] Content aktualisieren
- [ ] Bilder optimieren
- [ ] Performance-Test durchführen

### Jährlich
- [ ] Vollständiges Security Audit
- [ ] Datenschutzerklärung aktualisieren
- [ ] Impressum aktualisieren
- [ ] Design-Review

---

## Troubleshooting

### Website lädt nicht
1. GitHub Pages Status prüfen: Settings → Pages
2. Branch und Folder korrekt?
3. Warten Sie 1-2 Minuten nach Aktivierung

### Kontaktformular funktioniert nicht
1. Form ID korrekt in `js/contact.js`?
2. Browser-Console auf Fehler prüfen
3. Formspree Dashboard auf Fehler prüfen
4. CORS-Fehler? → Formspree sollte keine CORS-Probleme haben

### Security Headers nicht aktiv
**Problem**: GitHub Pages unterstützt `_headers` nicht direkt

**Lösung**: 
- Headers werden nur mit Custom Domain unterstützt
- Oder: Nutzen Sie Cloudflare als Proxy (kostenlos)
- Alternative: Meta Tags sind bereits implementiert

### HTTPS-Fehler
1. "Enforce HTTPS" in GitHub Pages Settings aktivieren
2. Warten Sie 10-15 Minuten
3. Cache leeren und neu laden

---

## Notfall-Kontakte

### Website offline nehmen
```bash
# GitHub Pages deaktivieren
Repository → Settings → Pages → None
```

### Formular deaktivieren
```bash
# In js/contact.js Form ID entfernen oder:
git revert HEAD
git push origin main
```

---

## Backup-Strategie

### Automatisch durch Git
- ✅ Alle Änderungen sind versioniert
- ✅ Jederzeit Rollback möglich
- ✅ GitHub speichert alle Commits

### Manuelles Backup (Optional)
```bash
# Lokale Kopie erstellen
git clone https://github.com/username/repo.git backup-$(date +%Y%m%d)
```

---

## Nächste Schritte nach Deployment

1. **Google Search Console** einrichten
   - Sitemap einreichen
   - Indexierung überwachen

2. **Analytics** einrichten (Optional)
   - Google Analytics
   - Plausible Analytics (DSGVO-konform)
   - Matomo

3. **Monitoring** einrichten (Optional)
   - UptimeRobot (kostenlos)
   - StatusCake
   - Pingdom

4. **Social Media** aktualisieren
   - LinkedIn
   - Twitter/X
   - Facebook

---

## Erfolg! 🎉

Wenn alle Checkboxen aktiviert sind, ist Ihre Website:
- ✅ Sicher
- ✅ Schnell
- ✅ DSGVO-konform
- ✅ Produktionsbereit

**Viel Erfolg mit ALchemy Central!**
