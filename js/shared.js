'use strict';

// ==================== DATA ====================
const ic = {
  store:   '<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>',
  home_ic: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/>',
  energy:  '<path d="M13 2L4 14h6l-1 8 9-12h-6z"/>',
  book:    '<path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>',
  ai:      '<rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
  media:   '<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>',
  explore: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/>',
  build:   '<path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6M3 12l9 5 9-5"/>'
};

const subs = [
  {
    ic: 'store', sec: 'Худалдаа', name: 'Nym Bay Store',
    y: '2022', emp: '30+', loc: 'Улаанбаатар',
    long: 'Монгол болон гадаадын брэндийн бараа бүтээгдэхүүнийг онлайн болон офлайн сувгаар нийлүүлдэг орчин үеийн дэлгүүрийн сүлжээ.',
    prod: [
      {t: 'Онлайн дэлгүүр', d: 'Хурдан, найдвартай онлайн захиалга, хүргэлтийн систем.'},
      {t: 'Брэнд бараа', d: 'Монгол болон гадаадын нэр хүндтэй брэндүүдийн жинхэнэ бараа.'},
      {t: 'Корпорат худалдаа', d: 'Байгууллагуудад зориулсан бөөний нийлүүлэлт, гэрээт үйлчилгээ.'},
      {t: 'Хүргэлтийн үйлчилгээ', d: 'Улаанбаатар хотын хэмжээнд өдрийн хүргэлт.'}
    ]
  },
  {
    ic: 'home_ic', sec: 'Үл хөдлөх', name: 'BairX',
    y: '2023', emp: '15+', loc: 'Улаанбаатар',
    long: 'Үл хөдлөх хөрөнгийн зах зээлийг дижитал технологиор шинэчлэх, хэрэглэгчдэд зориулсан ухаалаг платформ.',
    prod: [
      {t: 'Орон сууц хайх', d: 'Хүсэлтэд тохирсон орон сууцыг хялбар, хурдан олох систем.'},
      {t: 'Зарах & Түрээслэх', d: 'Эзэмшигчдэд зориулсан ил тод, аюулгүй арилжааны платформ.'},
      {t: 'Зах зээлийн шинжилгээ', d: 'Үнийн мэдээлэл, тренд шинжилгээ, хөрөнгө оруулалтын тооцоолол.'},
      {t: 'Хөрөнгө оруулалтын зөвлөх', d: 'Мэргэжлийн зөвлөгч, гэрээний туслалцаа.'}
    ]
  },
  {
    ic: 'energy', sec: 'Эрчим хүч', name: 'UB Energy',
    y: '2023', emp: '12+', loc: 'Улаанбаатар',
    long: 'Улаанбаатар хотын иргэд, байгууллагуудад цэвэр, үр ашигтай эрчим хүчний шийдэл болон тоног төхөөрөмж нийлүүлдэг.',
    prod: [
      {t: 'Нарны панел суурилуулалт', d: 'Гэр, байгууллагуудад нарны эрчим хүчний систем суурилуулна.'},
      {t: 'Эрчим хүч хэмнэх шийдэл', d: 'Ухаалаг тоолуур, удирдлагын систем.'},
      {t: 'Техник үйлчилгээ', d: 'Суурилуулсан системийн тогтмол хяналт, засвар.'},
      {t: 'Байгаль орчинд ээлтэй зөвлөгөө', d: 'Цахилгааны хэрэгцээг шинжлэн оновчтой шийдэл санал болгодог.'}
    ]
  },
  {
    ic: 'book', sec: 'Боловсрол', name: 'NBook',
    y: '2023', emp: '10+', loc: 'Улаанбаатар',
    long: 'Монгол хэлдээ зориулсан цахим ном, боловсролын контент болон дижитал уншлагын платформ.',
    prod: [
      {t: 'Цахим номын сан', d: '1,000 гаруй монгол хэлний цахим ном, сурах бичиг.'},
      {t: 'Зохиолчдын платформ', d: 'Монгол зохиолчдод зориулсан хэвлэн нийтлэх суваг.'},
      {t: 'Боловсролын контент', d: 'Сургалт, хичээл, танин мэдэхүйн контент.'},
      {t: 'Аудио ном', d: 'Хурдацтай амьдралын хэмнэлд зориулсан аудио фонд.'}
    ]
  },
  {
    ic: 'ai', sec: 'Технологи', name: 'AI Stylist',
    y: '2024', emp: '14+', loc: 'Улаанбаатар',
    long: 'Хиймэл оюун ухаанд суурилсан хувийн загварын зөвлөгч — таны биеийн байдал, хэв маяг, хандлагад нийцсэн дижитал стилист.',
    prod: [
      {t: 'AI загварын зөвлөгч', d: 'Зургаас шинжлэн хувийн загварын санал, зөвлөмж.'},
      {t: 'Дуртай хувцасны хамтар', d: 'Шинэ хувцасыг дижитал ар дэвсгэр дээр туршиж үзэх.'},
      {t: 'Тренд шинжилгээ', d: 'Дэлхийн болон Монголын загварын сүүлийн чиг хандлага.'},
      {t: 'Онлайн дэлгүүртэй холболт', d: 'Зөвлөмж болгосон барааг шууд захиалах холбоос.'}
    ]
  }
];

