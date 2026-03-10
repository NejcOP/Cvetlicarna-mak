# 🌸 Cvetličarna Mak - Luxury Floral Boutique Website

## Pregled projekta

Moderna, elegantna spletna stran za luksuzno cvetličarno, zasnovana z React in Tailwind CSS. Poudarek je na vizualni galeriji in umetniškem pristopu, brez e-trgovine.

## 🎨 Dizajnerske značilnosti

### Barvna paleta
- **Soft Cream** (#FAF7F2) - Ozadje
- **Elegant Charcoal** (#3A3A3A) - Besedilo
- **Subtle Gold** (#D4AF37) - Poudarki in detajli

### Tipografija
- **Cormorant Garamond** - Serif za naslove (eleganten, klasičen videz)
- **Montserrat** - Sans-serif za telo besedila (berljivost)

## 📱 Sekcije

1. **Hero sekcija** - Polno zaslon slikovna pozaditev z elegantnim napisom
2. **Galerija "Izbrana dela"** - Masonry grid s 6 cvetličnimi aranžmaji
3. **"Umetnost ustvarjanja"** - O sekcija z osebnim pristopom
4. **Kontakt/CTA** - Telefonski klic in obisk salona (brez nakupovalnega košarice)
5. **Footer** - Socialna omrežja in informacije

## ✨ Funkcionalnosti

- ✅ **Mobile-first responsive design** - Popolnoma prilagojena mobilnim napravam
- ✅ **Smooth scroll animations** - Elegantne animacije ob scrollu
- ✅ **Masonry gallery grid** - Profesionalen prikaz portfolia
- ✅ **Hover effects** - Interaktivni efekti na slikah
- ✅ **Sticky CTA button** - Prilepljen gumb za kontakt
- ✅ **Intersection Observer** - Optimizirane animacije
- ✅ **100% Slovenščina** - Profesionalen, umetniški ton

## 🚀 Kako uporabljati

### Enostavna različica (CDN)
1. Odprite `cvetlicarna-mak.html` v brskalniku
2. Vse deluje iz CDN-ja (React, Tailwind CSS)

### Prilagoditve

#### Spreminjanje slik galerije
V `cvetlicarna-app.jsx` najdite array `galleryItems` in spremenite URL-je:

```javascript
const galleryItems = [
    {
        image: "VAŠA_SLIKA_URL",
        title: "Naslov kreacije"
    },
    // ...
];
```

#### Spreminjanje kontaktnih podatkov
V komponenti `Contact` spremenite:
- Telefonsko številko: `+386 40 123 456`
- Naslov: `Slovenčeva ulica 12, 1000 Ljubljana`
- Email: `info@cvetlicarnamak.si`

#### Spreminjanje Hero slike
V komponenti `Hero` spremenite `src` atribut:
```javascript
<img src="VAŠA_HERO_SLIKA_URL" alt="..." />
```

## 🎯 Dizajnerski pristop

### Luksuzna estetika
- Veliko belo prostora (white space)
- Minimalistični design
- Fokus na visokokakovostnih slikah
- Subtilni hover efekti

### Brez e-trgovine
- Namesto "Kupi zdaj" → "Naroči unikatno kreacijo"
- Fokus na osebnem stiku in naročilih po meri
- CTA usmerja k telefonskemu klicu ali sporočilu

### Umetniški ton
Vsa besedila poudarjajo:
- Unikatnost vsake kreacije
- Čustveno povezavo
- Umetniški pristop
- Sezonske, lokalne cvetove

## 📦 Tehnologije

- **React 18** - UI framework
- **Tailwind CSS** - Utility-first CSS
- **Google Fonts** - Cormorant Garamond & Montserrat
- **Intersection Observer API** - Scroll animacije

## 🔧 Nadaljnje izboljšave

Če želite dodati:
- **Lightbox** za povečane slike
- **Form backend** za kontaktni obrazec
- **Instagram feed** integracija
- **Multi-language** podpora
- **Blog** sekcija

## 🌟 SEO optimizacija

- ✅ Semantic HTML struktura
- ✅ Meta descriptions
- ✅ Alt texti za slike
- ✅ Mobile-first design
- ✅ Fast loading (CDN)

## 📞 Podpora

Za vprašanja ali prilagoditve kontaktirajte razvijalca.

---

**Ustvarjeno z ljubeznijo in pozornostjo do detajla** 🌸
