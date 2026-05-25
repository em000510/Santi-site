import { useState, useCallback } from 'react'

const GRID = 3
const PIECE_PX = 150

function shuffle(arr) {
  let a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function makePieces() {
  let pieces
  do {
    pieces = shuffle(Array.from({ length: GRID * GRID }, (_, i) => i))
  } while (pieces.every((v, i) => v === i))
  return pieces
}

export default function PuzzleGame({ onWin }) {
  const base = import.meta.env.BASE_URL;
  const [pieces, setPieces] = useState(makePieces)
  const [selected, setSelected] = useState(null)
  const [moves, setMoves] = useState(0)
  const [won, setWon] = useState(false)

  const handleClick = useCallback(
    (idx) => {
      if (won) return

      if (selected === null) {
        setSelected(idx)
        return
      }

      if (selected === idx) {
        setSelected(null)
        return
      }

      const next = [...pieces]
      ;[next[selected], next[idx]] = [next[idx], next[selected]]
      setPieces(next)
      setMoves((m) => m + 1)
      setSelected(null)

      if (next.every((v, i) => v === i)) {
        setWon(true)
        setTimeout(() => onWin(), 1200)
      }
    },
    [pieces, selected, won, onWin],
  )

  const reset = () => {
    setPieces(makePieces())
    setSelected(null)
    setMoves(0)
    setWon(false)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2 drop-shadow-lg">Собери пазл!</h2>
        <p className="text-white/70 text-sm">
          Нажми на кусочек, потом на другой — они поменяются местами
        </p>
        <p className="text-yellow-300 font-black text-lg mt-1">Ходов: {moves}</p>
      </div>

      {/* Reference thumbnail */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">Образец:</span>
        <img
         src={`${base}images/puzzle_puzzle.png`}
          alt="Образец пазла"
          className="w-16 h-16 rounded-lg object-cover border-2 border-white/30 shadow-lg"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>

      {/* Grid */}
      <div
        className={`rounded-2xl p-1.5 shadow-2xl transition-all duration-500 ${
          won ? 'bg-green-400/40 ring-4 ring-green-400 scale-105' : 'bg-white/10'
        }`}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${GRID}, ${PIECE_PX}px)`,
          gap: '4px',
        }}
      >
        {pieces.map((pieceIdx, gridIdx) => {
          const srcCol = pieceIdx % GRID
          const srcRow = Math.floor(pieceIdx / GRID)
          const isSelected = selected === gridIdx
          const isCorrect = won

          return (
            <div
              key={gridIdx}
              onClick={() => handleClick(gridIdx)}
              className={`relative rounded-lg overflow-hidden cursor-pointer select-none transition-all duration-150 ${
                isSelected
                  ? 'ring-4 ring-yellow-400 scale-[0.92] shadow-yellow-400/60 shadow-lg brightness-110'
                  : 'hover:brightness-110 hover:scale-[0.96]'
              } ${isCorrect ? 'ring-2 ring-green-300' : ''}`}
              style={{
                width: PIECE_PX,
                height: PIECE_PX,
                backgroundImage: `url(${base}images/puzzle_puzzle.png)`,
                backgroundSize: `${GRID * 100}% ${GRID * 100}%`,
                backgroundPosition: `${srcCol * (100 / (GRID - 1))}% ${srcRow * (100 / (GRID - 1))}%`,
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Overlay on win */}
              {won && (
                <div className="absolute inset-0 bg-green-400/20 flex items-center justify-center">
                  <span className="text-xl drop-shadow">✓</span>
                </div>
              )}
              {/* Piece number (subtle hint) */}
              <span className="absolute bottom-1 right-1 text-white/30 text-[10px] font-bold select-none">
                {gridIdx + 1}
              </span>
            </div>
          )
        })}
      </div>

      {won && (
        <div className="mt-8 text-center animate-fade-in">
          <div className="text-5xl mb-2">🎉</div>
          <p className="text-2xl font-black text-white drop-shadow-lg">
            Отлично! Пазл собран!
          </p>
          <p className="text-white/70 mt-1">за {moves} ходов</p>
        </div>
      )}

      <button
        onClick={reset}
        className="mt-7 bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-2.5 rounded-2xl transition-all duration-200 hover:scale-105 text-sm"
      >
        🔄 Перемешать заново
      </button>

      {/* Instruction hint */}
      {selected !== null && !won && (
        <p className="mt-4 text-yellow-300 font-bold text-sm animate-pulse">
          Теперь нажми на другой кусочек, чтобы поменять их местами
        </p>
      )}
    </div>
  )
}
