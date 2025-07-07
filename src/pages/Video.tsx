import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation Bar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors px-3 py-2 rounded-full"
            >
              <Icon name="Home" size={20} />
              <span className="text-white font-medium">Главная</span>
            </Link>
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
              className="flex items-center gap-2 cursor-pointer bg-white/30 text-yellow-300 px-3 py-2 rounded-full"
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            🎬 Видео
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90 fade-in">
            Творческие видеопроекты и профессиональный монтаж
          </p>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Короткометражка",
                duration: "15:30",
                category: "Драма",
              },
              {
                title: "Музыкальный Клип",
                duration: "3:45",
                category: "Музыка",
              },
              {
                title: "Документальный",
                duration: "42:18",
                category: "Документалистика",
              },
              { title: "Реклама", duration: "1:20", category: "Коммерция" },
              {
                title: "Свадебный Фильм",
                duration: "25:45",
                category: "События",
              },
              { title: "Корпоративный", duration: "8:30", category: "Бизнес" },
              {
                title: "Тревел-влог",
                duration: "12:15",
                category: "Путешествия",
              },
              { title: "Анимация", duration: "2:30", category: "Анимация" },
              { title: "Интервью", duration: "18:45", category: "Интервью" },
            ].map((video, index) => (
              <Card
                key={index}
                className="hover-lift bg-white/10 backdrop-blur-sm border-white/20 shadow-lg animate-fade-in"
              >
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-red-500 to-yellow-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform cursor-pointer">
                        <Icon
                          name="Play"
                          size={24}
                          className="text-white ml-1"
                        />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded px-2 py-1 text-white text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {video.title}
                      </h3>
                      <p className="text-white/80 text-sm">{video.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Services */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Видеосъемка",
                description: "Профессиональная съемка любых мероприятий",
                icon: "Camera",
              },
              {
                title: "Монтаж",
                description: "Качественная обработка и монтаж видео",
                icon: "Film",
              },
              {
                title: "Цветокоррекция",
                description: "Профессиональная цветокоррекция и грэйдинг",
                icon: "Palette",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover-lift bg-white/10 backdrop-blur-sm border-white/20 shadow-lg animate-fade-in text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon as any}
                      size={28}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
