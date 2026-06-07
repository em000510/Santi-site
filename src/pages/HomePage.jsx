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

  const base = import.meta.env.BASE_URL
  return (
    <div className="font-nunito">
      {/* HERO fixed */}
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

        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/30 via-transparent to-ocean-900/60" />

        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 w-full md:w-1/2">
          <div className="flex flex-col items-center text-center w-full relative left-[2cm]">
            <p className="text-lg font-bold uppercase tracking-widest opacity-80 mb-3">
              Знакомьтесь — семья
            </p>
            <img
              src={`${base}images/main_logo.png`}
              alt="САНТИ"
              className="w-auto h-28 md:h-44 lg:h-52 drop-shadow-2xl"
            />
            <p className="text-xl md:text-2xl font-semibold mt-5 opacity-90 drop-shadow">
              Рыбка, которую любят дети 🐟
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-xs font-semibold uppercase tracking-widest">Листай вниз</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="h-screen" />

      <div className="relative z-20">
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
                Рыба, которую дети действительно едят с удовольствием.
              </h2>
              <p className="text-ocean-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Мы создали продукт, который помогает легко добавить рыбу в ежедневный рацион ребенка — вкусно, удобно и без лишних компромиссов.
              </p>
            </div>

            {/* Family block (без кнопки) */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
              <div className="flex-1 flex justify-center">
                <img
                  src={`${base}images/main_family.png`}
                  alt="Семья Санти"
                  className="w-full max-w-sm drop-shadow-2xl"
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
                <p className="text-ocean-700 text-lg leading-relaxed">
                  Нежные рыбные наггетсы из настоящего филе минтая в хрустящей золотистой панировке — это любимый детьми формат и польза, которой доверяют родители.
                </p>
                <p className="text-ocean-700 text-lg leading-relaxed">
                  Мягкий вкус, удобная форма и отсутствие косточек делают знакомство с рыбой легким и позитивным с первых кусочков.
                </p>
                {/* Кнопка удалена отсюда */}
              </div>
            </div>

            {/* Легенда бренда (белый фон + кнопка) */}
            <div className="mb-24 bg-white rounded-3xl shadow-lg border border-ocean-100 overflow-hidden">
              <div className="bg-gradient-to-r from-ocean-500 to-cyan-500 px-8 py-4">
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  <span>🐧📖</span> Легенда бренда «Санти»
                </h3>
              </div>
              <div className="p-8">
                <p className="text-ocean-700 text-lg leading-relaxed mb-8">
                  В далёком морозном крае жил энергичный пингвинёнок Санти, мечтавший о путешествиях и дружбе. 
                  Вместе с мамой Санни и папой Тишей, изобретателем, он решил создать полезную и вкусную еду для детей — 
                  рыбные полуфабрикаты в виде морских животных. Чтобы доставлять их по миру, Тиша построил чудо-корабль, 
                  и с тех пор их путешествия были полны радостных встреч и открытий. Так появился бренд «Санти» — 
                  символ дружбы, заботы и семейного тепла, приносящий детям здоровье и весёлое настроение.
                </p>
                <Link
                  to="/family"
                  className="inline-block bg-ocean-500 hover:bg-ocean-600 text-white font-black px-8 py-3.5 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-xl"
                >
                  Познакомиться с семьёй →
                </Link>
              </div>
            </div>

            {/* Benefits */}
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

            {/* Fish + CTA */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-5">
                <h3 className="text-3xl font-black text-ocean-800">Только лучшая рыба! 🌊</h3>
                <p className="text-ocean-700 text-lg leading-relaxed">
                  В составе — качественное рыбное филе, цельнозерновая мука, натуральные специи и витамины, необходимые растущему организму. Без искусственных добавок — только понятные ингредиенты и вкус, который нравится детям.
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
                  src={`${base}images/main_fish.png`}
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
      </div>
    </div>
  )
}