const news = [
  {d:'2026.06.01', t:'AI Stylist бета хувилбараа нийтэд нээлттэй болголоо',              p:'Хэрэглэгчид хиймэл оюун ухааны тусламжтайгаар хувийн загварын зөвлөгч ашиглах боломжтой болж байна.'},
  {d:'2026.05.20', t:'NBook цахим номын санд 1,000 гаруй гарчиг нэмэгдлээ',            p:'Монгол уран зохиол, сурах бичиг, аудио номын шинэ фонд хэрэглэгчдэд нээлттэй боллоо.'},
  {d:'2026.05.10', t:'BairX Улаанбаатарын 3 дүүрэгт үйлчилгээгээ өргөтгөлөө',          p:'Сүхбаатар, Баянгол, Хан-Уул дүүргүүдэд шинэ агентлагийн сүлжээ нэмэгдлээ.'},
  {d:'2026.04.25', t:'Nym Bay Store урьдчилан захиалах систем нэвтрүүллээ',              p:'Онлайн дэлгүүр хурдан хүргэлт, урьдчилан захиалгын боломжийг хэрэглэгчдэд санал болгож эхэллээ.'},
  {d:'2026.04.10', t:'Гэрээ Групп шинэ хөрөнгө оруулалтын хөтөлбөр зарлалаа',         p:'Стартап, инноваци чиглэлтэй Монгол залуучуудад зориулсан дэмжлэгийн хөтөлбөр нь дараагийн шатандаа орлоо.'},
  {d:'2026.03.18', t:'UB Energy нарны панелийн суурилуулалтын үйлчилгээ эхлүүллээ',    p:'Улаанбаатар хотод орон нутгийн байгалийн нөхцөлд тохирсон нарны эрчим хүчний систем нийлүүллэж байна.'}
];

const jobs = [
  {t:'Frontend Developer',          c:'AI Stylist · Улаанбаатар'},
  {t:'Бизнесийн хөгжлийн менежер',  c:'NBook · Улаанбаатар'},
  {t:'Контент зохиолч',             c:'Nym Bay Store · Улаанбаатар'},
  {t:'Борлуулалтын зохицуулагч',    c:'BairX · Улаанбаатар'},
  {t:'Full-stack Developer',        c:'Гэрээ Групп · Улаанбаатар'},
  {t:'Маркетингийн мэргэжилтэн',    c:'Гэрээ Групп · Улаанбаатар'}
];

const proc = [
  {t:'Вэб хөгжүүлэлтийн үйлчилгээ',    c:'Хаах: 2026-06-20'},
  {t:'График дизайны үйлчилгээ',         c:'Хаах: 2026-06-22'},
  {t:'Серверийн тоног төхөөрөмж',        c:'Хаах: 2026-06-25'},
  {t:'Гэрэл зургийн болон видео үйлчилгээ', c:'Хаах: 2026-07-01'}
];

