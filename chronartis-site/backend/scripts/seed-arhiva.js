// Script de populare unică pentru colecția "arhiva", cu 3 spectacole demo
// (conținutul era în src/data/mockData.ts din frontend). Rulează idempotent
// (upsert după _id), deci poate fi rulat din nou fără să creeze duplicate.
//
// Utilizare: node scripts/seed-arhiva.js   (din folderul backend/)
require('dotenv').config();
const connectDB = require('../db');
const Arhiva = require('../models/Arhiva');

const arhiva = [
  {
    _id: 'requiem-mozart',
    titlu: 'Requiem — Mozart',
    categorie: 'concert',
    afis: 'https://picsum.photos/seed/requiem/800/520',
    data: '2024-12-14',
    locatie: 'Sala Palatului',
    oras: 'București',
    descriere:
      'Într-o noapte rece de decembrie, orașul și-a ținut răsuflarea în timp ce Filarmonica Națională a urcat pe scena Sălii Palatului pentru o interpretare a Requiemului neterminat al lui Mozart. Sala a fost plină cu peste 2.000 de invitați — artiști, mecena și spectatori pentru prima oară, aduși laolaltă de puterea muzicii. Dirijorul Alexandru Tomescu a condus orchestra și corul printr-o călătorie profundă care i-a lăsat pe spectatori în tăcere reverențioasă mult timp după ultimul acord. Seara a fost o mărturie a relevanței durabile a muzicii clasice și a rolului culturii în modelarea sufletului unui oraș.',
    regizor: 'Alexandru Tomescu',
    distributie: [
      'Orchestra Filarmonicii Naționale',
      'Corul Operei Naționale',
      'Ioana Cristescu — soprană',
      'Mirela Oprescu — mezzo-soprană',
    ],
    galerie: [
      { tip: 'image', url: 'https://picsum.photos/seed/req1/1200/800', descriere: 'Ceremonia de deschidere' },
      { tip: 'image', url: 'https://picsum.photos/seed/req2/1200/800', descriere: 'Orchestra la putere completă' },
      { tip: 'image', url: 'https://picsum.photos/seed/req3/1200/800', descriere: 'Solista soprană' },
      { tip: 'image', url: 'https://picsum.photos/seed/req4/1200/800', descriere: 'Interpretare corală' },
      { tip: 'image', url: 'https://picsum.photos/seed/req5/1200/800', descriere: 'Ovații în picioare' },
      { tip: 'image', url: 'https://picsum.photos/seed/req6/1200/800', descriere: 'După cortina de onoare' },
    ],
  },
  {
    _id: 'la-traviata',
    titlu: 'La Traviata',
    categorie: 'eveniment',
    afis: 'https://picsum.photos/seed/traviata/800/520',
    data: '2024-10-03',
    locatie: 'Opera Națională București',
    oras: 'București',
    descriere:
      'La Traviata a revenit la Opera Națională București într-o producție nouă și spectaculoasă, regizată de Marco Belviso. Producția a reinterpretat capodopera lui Verdi într-o estetică contemporană, păstrând în același timp nucleul emoțional al originalului. Solista principală a oferit o interpretare definitorie a carierei în rolul Violettei, câștigând patru cortine de onoare și o ovație în picioare de peste zece minute. Criticii au salutat această producție ca un moment de referință pentru opera românească, atrăgând spectatori din toată Europa.',
    regizor: 'Marco Belviso',
    distributie: ['Ana Constantin — Violetta', 'Radu Ionescu — Alfredo', 'George Popa — Germont'],
    galerie: [
      { tip: 'image', url: 'https://picsum.photos/seed/trav1/1200/800', descriere: 'Actul I — Scena petrecerii' },
      { tip: 'image', url: 'https://picsum.photos/seed/trav2/1200/800', descriere: 'Aria Violettei' },
      { tip: 'image', url: 'https://picsum.photos/seed/trav3/1200/800', descriere: 'Actul II — Casa de la țară' },
      { tip: 'image', url: 'https://picsum.photos/seed/trav4/1200/800', descriere: 'Scena finală' },
      { tip: 'image', url: 'https://picsum.photos/seed/trav5/1200/800', descriere: 'Cortina de onoare' },
    ],
  },
  {
    _id: 'hamlet',
    titlu: 'Hamlet',
    categorie: 'teatru',
    afis: 'https://picsum.photos/seed/hamlet/800/520',
    data: '2024-11-07',
    locatie: 'Teatrul Național',
    oras: 'București',
    descriere:
      'Regizorul Andrei Șerban s-a întors la Teatrul Național cu o producție de referință a lui Hamlet, plasând piesa pe fundalul decăderii politice moderne. Producția a înlăturat ornamentele pentru a dezvălui miezul uman brut al tragediei shakespeariene. Actorul principal Mihai Călin a fost devastator în rolul titular, oscilând între o inteligență fermă și o vulnerabilitate zdrobitoare. Producția și-a epuizat cele 12 seri de reprezentații în 48 de ore de la punerea în vânzare a biletelor.',
    regizor: 'Andrei Șerban',
    distributie: ['Mihai Călin — Hamlet', 'Ofelia Popescu — Ofelia', 'Dan Constantin — Claudiu'],
    galerie: [
      { tip: 'image', url: 'https://picsum.photos/seed/ham1/1200/800', descriere: 'A fi sau a nu fi' },
      { tip: 'image', url: 'https://picsum.photos/seed/ham2/1200/800', descriere: 'Scena fantomei' },
      { tip: 'image', url: 'https://picsum.photos/seed/ham3/1200/800', descriere: 'Bocetul Ofeliei' },
      { tip: 'image', url: 'https://picsum.photos/seed/ham4/1200/800', descriere: 'Duelul final' },
      { tip: 'image', url: 'https://picsum.photos/seed/ham5/1200/800', descriere: 'Plecăciunea distribuției' },
    ],
  },
];

(async () => {
  try {
    await connectDB();

    for (const show of arhiva) {
      await Arhiva.findOneAndUpdate({ _id: show._id }, show, {
        upsert: true,
        new: true,
      });
      console.log(`OK: ${show.titlu}`);
    }

    console.log(`\n${arhiva.length} spectacole adăugate/actualizate în colecția "arhiva".`);
  } catch (err) {
    console.error('Eroare la popularea arhivei:', err);
    process.exitCode = 1;
  } finally {
    process.exit();
  }
})();
