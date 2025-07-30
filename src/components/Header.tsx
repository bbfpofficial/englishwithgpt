import React from 'react';
import { LogOut, BookOpen } from 'lucide-react';

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="bg-white/10 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 safe-area-top">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-sm sm:text-lg">500 Prompts ChatGPT</h1>
              <p className="text-blue-200 text-xs hidden sm:block">Área de Membros</p>
            </div>
          </div>
          
          <button
            onClick={onLogout}
            className="flex items-center space-x-1 sm:space-x-2 bg-red-600/20 hover:bg-red-600/30 active:bg-red-600/40 text-red-200 hover:text-white px-3 py-2 sm:px-4 rounded-lg transition-all duration-200 border border-red-500/30 mobile-touch-target"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium">Sair</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;