const projects = [
  {ic:'ai',      k:'Технологи',  t:'AI Stylist — Ухаалаг загварын зөвлөгч', d:'Хиймэл оюун ухаанаар хувийн хэв маягийг шинжлэн санал болгодог дижитал платформ.',         bg:'#1a1424'},
  {ic:'store',   k:'Худалдаа',   t:'Nym Bay Store — Дижитал дэлгүүр',       d:'Монгол болон гадаадын брэндийн барааг хурдан, найдвартай хүргэдэг онлайн дэлгүүр.',       bg:'#14201a'},
  {ic:'home_ic', k:'Үл хөдлөх', t:'BairX — Ухаалаг орон сууц хайх',        d:'Үл хөдлөх хөрөнгийн зах зээлийг технологиор шинэчлэх, хэрэглэгчдэд ойр болгох платформ.', bg:'#1a1814'},
  {ic:'book',    k:'Боловсрол',  t:'NBook — Монгол цахим номын сан',         d:'1,000 гаруй монгол хэлний ном, аудио фонд, боловсролын дижитал контент.',                   bg:'#14181e'}
];

const values = [
  ['Инноваци',          'Шинэ санаа, дэвшилтэт технологид суурилсан шийдлийг тэргүүлэх чиглэл болгоно.'],
  ['Чанар',             'Бүтээгдэхүүн, үйлчилгээ бүрийг өндөр стандартаар бий болгоно.'],
  ['Хэрэглэгч төвт',   'Хэрэглэгчийн туршлага, хэрэгцээ шааардлага бидний бүх шийдвэрийн гол нь.'],
  ['Хариуцлага',        'Нийгэм, байгаль орчин, хамтрагчдийнхаа өмнө хүлээсэн үүргийг эрхэмлэнэ.'],
  ['Тогтвортой хөгжил', 'Богино болон урт хугацааны зорилтуудыг тэнцвэртэй хэрэгжүүлнэ.'],
  ['Хамтын ажиллагаа', 'Баг, түнш, хэрэглэгчтэйгээ ил тод, итгэлтэй харилцана.']
];

const timeline = [
  ['2022', 'Үүсгэн байгуулагдсан',   'Гэрээ Групп нь технологи, үйлчилгээний чиглэлд анхны алхмаа хийв.'],
  ['2022', 'Nym Bay Store нээлтэй',  'Онлайн болон офлайн дэлгүүрийн үйл ажиллагааг эхлүүлэв.'],
  ['2023', 'BairX хөгжлийн эхлэл',  'Үл хөдлөх хөрөнгийн дижитал платформын хөгжүүлэлт эхэллээ.'],
  ['2023', 'NBook, UB Energy',       'Боловсрол, эрчим хүчний чиглэлд шинэ төслүүд нэмэгдэв.'],
  ['2024', 'AI Stylist нээлт',       'Хиймэл оюун ухааны технологийг хувийн загварын зөвлөгчид ашигласан анхны платформ.'],
  ['2026', 'Өсөлтийн шат',           'Бүх төслүүд идэвхтэй ажиллаж, Гэрээ Групп олон чиглэлд хөгжиж байна.']
];

const leaders = [
  ['Б. Баярмагнай', 'Үүсгэн байгуулагч & Гүйцэтгэх захирал', 'Технологи, бизнесийн инноваци чиглэлд Монгол залуучуудын авьяасыг нийгэмд хувирган тусгахыг эрхэмлэдэг.']
];

const faqs = [
  ['Гэрээ Групп ямар чиглэлээр ажилладаг вэ?',         'Технологи, дижитал бүтээгдэхүүн, худалдаа, үл хөдлөх, боловсрол, эрчим хүч зэрэг олон чиглэлд 5 идэвхтэй төсөл хэрэгжүүлдэг.'],
  ['AI Stylist-г хэрхэн ашиглах вэ?',                  'Вэб эсвэл мобайл апп-аар нэвтрэн, зурагаа upload хийхэд AI таны хэв маягт тохирсон санал, зөвлөмжийг автоматаар гаргана.'],
  ['NBook-т хэрхэн бүртгүүлэх вэ?',                   'NBook вэб сайтаар бүртгүүлж, сарын эсвэл жилийн эрхийн хураамжаар бүх контентод хандах боломжтой.'],
  ['BairX-д зарын байршуулах хэрхэн вэ?',             'BairX платформд бүртгүүлэн, өмчийн мэдээллээ оруулна. Манай баг 24 цагийн дотор шалгаж, нийтэлнэ.'],
  ['Хөрөнгө оруулалт болон хамтын ажиллагааны талаар хаана лавлах вэ?', 'Холбоо барих хэсгийн маягтаар эсвэл info@geree.mn хаягаар бидэнтэй шууд холбогдоно уу.']
];

