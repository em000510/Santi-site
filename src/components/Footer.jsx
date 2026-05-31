export default function Footer() {
  const base = import.meta.env.BASE_URL
  return (
    <footer className="bg-ocean-900 text-white py-10 text-center">
      <div className="flex items-center justify-center gap-3 mb-3">
        <img
          src={`${base}images/main_logo.png`}
          alt="Санти"
          className="h-9 w-auto"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>
      <p className="text-ocean-400 text-sm">
        © 2026 Санти. Рыбка, которую любят дети 🐟 Зарецкая Дарья, ЭМ-5
      </p>
    </footer>
  )
}
