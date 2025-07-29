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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20 animate-scale-in">
        <div className="relative">
          <img
            src={module.coverImage}
            alt={module.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-2xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-2xl font-bold text-white mb-2">{module.title}</h2>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">Módulo {module.id}</span>
              <span className="text-white">•</span>
              <span className="text-blue-200">{module.totalPrompts} prompts</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-blue-200 text-lg leading-relaxed mb-6">
            {module.description}
          </p>

          {/* Instructions Section - Only for Module 9 */}
          {isModule9 && instructionsPrompt && (
            <div className="mb-6">
              <button
                onClick={() => setShowInstructions(!showInstructions)}
                className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 rounded-xl p-4 transition-colors duration-200 flex items-center justify-between border border-blue-500/30"
              >
                <div className="flex items-center space-x-3">
                  <Info className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-semibold">Instruções de Uso do Módulo</span>
                </div>
                <span className={`transform transition-transform duration-200 ${showInstructions ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {showInstructions && (
                <div className="mt-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-6 border border-blue-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <Info className="w-4 h-4 mr-2 text-blue-400" />
                        {instructionsPrompt.title}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(instructionsPrompt.level)}`}>
                        {instructionsPrompt.level}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopyPrompt(instructionsPrompt.content)}
                      className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                      title="Copiar instruções"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-blue-200 text-sm leading-relaxed whitespace-pre-line">
                      {instructionsPrompt.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
          {/* Prompts Section */}
          {regularPrompts.length > 0 && (
            <div className="mb-6">
              <button
                onClick={() => setShowPrompts(!showPrompts)}
                className="w-full bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="text-white font-semibold">Ver Prompts do Módulo ({regularPrompts.length})</span>
                <span className={`transform transition-transform duration-200 ${showPrompts ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {showPrompts && (
                <div className="mt-4 space-y-4 max-h-96 overflow-y-auto">
                  {regularPrompts.map((prompt) => (
                    <div key={prompt.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-white font-semibold mb-1">
                            Prompt {prompt.id} – {prompt.title}
                          </h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(prompt.level)}`}>
                            {prompt.level}
                          </span>
                        </div>
                        <button
                          onClick={() => handleCopyPrompt(prompt.content)}
                          className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                          title="Copiar prompt"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-blue-200 text-sm leading-relaxed">
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