// ==================== HELPERS ====================
function svgIcon(key) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ic[key]}</svg>`;
}

jobs.forEach((j,i) => j._i = i);
proc.forEach((p,i) => p._i = i);

function jli(item, arr) {
  return `<li data-list="${arr}" data-idx="${item._i}">
    <div><div class="jt">${item.t}</div><div class="jm">${item.c}</div></div>
    <span class="jarr">→</span>
  </li>`;
}

function compCard(s, i) {
  return `<a class="comp" href="company.html?id=${i}">
    <div class="cico">${svgIcon(s.ic)}</div>
    <div class="csec">${s.sec}</div>
    <h4>${s.name}</h4>
  </a>`;
}

// ==================== NAV ====================
function renderNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  function active(keys) {
    return keys.some(k => path.startsWith(k)) ? ' class="active"' : '';
  }

  const html = `
<div class="topbar"><div class="wrap">
  <a href="esg-report.html">Тогтвортой хөгжил</a>
  <span class="sep"></span>
  <a href="procurement.html">Нийлүүлэгчид</a>
  <span class="sep"></span>
  <a href="jobs.html">Карьер</a>
  <span class="sep"></span>
  <span class="lang">МН</span>
</div></div>

<nav>
  <div class="wrap nav-in">
    <a href="index.html" class="logo"><span class="mark"><span>Г</span></span>ГЭРЭЭ ГРУПП</a>
    <ul class="menu">
      <li><a href="index.html"${active(['index'])}>Нүүр</a></li>
      <li>
        <a href="about.html"${active(['about'])}>Бидний тухай <span class="caret">▼</span></a>
        <div class="dropdown">
          <a href="about.html">Группийн танилцуулга</a>
          <a href="about-values.html">Үнэт зүйлс, зарчим</a>
          <a href="about-history.html">Бидний түүх</a>
          <a href="about-leadership.html">Удирдлага</a>
          <a href="about-shareholders.html">Хувьцаа эзэмшигчид</a>
        </div>
      </li>
      <li><a href="business.html"${active(['business','company'])}>Бизнесийн бүтэц</a></li>
      <li>
        <a href="esg-report.html"${active(['esg'])}>Тогтвортой хөгжил <span class="caret">▼</span></a>
        <div class="dropdown">
          <a href="esg-report.html">Тогтвортой хөгжлийн тайлан</a>
          <a href="esg-principles.html">Зарчим, бодлого</a>
          <a href="esg-projects.html">Нийгмийн хариуцлага</a>
        </div>
      </li>
      <li>
        <a href="news.html"${active(['news'])}>Мэдээ мэдээлэл <span class="caret">▼</span></a>
        <div class="dropdown">
          <a href="news.html">Мэдээ</a>
          <a href="news-faq.html">Түгээмэл асуулт</a>
        </div>
      </li>
      <li><a href="jobs.html"${active(['jobs'])}>Карьер</a></li>
    </ul>
    <div class="nav-utils">
      <button class="icon-btn" id="searchBtn" aria-label="Хайх">
        <svg viewBox="0 0 24 24" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.4-4.4"/></svg>
      </button>
      <span class="lang">МН</span>
      <div class="burger" id="burger"><span></span><span></span><span></span></div>
    </div>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Нүүр</a>
  <a href="about.html">Бидний тухай</a>
  <a href="about-values.html" class="sub">Үнэт зүйлс, зарчим</a>
  <a href="about-history.html" class="sub">Бидний түүх</a>
  <a href="about-leadership.html" class="sub">Удирдлага</a>
  <a href="about-shareholders.html" class="sub">Хувьцаа эзэмшигчид</a>
  <a href="business.html">Бизнесийн бүтэц</a>
  <a href="esg-report.html">Тогтвортой хөгжил</a>
  <a href="esg-principles.html" class="sub">Зарчим, бодлого</a>
  <a href="esg-projects.html" class="sub">Нийгмийн хариуцлага</a>
  <a href="news.html">Мэдээ мэдээлэл</a>
  <a href="news-faq.html" class="sub">Түгээмэл асуулт</a>
  <a href="jobs.html">Карьер</a>
  <a href="contact.html">Холбоо барих</a>
