import React from 'react';
import { Module } from '../types';

interface ModuleCardProps {
  module: Module;
  onClick: () => void;
  delay?: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onClick, delay = 0 }) => {
  return (
    <div
      className="group bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={module.coverImage}
          alt={module.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
          {module.title}
        </h3>
        <p className="text-blue-200 text-sm leading-relaxed mb-4">
          {module.description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-blue-300">
            {module.totalPrompts} prompts
          </span>
          <span className="text-white font-medium">
            Módulo {module.id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;