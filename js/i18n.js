// ===============================
// i18n.js — GLOBAL LANGUAGE ENGINE
// ===============================

(function () {
  'use strict';

  const STORAGE_KEY = 'alchemy_language';
  const DEFAULT_LANG = 'de';

  /* ================= TRANSLATIONS ================= */

  const translations = {
    de: {
      /* NAV */
      nav_home: 'Home',
      nav_products: 'Produkte',
      nav_about: 'Über uns',
      nav_contact: 'Kontakt',
      cta_contact: 'Kontakt aufnehmen',

      /* FOOTER */
      footer_claim: 'Turning AL code into Business Value',

      /* HOME */
      home_title: 'Turning AL code into Business Value',
      home_sub: 'Intelligente, erklärbare Business-Central-Lösungen für Management, Finance und Entscheidungsfindung.',
      home_btn_products: 'Unsere Produkte',
      home_brand_claim: 'Von sauberer AL-Architektur zu wirtschaftlicher Klarheit.',
      home_brand_text: 'Business Central ist mehr als ein ERP.\nEs ist das wirtschaftliche Nervensystem Ihres Unternehmens.\n\nALchemy Central entwickelt hochwertige, upgrade-sichere Erweiterungen, die rohe Business-Central-Daten in transparente, erklärbare und handlungsrelevante Erkenntnisse verwandeln – ohne Excel-Chaos, Workarounds oder Blackboxes.',

      home_prod1_title: 'Economic Twin',
      home_prod1_text: 'Der wirtschaftliche Zwilling Ihres Unternehmens – live berechnet in Business Central.',
      home_prod2_title: 'Smart Accruals',
      home_prod2_text: 'Automatisierte, revisionssichere Abgrenzungen ohne Excel-Chaos.',
      home_prod3_title: 'Liquidity Causality Engine',
      home_prod3_text: 'Verstehen Sie warum sich Ihre Liquidität verändert – nicht nur dass sie es tut.',
      home_prod4_title: 'Financial Anomaly & Explainability Engine',
      home_prod4_text: 'Auffälligkeiten erkennen und nachvollziehbar erklären – der digitale Wirtschaftsprüfer.',
      product_more: 'Mehr erfahren',

      /* PRODUCTS */
      products_title: 'Unsere Produkte',
      products_sub: 'Durchdachte Lösungen für Finance, Controlling und Management.',
      products_twin_title: 'Economic Twin',
      products_twin_text: 'Simulation, Transparenz und Prognosen direkt in Business Central.',
      products_accruals_title: 'Smart Accruals',
      products_accruals_text: 'Automatisierte Abgrenzungen, sauber und nachvollziehbar.',
      products_liquidity_title: 'Liquidity Causality Engine',
      products_liquidity_text: 'Erklärbare Ursachenanalyse für Liquiditätsveränderungen.',
      products_faee_title: 'Financial Anomaly & Explainability Engine',
      products_faee_text: 'Automatische Erkennung und Erklärung ungewöhnlicher Finanzbuchungen.',

      /* ABOUT */
      about_title: 'Über ALchemy Central',
      about_sub: 'Wir verwandeln AL-Code in echten Business-Wert.',

      about_h1: 'Technologie trifft Wirtschaftlichkeit',
      about_p1: 'ALchemy Central steht für exzellente Architektur, saubere Konzepte und nachhaltige Lösungen rund um Microsoft Dynamics 365 Business Central.',
      about_p2: 'Unsere Mission ist klar: Komplexität reduzieren, Transparenz schaffen und Entscheidungen messbar besser machen.',

      about_h2: 'Architektur statt Chaos',
      about_p3: 'Business Central ist das wirtschaftliche Nervensystem eines Unternehmens – genau hier setzen wir an.',
      about_p4: 'Wir glauben nicht an schnelle Workarounds oder fragile Customizings, sondern an Systeme, die Bestand haben.',

      about_h3: 'Unser Architekturansatz',
      about_l1: 'Extension-first & upgrade-sicher',
      about_l2: 'Klare Schichten und Verantwortlichkeiten',
      about_l3: 'Lose Kopplung durch Events & Interfaces',
      about_l4: 'Keine Quick-Fixes, kein Customizing-Chaos',

      about_h4: 'Erklärbare Lösungen für Entscheider',
      about_p5: 'Unsere Lösungen richten sich nicht nur an Entwickler, sondern vor allem an Management, Finance und Controlling.',
      about_p6: 'Wir machen wirtschaftliche Zusammenhänge sichtbar, simulierbar und steuerbar.',

      about_claim: 'Business Central. Richtig gebaut.',

      /* CONTACT */
      contact_title: 'Kontakt',
      contact_sub: 'Lassen Sie uns über Ihr Projekt sprechen.',
      contact_card_title: 'Nachricht senden',
      contact_name: 'Ihr Name',
      contact_mail: 'Ihre E-Mail',
      contact_msg: 'Ihre Nachricht',
      contact_send: 'Absenden',
      contact_success: 'Vielen Dank! Ihre Nachricht wurde erfolgreich versendet.',
      contact_error: 'Fehler beim Versenden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.',

      /* FOOTER LEGAL */
      footer_impressum: 'Impressum',
      footer_privacy: 'Datenschutz',
      footer_hosting: 'Hosting & Domain: Sichere europäische Infrastruktur',
      footer_ssl: 'SSL-Verschlüsselung: Sichere Datenübertragung',

      /* IMPRESSUM */
      impressum_title: 'Impressum',
      impressum_sub: 'Rechtliche Informationen und Kontaktdaten',
      impressum_company_title: 'Angaben gemäß Informationspflicht',
      impressum_company_label: 'Unternehmen',
      impressum_company_name: 'ALchemy Central',
      impressum_ceo_label: 'Geschäftsführer / Gründer',
      impressum_address_label: 'Anschrift',
      impressum_country: 'Spanien',
      impressum_email_label: 'E-Mail',
      impressum_hosting_title: 'Hosting & Domain',
      impressum_hosting_text: 'Diese Website wird auf einer sicheren europäischen Infrastruktur gehostet. Alle Daten werden ausschließlich in europäischen Rechenzentren verarbeitet und gespeichert.',
      impressum_ssl_title: 'SSL-Verschlüsselung',
      impressum_ssl_text: 'Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
      impressum_liability_title: 'Haftungsausschluss',
      impressum_liability_text: 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.',
      impressum_copyright_title: 'Urheberrecht',
      impressum_copyright_text: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',

      /* PRIVACY POLICY */
      privacy_title: 'Datenschutzerklärung',
      privacy_sub: 'Informationen zur Verarbeitung Ihrer Daten',
      privacy_intro_title: 'Datenschutz auf einen Blick',
      privacy_intro_text: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
      privacy_responsible_title: 'Verantwortliche Stelle',
      privacy_data_collection_title: 'Datenerfassung auf dieser Website',
      privacy_data_collection_text: 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen. Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z.B. durch das Kontaktformular. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).',
      privacy_contact_form_title: 'Kontaktformular',
      privacy_contact_form_text: 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).',
      privacy_cookies_title: 'Cookies und lokale Speicherung',
      privacy_cookies_text: 'Diese Website verwendet ausschließlich technisch notwendige lokale Speicherung (localStorage) zur Speicherung Ihrer Sprachpräferenz. Es werden keine Tracking-Cookies oder Analyse-Tools von Drittanbietern eingesetzt.',
      privacy_hosting_title: 'Hosting',
      privacy_hosting_text: 'Diese Website wird auf sicheren europäischen Servern gehostet. Die Verarbeitung erfolgt ausschließlich innerhalb der Europäischen Union unter Einhaltung der DSGVO.',
      privacy_ssl_title: 'SSL- bzw. TLS-Verschlüsselung',
      privacy_ssl_text: 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt.',
      privacy_rights_title: 'Ihre Rechte',
      privacy_rights_text: 'Sie haben jederzeit das Recht auf:',
      privacy_right_1: 'Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten',
      privacy_right_2: 'Berichtigung unrichtiger Daten',
      privacy_right_3: 'Löschung Ihrer bei uns gespeicherten Daten',
      privacy_right_4: 'Einschränkung der Datenverarbeitung',
      privacy_right_5: 'Widerspruch gegen die Verarbeitung Ihrer Daten',
      privacy_changes_title: 'Änderungen der Datenschutzerklärung',
      privacy_changes_text: 'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.',

      /* ACCRUALS */
      accruals_title: 'Smart Accruals & Deferrals',
      accruals_sub: 'Automatisierte Abgrenzungen in Business Central.',
      accruals_h1: 'Warum Abgrenzungen neu denken?',
      accruals_p1: 'Manuelle Abgrenzungen sind fehleranfällig und ineffizient.',
      accruals_p2: 'Unsere Lösung automatisiert den gesamten Prozess.',
      accruals_h2: 'Ihre Vorteile',
      accruals_l1: 'Vollautomatische Berechnung',
      accruals_l2: 'Revisionssicher',
      accruals_l3: 'Nachvollziehbare Logik',
      accruals_l4: 'Nahtlose BC-Integration',
      accruals_l5: 'Kein Excel',
      accruals_h3: 'Technisch durchdacht',
      accruals_p3: 'Saubere Architektur, Events & Extensions.',
      accruals_l6: 'AL Best Practices',
      accruals_l7: 'Performance-optimiert',
      accruals_l8: 'Upgrade-sicher',
      accruals_l9: 'Mandantenfähig',
      accruals_l10: 'Erweiterbar',
      accruals_h4: 'Für Finance gebaut',
      accruals_p4: 'Entwickelt mit Controlling-Fokus.',
      accruals_h5: 'Typische Use-Cases',
      accruals_l11: 'Subscriptions',
      accruals_l12: 'Wartungsverträge',
      accruals_l13: 'Projektabrechnung',
      accruals_l14: 'Lizenzen',
      accruals_l15: 'Serviceverträge',
      accruals_btn: 'Jetzt beraten lassen',

      /* TWIN */
      twin_title: 'Economic Twin',
      twin_sub: 'Der wirtschaftliche Zwilling Ihres Unternehmens.',
      twin_h1: 'Was ist ein Economic Twin?',
      twin_p1: 'Ein digitales Abbild Ihrer wirtschaftlichen Realität.',
      twin_p2: 'Live-Berechnung direkt in Business Central.',
      twin_h2: 'Was wird abgebildet?',
      twin_p3: 'Umsatz, Kosten, Cashflow und Prognosen.',
      twin_l1: 'Realtime KPIs',
      twin_l2: 'Simulationen',
      twin_l3: 'Szenarien',
      twin_p4: 'Entscheidungen auf Datenbasis.',
      twin_h3: 'Technische Basis',
      twin_p5: 'Reine AL-Architektur.',
      twin_l4: 'Events',
      twin_l5: 'Interfaces',
      twin_l6: 'Lose Kopplung',
      twin_l7: 'Performance',
      twin_h4: 'Management Ready',
      twin_p6: 'Für C-Level Entscheidungen.',
      twin_h5: 'Einsatzbereiche',
      twin_l8: 'Forecast',
      twin_l9: 'Budget',
      twin_l10: 'Simulation',
      twin_l11: 'Strategie',
      twin_btn: 'Demo anfragen',

      /* LIQUIDITY CAUSALITY ENGINE */
      liquidity_title: 'Liquidity Causality Engine',
      liquidity_sub: 'Verstehen Sie warum sich Ihre Liquidität verändert – nicht nur dass sie es tut.',

      liquidity_detail_h1: 'Verstehen Sie warum sich Ihre Liquidität verändert – nicht nur dass sie es tut',
      liquidity_detail_p1: 'Business Central zeigt Ihnen Kontostände, Cashflow-Reports und offene Posten. Was fehlt, ist die entscheidende Antwort auf die wichtigste Frage jeder Finanzleitung:',
      liquidity_detail_p2: 'Warum ändert sich meine Liquidität – konkret, nachvollziehbar und belegbar?',
      liquidity_detail_p3: 'Die Liquidity Causality Engine schließt genau diese Lücke.',

      liquidity_detail_h2: 'Die Herausforderung',
      liquidity_detail_p4: 'In vielen Unternehmen wird Liquidität heute zwar gemessen, aber nicht verstanden:',
      liquidity_detail_l1: 'Kontostände zeigen nur den aktuellen Zustand',
      liquidity_detail_l2: 'Cashflow-Reports erklären keine Ursachen',
      liquidity_detail_l3: 'Offene Posten liefern Zahlen, aber keine Zusammenhänge',
      liquidity_detail_l4: 'Auswirkungen von Zahlungsbedingungen, Buchungen und Prozessen bleiben verborgen',
      liquidity_detail_p5: 'Die Folge:',
      liquidity_detail_l5: 'Entscheidungen basieren auf Annahmen',
      liquidity_detail_l6: 'Ursachenanalysen passieren manuell (Excel, Meetings, Erfahrung)',
      liquidity_detail_l7: 'Risiken werden zu spät erkannt',

      liquidity_detail_h3: 'Die Lösung: Liquidity Causality Engine',
      liquidity_detail_p6: 'Die Liquidity Causality Engine erweitert Microsoft Dynamics 365 Business Central um eine erklärbare, revisionssichere Ursachenanalyse für Liquiditätsveränderungen.',
      liquidity_detail_p7: 'Statt isolierter Zahlen erzeugt die App Liquiditätsereignisse mit vollständigen Ursache-Wirkungs-Ketten – belegübergreifend, zeitlich einordenbar und verständlich erklärt.',
      liquidity_detail_p8: 'Kurz gesagt: Sie sehen nicht nur was passiert, sondern warum es passiert.',

      liquidity_detail_h4: 'Zentrale Funktionen',
      liquidity_detail_h5: '🔍 Liquiditätsereignisse statt reiner Zahlen',
      liquidity_detail_p9: 'Die App erkennt automatisch relevante Liquiditätsänderungen aus:',
      liquidity_detail_l8: 'Finanzbuchhaltung',
      liquidity_detail_l9: 'Debitoren- und Kreditorenposten',
      liquidity_detail_l10: 'Zahlungsbedingungen',
      liquidity_detail_l11: 'Fälligkeiten',
      liquidity_detail_p10: 'Jede relevante Änderung wird als Liquiditätsereignis erfasst, priorisiert und nachvollziehbar dokumentiert.',

      liquidity_detail_h6: '🧠 Kausalitätsanalyse (Ursache → Wirkung)',
      liquidity_detail_p11: 'Für jedes Ereignis zeigt die App:',
      liquidity_detail_l12: 'den auslösenden Beleg',
      liquidity_detail_l13: 'den zugrunde liegenden Prozess',
      liquidity_detail_l14: 'die angewandten Zahlungsbedingungen',
      liquidity_detail_l15: 'den zeitlichen und betragsmäßigen Effekt auf die Liquidität',
      liquidity_detail_p12: 'Ergebnis: Eine klare Erklärungskette, die auch Nicht-Buchhaltern verständlich ist.',

      liquidity_detail_h7: '📊 Erklärbarkeit & Transparenz',
      liquidity_detail_p13: 'Jedes Ereignis enthält:',
      liquidity_detail_l16: 'eine strukturierte Kausalitätskette',
      liquidity_detail_l17: 'einen menschenlesbaren Erklärungstext',
      liquidity_detail_l18: 'vollständige Betrags- und Zeitlogik',
      liquidity_detail_p14: 'Keine Blackbox, keine versteckten Algorithmen – vollständig nachvollziehbar, auditfähig und CFO-tauglich.',

      liquidity_detail_h8: '🔮 Was-wäre-wenn-Simulationen',
      liquidity_detail_p15: 'Testen Sie Entscheidungen, bevor sie getroffen werden:',
      liquidity_detail_l19: 'Zahlungsziele verschieben',
      liquidity_detail_l20: 'Zahlungen aufteilen',
      liquidity_detail_l21: 'Verzögerungen simulieren',
      liquidity_detail_p16: 'Ohne Buchung, ohne Risiko, ohne Testmandanten – Simulationen erzeugen eigene, klar gekennzeichnete Liquiditätsereignisse.',

      liquidity_detail_h9: '✅ Prüfungs- & Bestätigungsworkflow',
      liquidity_detail_p17: 'Ideal für Governance und Revision:',
      liquidity_detail_l22: 'Ereignisse prüfen',
      liquidity_detail_l23: 'Ursachen bestätigen',
      liquidity_detail_l24: 'Entscheidungen dokumentieren',
      liquidity_detail_l25: 'Vollständiger Prüfpfad mit Benutzer & Zeitstempel',

      liquidity_detail_h10: 'Für wen ist die Liquidity Causality Engine gedacht?',
      liquidity_detail_l26: 'CFOs & Finance Directors: Klare Entscheidungsgrundlagen statt reiner Reports',
      liquidity_detail_l27: 'Controller & Cash Manager: Transparente Ursachenanalyse und bessere Planung',
      liquidity_detail_l28: 'Wachstumsunternehmen & Mittelstand: Mehr Komplexität als Excel, weniger Overhead als Enterprise-Treasury-Systeme',
      liquidity_detail_l29: 'Beratungen & Steuerkanzleien: Fundierte Liquiditätsanalysen für Mandanten',

      liquidity_detail_h11: 'Nahtlos integriert in Business Central',
      liquidity_detail_l30: '✔ 100 % Erweiterung – keine Base-App-Modifikationen',
      liquidity_detail_l31: '✔ Ereignisgesteuert & performant',
      liquidity_detail_l32: '✔ Revisionssicher & upgradefähig',
      liquidity_detail_l33: '✔ AppSource-ready',
      liquidity_detail_p18: 'Die App fühlt sich an wie ein nativer Bestandteil von Business Central – nur deutlich intelligenter.',

      liquidity_detail_h12: 'Fazit',
      liquidity_detail_p19: 'Die Liquidity Causality Engine macht Liquidität erklärbar.',
      liquidity_detail_p20: 'Sie verbindet Buchungen, Prozesse und Zeitwirkungen zu einem klaren Gesamtbild – für bessere Entscheidungen, weniger Überraschungen und mehr Kontrolle über das wichtigste Gut Ihres Unternehmens: Liquidität.',

      liquidity_btn: 'Jetzt beraten lassen',

      /* FAEE - FINANCIAL ANOMALY & EXPLAINABILITY ENGINE */
      faee_title: 'Financial Anomaly & Explainability Engine',
      faee_sub: 'Der digitale Wirtschaftsprüfer für Microsoft Dynamics 365 Business Central.',

      faee_detail_h1: 'Der digitale Wirtschaftsprüfer für Microsoft Dynamics 365 Business Central',
      faee_detail_p1: 'Auffälligkeiten erkennen ist gut. Sie nachvollziehbar erklären ist entscheidend.',
      faee_detail_p2: 'Die Financial Anomaly & Explainability Engine (FAEE) ist eine professionelle Erweiterung für Microsoft Dynamics 365 Business Central, die ungewöhnliche Finanzbuchungen automatisch erkennt, analysiert und prüfungsfest erklärt.',
      faee_detail_p3: 'Im Gegensatz zu klassischen Prüfberichten oder KI-Blackboxen zeigt FAEE nicht nur dass etwas auffällig ist – sondern warum.',

      faee_detail_h2: 'Das Problem',
      faee_detail_p4: 'Business Central bietet:',
      faee_detail_l1: 'Buchungsregeln',
      faee_detail_l2: 'Dimensionen',
      faee_detail_l3: 'Standardprüfungen',
      faee_detail_p5: 'Aber keine Antwort auf die entscheidende Frage:',
      faee_detail_p6: '„Warum ist diese Buchung ungewöhnlich – im Kontext unseres Unternehmens?"',
      faee_detail_p7: 'Auffälligkeiten bleiben:',
      faee_detail_l4: 'unkonkret',
      faee_detail_l5: 'schwer erklärbar',
      faee_detail_l6: 'zeitaufwendig zu prüfen',
      faee_detail_p8: 'Gerade für:',
      faee_detail_l7: 'Wirtschaftsprüfer',
      faee_detail_l8: 'Steuerberater',
      faee_detail_l9: 'CFOs & Finance Leads',
      faee_detail_p9: 'ist das ein reales, tägliches Problem.',

      faee_detail_h3: 'Die Lösung: Financial Anomaly & Explainability Engine',
      faee_detail_p10: 'FAEE lernt aus Ihren historischen Finanzdaten, erstellt statistische Musterbasislinien und erkennt Abweichungen beleg-, konto- und dimensionsübergreifend – vollständig transparent und nachvollziehbar.',
      faee_detail_p11: 'Jede erkannte Anomalie beantwortet vier zentrale Fragen:',
      faee_detail_l10: 'Was ist ungewöhnlich?',
      faee_detail_l11: 'Warum ist es ungewöhnlich?',
      faee_detail_l12: 'Worin unterscheidet es sich vom Normalfall?',
      faee_detail_l13: 'Wie kritisch ist es wirklich?',
      faee_detail_p12: 'Ohne KI-Blackbox. Ohne externe Daten. Ohne Intransparenz.',

      faee_detail_h4: 'Zentrale Funktionen',
      faee_detail_h5: '🔍 Automatische Mustererkennung',
      faee_detail_p13: 'FAEE analysiert historische Sachposten und lernt typische:',
      faee_detail_l14: 'Konten- und Gegenkontokombinationen',
      faee_detail_l15: 'Betragsbereiche',
      faee_detail_l16: 'Buchungshäufigkeiten',
      faee_detail_l17: 'Zeitliche Muster',
      faee_detail_l18: 'Dimensionslogiken',
      faee_detail_p14: 'Die Muster werden laufend aktualisiert und dienen als objektive Vergleichsbasis.',

      faee_detail_h6: '🚨 Intelligente Anomalieerkennung',
      faee_detail_p15: 'Erkennt unter anderem:',
      faee_detail_l19: 'ungewöhnlich hohe oder niedrige Beträge',
      faee_detail_l20: 'seltene oder neue Kontenkombinationen',
      faee_detail_l21: 'unerwartete zeitliche Abweichungen',
      faee_detail_l22: 'auffällige Dimensionsverwendungen',
      faee_detail_l23: 'neue Buchungsmuster',
      faee_detail_p16: 'Alle Erkennungstypen sind konfigurierbar und steuerbar.',

      faee_detail_h7: '🧠 Vollständig erklärbare Ergebnisse',
      faee_detail_p17: 'Jede Anomalie enthält:',
      faee_detail_l24: 'eine verständliche Erklärung',
      faee_detail_l25: 'historische Vergleichswerte',
      faee_detail_l26: 'Abweichungskennzahlen',
      faee_detail_l27: 'eine Konfidenzbewertung',
      faee_detail_l28: 'eine automatische Kritikalitätseinstufung',
      faee_detail_p18: 'Ideal für interne Prüfungen und externe Audits.',

      faee_detail_h8: '🧾 Integrierter Prüf- & Audit-Workflow',
      faee_detail_p19: 'FAEE bietet einen revisionssicheren Prüfprozess:',
      faee_detail_l29: 'Status: Offen, Geprüft, Akzeptiert, Korrigiert',
      faee_detail_l30: 'Benutzer- & Zeitstempel',
      faee_detail_l31: 'vollständige Nachvollziehbarkeit',
      faee_detail_l32: 'exportierbare Ergebnisse',
      faee_detail_p20: 'Perfekt für Jahresabschluss, Betriebsprüfungen und interne Kontrollen.',

      faee_detail_h9: 'Für wen ist FAEE gemacht?',
      faee_detail_l33: 'Wirtschaftsprüfer – strukturierte, erklärbare Auffälligkeitsanalysen',
      faee_detail_l34: 'Steuerberater – Plausibilitätsprüfungen für Mandanten',
      faee_detail_l35: 'CFOs & Finance Leads – Governance, Kontrolle & Risikominimierung',
      faee_detail_l36: 'Business-Central-Partner – hochwertiges Premium-Addon für Kunden',

      faee_detail_h10: 'Architektur & Technik (AppSource-Ready)',
      faee_detail_l37: '✅ 100 % Extension-First',
      faee_detail_l38: '✅ Keine Base-App-Modifikationen',
      faee_detail_l39: '✅ Event-Subscriber-Architektur',
      faee_detail_l40: '✅ Statistikbasiert & deterministisch',
      faee_detail_l41: '✅ Hohe Performance durch Batch- & Inkrementalanalyse',
      faee_detail_l42: '✅ Upgrade-sicher & datenschutzfreundlich',

      faee_detail_h11: 'Warum FAEE?',
      faee_detail_l43: '✔ Keine KI-Blackbox',
      faee_detail_l44: '✔ Prüferfreundlich & erklärbar',
      faee_detail_l45: '✔ Reduziert Prüfaufwand deutlich',
      faee_detail_l46: '✔ Erhöht Transparenz & Vertrauen',
      faee_detail_l47: '✔ Entwickelt speziell für Business Central',

      faee_detail_h12: 'Financial Anomaly & Explainability Engine',
      faee_detail_p21: 'Weil Auffälligkeiten erst dann wertvoll sind, wenn man sie versteht.',

      faee_btn: 'Jetzt beraten lassen'
    },

    /* ========================= */
    /* ========= EN ============ */
    /* ========================= */
    en: {
      nav_home: 'Home',
      nav_products: 'Products',
      nav_about: 'About',
      nav_contact: 'Contact',
      cta_contact: 'Get in touch',

      footer_claim: 'Turning AL code into Business Value',

      home_title: 'Turning AL code into Business Value',
      home_sub: 'Intelligent, explainable Business Central solutions for management and finance.',
      home_btn_products: 'Our products',
      home_brand_claim: 'From clean AL architecture to economic clarity.',
      home_brand_text: 'Business Central is more than an ERP.\nIt is the economic nervous system of your company.\n\nALchemy Central builds high-quality, upgrade-safe extensions that transform raw Business Central data into transparent, explainable, and actionable insights – without Excel chaos, workarounds, or black boxes.',

      home_prod1_title: 'Economic Twin',
      home_prod1_text: 'Your company’s economic twin calculated live in Business Central.',
      home_prod2_title: 'Smart Accruals',
      home_prod2_text: 'Automated, audit-proof accruals without Excel chaos.',
      home_prod3_title: 'Liquidity Causality Engine',
      home_prod3_text: 'Understand why your liquidity changes – not just that it does.',
      home_prod4_title: 'Financial Anomaly & Explainability Engine',
      home_prod4_text: 'Detect and explain anomalies comprehensibly – the digital auditor.',
      product_more: 'Learn more',

      products_title: 'Our Products',
      products_sub: 'Thoughtful solutions for finance and management.',
      products_twin_title: 'Economic Twin',
      products_twin_text: 'Simulation, transparency and forecasting in Business Central.',
      products_accruals_title: 'Smart Accruals',
      products_accruals_text: 'Automated accruals – clean and traceable.',
      products_liquidity_title: 'Liquidity Causality Engine',
      products_liquidity_text: 'Explainable root cause analysis for liquidity changes.',
      products_faee_title: 'Financial Anomaly & Explainability Engine',
      products_faee_text: 'Automatic detection and explanation of unusual financial postings.',

      about_title: 'About ALchemy Central',
      about_sub: 'We turn AL code into real business value.',

      about_h1: 'Where technology meets economic value',
      about_p1: 'ALchemy Central stands for excellent architecture, clean concepts and sustainable solutions for Microsoft Dynamics 365 Business Central.',
      about_p2: 'Our mission is clear: reduce complexity, create transparency and make better business decisions possible.',

      about_h2: 'Architecture instead of chaos',
      about_p3: 'Business Central is the economic nervous system of a company – this is exactly where we start.',
      about_p4: 'We do not believe in quick workarounds or fragile customizations, but in systems built to last.',

      about_h3: 'Our architectural principles',
      about_l1: 'Extension-first and upgrade-safe',
      about_l2: 'Clear layers and responsibilities',
      about_l3: 'Loose coupling via events and interfaces',
      about_l4: 'No quick fixes, no customization chaos',

      about_h4: 'Explainable solutions for decision makers',
      about_p5: 'Our solutions are built not only for developers, but especially for management, finance and controlling.',
      about_p6: 'We make economic relationships visible, explainable and controllable.',

      about_claim: 'Business Central. Done right.',

      contact_title: 'Contact',
      contact_sub: 'Let\'s talk about your project.',
      contact_card_title: 'Send a message',
      contact_name: 'Your name',
      contact_mail: 'Your email',
      contact_msg: 'Your message',
      contact_send: 'Send',
      contact_success: 'Thank you! Your message has been sent successfully.',
      contact_error: 'Error sending message. Please try again or contact us directly via email.',

      /* FOOTER LEGAL */
      footer_impressum: 'Imprint',
      footer_privacy: 'Privacy Policy',
      footer_hosting: 'Hosting & Domain: Secure European infrastructure',
      footer_ssl: 'SSL Encryption: Secure data transmission',

      /* IMPRESSUM */
      impressum_title: 'Imprint',
      impressum_sub: 'Legal information and contact details',
      impressum_company_title: 'Company Information',
      impressum_company_label: 'Company',
      impressum_company_name: 'ALchemy Central',
      impressum_ceo_label: 'CEO / Founder',
      impressum_address_label: 'Address',
      impressum_country: 'Spain',
      impressum_email_label: 'Email',
      impressum_hosting_title: 'Hosting & Domain',
      impressum_hosting_text: 'This website is hosted on a secure European infrastructure. All data is processed and stored exclusively in European data centers.',
      impressum_ssl_title: 'SSL Encryption',
      impressum_ssl_text: 'For security reasons and to protect the transmission of confidential content, this website uses SSL/TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.',
      impressum_liability_title: 'Liability Disclaimer',
      impressum_liability_text: 'Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.',
      impressum_copyright_title: 'Copyright',
      impressum_copyright_text: 'The content and works created by the site operators on these pages are subject to copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.',

      /* PRIVACY POLICY */
      privacy_title: 'Privacy Policy',
      privacy_sub: 'Information on data processing',
      privacy_intro_title: 'Privacy at a glance',
      privacy_intro_text: 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you.',
      privacy_responsible_title: 'Responsible party',
      privacy_data_collection_title: 'Data collection on this website',
      privacy_data_collection_text: 'Data processing on this website is carried out by the website operator. You can find their contact details in the imprint of this website. Your data is collected either by you providing it to us, e.g. through the contact form, or automatically when you visit the website through our IT systems. This is primarily technical data (e.g. internet browser, operating system or time of page access).',
      privacy_contact_form_title: 'Contact form',
      privacy_contact_form_text: 'If you send us inquiries via the contact form, your details from the inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not share this data without your consent. Processing is based on your consent (Art. 6 para. 1 lit. a GDPR).',
      privacy_cookies_title: 'Cookies and local storage',
      privacy_cookies_text: 'This website uses only technically necessary local storage (localStorage) to save your language preference. No tracking cookies or third-party analysis tools are used.',
      privacy_hosting_title: 'Hosting',
      privacy_hosting_text: 'This website is hosted on secure European servers. Processing takes place exclusively within the European Union in compliance with GDPR.',
      privacy_ssl_title: 'SSL/TLS encryption',
      privacy_ssl_text: 'For security reasons and to protect the transmission of confidential content, this site uses SSL/TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://".',
      privacy_rights_title: 'Your rights',
      privacy_rights_text: 'You have the right at any time to:',
      privacy_right_1: 'Information about your personal data stored by us',
      privacy_right_2: 'Correction of incorrect data',
      privacy_right_3: 'Deletion of your data stored by us',
      privacy_right_4: 'Restriction of data processing',
      privacy_right_5: 'Object to the processing of your data',
      privacy_changes_title: 'Changes to the privacy policy',
      privacy_changes_text: 'We reserve the right to adapt this privacy policy so that it always complies with current legal requirements or to implement changes to our services in the privacy policy.',

      accruals_title: 'Smart Accruals & Deferrals',
      accruals_sub: 'Automated accruals in Business Central.',
      accruals_h1: 'Why rethink accruals?',
      accruals_p1: 'Manual accruals are error-prone.',
      accruals_p2: 'We automate the entire process.',
      accruals_h2: 'Your benefits',
      accruals_l1: 'Fully automated',
      accruals_l2: 'Audit-proof',
      accruals_l3: 'Transparent logic',
      accruals_l4: 'BC integration',
      accruals_l5: 'No Excel',
      accruals_h3: 'Solid architecture',
      accruals_p3: 'Clean AL architecture.',
      accruals_l6: 'Best practices',
      accruals_l7: 'Performance',
      accruals_l8: 'Upgrade-safe',
      accruals_l9: 'Multi-tenant',
      accruals_l10: 'Extensible',
      accruals_h4: 'Built for finance',
      accruals_p4: 'Designed for controllers.',
      accruals_h5: 'Use cases',
      accruals_l11: 'Subscriptions',
      accruals_l12: 'Maintenance',
      accruals_l13: 'Projects',
      accruals_l14: 'Licenses',
      accruals_l15: 'Service contracts',
      accruals_btn: 'Request consultation',

      twin_title: 'Economic Twin',
      twin_sub: 'Your company’s economic twin.',
      twin_h1: 'What is an Economic Twin?',
      twin_p1: 'A digital representation of your business.',
      twin_p2: 'Calculated live in Business Central.',
      twin_h2: 'What is covered?',
      twin_p3: 'Revenue, costs, cashflow.',
      twin_l1: 'Realtime KPIs',
      twin_l2: 'Simulations',
      twin_l3: 'Scenarios',
      twin_p4: 'Data-driven decisions.',
      twin_h3: 'Technical foundation',
      twin_p5: 'Pure AL architecture.',
      twin_l4: 'Events',
      twin_l5: 'Interfaces',
      twin_l6: 'Loose coupling',
      twin_l7: 'Performance',
      twin_h4: 'Management ready',
      twin_p6: 'Built for executives.',
      twin_h5: 'Use cases',
      twin_l8: 'Forecast',
      twin_l9: 'Budget',
      twin_l10: 'Simulation',
      twin_l11: 'Strategy',
      twin_btn: 'Request demo',

      /* TWIN DETAIL PAGE */
      twin_detail_h1: 'Understanding what truly drives your business',
      twin_detail_p1: 'The Business Central Economic Twin by ALchemy Central extends Microsoft Dynamics 365 Business Central with an intelligent economic analysis and simulation layer.',
      twin_detail_p2: 'Instead of isolated numbers and retrospective reports, a digital economic twin of your company emerges that makes connections visible, identifies risks early, and prepares decisions in a comprehensible way.',
      
      twin_detail_h2: 'What does the Economic Twin do?',
      twin_detail_p3: 'The Economic Twin analyzes your existing Business Central data and puts it into an economic context:',
      twin_detail_l1: 'Revenue, costs, and cashflow',
      twin_detail_l2: 'Customer, item, and dependency structures',
      twin_detail_l3: 'Liquidity, working capital, and stability',
      twin_detail_p4: 'Based on this, the app creates a consistent impact model that shows why metrics change and which factors have the greatest influence.',
      
      twin_detail_h3: 'Simulate decisions – before they take effect',
      twin_detail_p5: 'With the Economic Twin, management decisions can be simulated in advance without changing operational data:',
      twin_detail_l4: 'What happens with revenue decline or growth?',
      twin_detail_l5: 'How do cost increases affect the business?',
      twin_detail_l6: 'What are the consequences of losing an important customer?',
      twin_detail_l7: 'How do liquidity and cashflow change?',
      twin_detail_p6: 'The app calculates the impact on:',
      twin_detail_l8: 'Cashflow and liquidity range',
      twin_detail_l9: 'Economic stability',
      twin_detail_l10: 'Risk and health metrics',
      twin_detail_p7: 'This makes decisions fact-based and comprehensible, not reactive.',
      
      twin_detail_h4: 'Explainable instead of black box',
      twin_detail_p8: 'All results of the Economic Twin are clearly explained. AI-supported explanations describe:',
      twin_detail_l11: 'Why metrics change',
      twin_detail_l12: 'Which factors have the greatest influence',
      twin_detail_l13: 'How risks and dependencies are composed',
      twin_detail_p9: 'The AI does not make decisions, but helps to understand economic relationships in clear language – even without deep controlling knowledge.',
      
      twin_detail_h5: 'Who is the Economic Twin for?',
      twin_detail_p10: 'The Business Central Economic Twin is aimed at:',
      twin_detail_l14: 'Managing directors and entrepreneurs',
      twin_detail_l15: 'CFOs and finance managers',
      twin_detail_l16: 'Controllers and business analysts',
      twin_detail_l17: 'Companies using Business Central as their central ERP',
      twin_detail_p11: 'The solution is particularly suitable for companies where cashflow, customer dependencies, and economic stability are crucial – across all industries.',
      
      twin_detail_h6: 'Why ALchemy Central?',
      twin_detail_p12: 'ALchemy Central develops solutions that not only extend Business Central, but make it economically more intelligent.',
      twin_detail_p13: 'The Economic Twin:',
      twin_detail_l18: 'Fully integrates into Business Central',
      twin_detail_l19: 'Works cloud-ready and scalable',
      twin_detail_l20: 'Is explainable, comprehensible, and auditable',
      twin_detail_l21: 'Supports proactive management instead of pure reporting',
      
      twin_detail_h7: 'In short',
      twin_detail_p14: 'The Business Central Economic Twin by ALchemy Central helps you to understand your company economically, prepare decisions safely, and identify risks early – directly in your existing ERP system.',

      /* ACCRUALS DETAIL PAGE */
      accruals_detail_h1: 'Intelligent financial accruals for Microsoft Dynamics 365 Business Central',
      accruals_detail_p1: 'The Smart Accruals & Deferrals Engine by ALchemy Central is a powerful extension for Microsoft Dynamics 365 Business Central that fully automates, structures, and audit-proofs accruals and deferrals.',
      accruals_detail_p2: 'The app replaces manual booking logic with a rule-based, transparent, and explainable engine specifically developed for demanding finance departments, controllers, and consultants.',
      
      accruals_detail_h2: 'What does the app do?',
      accruals_detail_p3: 'The Smart Accruals & Deferrals Engine recognizes relevant postings in financial accounting, applies defined accrual rules, and automatically distributes amounts to the correct periods – fully integrated into Business Central\'s standard logic.',
      accruals_detail_p4: 'This makes month-end and year-end closing:',
      accruals_detail_l1: 'Faster',
      accruals_detail_l2: 'Safer',
      accruals_detail_l3: 'More traceable',
      accruals_detail_l4: 'Without compromises in control or compliance',
      
      accruals_detail_h3: 'Core functions',
      accruals_detail_h4: 'Rule-based accrual automation',
      accruals_detail_p5: 'Define accrual rules based on:',
      accruals_detail_l5: 'General ledger accounts',
      accruals_detail_l6: 'Vendors and customers',
      accruals_detail_l7: 'Amount ranges',
      accruals_detail_l8: 'Posting descriptions',
      accruals_detail_l9: 'Dimensions',
      accruals_detail_p6: 'The app automatically applies these rules to matching postings – versioned, documented, and always traceable.',
      
      accruals_detail_h5: 'Flexible periodization',
      accruals_detail_p7: 'Supports multiple distribution methods:',
      accruals_detail_l10: 'Linear accrual',
      accruals_detail_l11: 'Day-accurate distribution',
      accruals_detail_l12: 'Individual period models',
      accruals_detail_p8: 'The architecture is fully extensible for future specialized logic.',
      
      accruals_detail_h6: 'Simulation & preview',
      accruals_detail_p9: 'Analyze the impact of accruals without posting:',
      accruals_detail_l13: 'Before/after comparison of P&L and balance sheet',
      accruals_detail_l14: 'Decision basis before closing runs',
      accruals_detail_l15: 'No changes to production data',
      
      accruals_detail_h7: 'Audit & compliance safety',
      accruals_detail_p10: 'Every accrual is fully documented:',
      accruals_detail_l16: 'Applied rule and rule version',
      accruals_detail_l17: 'Original posting',
      accruals_detail_l18: 'User and timestamp',
      accruals_detail_p11: 'Ideal for auditors, internal audit, and compliance requirements.',
      
      accruals_detail_h8: 'Your added value',
      accruals_detail_l19: '✔ Reduced manual effort in financial accounting',
      accruals_detail_l20: '✔ Faster month-end and year-end closings',
      accruals_detail_l21: '✔ Higher data quality and transparency',
      accruals_detail_l22: '✔ 100% AppSource compliant and upgrade-safe',
      accruals_detail_l23: '✔ Seamless integration into Business Central',
      
      accruals_detail_h9: 'Who is the app for?',
      accruals_detail_l24: 'Medium-sized companies',
      accruals_detail_l25: 'Corporate groups',
      accruals_detail_l26: 'Tax advisors and auditors',
      accruals_detail_l27: 'CFOs and controllers',
      accruals_detail_l28: 'Business Central partners',
      accruals_detail_p12: 'Wherever precise period accrual is business-critical.',
      
      accruals_detail_h10: 'Developed by ALchemy Central',
      accruals_detail_p13: 'ALchemy Central develops high-quality, sustainable extensions for Microsoft Dynamics 365 Business Central. Our solutions follow clear architectural principles, are maintainable long-term, and consistently designed for extensibility and performance.',
      accruals_detail_p14: 'No quick fixes. No compromises. Only clean, professional business software.',

      /* LIQUIDITY CAUSALITY ENGINE */
      liquidity_title: 'Liquidity Causality Engine',
      liquidity_sub: 'Understand why your liquidity changes – not just that it does.',

      liquidity_detail_h1: 'Understand why your liquidity changes – not just that it does',
      liquidity_detail_p1: 'Business Central shows you account balances, cashflow reports, and open items. What\'s missing is the crucial answer to the most important question for any finance management:',
      liquidity_detail_p2: 'Why does my liquidity change – specifically, traceably, and verifiably?',
      liquidity_detail_p3: 'The Liquidity Causality Engine closes exactly this gap.',

      liquidity_detail_h2: 'The Challenge',
      liquidity_detail_p4: 'In many companies, liquidity is measured today but not understood:',
      liquidity_detail_l1: 'Account balances only show the current state',
      liquidity_detail_l2: 'Cashflow reports don\'t explain causes',
      liquidity_detail_l3: 'Open items provide numbers but no context',
      liquidity_detail_l4: 'Effects of payment terms, postings, and processes remain hidden',
      liquidity_detail_p5: 'The consequence:',
      liquidity_detail_l5: 'Decisions are based on assumptions',
      liquidity_detail_l6: 'Root cause analyses happen manually (Excel, meetings, experience)',
      liquidity_detail_l7: 'Risks are detected too late',

      liquidity_detail_h3: 'The Solution: Liquidity Causality Engine',
      liquidity_detail_p6: 'The Liquidity Causality Engine extends Microsoft Dynamics 365 Business Central with an explainable, audit-proof root cause analysis for liquidity changes.',
      liquidity_detail_p7: 'Instead of isolated numbers, the app creates liquidity events with complete cause-effect chains – cross-document, chronologically ordered, and clearly explained.',
      liquidity_detail_p8: 'In short: You don\'t just see what happens, but why it happens.',

      liquidity_detail_h4: 'Core Functions',
      liquidity_detail_h5: '🔍 Liquidity Events Instead of Pure Numbers',
      liquidity_detail_p9: 'The app automatically recognizes relevant liquidity changes from:',
      liquidity_detail_l8: 'General ledger',
      liquidity_detail_l9: 'Customer and vendor ledger entries',
      liquidity_detail_l10: 'Payment terms',
      liquidity_detail_l11: 'Due dates',
      liquidity_detail_p10: 'Every relevant change is captured as a liquidity event, prioritized, and traceably documented.',

      liquidity_detail_h6: '🧠 Causality Analysis (Cause → Effect)',
      liquidity_detail_p11: 'For each event, the app shows:',
      liquidity_detail_l12: 'the triggering document',
      liquidity_detail_l13: 'the underlying process',
      liquidity_detail_l14: 'the applied payment terms',
      liquidity_detail_l15: 'the temporal and monetary effect on liquidity',
      liquidity_detail_p12: 'Result: A clear explanation chain that is understandable even for non-accountants.',

      liquidity_detail_h7: '📊 Explainability & Transparency',
      liquidity_detail_p13: 'Each event contains:',
      liquidity_detail_l16: 'a structured causality chain',
      liquidity_detail_l17: 'a human-readable explanation text',
      liquidity_detail_l18: 'complete amount and time logic',
      liquidity_detail_p14: 'No black box, no hidden algorithms – fully traceable, auditable, and CFO-ready.',

      liquidity_detail_h8: '🔮 What-If Simulations',
      liquidity_detail_p15: 'Test decisions before they are made:',
      liquidity_detail_l19: 'Shift payment deadlines',
      liquidity_detail_l20: 'Split payments',
      liquidity_detail_l21: 'Simulate delays',
      liquidity_detail_p16: 'Without posting, without risk, without test environments – simulations create their own, clearly marked liquidity events.',

      liquidity_detail_h9: '✅ Review & Approval Workflow',
      liquidity_detail_p17: 'Ideal for governance and audit:',
      liquidity_detail_l22: 'Review events',
      liquidity_detail_l23: 'Confirm causes',
      liquidity_detail_l24: 'Document decisions',
      liquidity_detail_l25: 'Complete audit trail with user & timestamp',

      liquidity_detail_h10: 'Who is the Liquidity Causality Engine for?',
      liquidity_detail_l26: 'CFOs & Finance Directors: Clear decision basis instead of pure reports',
      liquidity_detail_l27: 'Controllers & Cash Managers: Transparent root cause analysis and better planning',
      liquidity_detail_l28: 'Growth Companies & Mid-Market: More complexity than Excel, less overhead than enterprise treasury systems',
      liquidity_detail_l29: 'Consultancies & Tax Advisors: Well-founded liquidity analyses for clients',

      liquidity_detail_h11: 'Seamlessly Integrated into Business Central',
      liquidity_detail_l30: '✔ 100% extension – no base app modifications',
      liquidity_detail_l31: '✔ Event-driven & performant',
      liquidity_detail_l32: '✔ Audit-proof & upgrade-safe',
      liquidity_detail_l33: '✔ AppSource-ready',
      liquidity_detail_p18: 'The app feels like a native part of Business Central – only much more intelligent.',

      liquidity_detail_h12: 'Conclusion',
      liquidity_detail_p19: 'The Liquidity Causality Engine makes liquidity explainable.',
      liquidity_detail_p20: 'It connects postings, processes, and time effects into a clear overall picture – for better decisions, fewer surprises, and more control over your company\'s most important asset: liquidity.',

      liquidity_btn: 'Request consultation',

      /* FAEE - FINANCIAL ANOMALY & EXPLAINABILITY ENGINE */
      faee_title: 'Financial Anomaly & Explainability Engine',
      faee_sub: 'The digital auditor for Microsoft Dynamics 365 Business Central.',

      faee_detail_h1: 'The digital auditor for Microsoft Dynamics 365 Business Central',
      faee_detail_p1: 'Detecting anomalies is good. Explaining them comprehensibly is crucial.',
      faee_detail_p2: 'The Financial Anomaly & Explainability Engine (FAEE) is a professional extension for Microsoft Dynamics 365 Business Central that automatically detects, analyzes, and audit-proofs unusual financial postings.',
      faee_detail_p3: 'Unlike traditional audit reports or AI black boxes, FAEE doesn\'t just show that something is unusual – but why.',

      faee_detail_h2: 'The Problem',
      faee_detail_p4: 'Business Central offers:',
      faee_detail_l1: 'Posting rules',
      faee_detail_l2: 'Dimensions',
      faee_detail_l3: 'Standard checks',
      faee_detail_p5: 'But no answer to the crucial question:',
      faee_detail_p6: '"Why is this posting unusual – in the context of our company?"',
      faee_detail_p7: 'Anomalies remain:',
      faee_detail_l4: 'unspecific',
      faee_detail_l5: 'difficult to explain',
      faee_detail_l6: 'time-consuming to review',
      faee_detail_p8: 'Especially for:',
      faee_detail_l7: 'Auditors',
      faee_detail_l8: 'Tax advisors',
      faee_detail_l9: 'CFOs & Finance Leads',
      faee_detail_p9: 'this is a real, daily problem.',

      faee_detail_h3: 'The Solution: Financial Anomaly & Explainability Engine',
      faee_detail_p10: 'FAEE learns from your historical financial data, creates statistical pattern baselines, and detects deviations across documents, accounts, and dimensions – completely transparent and traceable.',
      faee_detail_p11: 'Each detected anomaly answers four key questions:',
      faee_detail_l10: 'What is unusual?',
      faee_detail_l11: 'Why is it unusual?',
      faee_detail_l12: 'How does it differ from normal?',
      faee_detail_l13: 'How critical is it really?',
      faee_detail_p12: 'No AI black box. No external data. No opacity.',

      faee_detail_h4: 'Core Functions',
      faee_detail_h5: '🔍 Automatic Pattern Recognition',
      faee_detail_p13: 'FAEE analyzes historical general ledger entries and learns typical:',
      faee_detail_l14: 'Account and contra-account combinations',
      faee_detail_l15: 'Amount ranges',
      faee_detail_l16: 'Posting frequencies',
      faee_detail_l17: 'Temporal patterns',
      faee_detail_l18: 'Dimension logic',
      faee_detail_p14: 'Patterns are continuously updated and serve as an objective comparison baseline.',

      faee_detail_h6: '🚨 Intelligent Anomaly Detection',
      faee_detail_p15: 'Detects among others:',
      faee_detail_l19: 'unusually high or low amounts',
      faee_detail_l20: 'rare or new account combinations',
      faee_detail_l21: 'unexpected temporal deviations',
      faee_detail_l22: 'conspicuous dimension usage',
      faee_detail_l23: 'new posting patterns',
      faee_detail_p16: 'All detection types are configurable and controllable.',

      faee_detail_h7: '🧠 Fully Explainable Results',
      faee_detail_p17: 'Each anomaly contains:',
      faee_detail_l24: 'a comprehensible explanation',
      faee_detail_l25: 'historical comparison values',
      faee_detail_l26: 'deviation metrics',
      faee_detail_l27: 'a confidence rating',
      faee_detail_l28: 'an automatic criticality classification',
      faee_detail_p18: 'Ideal for internal audits and external audits.',

      faee_detail_h8: '🧾 Integrated Review & Audit Workflow',
      faee_detail_p19: 'FAEE offers an audit-proof review process:',
      faee_detail_l29: 'Status: Open, Reviewed, Accepted, Corrected',
      faee_detail_l30: 'User & timestamp',
      faee_detail_l31: 'complete traceability',
      faee_detail_l32: 'exportable results',
      faee_detail_p20: 'Perfect for year-end closing, tax audits, and internal controls.',

      faee_detail_h9: 'Who is FAEE for?',
      faee_detail_l33: 'Auditors – structured, explainable anomaly analyses',
      faee_detail_l34: 'Tax advisors – plausibility checks for clients',
      faee_detail_l35: 'CFOs & Finance Leads – governance, control & risk minimization',
      faee_detail_l36: 'Business Central partners – high-quality premium addon for customers',

      faee_detail_h10: 'Architecture & Technology (AppSource-Ready)',
      faee_detail_l37: '✅ 100% Extension-First',
      faee_detail_l38: '✅ No Base App modifications',
      faee_detail_l39: '✅ Event-Subscriber architecture',
      faee_detail_l40: '✅ Statistics-based & deterministic',
      faee_detail_l41: '✅ High performance through batch & incremental analysis',
      faee_detail_l42: '✅ Upgrade-safe & privacy-friendly',

      faee_detail_h11: 'Why FAEE?',
      faee_detail_l43: '✔ No AI black box',
      faee_detail_l44: '✔ Auditor-friendly & explainable',
      faee_detail_l45: '✔ Significantly reduces audit effort',
      faee_detail_l46: '✔ Increases transparency & trust',
      faee_detail_l47: '✔ Developed specifically for Business Central',

      faee_detail_h12: 'Financial Anomaly & Explainability Engine',
      faee_detail_p21: 'Because anomalies only become valuable when you understand them.',

      faee_btn: 'Request consultation'
    }
  };

  /* ================= CORE ================= */

  function getLanguage() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) el.placeholder = dict[key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage(lang);
  }

  /* ================= INIT ================= */

  document.addEventListener('DOMContentLoaded', () => {
    const lang = getLanguage();
    applyLanguage(lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });
  });
})();
