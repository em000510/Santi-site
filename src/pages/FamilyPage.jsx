import { useState, useRef } from 'react'

const CHARACTERS = [
  {
    id: 0,
    name: 'Санни',
    role: 'Мама · Спортсменка · Нутрициолог',
    isVideo: true,
    src: '/gifs/Mother.gif',
    gradient: 'from-orange-400 to-amber-500',
    cardBg: 'bg-orange-50',
    borderColor: 'border-orange-200',
    emoji: '🏄‍♀️',
    traits: ['Смелая', 'Жизнерадостная', 'Энергичная'],
    description:
      'Заботливая мама и смелая спортсменка в одном лице. Заряжает своей энергией и оптимизмом всех вокруг. Увлекается сёрфингом и нутрициологией. Разработала рецепт вкусных и полезных рыбных наггетсов «Санти».',
    fact: 'Имя Санни значит «солнечная»',
  },
  {
    id: 1,
    name: 'Тиша',
    role: 'Папа · Изобретатель · Надёжная опора',
    isVideo: true,
    src: '/gifs/Dad.gif',
    gradient: 'from-blue-400 to-indigo-500',
    cardBg: 'bg-blue-50',
    borderColor: 'border-blue-200',
    emoji: '🔧',
    traits: ['Сильный', 'Спокойный', 'Надёжный'],
    description:
      'Папа-изобретатель с «золотыми плавниками». Готов поддержать и помочь воплотить в жизнь любую смелую идею Санни и Санти. С ним семье не страшен никакой шторм.',
    fact: 'Полное имя Тиши - Тихон. Оно значит «приносящий удачу».',
  },
  {
    id: 2,
    name: 'Санти',
    role: 'Малыш · Путешественник · Исследователь',
    isVideo: true,
    src: '/gifs/Santi.gif',
    gradient: 'from-sky-300 to-cyan-400',
    cardBg: 'bg-sky-50',
    borderColor: 'border-sky-200',
    emoji: '🌊',
    traits: ['Любопытный', 'Милый', 'Добрый'],
    description:
      'Любопытный малыш, что всегда рад новому другу. На 100% состоит из милоты. Любит путешествовать с родителями, рисовать и узнавать новое о морских обитателях.',
    fact: 'Имя Санти родители придумали, объединив свои.',
  },
]

export default function FamilyPage() {
  const base = import.meta.env.BASE_URL;
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [dir, setDir] = useState('right')

  const goTo = (idx) => {
    if (animating || idx === current) return
    setDir(idx > current ? 'right' : 'left')
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 280)
  }

  const prev = () => goTo(current === 0 ? CHARACTERS.length - 1 : current - 1)
  const next = () => goTo(current === CHARACTERS.length - 1 ? 0 : current + 1)

  const char = CHARACTERS[current]

  return (
    <div className="min-h-screen font-nunito bg-gradient-to-b from-ocean-50 to-white">
      {/* ── Hero banner ─────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-ocean-800 to-cyan-600 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-white">
            <span className="inline-block bg-white/20 text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              🐧 Наши герои
            </span>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
              Встречайте<br />
              <span className="text-yellow-300">семью Санти!</span>
            </h1>
            <p className="text-white/75 text-lg max-w-md leading-relaxed">
              Три удивительных пингвина, которые знают всё о вкусной и полезной рыбе.
              Нажимай на стрелки и знакомься с каждым!
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              src={`${base}images/lore_family.png`}
              alt="Семья Санти"
              className="h-64 md:h-72 w-auto drop-shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling.style.display = 'flex'
              }}
            />
            <div
              style={{ display: 'none' }}
              className="h-64 w-64 rounded-3xl bg-white/20 flex items-center justify-center text-8xl"
            >
              🐧🐧🐧
            </div>
          </div>
        </div>
      </div>

      {/* ── Carousel ────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-black text-ocean-800 text-center mb-12">
          Познакомься поближе ✨
        </h2>

        <div className="relative">
          {/* Card */}
          <div
            className="rounded-3xl shadow-2xl overflow-hidden transition-all duration-280"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${dir === 'right' ? '-24px' : '24px'})`
                : 'translateX(0)',
              transition: 'opacity 0.28s ease, transform 0.28s ease',
            }}
          >
            {/* Top gradient section */}
            <div className={`bg-gradient-to-r ${char.gradient} p-8`}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
               {/* Avatar */}
                <div className="flex-shrink-0">
                  {char.isVideo ? (
                    <img
                      src={`${base}${char.src.slice(1)}`}
                      alt={char.name}
                       className={`
                         ${char.id === 0 ? 'w-72 h-72' : char.id === 1 ? 'w-85 h-85' : 'w-52 h-52'}
                         object-contain
                       `}
                    />
                  ) : (
                    <>
                      <img
                        src={`${base}${char.src.slice(1)}`}
                        alt={char.name}
                        className="w-52 h-52 object-contain drop-shadow-2xl"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.nextElementSibling.style.display = 'flex'
                        }}
                      />
                      <div
                        style={{ display: 'none' }}
                        className="w-52 h-52 rounded-2xl bg-white/30 flex items-center justify-center text-8xl"
                      >
                        {char.emoji}
                      </div>
                    </>
                  )}
                </div>

                {/* Name + traits */}
                <div className="text-white flex-1 text-center sm:text-left">
                  <div className="text-5xl mb-3">{char.emoji}</div>
                  <h3 className="text-4xl font-black leading-none mb-1">{char.name}</h3>
                  <p className="text-white/75 font-semibold text-sm uppercase tracking-widest mb-5">
                    {char.role}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {char.traits.map((t) => (
                      <span
                        key={t}
                        className="bg-white/25 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom description */}
            <div className={`${char.cardBg} p-8 border-t ${char.borderColor}`}>
              <p className="text-ocean-700 text-lg leading-relaxed mb-6">{char.description}</p>
              <div className="bg-white rounded-2xl p-4 border-l-4 border-yellow-400 shadow-sm">
                <p className="text-xs font-black text-yellow-600 uppercase tracking-wider mb-1">
                  ⭐ Интересный факт
                </p>
                <p className="text-ocean-800 font-semibold leading-snug">{char.fact}</p>
              </div>
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            aria-label="Предыдущий"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full w-12 h-12 shadow-xl flex items-center justify-center text-2xl text-ocean-600 hover:bg-ocean-50 hover:scale-110 transition-all duration-200 z-10"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Следующий"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full w-12 h-12 shadow-xl flex items-center justify-center text-2xl text-ocean-600 hover:bg-ocean-50 hover:scale-110 transition-all duration-200 z-10"
          >
            ›
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {CHARACTERS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Персонаж ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-8 h-3 bg-ocean-500' : 'w-3 h-3 bg-ocean-200 hover:bg-ocean-400'
              }`}
            />
          ))}
        </div>

        {/* Mini thumbs */}
        <div className="mt-14 grid grid-cols-3 gap-4">
          {CHARACTERS.map((c, i) => (
            <button
              key={c.id}
              onClick={() => goTo(i)}
              className={`rounded-2xl p-4 text-center transition-all duration-200 bg-gradient-to-br ${c.gradient} hover:scale-105 hover:shadow-lg ${
                i === current ? 'ring-4 ring-offset-2 ring-ocean-400 shadow-lg' : 'opacity-60'
              }`}
            >
              <div className="text-3xl mb-1">{c.emoji}</div>
              <p className="text-white font-black text-xs leading-tight">{c.name}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
