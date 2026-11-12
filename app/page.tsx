import { ArrowDown, ArrowLeft, ArrowUpLeft, BookOpen, Check, GraduationCap, Headphones, MessageCircle, PenTool, Sparkles, Star, Video } from 'lucide-react'

const floatingLetters = [
  ['A', 'letter-a'], ['b', 'letter-b'], ['C', 'letter-c'], ['d', 'letter-d'], ['E', 'letter-e'], ['f', 'letter-f'], ['G', 'letter-g'], ['h', 'letter-h'], ['I', 'letter-i'], ['j', 'letter-j'], ['K', 'letter-k'], ['l', 'letter-l'], ['M', 'letter-m'], ['n', 'letter-n'], ['O', 'letter-o'], ['p', 'letter-p'], ['Q', 'letter-q'], ['r', 'letter-r'], ['S', 'letter-s'], ['t', 'letter-t'], ['U', 'letter-u'], ['v', 'letter-v'], ['W', 'letter-w'], ['x', 'letter-x'], ['Y', 'letter-y'], ['z', 'letter-z'],
]

const services = [
  { number: '01', title: 'تأسيس اللغة الإنجليزية', english: 'English Foundation', description: 'خطوات واضحة لبناء أساس قوي في المفردات والقواعد والنطق.', icon: BookOpen, tone: 'pink' },
  { number: '02', title: 'لكل المراحل الدراسية', english: 'All School Levels', description: 'شرح يناسب احتياجك الدراسي، من المرحلة الأولى حتى المراحل المتقدمة.', icon: GraduationCap, tone: 'mint' },
  { number: '03', title: 'طوّر مهاراتك', english: 'English Skills Development', description: 'تدريب متوازن على المحادثة والقواعد والقراءة والكتابة.', icon: Headphones, tone: 'lavender' },
]

const benefits = ['شرح مبسّط وسهل', 'دروس عن بُعد من أي مكان', 'مراعاة مستوى كل طالب', 'أنشطة وتدريبات تفاعلية', 'بيئة تعليمية مشجّعة وممتعة']