</div>`;

  document.body.insertAdjacentHTML('afterbegin', html);
}

// ==================== FOOTER ====================
function renderFooter() {
  const html = `
<footer>
  <div class="wrap">
    <div class="foot-top">
      <div>
        <span class="foot-logo">ГЭРЭЭ ГРУПП</span>
        <p style="max-width:36ch">Технологи, үйлчилгээ, хөрөнгө оруулалтад суурилсан шинэ үеийн Монгол групп компани.</p>
      </div>
      <div>
        <h5>Компани</h5>
        <a href="about.html">Бидний тухай</a>
        <a href="about-history.html">Бидний түүх</a>
        <a href="about-leadership.html">Удирдлага</a>
        <a href="about-values.html">Үнэт зүйлс</a>
        <a href="about-shareholders.html">Хувьцаа эзэмшигчид</a>
      </div>
      <div>
        <h5>Бизнесийн бүтэц</h5>
        <a href="business.html">Бүх төслүүд</a>
        <a href="company.html?id=0">Nym Bay Store</a>
        <a href="company.html?id=1">BairX</a>
        <a href="company.html?id=2">UB Energy</a>
        <a href="company.html?id=4">AI Stylist</a>
      </div>
      <div>
        <h5>Холбоо барих</h5>
        <a href="contact.html">Санал, хүсэлт</a>
        <a href="jobs.html">Карьер</a>
        <a href="procurement.html">Нийлүүлэгчид</a>
        <p>info@geree.mn</p>
        <p>Улаанбаатар хот</p>
      </div>
    </div>
    <div class="foot-bot">
      <span>© 2026 Гэрээ Холдинг ХХК. Бүх эрх хуулиар хамгаалагдсан.</span>
      <span>
        <a href="terms.html">Ашиглалтын нөхцөл</a> ·
        <a href="privacy.html">Нууцлалын бодлого</a> ·
        <a href="contact.html">Холбоо барих</a>
      </span>
    </div>
  </div>
</footer>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

