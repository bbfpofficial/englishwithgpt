import React, { useState } from 'react';
import { Module } from '../types';
import { X, Copy, Info } from 'lucide-react';
import { modulePrompts } from '../data/prompts';

interface ModuleModalProps {
  module: Module;
  onClose: () => void;
  onProgressUpdate: (moduleId: number, progress: number) => void;
}

const ModuleModal: React.FC<ModuleModalProps> = ({ module, onClose, onProgressUpdate }) => {
  const [showPrompts, setShowPrompts] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const prompts = modulePrompts[module.id] || [];
  
  // Para o módulo 9, separar as instruções (prompt 1) dos outros prompts
  const isModule9 = module.id === 9;
  const instructionsPrompt = isModule9 ? prompts.find(p => p.id === 1) : null;
  const regularPrompts = isModule9 ? prompts.filter(p => p.id !== 1) : prompts;

  const handleCopyPrompt = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const getLevelColor = (level: string) => {
    if (level.includes('iniciante')) return 'bg-green-500/20 text-green-300';
    if (level.includes('intermediário')) return 'bg-yellow-500/20 text-yellow-300';
    if (level.includes('avançado')) return 'bg-red-500/20 text-red-300';
    return 'bg-blue-500/20 text-blue-300';
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 z-50 animate-fade-in">
      <div className="mobile-card rounded-t-2xl sm:rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="relative">
          <img
            src={module.coverImage}
            alt={module.title}
            className="w-full h-48 sm:h-64 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-t-2xl" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/50 hover:bg-black/70 active:bg-black/80 text-white p-2 rounded-full transition-colors mobile-touch-target"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">{module.title}</h2>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200 text-sm">Módulo {module.id}</span>
              <span className="text-white">•</span>
              <span className="text-blue-200 text-sm">{module.totalPrompts} prompts</span>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <p className="text-blue-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            {module.description}
          </p>

          {/* Instructions Section - Only for Module 9 */}
          {isModule9 && instructionsPrompt && (
            <div className="mb-4 sm:mb-6">
              <button
                onClick={() => setShowInstructions(!showInstructions)}
                className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 active:from-blue-600/40 active:to-purple-600/40 rounded-xl p-3 sm:p-4 transition-colors duration-200 flex items-center justify-between border border-blue-500/30 mobile-touch-target"
              >
                <div className="flex items-center space-x-3">
                  <Info className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-semibold text-sm sm:text-base">Instruções de Uso do Módulo</span>
                </div>
                <span className={`transform transition-transform duration-200 ${showInstructions ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {showInstructions && (
                <div className="mt-3 sm:mt-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-4 sm:p-6 border border-blue-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center text-sm sm:text-base">
                        <Info className="w-4 h-4 mr-2 text-blue-400" />
                        {instructionsPrompt.title}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(instructionsPrompt.level)}`}>
                        {instructionsPrompt.level}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopyPrompt(instructionsPrompt.content)}
                      className="text-blue-400 hover:text-blue-300 active:text-blue-200 transition-colors p-1 mobile-touch-target"
                      title="Copiar instruções"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-blue-200 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                      {instructionsPrompt.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
          {/* Prompts Section */}
          {regularPrompts.length > 0 && (
            <div className="mb-4 sm:mb-6">
              <button
                onClick={() => setShowPrompts(!showPrompts)}
                className="w-full bg-white/5 hover:bg-white/10 active:bg-white/15 rounded-xl p-3 sm:p-4 transition-colors duration-200 flex items-center justify-between mobile-touch-target"
              >
                <span className="text-white font-semibold text-sm sm:text-base">Ver Prompts do Módulo ({regularPrompts.length})</span>
                <span className={`transform transition-transform duration-200 ${showPrompts ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {showPrompts && (
                <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 overflow-y-auto">
                  {regularPrompts.map((prompt) => (
                    <div key={prompt.id} className="bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-white font-semibold mb-1 text-sm sm:text-base leading-tight">
                            Prompt {prompt.id} – {prompt.title}
                          </h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(prompt.level)}`}>
                            {prompt.level}
                          </span>
                        </div>
                        <button
                          onClick={() => handleCopyPrompt(prompt.content)}
                          className="text-blue-400 hover:text-blue-300 active:text-blue-200 transition-colors p-1 mobile-touch-target flex-shrink-0"
                          title="Copiar prompt"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
                        "{prompt.content}"
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ModuleModal;