export default function Page() {
  return (
    <main className="site-shell" dir="rtl">
      <div className="floating-letters" aria-hidden="true">
        {floatingLetters.map(([letter, className]) => <span key={letter} className={className}>{letter}</span>)}
      </div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Saleha Mohammed — الرئيسية"><span className="brand-mark">S<span>.</span></span><span className="brand-name">Saleha Mohammed<small>ENGLISH EDUCATOR</small></span></a>
        <nav className="main-nav" aria-label="التنقل الرئيسي">
          <a href="#about">من أنا</a><a href="#services">الدروس</a><a href="#why">لماذا أنا؟</a><a href="#contact">تواصلي</a>
        </nav>
        <a className="header-cta" href="#contact">احجزي درسك <ArrowUpLeft size={15} /></a>
      </header>

      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> مساحتك لتعلّم الإنجليزية بثقة</div>
          <h1>مرحبًا بكم<br />في <span className="hero-highlight">عالمي التعليمي!</span></h1>
          <p className="hero-description">تعلمي اللغة الإنجليزية بطريقة ممتعة وسهلة،<br className="desktop-break" /> خطوة بخطوة… وعلى مقاسك.</p>
          <div className="hero-actions"><a href="#contact" className="button button-primary">احجزي درسك الآن <ArrowLeft size={17} /></a><a href="#about" className="button button-quiet">تعرّفي عليّ <ArrowDown size={16} /></a></div>
          <div className="hero-note"><span className="note-stars"><Star size={13} fill="currentColor"/><Star size={13} fill="currentColor"/><Star size={13} fill="currentColor"/></span><span>رحلتك مع الإنجليزية تبدأ من هنا</span></div>
        </div>
        <div className="hero-art" aria-label="تعلم الإنجليزية يبدأ بخطوة" role="img">
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
          <div className="art-sun"><span>أهلًا<br /><b>hello!</b></span></div>
          <div className="art-card art-card-top"><span className="mini-icon"><Sparkles size={18}/></span><span>Learn<br/><b>with joy</b></span></div>
          <div className="art-book"><BookOpen size={88} strokeWidth={1.2}/><span className="book-word">ABC</span></div>
          <span className="art-letter letter-hero-a">A</span><span className="art-letter letter-hero-b">b</span><span className="art-letter letter-hero-c">?</span>
          <div className="art-card art-card-bottom"><span className="mini-icon mint-icon"><Video size={18}/></span><span>LIVE<br/><b>online class</b></span></div>
          <div className="art-sparkle sparkle-one"><Star size={20} fill="currentColor"/></div><div className="art-sparkle sparkle-two"><Sparkles size={22}/></div>
          <span className="art-caption">a little progress, every day</span>
        </div>
        <div className="hero-scroll"><span>اكتشفي المزيد</span><span className="scroll-line"/></div>
      </section>

      <section id="about" className="about-section section-wrap">
        <div className="section-kicker"><span>01</span><span className="kicker-line"/> ABOUT ME</div>
        <div className="about-grid">
          <div className="about-title"><h2>الإنجليزية ليست<br/>صعبة… <span>لنبدأ معًا.</span></h2><div className="about-doodle">✳</div></div>
          <div className="about-body"><p>أنا <b>صالحة محمد علي</b>، معلمة لغة إنجليزية من مكة المكرمة. أقدّم دروسًا عن بُعد لجميع المراحل والمستويات، من المبتدئين إلى المتقدمين.</p><p>أؤمن أن تعلم اللغة يبدأ بالثقة؛ لذلك أحرص على تبسيط المفاهيم، ومرافقة كل طالب في رحلته، خطوة صغيرة بعد خطوة.</p><a href="#services" className="text-link">اكتشفي الدروس <ArrowLeft size={16}/></a></div>
          <div className="about-stamp"><PenTool size={21}/><span>Learn at<br/>your pace</span></div>
        </div>
      </section>

      <section id="services" className="services-section section-wrap">
        <div className="section-heading"><div><div className="section-kicker"><span>02</span><span className="kicker-line"/> MY LESSONS</div><h2>دروس تصنع <span>فرقًا</span></h2></div><p>من الأساسيات إلى الطلاقة،<br/>نجد معًا الطريقة المناسبة لك.</p></div>
        <div className="service-grid">{services.map(({ number, title, english, description, icon: Icon, tone }) => <article key={number} className={`service-card ${tone}`}><div className="service-top"><span className="service-number">{number} / 03</span><span className="service-icon"><Icon size={23} strokeWidth={1.7}/></span></div><div><h3>{title}</h3><p className="service-english" dir="ltr">{english}</p><p className="service-description">{description}</p></div><a href="#contact" className="card-arrow" aria-label={`استفسري عن ${title}`}><ArrowLeft size={19}/></a></article>)}</div>
      </section>

      <section id="why" className="why-section section-wrap">
        <div className="why-intro"><div className="section-kicker"><span>03</span><span className="kicker-line"/> WHY LEARN WITH ME?</div><h2>مساحة آمنة<br/>لتجربي، <span>وتتقدمي.</span></h2><p>كل متعلم له طريقته الخاصة. هنا، نحتفل بكل خطوة ونحوّل التعلّم إلى تجربة تشبهك.</p><div className="why-decoration"><span>YOU<br/>CAN!</span><Star size={18} fill="currentColor"/></div></div>
        <div className="benefit-list">{benefits.map((benefit, index) => <div className="benefit-item" key={benefit}><span className={`benefit-check check-${index + 1}`}><Check size={16}/></span><span>{benefit}</span><span className="benefit-index">0{index + 1}</span></div>)}</div>
      </section>

      <section id="contact" className="contact-section section-wrap">
        <div className="contact-card"><div className="contact-shape shape-one"/><div className="contact-shape shape-two"/><div className="contact-content"><div className="section-kicker"><span>04</span><span className="kicker-line"/> LET&apos;S BEGIN</div><h2>مستعدة لخطوتك<br/><span>الأولى؟</span></h2><p>تواصلي معي لنختار الدرس المناسب لك.</p><a className="button button-dark" href="https://wa.me/9665XXXXXXXX" target="_blank" rel="noreferrer"><MessageCircle size={18}/> احجزي درسك عبر واتساب <ArrowLeft size={17}/></a><div className="contact-details"><div><span>الاسم</span><b>Saleha Mohammed</b></div><div><span>الموقع</span><b>Makkah, Saudi Arabia</b></div><div><span>نوع الدروس</span><b>Online Classes</b></div><div><span>واتساب</span><b dir="ltr">+966 5X XXX XXXX</b></div></div></div><div className="contact-art" aria-hidden="true"><div className="contact-circle"><span className="contact-abc">ABC</span><BookOpen size={102} strokeWidth={1.2}/><span className="contact-hello">hello!</span></div><div className="contact-star"><Star size={28} fill="currentColor"/></div></div></div>
      </section>

      <footer className="site-footer section-wrap"><a className="footer-brand" href="#home">Saleha<span>.</span></a><p>Learning English opens doors to new opportunities.</p><a href="#home" className="back-top">العودة للأعلى ↑</a><div className="footer-bottom"><span>© {new Date().getFullYear()} Saleha Mohammed</span><span>Made with care in Makkah <span className="footer-heart">✳</span></span><a href="https://wa.me/9665XXXXXXXX" target="_blank" rel="noreferrer">Get in touch</a></div></footer>
    </main>
  )
}
