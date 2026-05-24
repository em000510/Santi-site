import { useState } from 'react'
import PuzzleGame from '../components/PuzzleGame'

const FACTS = [
  {
    animal: 'Акулы',
    emoji: '🦈',
    gifSrc: '/gifs/shark.gif',
    gradient: 'from-slate-500 to-blue-700',
    cardBg: 'bg-slate-50',
    accent: '#3b82f6',
    fact: 'Акулы существуют на Земле более 450 миллионов лет — они старше динозавров! Скелет акулы полностью состоит из хряща, а не костей. За всю жизнь акула может потерять тысячи зубов — и каждый раз вырастает новый ряд.',
  },
  {
    animal: 'Морские черепахи',
    emoji: '🐢',
    gifSrc: '/gifs/turtle.gif',
    gradient: 'from-green-400 to-teal-600',
    cardBg: 'bg-green-50',
    accent: '#10b981',
    fact: 'Морские черепахи всегда возвращаются на тот самый пляж, где родились сами — даже после тысяч километров пути. Они могут задержать дыхание под водой на 7 часов! Некоторые черепахи живут более 100 лет.',
  },
  {
    animal: 'Медузы',
    emoji: '🪼',
    gifSrc: '/gifs/jellyfish.gif',
    gradient: 'from-violet-400 to-pink-500',
    cardBg: 'bg-purple-50',
    accent: '#8b5cf6',
    fact: 'Медузы появились более 500 миллионов лет назад — задолго до динозавров. У них нет мозга, сердца и костей: они на 95% состоят из воды! Некоторые виды медуз светятся в тёмной воде, как живые фонарики.',
  },
]

export default function GamePage() {
  const [phase, setPhase] = useState('intro') // intro | game | win

  return (
    <div className="min-h-screen font-nunito bg-gradient-to-b from-ocean-900 via-ocean-800 to-cyan-700 pt-20">
      {phase === 'intro' && <IntroScreen onStart={() => setPhase('game')} />}
      {phase === 'game' && <PuzzleGame onWin={() => setPhase('win')} />}
      {phase === 'win' && <WinScreen onReplay={() => setPhase('intro')} />}
    </div>
  )
}

/* ── Intro ────────────────────────────────────────────────────────── */
function IntroScreen({ onStart }) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center overflow-hidden">
      {/* Decorative bubbles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10 pointer-events-none"
          style={{
            width: 20 + (i * 17) % 60,
            height: 20 + (i * 17) % 60,
            left: `${(i * 23 + 5) % 95}%`,
            top: `${(i * 31 + 10) % 90}%`,
            animation: `float ${2.5 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${(i * 0.4) % 2}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-md">
        <img
          src="/gifs/Santi.gif"
          alt="Санти"
          className="w-64 h-64 object-contain mx-auto drop-shadow-2xl"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextElementSibling.style.display = 'flex'
          }}
        />
        <div
          style={{ display: 'none' }}
          className="w-64 h-64 mx-auto rounded-3xl bg-white/20 flex items-center justify-center text-9xl"
        >
          🐧
        </div>

        <h1 className="text-5xl font-black text-white mt-6 mb-3 drop-shadow-lg">Мини-игра!</h1>
        <p className="text-white/75 text-lg leading-relaxed mb-8">
          Помоги Санти собрать пазл! Расставь все кусочки на свои места —
          и узнай интересные факты о морских обитателях 🌊
        </p>
        <button
          onClick={onStart}
          className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-black text-xl px-12 py-5 rounded-3xl shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95"
          style={{ boxShadow: '0 0 40px rgba(250,204,21,0.4)' }}
        >
          🧩 Собери пазл!
        </button>
      </div>
    </div>
  )
}

/* ── Win screen ────────────────────────────────────────────────────── */
function WinScreen({ onReplay }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <div className="text-7xl mb-4 animate-bounce">🎉</div>
        <h1 className="text-5xl font-black text-white mb-4 drop-shadow-lg">Ты молодец!</h1>
        <p className="text-white/75 text-lg max-w-xl mx-auto">
          Пазл собран! Санти очень рад. А теперь — интересные факты о жителях океана:
        </p>
      </div>

      {/* Facts grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {FACTS.map((f, i) => (
          <div
            key={f.animal}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-300"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {/* Image/gif area */}
            <div className={`bg-gradient-to-br ${f.gradient} p-6 flex flex-col items-center gap-3`}>
              <div className="w-32 h-32 rounded-2xl overflow-hidden bg-white/20 flex items-center justify-center shadow-inner">
                <img
                  src={f.gifSrc}
                  alt={f.animal}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback when gif missing */}
                <div
                  style={{ display: 'none' }}
                  className="w-full h-full flex items-center justify-center text-6xl"
                >
                  {f.emoji}
                </div>
              </div>
              <h3 className="text-2xl font-black text-white">{f.animal}</h3>
              <span className="text-3xl">{f.emoji}</span>
            </div>

            {/* Fact text */}
            <div className={`${f.cardBg} p-6`}>
              <p className="text-ocean-700 text-sm leading-relaxed">{f.fact}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Replay */}
      <div className="text-center">
        <button
          onClick={onReplay}
          className="bg-white hover:bg-ocean-50 text-ocean-700 font-black text-lg px-10 py-4 rounded-3xl shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
        >
          🔄 Играть снова
        </button>
      </div>
    </div>
  )
}
