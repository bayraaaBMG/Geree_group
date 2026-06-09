'use strict';

// ==================== DATA ====================
const ic = {
  coal:    '<path d="M3 14l4-7 5 3 4-4 5 5v8H3z"/><circle cx="8" cy="16" r="1"/><circle cx="14" cy="15" r="1"/>',
  copper:  '<path d="M12 2l8 4.5v9L12 20l-8-4.5v-9z"/><path d="M12 2v18M4 6.5l16 9M20 6.5l-16 9"/>',
  logi:    '<rect x="1" y="6" width="13" height="10"/><path d="M14 9h4l3 3v4h-7z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  energy:  '<path d="M13 2L4 14h6l-1 8 9-12h-6z"/>',
  build:   '<path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6M3 12l9 5 9-5"/>',
  explore: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/>',
  machine: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  green:   '<path d="M12 22V11M12 11c0-5 4-8 9-8 0 6-4 8-9 8zM12 14c0-3-3-6-8-6 0 4 3 6 8 6z"/>'
};

const subs = [
  {ic:'coal',   sec:'Олборлолт',     name:'Хүдэр Коал',         y:'2001', emp:'2,100', loc:'Өмнөговь',    long:'Группын хамгийн том охин компани. Коксжих болон эрчим хүчний нүүрсний олборлолт, баяжуулалт, экспорт.',
   prod:[{t:'Коксжих нүүрс — жилд 8 сая тонн',d:'Гадаад зах зээлд экспортолдог өндөр чанарын коксжих нүүрсний олборлолт, баяжуулалт.'},{t:'Эрчим хүчний нүүрс — жилд 4 сая тонн',d:'Дотоодын цахилгаан станц, үйлдвэрүүдэд тогтмол найдвартай нийлүүлдэг.'},{t:'Баяжуулсан нүүрсний экспорт',d:'Хилийн боомтоор дамжуулан Ази тивийн зах зээлд хүргэдэг.'},{t:'Уурхайн нөхөн сэргээлт',d:'Олборлолт явуулсан талбайг үе шаттайгаар нөхөн сэргээдэг.'}]},
  {ic:'copper', sec:'Олборлолт',     name:'Хүдэр Коппер',       y:'2006', emp:'1,450', loc:'Дорноговь',    long:'Зэс, алтны хүдрийн хайгуул, олборлолт болон орчин үеийн баяжуулах үйлдвэрт боловсруулалт.',
   prod:[{t:'Зэсийн баяжмал — жилд 320,000 тонн',d:'Өндөр агуулгатай зэсийн баяжмал үйлдвэрлэж экспортолдог.'},{t:'Алтны баяжмал',d:'Зэстэй хамт олборлогдох алтыг баяжуулан ялгадаг.'},{t:'Хүдрийн нөөцийн үнэлгээ',d:'Орд газрын нөөцийг олон улсын стандартаар тооцдог.'},{t:'Геотехникийн судалгаа',d:'Уурхайн тогтвортой, аюулгүй ажиллагааг хангах судалгаа.'}]},
  {ic:'logi',   sec:'Логистик',      name:'Хүдэр Лоджистикс',   y:'2009', emp:'780',   loc:'Улаанбаатар', long:'Уурхайгаас хилийн боомт хүртэлх авто, төмөр замын нэгдсэн тээвэр логистикийн сүлжээ.',
   prod:[{t:'Авто замын ачаа тээвэр',d:'Хүнд даацын машинаар уурхайн бүтээгдэхүүнийг тээвэрлэдэг.'},{t:'Төмөр замын тээвэр зохицуулалт',d:'Том хэмжээний ачааг төмөр замаар найдвартай хүргэдэг.'},{t:'Хилийн боомтын логистик',d:'Гаалийн бүрдүүлэлт, боомтын үйл ажиллагааг зохицуулдаг.'},{t:'Агуулах, нөөцийн менежмент',d:'Бараа материалын хадгалалт, түгээлтийг удирддаг.'}]},
  {ic:'energy', sec:'Эрчим хүч',     name:'Хүдэр Энержи',       y:'2013', emp:'410',   loc:'Өмнөговь',    long:'Уурхайн эрчим хүчний хангамж, нар салхины сэргээгдэх эрчим хүчний төслүүд.',
   prod:[{t:'Цахилгаан станцын ашиглалт',d:'Уурхайн үйлдвэрлэлийн цахилгаан хэрэгцээг хангадаг.'},{t:'Сэргээгдэх эрчим хүч (нар, салхи)',d:'Нар, салхины станцаар цэвэр эрчим хүч үйлдвэрлэдэг.'},{t:'Дулааны хангамж',d:'Уурхайн орчны барилга байгууламжийн дулаан.'},{t:'Эрчим хүчний үр ашгийн шийдэл',d:'Эрчим хүчний хэрэглээг оновчтой болгох төслүүд.'}]},
  {ic:'build',  sec:'Барилга',       name:'Хүдэр Констракшн',   y:'2010', emp:'920',   loc:'Улаанбаатар', long:'Уурхайн дэд бүтэц, зам, гүүр, үйлдвэрийн байгууламжийн иж бүрэн гүйцэтгэл.',
   prod:[{t:'Уурхайн дэд бүтэц',d:'Уурхайн зам, талбай, тусгай байгууламжийн бүтээн байгуулалт.'},{t:'Авто зам, гүүр',d:'Хүнд даацын тээвэрт зориулсан зам, гүүрийн барилга.'},{t:'Үйлдвэрийн байгууламж',d:'Баяжуулах үйлдвэр, агуулах, аж ахуйн барилга.'},{t:'Инженерийн зураг төсөл',d:'Төлөвлөлтөөс ашиглалт хүртэлх инженерийн шийдэл.'}]},
  {ic:'explore',sec:'Геологи',       name:'Хүдэр Эксплорейшн',  y:'2004', emp:'260',   loc:'Хээрийн анги',long:'Геологи хайгуул, өрөмдлөг, нөөцийн үнэлгээгээр группын ирээдүйн нөөцийг бүрдүүлэгч.',
   prod:[{t:'Геологи хайгуулын өрөмдлөг',d:'Орчин үеийн өрөмдлөгийн аргаар нөөцийг тогтоодог.'},{t:'Геофизикийн судалгаа',d:'Газрын гүний бүтцийг шинжлэх дэвшилтэт судалгаа.'},{t:'Нөөцийн тооцоо, үнэлгээ',d:'Илэрсэн ордын нөөцийг олон улсын ангиллаар үнэлдэг.'},{t:'Тоон зураглал',d:'Хайгуулын мэдээллийг тоон загвар, газрын зураг болгодог.'}]},
  {ic:'machine',sec:'Техник',        name:'Хүдэр Машинери',     y:'2015', emp:'540',   loc:'Улаанбаатар', long:'Хүнд даацын уул уурхайн техник, тоног төхөөрөмжийн нийлүүлэлт, засвар, түрээс.',
   prod:[{t:'Хүнд даацын машин нийлүүлэлт',d:'Дэлхийн тэргүүлэх брэндийн уул уурхайн техник.'},{t:'Засвар, техник үйлчилгээ',d:'Тоног төхөөрөмжийн төлөвлөгөөт болон яаралтай засвар.'},{t:'Сэлбэг хэрэгсэл',d:'Албан ёсны эх сэлбэгийн нийлүүлэлт, агуулах.'},{t:'Техникийн түрээс',d:'Богино, урт хугацааны уян хатан түрээсийн нөхцөл.'}]},
  {ic:'green',  sec:'Байгаль орчин', name:'Хүдэр Грийн',        y:'2018', emp:'180',   loc:'Бүх уурхай',  long:'Газрын биологийн нөхөн сэргээлт, ойжуулалт, байгаль орчны тасралтгүй мониторинг.',
   prod:[{t:'Газрын биологийн нөхөн сэргээлт',d:'Олборлолтын дараах талбайг ургамалжуулан сэргээдэг.'},{t:'Ойжуулалт — 1.2 сая мод',d:'Орон нутагтай хамтран салхин хаалт, ой байгуулдаг.'},{t:'Усны чанарын мониторинг',d:'Гадаргын болон гүний усны байнгын хяналт, шинжилгээ.'},{t:'Экологийн нөлөөллийн үнэлгээ',d:'Төслийн байгаль орчны нөлөөллийг үнэлж, бууруулдаг.'}]}
];

