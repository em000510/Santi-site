import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const BENEFITS = [
  {
    icon: '🐟',
    title: 'Источник белка и Омега-3',
    desc: 'Для энергии, роста и развития',
    color: 'bg-cyan-500',
  },
  {
    icon: '🌿',
    title: 'Из настоящего рыбного филе',
    desc: 'Нежная текстура и мягкий вкус',
    color: 'bg-teal-500',
  },
  {
    icon: '✅',
    title: 'Без косточек',
    desc: 'Комфортно и безопасно для детей',
    color: 'bg-green-500',
  },
  {
    icon: '💊',
    title: 'С витаминами и минералами',
    desc: 'Поддержка активного детства каждый день',
    color: 'bg-violet-500',
  },
  {
    icon: '⭐',
    title: 'Любимый формат детей',
    desc: 'Хрустящие наггетсы, которые легко полюбить',
    color: 'bg-yellow-500',
  },
]

const PRODUCTS = [
  {
    name: 'Рыбные наггетсы',
    description:
      'Весёлые фигурки в форме в форме рыбок, звездочек и сердечек. Делают обед игрой: дети едят с удовольствием и просят ещё.',
    detail: 'Для детей · Фигурные формы · Рыбное филе · Без костей',
    gradient: 'from-amber-400 to-orange-500',
    iconBg: 'bg-amber-100',
  },
  {
    name: 'Филе в панировке',
    description:
      'Цельный кусочек рыбного филе в хрустящей золотистой панировке. Сочное внутри, без лишнего — для тех, кто ценит настоящий вкус рыбы.',
    detail: 'Для подростков и взрослых · Классическая форма · Рыбное филе · Без костей',
    gradient: 'from-cyan-400 to-blue-500',
    iconBg: 'bg-cyan-100',
  },
]

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const vh = typeof window !== 'undefined' ? window.innerHeight : 800
  const heroProgress = Math.min(scrollY / (vh * 0.6), 1)
  const heroOpacity = 1 - heroProgress
  const heroScale = 1 - heroProgress * 0.08

  const base = import.meta.env.BASE_URL;
  return (
    <div className="font-nunito">
      {/* ── HERO (fixed, fades on scroll) ─────────────────────────────── */}
      <div
        className="fixed inset-0 z-10 pointer-events-none overflow-hidden"
        style={{
          opacity: heroOpacity,
          transform: `scale(${heroScale})`,
          willChange: 'opacity, transform',
        }}
      >
        <img
          src={`${base}gifs/main_hero.gif`}
          alt="Санти"
          className="absolute top-0 right-0 bottom-0 w-full sm:w-2/3 lg:w-1/2 h-full object-cover"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/30 via-transparent to-ocean-900/60" />

        {/* Hero text */}
         <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 w-full md:w-1/2">
         {/* Внутренний контейнер, который центрирует строки относительно «САНТИ» */}
           <div className="flex flex-col items-center text-center w-full relative left-[1cm]">
               <p className="text-lg font-bold uppercase tracking-widest opacity-80 mb-3">
                 Знакомьтесь — семья
               </p>
               <h1 className="text-8xl md:text-[10rem] font-black leading-none drop-shadow-2xl">
                 САНТИ
               </h1>
               <p className="text-xl md:text-2xl font-semibold mt-5 opacity-90 drop-shadow">
                 Рыбка, которую любят дети 🐟
               </p>
             </div>
           </div>
        
        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-xs font-semibold uppercase tracking-widest">Листай вниз</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Spacer behind fixed hero */}
      <div className="h-screen" />

      {/* ── MAIN CONTENT ──────────────────────────────────────────────── */}
      <div className="relative z-20">
        {/* Ocean wave transition */}
        <div className="bg-ocean-900">
          <svg viewBox="0 0 1440 90" className="block w-full" preserveAspectRatio="none">
            <path
              d="M0,60 C240,20 480,90 720,50 C960,10 1200,80 1440,50 L1440,90 L0,90 Z"
              fill="#f0f9ff"
            />
          </svg>
        </div>

        <div className="bg-ocean-50">
          <div className="max-w-5xl mx-auto px-6 pb-24 pt-6">
            {/* About headline */}
            <div className="text-center mb-16">
              <span className="inline-block bg-yellow-400 text-yellow-900 font-black text-sm px-4 py-1.5 rounded-full mb-5">
                🌊 Прямо из океана — на твой стол
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-ocean-900 mb-5 leading-tight">
                Рыбка от семьи Санти
              </h2>
              <p className="text-ocean-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Пингвины знают толк в рыбе! Семья Санти выбирает только самые свежие морепродукты,
                чтобы любимые наггетсы и филешки были вкусными и полезными.
              </p>
            </div>

            {/* Family block */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
              <div className="flex-1 flex justify-center">
                <img
                  src={`${base}images/main_family.png`}
                  alt="Семья Санти"
                  className="w-full max-w-sm drop-shadow-2xl animate-float"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div
                  style={{ display: 'none' }}
                  className="w-72 h-72 rounded-3xl bg-gradient-to-br from-cyan-300 to-blue-400 flex items-center justify-center text-9xl shadow-2xl"
                >
                  🐧
                </div>
              </div>

              <div className="flex-1 space-y-5">
                <h3 className="text-3xl font-black text-ocean-800">Привет, я Санти! 👋</h3>
                <p className="text-ocean-700 text-lg leading-relaxed">
                  Мы — пингвины, а пингвины — лучшие рыбные эксперты на планете! Наша семья живёт
                  у самого синего океана и каждый день выбирает для вас самую свежую, сочную рыбку.
                </p>
                <p className="text-ocean-700 text-lg leading-relaxed">
                  Наши наггетсы и филешки готовятся с любовью, чтобы каждый обед был маленьким
                  праздником за столом!
                </p>
                <Link
                  to="/family"
                  className="inline-block bg-ocean-500 hover:bg-ocean-600 text-white font-black px-8 py-3.5 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-xl"
                >
                  Познакомиться с семьёй →
                </Link>
              </div>
            </div>

            {/* Products */}
            <h2 className="text-4xl font-black text-ocean-900 text-center mb-10">
              Наши продукты 🍽️
            </h2>

            <div className="grid md:grid-cols-2 gap-7 mb-24">
              {PRODUCTS.map((p) => (
                <div
                  key={p.name}
                  className="rounded-3xl overflow-hidden bg-white shadow-md border border-ocean-100"
                >
                  {/* Цветная полоска сверху */}
                  <div className={`h-2 bg-gradient-to-r ${p.gradient}`} />
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-2xl ${p.iconBg} flex items-center justify-center text-4xl mb-5`}>
                      {p.emoji}
                    </div>
                    <h3 className="text-2xl font-black text-ocean-900 mb-3">{p.name}</h3>
                    <p className="text-ocean-600 text-base leading-relaxed mb-5">{p.description}</p>
                    <p className="text-xs font-bold text-ocean-400 uppercase tracking-wider">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Benefits ──────────────────────────────────────────── */}
            <div className="mb-24 -mx-6 px-6 py-16 bg-gradient-to-br from-ocean-900 to-ocean-700 rounded-3xl">
              <div className="text-center mb-10">
                <span className="inline-block bg-white/15 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                  🌊 Почему Санти?
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  5 причин выбрать нас
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {BENEFITS.map((b) => (
                  <div
                    key={b.title}
                    className="flex flex-col items-center text-center gap-3 bg-white/10 hover:bg-white/20 rounded-2xl p-5 transition-all duration-200 hover:scale-105 cursor-default"
                  >
                    <div className={`${b.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                      {b.icon}
                    </div>
                    <div>
                      <p className="text-white font-black text-sm leading-snug mb-1">{b.title}</p>
                      <p className="text-white/60 text-xs leading-snug">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fish + CTA block */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-5">
                <h3 className="text-3xl font-black text-ocean-800">Только лучшая рыба! 🌊</h3>
                <p className="text-ocean-700 text-lg leading-relaxed">
                  Мы используем только натуральное рыбное филе без лишних добавок. Богато белком,
                  омега-3 и витаминами — всё, что нужно для здорового роста и хорошего настроения.
                </p>
                <Link
                  to="/game"
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-black px-8 py-3.5 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-xl"
                >
                  🧩 Играть!
                </Link>
              </div>

              <div className="flex-1 flex justify-center">
                <img
                  src={`${base}/images/main_fish.png`}
                  alt="Рыбные продукты"
                  className="w-full max-w-sm drop-shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div
                  style={{ display: 'none' }}
                  className="w-72 h-72 rounded-3xl bg-gradient-to-br from-yellow-200 to-orange-300 flex items-center justify-center text-9xl shadow-2xl"
                >
                  🐠
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-ocean-900 text-white py-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <img
              src={`${base}/images/main_logo.png`}
              alt="Санти"
              className="h-9 w-auto"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
          <p className="text-ocean-400 text-sm">
            © 2026 Санти. Рыбка, которую любят дети 🐟 Зарецкая Дарья, ЭМ-5
          </p>
        </footer>
      </div>
    </div>
  )
}
