import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Photos = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            📸 Фотографии
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90 fade-in">
            Коллекция моих лучших работ - от портретов до пейзажей
          </p>
        </div>
      </section>

      {/* Photos Gallery */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <Card
                key={item}
                className="hover-lift bg-white/10 backdrop-blur-sm border-white/20 shadow-lg animate-fade-in group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-pink-400 to-orange-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all">
                      <Icon
                        name="Camera"
                        size={48}
                        className="text-white/80 group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        Фотография {item}
                      </h3>
                      <p className="text-white/80 text-sm">
                        Профессиональная съемка с уникальным стилем
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Категории
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Портреты",
              "Пейзажи",
              "Свадьбы",
              "События",
              "Студия",
              "Стрит",
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
    </div>
  );
};

export default Photos;