const news = [
  {d:'2026.05.28', t:'Хүдэр Энержи нарны цахилгаан станцаа ашиглалтад оруулав',         p:'150 кВт хүчин чадалтай станц жилд 240 МВт.цаг цэвэр эрчим хүч үйлдвэрлэнэ.'},
  {d:'2026.05.05', t:'"Хүдэр Internship 2026" хөтөлбөрт 66 оюутан шалгарлаа',          p:'Гурван сарын турш цалинтай дадлага хийж, бодит ажлын туршлага хуримтлуулна.'},
  {d:'2026.04.09', t:'Группын 2024 оны тогтвортой хөгжлийн тайлан нийтлэгдлээ',        p:'Байгаль орчин, нийгэм, засаглалын жилийн үр дүнг танилцуулж байна.'},
  {d:'2026.03.21', t:'Хүдэр Коппер шинэ баяжуулах үйлдвэрээ нээв',                    p:'Жилд 12 сая тонн хүдэр боловсруулах хүчин чадалтай орчин үеийн үйлдвэр.'},
  {d:'2026.02.10', t:'Орон нутгийн 200 залууд тэтгэлэг олголоо',                       p:'Уул уурхайн чиглэлээр мэргэшсэн боловсон хүчин бэлтгэх хөтөлбөр.'},
  {d:'2026.01.15', t:'Группын экспорт өмнөх оноос 18% өслөө',                          p:'Нүүрс, зэсийн баяжмалын экспорт шинэ дээд хэмжээнд хүрэв.'}
];

