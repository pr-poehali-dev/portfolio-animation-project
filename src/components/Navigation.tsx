import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/40 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-6">
          <Link
            to="/photos"
            className={`flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors px-3 py-2 rounded-full ${
              isActive("/photos") ? "bg-white/10" : ""
            }`}
          >
            <Icon name="Camera" size={20} />
            <span className="text-white font-medium">Фотографии</span>
          </Link>
          <Link
            to="/music"
            className={`flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors px-3 py-2 rounded-full ${
              isActive("/music") ? "bg-white/10" : ""
            }`}
          >
            <Icon name="Music" size={20} />
            <span className="text-white font-medium">Музыка</span>
          </Link>
          <Link
            to="/"
            className={`flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors px-4 py-2 rounded-full ${
              isActive("/") ? "bg-white/20" : "bg-white/10"
            }`}
          >
            <Icon name="Home" size={20} />
            <span className="text-white font-medium">Главная</span>
          </Link>
          <Link
            to="/video"
            className={`flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors px-3 py-2 rounded-full ${
              isActive("/video") ? "bg-white/10" : ""
            }`}
          >
            <Icon name="Video" size={20} />
            <span className="text-white font-medium">Видео</span>
          </Link>
          <Link
            to="/posts"
            className={`flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors px-3 py-2 rounded-full ${
              isActive("/posts") ? "bg-white/10" : ""
            }`}
          >
            <Icon name="FileText" size={20} />
            <span className="text-white font-medium">Посты</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
