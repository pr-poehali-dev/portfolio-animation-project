import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center gap-6">
            <Link
              to="/photos"
              className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors px-3 py-2 rounded-full"
            >
              <Icon name="Camera" size={20} />
              <span className="text-white font-medium">Фотографии</span>
            </Link>
            <Link
              to="/music"
              className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors px-3 py-2 rounded-full"
            >
              <Icon name="Music" size={20} />
              <span className="text-white font-medium">Музыка</span>
            </Link>
            <Link
              to="/video"
              className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors px-3 py-2 rounded-full"
            >
              <Icon name="Video" size={20} />
              <span className="text-white font-medium">Видео</span>
            </Link>
            <Link
              to="/posts"
              className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors px-3 py-2 rounded-full"
            >
              <Icon name="FileText" size={20} />
              <span className="text-white font-medium">Посты</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Gradient */}
      <section className="gradient-bg min-h-screen flex items-center justify-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Моё <span className="text-white drop-shadow-lg">Портфолио</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Добро пожаловать в мир творчества, где каждый кадр рассказывает
            историю
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