const jobs = [
  {t:'Уурхайн инженер',         c:'Хүдэр Коал · Өмнөговь'},
  {t:'Хүний нөөцийн ажилтан',   c:'Хүдэр Холдинг · Улаанбаатар'},
  {t:'Геологич',                 c:'Хүдэр Эксплорейшн · Хээрийн анги'},
  {t:'Хүнд машины оператор',    c:'Хүдэр Машинери · Дорноговь'},
  {t:'Санхүүгийн шинжээч',      c:'Хүдэр Холдинг · Улаанбаатар'},
  {t:'Байгаль орчны мэргэжилтэн',c:'Хүдэр Грийн · Бүх уурхай'},
  {t:'Логистикийн зохицуулагч', c:'Хүдэр Лоджистикс · Улаанбаатар'},
  {t:'Цахилгааны инженер',       c:'Хүдэр Энержи · Өмнөговь'}
];

const proc = [
  {t:'Уурхайн засварын сэрээт өргөгч нийлүүлэх', c:'Хаах: 2026-06-03'},
  {t:'LED дэлгэц нийлүүлэх, суурилуулах',         c:'Хаах: 2026-06-03'},
  {t:'Сэргээгдэх эрчим хүчний тоног төхөөрөмж',   c:'Хаах: 2026-06-05'},
  {t:'Уурхайн хувцас, хамгаалалтын хэрэгсэл',     c:'Хаах: 2026-06-08'},
  {t:'Аж ахуйн зориулалтын дизель түлш',           c:'Хаах: 2026-06-10'}
];

const projects = [
  {ic:'coal',    k:'Онцлох төсөл',      t:'Тавантолгойн уурхайн өргөтгөл',  d:'Жилийн олборлолтын хүчин чадлыг 30%-иар нэмэгдүүлэх дэд бүтцийн төсөл.',      bg:'#241a10'},
  {ic:'green',   k:'Тогтвортой хөгжил', t:'Говийн ойн зурваст төсөл',       d:'Цөлжилтийг бууруулах зорилгоор 1.2 сая мод тарьж, салхин хаалт байгуулав.',    bg:'#15201a'},
  {ic:'energy',  k:'Эрчим хүч',         t:'150 кВт нарны цахилгаан станц',   d:'Жилд 240 МВт.цаг цэвэр эрчим хүч үйлдвэрлэх нарны станц.',                     bg:'#1d1b24'},
  {ic:'explore', k:'Боловсон хүчин',    t:'Хүдэр Internship хөтөлбөр',      d:'Цалинтай дадлагын хөтөлбөрт энэ жил 66 оюутан шалгарлаа.',                      bg:'#241016'}
];

const values = [
  ['Аюулгүй байдал','Хүний амь нас, эрүүл мэнд бидний бүх шийдвэрийн төвд байна.'],
  ['Хариуцлага',    'Байгаль орчин, орон нутаг, хувьцаа эзэмшигчдийн өмнө хүлээсэн үүрэг.'],
  ['Ил тод байдал', 'Олон улсын стандартын дагуу ил тод тайлагнал, засаглал.'],
  ['Шударга ёс',    'Бүх түнш, ажилтантай шударга, ёс зүйтэй харилцана.'],
  ['Тогтвортой хөгжил','Өнөөдрийн хэрэгцээг хойч үеийн боломжийг хохироохгүйгээр хангана.'],
  ['Инноваци',      'Технологийн дэвшилд тулгуурласан үр ашигтай олборлолт.']
];

