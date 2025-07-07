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

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold mb-6 text-gradient">Обо мне</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Я создаю визуальные истории, которые останутся в памяти
                навсегда. Каждый проект для меня — это возможность передать
                эмоции и создать что-то по-настоящему уникальное.
              </p>
              <div className="flex gap-4 mb-6">
                <div className="flex items-center gap-2 scale-hover">
                  <Icon name="Camera" className="text-blue-600" />
                  <span>Фотография</span>
                </div>
                <div className="flex items-center gap-2 scale-hover">
                  <Icon name="Edit" className="text-blue-600" />
                  <span>Контент</span>
                </div>
                <div className="flex items-center gap-2 scale-hover">
                  <Icon name="Heart" className="text-blue-600" />
                  <span>Творчество</span>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <img
                src="/img/5a82fccd-a288-43a9-9d9e-2a5178e1190b.jpg"
                alt="Профессиональная фотография"
                className="rounded-2xl shadow-2xl hover-lift float-animation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Мои направления
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/photos" className="group">
              <div className="bg-gradient-to-br from-pink-400 to-orange-600 rounded-2xl p-8 text-center hover-lift group-hover:scale-105 transition-all">
                <Icon
                  name="Camera"
                  size={48}
                  className="text-white mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Фотографии
                </h3>
                <p className="text-white/80">Профессиональная фотосъемка</p>
              </div>
            </Link>
            <Link to="/music" className="group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-center hover-lift group-hover:scale-105 transition-all">
                <Icon
                  name="Music"
                  size={48}
                  className="text-white mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">Музыка</h3>
                <p className="text-white/80">Оригинальные композиции</p>
              </div>
            </Link>
            <Link to="/video" className="group">
              <div className="bg-gradient-to-br from-red-500 to-yellow-600 rounded-2xl p-8 text-center hover-lift group-hover:scale-105 transition-all">
                <Icon
                  name="Video"
                  size={48}
                  className="text-white mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">Видео</h3>
                <p className="text-white/80">Креативные видеопроекты</p>
              </div>
            </Link>
            <Link to="/posts" className="group">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-center hover-lift group-hover:scale-105 transition-all">
                <Icon
                  name="FileText"
                  size={48}
                  className="text-white mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">Посты</h3>
                <p className="text-white/80">Мысли и наблюдения</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Давайте создадим что-то вместе
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Готов воплотить ваши идеи в жизнь. Свяжитесь со мной для обсуждения
            проектов
          </p>
          <div className="flex gap-4 justify-center">
            <div className="flex items-center gap-2 text-lg">
              <Icon name="Send" className="text-blue-400" />
              <span>email@example.com</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Icon name="Phone" className="text-green-400" />
              <span>+7 (999) 123-45-67</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
