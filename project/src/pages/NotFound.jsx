export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030305] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-brand-normal mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl text-white mb-6">Страница не найдена</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          К сожалению, запрашиваемая страница не существует или была перемещена
        </p>
        <a 
          href="/" 
          className="inline-block bg-brand-normal hover:bg-[#C11A1A] text-white font-semibold py-3 px-8 rounded-[10px] transition-colors duration-300"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  );
}