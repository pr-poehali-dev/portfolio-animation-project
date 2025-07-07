import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors">
              <Icon name="Camera" size={20} />
              <span className="text-white font-medium">Фотографии</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors">
              <Icon name="Music" size={20} />
              <span className="text-white font-medium">Музыка</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors">
              <Icon name="Video" size={20} />
              <span className="text-white font-medium">Видео</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors">
              <Icon name="FileText" size={20} />
              <span className="text-white font-medium">Посты</span>
            </div>
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
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-gradient">Обо мне</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Я создаю визуальные истории, которые останутся в памяти
                навсегда. Каждый проект для меня — это возможность передать
                эмоции и создать что-то по-настоящему уникальное.
              </p>
              <div className="flex gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="Camera" className="text-blue-600" />
                  <span>Фотография</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Edit" className="text-blue-600" />
                  <span>Контент</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Heart" className="text-blue-600" />
                  <span>Творчество</span>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="/img/5a82fccd-a288-43a9-9d9e-2a5178e1190b.jpg"
                alt="Профессиональная фотография"
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Галерея работ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="hover-lift bg-white shadow-lg animate-fade-in"
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden rounded-t-lg">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Icon name="Image" size={48} className="text-white/80" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      Проект {item}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Описание творческого проекта и его особенностей
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Posts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Последние посты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <Card key={post} className="hover-lift shadow-lg animate-fade-in">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Icon
                        name="FileText"
                        size={32}
                        className="text-white/80"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl">
                    Заголовок поста {post}
                  </CardTitle>
                  <CardDescription>
                    Краткое описание содержания поста и основных идей, которые в
                    нем раскрываются
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>5 минут чтения</span>
                    <span>2 дня назад</span>
                  </div>
                </CardContent>
              </Card>
            ))}
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