const timeline = [
  ['1998','Үүсгэн байгуулагдсан','Хүдэр Групп анхны нүүрсний лицензтэйгээр үйл ажиллагаагаа эхлүүлэв.'],
  ['2004','Хайгуулын нэгж','Хүдэр Эксплорейшн байгуулагдаж, нөөцийн суурь өргөжив.'],
  ['2009','Логистикийн сүлжээ','Хүдэр Лоджистикс байгуулагдан экспортын гинжин хэлхээ бүрэн болов.'],
  ['2015','Олон улсын стандарт','ISO чанар, аюулгүй байдлын стандартыг нэвтрүүлэв.'],
  ['2018','Ногоон шилжилт','Хүдэр Грийн байгуулагдаж, нөхөн сэргээлтийг тэргүүлэх чиглэл болгов.'],
  ['2026','Дэлхийн жишиг','8 охин компанитай, 6,400 ажилтантай тэргүүлэгч холдинг.']
];

const leaders = [
  ['Б. Болд',          'Удирдах зөвлөлийн дарга',         'Группыг 25 жил тэргүүлж, олон улсын зах зээлд гаргасан.'],
  ['С. Сарантуяа',     'Гүйцэтгэх захирал',               'Стратеги, санхүүгийн удирдлагын 20 жилийн туршлагатай.'],
  ['Г. Ганбаатар',     'Үйл ажиллагаа хариуцсан захирал', 'Уул уурхайн инженер, томоохон төслүүдийг удирдсан.'],
  ['Д. Дэлгэрмаа',    'Тогтвортой хөгжил хариуцсан захирал','ESG, байгаль орчны менежментийн чиглэлээр мэргэшсэн.'],
  ['Т. Төгөлдөр',      'Хүний нөөцийн захирал',           'Байгууллагын соёл, авьяасын хөгжлийг хариуцдаг.'],
  ['Н. Наранбаатар',   'Санхүүгийн захирал',              'Корпорацийн санхүү, хөрөнгө оруулалтын мэргэжилтэн.']
];

