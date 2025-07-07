import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Music = () => {
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
              className="flex items-center gap-2 cursor-pointer bg-white/30 text-yellow-300 px-3 py-2 rounded-full"
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            🎵 Музыка
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90 fade-in">
            Мои музыкальные композиции и творческие проекты
          </p>
        </div>
      </section>

      {/* Music Tracks */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Летний Вечер", duration: "3:45", genre: "Ambient" },
              {
                title: "Городские Огни",
                duration: "4:20",
                genre: "Electronic",
              },
              { title: "Воспоминания", duration: "2:58", genre: "Piano" },
              { title: "Новый День", duration: "3:12", genre: "Synthwave" },
              { title: "Дорога Домой", duration: "4:35", genre: "Acoustic" },
              { title: "Звёздное Небо", duration: "5:22", genre: "Orchestral" },
              { title: "Морской Бриз", duration: "3:33", genre: "Chill" },
              { title: "Танец Теней", duration: "4:08", genre: "Dark Ambient" },
            ].map((track, index) => (
              <Card
                key={index}
                className="hover-lift bg-white/10 backdrop-blur-sm border-white/20 shadow-lg animate-fade-in"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center float-animation">
                      <Icon name="Music" size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 text-white">
                        {track.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-2">
                        {track.genre}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Icon name="Clock" size={16} />
                        <span>{track.duration}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors pulse-glow">
                      <Icon name="Play" size={20} className="text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Альбомы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Первый Альбом", tracks: 12, year: "2023" },
              { title: "Экспериментальный", tracks: 8, year: "2024" },
              { title: "Инструментальный", tracks: 10, year: "2024" },
            ].map((album, index) => (
              <Card
                key={index}
                className="hover-lift bg-white/10 backdrop-blur-sm border-white/20 shadow-lg animate-fade-in"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Disc" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {album.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-2">
                    {album.tracks} треков • {album.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Music;
