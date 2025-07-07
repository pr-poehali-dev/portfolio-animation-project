import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Posts = () => {
  const posts = [
    {
      title: "Как создать идеальный портрет",
      description:
        "Подробный гид по созданию профессиональных портретов с советами по освещению, композиции и работе с моделью. Изучаем основные принципы портретной фотографии.",
      readTime: "8 минут чтения",
      date: "3 дня назад",
      category: "Фотография",
    },
    {
      title: "Мой опыт работы с музыкальными проектами",
      description:
        "Делюсь опытом создания музыкальных треков от идеи до финального мастеринга. Рассказываю о процессе творчества и используемых инструментах.",
      readTime: "12 минут чтения",
      date: "1 неделю назад",
      category: "Музыка",
    },
    {
      title: "Секреты цветокоррекции в видео",
      description:
        "Профессиональные приемы цветокоррекции и грэйдинга для создания кинематографичного образа. Практические советы для начинающих видеографов.",
      readTime: "15 минут чтения",
      date: "2 недели назад",
      category: "Видео",
    },
    {
      title: "Философия творчества",
      description:
        "Размышления о природе творчества, источниках вдохновения и том, как найти свой уникальный стиль. Личный опыт и наблюдения.",
      readTime: "6 минут чтения",
      date: "3 недели назад",
      category: "Мысли",
    },
    {
      title: "Обзор нового оборудования",
      description:
        "Тестирую новую камеру и делюсь впечатлениями. Сравнение с предыдущими моделями, плюсы и минусы, рекомендации по использованию.",
      readTime: "10 минут чтения",
      date: "1 месяц назад",
      category: "Обзоры",
    },
    {
      title: "Создание атмосферы в кадре",
      description:
        "Как передать настроение и эмоции через визуальные образы. Работа с цветом, светом и композицией для создания нужной атмосферы.",
      readTime: "7 минут чтения",
      date: "1 месяц назад",
      category: "Фотография",
    },
  ];

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
              className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors px-3 py-2 rounded-full"
            >
              <Icon name="Video" size={20} />
              <span className="text-white font-medium">Видео</span>
            </Link>
            <Link
              to="/posts"
              className="flex items-center gap-2 cursor-pointer bg-white/30 text-yellow-300 px-3 py-2 rounded-full"
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
            ✍️ Посты
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90 fade-in">
            Мои мысли, опыт и наблюдения о творчестве и жизни
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="hover-lift bg-white/10 backdrop-blur-sm border-white/20 shadow-lg animate-fade-in"
              >
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Icon
                        name="FileText"
                        size={32}
                        className="text-white/80"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded px-2 py-1 text-white text-xs">
                      {post.category}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-white/70 text-sm leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Категории
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Фотография",
              "Музыка",
              "Видео",
              "Мысли",
              "Обзоры",
              "Туториалы",
            ].map((category) => (
              <div
                key={category}
                className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 cursor-pointer hover:bg-white/30 transition-all text-white font-medium"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-20">
        <div className="container mx-auto px-4 text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-lg max-w-md mx-auto">
            <CardContent className="p-8">
              <Icon name="Mail" size={48} className="text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Подписка на обновления
              </h3>
              <p className="text-white/70 mb-6">
                Получайте уведомления о новых постах и проектах
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 bg-white/20 border-white/30 rounded-lg px-4 py-2 text-white placeholder-white/50"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                  Подписаться
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Posts;