const faqs = [
  ['Хүдэр Групп ямар чиглэлээр үйл ажиллагаа явуулдаг вэ?','Нүүрс, зэс, алтны олборлолтоос эхлээд хайгуул, тээвэр, эрчим хүч, барилга, байгаль орчны нөхөн сэргээлт хүртэлх бүрэн гинжин хэлхээг 8 охин компанийн хэлбэрээр явуулдаг.'],
  ['Хэрхэн ажилд орох вэ?','Нээлттэй ажлын байр хэсгээс сонирхсон байрандаа цахимаар анкет илгээж, сонгон шалгаруулалтын үе шатанд оролцоно.'],
  ['Нийлүүлэгчээр хэрхэн бүртгүүлэх вэ?','Худалдан авалт хэсгийн "Нийлүүлэгчээр бүртгүүлэх" хэсгээр дамжуулан байгууллагын мэдээллээ бүртгүүлнэ.'],
  ['Тогтвортой хөгжлийн тайланг хаанаас үзэх вэ?','Тогтвортой хөгжил → Тайлан хэсгээс жил бүрийн тайланг татаж авах боломжтой.'],
  ['Орон нутгийн хөгжилд ямар хувь нэмэр оруулдаг вэ?','Орон нутгийн хөгжлийн сан, тэтгэлэг, дэд бүтэц, ажлын байрны хөтөлбөрөөр дамжуулан тогтмол хувь нэмэр оруулдаг.']
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
  <a href="jobs.html">Ажлын байр</a>
  <span class="sep"></span>
  <a href="procurement.html">Худалдан авалт</a>
  <span class="sep"></span>
  <a href="contact.html">Холбоо барих</a>
</div></div>

<nav>
  <div class="wrap nav-in">
    <a href="index.html" class="logo"><span class="mark"><span>X</span></span>ХҮДЭР ГРУПП</a>
    <ul class="menu">
      <li><a href="index.html"${active(['index'])}>Нүүр</a></li>
      <li>
        <a href="about.html"${active(['about'])} >Бидний тухай <span class="caret">▼</span></a>
        <div class="dropdown">
          <a href="about.html">Группийн танилцуулга</a>
          <a href="about-values.html">Үнэт зүйлс, зарчим</a>
          <a href="about-history.html">Бидний түүх</a>
          <a href="about-leadership.html">Удирдлага</a>
          <a href="about-shareholders.html">Хувьцаа эзэмшигчид</a>
          <a href="about-ethics.html">Ёс зүйн дүрэм</a>
        </div>
      </li>
      <li><a href="business.html"${active(['business','company'])}>Бизнесийн салбар</a></li>
      <li>
        <a href="esg-report.html"${active(['esg'])}>Тогтвортой хөгжил <span class="caret">▼</span></a>
        <div class="dropdown">
          <a href="esg-report.html">Тогтвортой хөгжлийн тайлан</a>
          <a href="esg-principles.html">Баримтлах зарчим</a>
          <a href="esg-projects.html">Онцлох төслүүд</a>
        </div>
      </li>
      <li>
        <a href="news.html"${active(['news'])}>Мэдээ мэдээлэл <span class="caret">▼</span></a>
        <div class="dropdown">
          <a href="news.html">Мэдээ</a>
          <a href="news-faq.html">Түгээмэл асуулт, хариулт</a>
        </div>
      </li>
    </ul>
    <div class="nav-utils">
      <button class="icon-btn" id="searchBtn" aria-label="Хайх">
        <svg viewBox="0 0 24 24" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.4-4.4"/></svg>
      </button>
      <span class="lang" id="langBtn">EN</span>
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
  <a href="about-ethics.html" class="sub">Ёс зүйн дүрэм</a>
  <a href="business.html">Бизнесийн салбар</a>
  <a href="esg-report.html">Тогтвортой хөгжил</a>
  <a href="esg-principles.html" class="sub">Баримтлах зарчим</a>
  <a href="esg-projects.html" class="sub">Онцлох төслүүд</a>
  <a href="news.html">Мэдээ мэдээлэл</a>
  <a href="news-faq.html" class="sub">Түгээмэл асуулт</a>
  <a href="jobs.html">Ажлын байр</a>
  <a href="procurement.html">Худалдан авалт</a>
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
        <span class="foot-logo">ХҮДЭР ГРУПП</span>
        <p style="max-width:36ch">Уул уурхайн салбарт дэлхийн жишиг нэвтрүүлж, газрын баялгийг хариуцлагатайгаар ирээдүй хойч үедээ.</p>
      </div>
      <div>
        <h5>Компани</h5>
        <a href="about.html">Бидний тухай</a>
        <a href="about-history.html">Бидний түүх</a>
        <a href="about-leadership.html">Удирдлага</a>
        <a href="esg-report.html">Тогтвортой хөгжил</a>
      </div>
      <div>
        <h5>Бизнес</h5>
        <a href="business.html">Бизнесийн салбар</a>
        <a href="jobs.html">Ажлын байр</a>
        <a href="procurement.html">Худалдан авалт</a>
        <a href="news.html">Мэдээ</a>
      </div>
      <div>
        <h5>Холбоо барих</h5>
        <a href="contact.html">Санал, хүсэлт</a>
        <p>info@khuder.mn</p>
        <p>+976 7000 0000</p>
        <p>Улаанбаатар хот</p>
      </div>
    </div>
    <div class="foot-bot">
      <span>© 2026 Хүдэр Холдинг ХХК. Бүх эрх хуулиар хамгаалагдсан.</span>
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
<!-- Company modal -->
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
        <div class="mf"><div class="v" id="mEmp"></div><div class="k">Ажилтан</div></div>
        <div class="mf"><div class="v" id="mLoc"></div><div class="k">Байршил</div></div>
      </div>
      <h4>Үндсэн чиглэл</h4>
      <ul class="prod" id="mProd"></ul>
    </div>
  </div>
</div>

<!-- Info modal (news / jobs / proc) -->
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

<!-- Search overlay -->
<div class="search-ov" id="searchOv">
  <div class="search-inner">
    <button class="search-x" id="searchX">✕</button>
    <div class="search-box">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#857f74" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.4-4.4"/></svg>
      <input id="searchInput" type="text" placeholder="Хайх... (компани, мэдээ, хуудас)" autocomplete="off">
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
    ...subs.map((s,i) => ({c:'Компани', t:s.name, d:s.long, href:'company.html?id='+i})),
    ...news.map(n => ({c:'Мэдээ', t:n.t, d:n.p, href:'news.html'})),
    ...jobs.map(j => ({c:'Ажлын байр', t:j.t, d:j.c, href:'jobs.html'})),
    ...proc.map(p => ({c:'Худалдан авалт', t:p.t, d:p.c, href:'procurement.html'})),
    {c:'Хуудас', t:'Бидний тухай',              d:'Группийн танилцуулга',             href:'about.html'},
    {c:'Хуудас', t:'Бидний түүх',               d:'1998 оноос өнөөг хүртэл',          href:'about-history.html'},
    {c:'Хуудас', t:'Удирдлага',                 d:'Группын манлайлал',                href:'about-leadership.html'},
    {c:'Хуудас', t:'Үнэт зүйлс, зарчим',       d:'Эрхэм зорилго, зарчмууд',          href:'about-values.html'},
    {c:'Хуудас', t:'Хувьцаа эзэмшигчид',        d:'Эзэмшлийн бүтэц',                  href:'about-shareholders.html'},
    {c:'Хуудас', t:'Ёс зүйн дүрэм',             d:'Ёс суртахууны хэм хэмжээ',         href:'about-ethics.html'},
    {c:'Хуудас', t:'Тогтвортой хөгжлийн тайлан',d:'ESG тайлан, татах',                href:'esg-report.html'},
    {c:'Хуудас', t:'Баримтлах зарчим',          d:'Тогтвортой хөгжлийн бодлого',      href:'esg-principles.html'},
    {c:'Хуудас', t:'Онцлох төслүүд',            d:'Тэргүүлэх төслүүд',                href:'esg-projects.html'},
    {c:'Хуудас', t:'Түгээмэл асуулт',           d:'Асуулт, хариулт',                  href:'news-faq.html'},
    {c:'Хуудас', t:'Холбоо барих',              d:'Хаяг, утас, маягт',                href:'contact.html'},
    {c:'Хуудас', t:'Нууцлалын бодлого',         d:'Хувийн мэдээллийн хамгаалалт',     href:'privacy.html'},
    {c:'Хуудас', t:'Ашиглалтын нөхцөл',         d:'Сайт ашиглах нөхцөл',              href:'terms.html'}
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
    body:`<p style="margin-bottom:14px">${n.p}</p><p style="color:var(--muted)">Дэлгэрэнгүй мэдээллийг Группын хэвлэл, мэдээллийн албанаас авах боломжтой.</p>`,
    ctaLabel:'Бусад мэдээ', ctaHref:'news.html'});
};
window.openJob = function(i) {
  const j = jobs[i];
  openInfo({cat:'Нээлттэй ажлын байр', title:j.t, meta:j.c,
    body:`<p style="margin-bottom:14px">Хүдэр Группын ${j.c.split('·')[0].trim()} нэгжид дээрх албан тушаалд ажиллах хүнийг сонгон шалгаруулж байна.</p>
    <h4 style="font-family:'Oswald';text-transform:uppercase;letter-spacing:1px;font-size:14px;color:var(--copper);margin:10px 0 8px">Тавигдах шаардлага</h4>
    <ul class="prod"><li><div class="pt">Мэргэжлийн боловсрол, туршлага</div></li><li><div class="pt">Багаар ажиллах чадвар</div></li><li><div class="pt">Аюулгүй ажиллагааны зарчмыг баримтлах</div></li></ul>`,
    ctaLabel:'Анкет илгээх', ctaHref:'contact.html'});
};
window.openProc = function(i) {
  const p = proc[i];
  openInfo({cat:'Идэвхтэй худалдан авалт', title:p.t, meta:p.c,
    body:`<p style="margin-bottom:14px">Энэхүү худалдан авалтад оролцох нийлүүлэгчид материалаа заасан хугацаанд багтаан ирүүлнэ үү.</p>
    <p style="color:var(--muted)">Тендерийн баримт бичиг, шаардлагын талаар Худалдан авалтын албатай холбогдоно уу.</p>`,
    ctaLabel:'Нийлүүлэгчээр бүртгүүлэх', ctaHref:'contact.html'});
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

function initLangToggle() {
  const btn = document.getElementById('langBtn');
  if (!btn) return;
  let lang = 'MN';
  btn.onclick = () => {
    lang = lang==='MN' ? 'EN' : 'MN';
    btn.textContent = lang==='MN' ? 'EN' : 'MN';
    alert(lang==='MN' ? 'Монгол хэл идэвхтэй болсон.' : 'English version coming soon.');
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
  initLangToggle();
  initKeyboard();
}