// ==================== MODALS ====================
function renderModals() {
  const html = `
<div class="modal" id="modal">
  <div class="modal-box">
    <button class="modal-x" id="modalX">✕</button>
    <div class="modal-hd">
      <div class="mico"><svg id="mIco" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></svg></div>
      <div class="csec" id="mTag"></div><h3 id="mName"></h3><p id="mLong"></p>
    </div>
    <div class="modal-bd">
      <div class="mfacts">
        <div class="mf"><div class="v" id="mY"></div><div class="k">Байгуулсан</div></div>
        <div class="mf"><div class="v" id="mEmp"></div><div class="k">Баг</div></div>
        <div class="mf"><div class="v" id="mLoc"></div><div class="k">Байршил</div></div>
      </div>
      <h4>Үндсэн чиглэл</h4>
      <ul class="prod" id="mProd"></ul>
    </div>
  </div>
</div>

<div class="modal" id="infoModal">
  <div class="modal-box">
    <button class="modal-x" id="infoX">✕</button>
    <div class="modal-hd">
      <div class="csec" id="iCat"></div>
      <h3 id="iTitle"></h3>
      <p id="iMeta" style="color:var(--copper);font-weight:600"></p>
    </div>
    <div class="modal-bd">
      <div id="iBody" style="color:var(--ink2);font-size:15.5px"></div>
      <button id="iCta" style="margin-top:24px;background:var(--copper);color:#fff;border:none;font-family:'Oswald';text-transform:uppercase;letter-spacing:1px;font-size:14px;padding:12px 24px;cursor:pointer"></button>
    </div>
  </div>
</div>

<div class="search-ov" id="searchOv">
  <div class="search-inner">
    <button class="search-x" id="searchX">✕</button>
    <div class="search-box">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#857f74" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.4-4.4"/></svg>
      <input id="searchInput" type="text" placeholder="Хайх... (төсөл, мэдээ, хуудас)" autocomplete="off">
    </div>
    <div class="search-results" id="searchResults"></div>
  </div>
</div>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

// ==================== INIT FUNCTIONS ====================
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const mm = document.getElementById('mobileMenu');
  if (!burger || !mm) return;
  burger.onclick = () => {
    const o = burger.classList.toggle('open');
    mm.classList.toggle('open', o);
    document.body.style.overflow = o ? 'hidden' : '';
  };
}

function initSearch() {
  const searchIndex = [
    ...subs.map((s,i) => ({c:'Төсөл', t:s.name, d:s.long, href:'company.html?id='+i})),
    ...news.map(n => ({c:'Мэдээ', t:n.t, d:n.p, href:'news.html'})),
    ...jobs.map(j => ({c:'Ажлын байр', t:j.t, d:j.c, href:'jobs.html'})),
    {c:'Хуудас', t:'Бидний тухай',        d:'Группийн танилцуулга',          href:'about.html'},
    {c:'Хуудас', t:'Бидний түүх',          d:'2022 оноос өнөөг хүртэл',       href:'about-history.html'},
    {c:'Хуудас', t:'Удирдлага',            d:'Үүсгэн байгуулагч',             href:'about-leadership.html'},
    {c:'Хуудас', t:'Үнэт зүйлс',          d:'Эрхэм зорилго, зарчмууд',       href:'about-values.html'},
    {c:'Хуудас', t:'Төслүүд',             d:'5 идэвхтэй төсөл',              href:'business.html'},
    {c:'Хуудас', t:'Түгээмэл асуулт',     d:'Асуулт, хариулт',               href:'news-faq.html'},
    {c:'Хуудас', t:'Холбоо барих',        d:'Хаяг, и-мэйл, маягт',           href:'contact.html'},
    {c:'Хуудас', t:'Нууцлалын бодлого',   d:'Хувийн мэдээллийн хамгаалалт',  href:'privacy.html'},
    {c:'Хуудас', t:'Ашиглалтын нөхцөл',   d:'Сайт ашиглах нөхцөл',           href:'terms.html'}
  ];

  const ov = document.getElementById('searchOv');
  const inp = document.getElementById('searchInput');
  const res = document.getElementById('searchResults');
  const btn = document.getElementById('searchBtn');
  const x   = document.getElementById('searchX');
  if (!ov) return;

  function open() { ov.classList.add('open'); document.body.style.overflow='hidden'; setTimeout(()=>inp.focus(),80); render(''); }
  function close(){ ov.classList.remove('open'); document.body.style.overflow=''; inp.value=''; }

  function render(q) {
    q = q.trim().toLowerCase();
    let list = q ? searchIndex.filter(x => (x.t+' '+x.d+' '+x.c).toLowerCase().includes(q)) : searchIndex;
    if (!list.length) { res.innerHTML='<div class="sr-empty">Илэрц олдсонгүй.</div>'; return; }
    res.innerHTML = list.slice(0,20).map(x =>
      `<a class="sr" href="${x.href}"><div class="sr-c">${x.c}</div><div class="sr-t">${x.t}</div><div class="sr-d">${x.d}</div></a>`
    ).join('');
  }

  if (btn) btn.onclick = open;
  x.onclick = close;
  ov.onclick = e => { if (e.target === ov) close(); };
  inp.oninput = e => render(e.target.value);
}

function initInfoModal() {
  const modal = document.getElementById('infoModal');
  const x = document.getElementById('infoX');
  const cta = document.getElementById('iCta');
  if (!modal) return;
  let ctaHref = 'contact.html';

  window.openInfo = function(o) {
    document.getElementById('iCat').textContent = o.cat;
    document.getElementById('iTitle').textContent = o.title;
    document.getElementById('iMeta').textContent = o.meta || '';
    document.getElementById('iBody').innerHTML = o.body;
    cta.textContent = o.ctaLabel;
    ctaHref = o.ctaHref;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function close() { modal.classList.remove('open'); document.body.style.overflow=''; }
  x.onclick = close;
  modal.onclick = e => { if (e.target===modal) close(); };
  cta.onclick = () => { close(); window.location.href = ctaHref; };
}

window.openNews = function(i) {
  const n = news[i];
  openInfo({cat:'Мэдээ · '+n.d, title:n.t, meta:'',
    body:`<p style="margin-bottom:14px">${n.p}</p><p style="color:var(--muted)">Дэлгэрэнгүй мэдээллийг Гэрээ Группын мэдээллийн албанаас авах боломжтой.</p>`,
    ctaLabel:'Бусад мэдээ', ctaHref:'news.html'});
};
window.openJob = function(i) {
  const j = jobs[i];
  openInfo({cat:'Нээлттэй ажлын байр', title:j.t, meta:j.c,
    body:`<p style="margin-bottom:14px">Гэрээ Группын ${j.c.split('·')[0].trim()} нэгжид дээрх албан тушаалд ажиллах хүнийг сонгон шалгаруулж байна.</p>
    <h4 style="font-family:'Oswald';text-transform:uppercase;letter-spacing:1px;font-size:14px;color:var(--copper);margin:10px 0 8px">Тавигдах шаардлага</h4>
    <ul class="prod"><li><div class="pt">Мэргэжлийн боловсрол, туршлага</div></li><li><div class="pt">Бүтээлч сэтгэлгээ, санаачилга</div></li><li><div class="pt">Багаар ажиллах чадвар</div></li></ul>`,
    ctaLabel:'Анкет илгээх', ctaHref:'contact.html'});
};
window.openProc = function(i) {
  const p = proc[i];
  openInfo({cat:'Нийлүүлэгч хайж байна', title:p.t, meta:p.c,
    body:`<p style="margin-bottom:14px">Энэхүү үйлчилгээнд оролцох нийлүүлэгчид материалаа заасан хугацаанд ирүүлнэ үү.</p>
    <p style="color:var(--muted)">Дэлгэрэнгүй мэдээлэл болон гэрээний нөхцөлийн талаар бидэнтэй шууд холбогдоно уу.</p>`,
    ctaLabel:'Холбогдох', ctaHref:'contact.html'});
};

function initDelegatedClicks() {
  document.addEventListener('click', e => {
    const nw = e.target.closest('[data-news]');
    if (nw) { openNews(+nw.dataset.news); return; }
    const li = e.target.closest('[data-list]');
    if (li) { li.dataset.list==='jobs' ? openJob(+li.dataset.idx) : openProc(+li.dataset.idx); return; }
  });
}

function initFaq() {
  document.querySelectorAll('.faq .item').forEach(it => {
    const q = it.querySelector('.q');
    if (q) q.onclick = () => it.classList.toggle('open');
  });
}

function initContactForm() {
  const btn = document.getElementById('f-send');
  if (!btn) return;
  btn.onclick = () => {
    const name  = document.getElementById('f-name');
    const email = document.getElementById('f-email');
    const subj  = document.getElementById('f-subj');
    const msg   = document.getElementById('f-msg');
    const err   = document.getElementById('formErr');
    const ok    = document.getElementById('formOk');
    [name,email,subj,msg].forEach(el => el.style.borderColor='');
    const problems = [];
    if (!name.value.trim())  { problems.push('нэр');   name.style.borderColor='#c0392b'; }
    const em = email.value.trim();
    if (!em) { problems.push('и-мэйл'); email.style.borderColor='#c0392b'; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { problems.push('зөв и-мэйл'); email.style.borderColor='#c0392b'; }
    if (!msg.value.trim()) { problems.push('зурвас'); msg.style.borderColor='#c0392b'; }
    if (problems.length) {
      err.textContent = 'Дараахыг бөглөнө үү: ' + problems.join(', ') + '.';
      err.style.display='block'; ok.style.display='none';
      err.scrollIntoView({behavior:'smooth',block:'center'}); return;
    }
    err.style.display='none'; ok.style.display='block';
    [name,email,subj,msg].forEach(el => el.value='');
    ok.scrollIntoView({behavior:'smooth',block:'center'});
  };
}

function initKeyboard() {
  addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    document.getElementById('modal')?.classList.remove('open');
    document.getElementById('infoModal')?.classList.remove('open');
    document.getElementById('searchOv')?.classList.remove('open');
    document.getElementById('mobileMenu')?.classList.remove('open');
    document.getElementById('burger')?.classList.remove('open');
    document.body.style.overflow = '';
  });
}

// ==================== MAIN INIT ====================
function initAll() {
  renderNav();
  renderFooter();
  renderModals();
  initMobileMenu();
  initSearch();
  initInfoModal();
  initDelegatedClicks();
  initKeyboard();
}
