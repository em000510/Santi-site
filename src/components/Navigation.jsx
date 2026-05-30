import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Главная' },
  { to: '/family', label: 'Семья Санти' },
  { to: '/game', label: 'Играть!' },
]

export default function Navigation() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      setVisible(true)
      return
    }

    setVisible(false)

    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.3)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="bg-white/90 backdrop-blur-md shadow-lg border-b border-ocean-100">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={`${base}/images/main_logo.png`}
              alt="Санти"
              className="h-9 w-auto group-hover:scale-110 transition-transform duration-200"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </Link>

          <div className="flex gap-6">
            {LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-bold text-sm transition-all duration-200 hover:text-ocean-500 pb-0.5 ${
                  location.pathname === to
                    ? 'text-ocean-500 border-b-2 border-ocean-400'
                    : 'text-ocean-800'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
