import React, { useState } from 'react';
import { modules } from '../data/modules';
import ModuleCard from './ModuleCard';
import ModuleModal from './ModuleModal';
import { Module } from '../types';
import { GraduationCap, Target, TrendingUp, Info, Play, Copy } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [moduleProgress, setModuleProgress] = useState<Record<number, number>>(
    modules.reduce((acc, module) => ({ ...acc, [module.id]: module.progress }), {})
  );

  const totalModules = modules.length;
  const completedModules = Object.values(moduleProgress).filter(progress => progress === 100).length;
  const overallProgress = Math.round((Object.values(moduleProgress).reduce((sum, progress) => sum + progress, 0) / totalModules));

  const handleModuleClick = (module: Module) => {
    setSelectedModule(module);
  };

  const handleCloseModal = () => {
    setSelectedModule(null);
  };

  const handleProgressUpdate = (moduleId: number, newProgress: number) => {
    setModuleProgress(prev => ({
      ...prev,
      [moduleId]: newProgress
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            500 Prompts de ChatGPT
          </h1>
          <p className="text-lg sm:text-xl text-blue-200 mb-8">
            Para Aprender e Dominar o Inglês
          </p>
        </div>

        {/* Instructions Box */}
        <div className="mb-8 sm:mb-12 animate-slide-up">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-blue-500/30 p-4 sm:p-6 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Info className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-white">Como usar a plataforma</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p className="text-blue-200 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Você agora tem acesso a <strong className="text-white">500 prompts exclusivos</strong> organizados em 10 módulos temáticos para dominar o inglês com o ChatGPT.
                </p>
                <p className="text-blue-200 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Cada módulo contém prompts cuidadosamente elaborados para diferentes níveis de aprendizado.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-white font-semibold mb-3 flex items-center text-sm sm:text-base">
                  <Play className="w-4 h-4 mr-2 text-blue-400" />
                  Como usar:
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500/30 rounded-full flex items-center justify-center text-blue-300 text-xs font-bold mt-0.5 flex-shrink-0">1</span>
                    <p className="text-blue-200">Clique em qualquer módulo para ver os prompts</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500/30 rounded-full flex items-center justify-center text-blue-300 text-xs font-bold mt-0.5 flex-shrink-0">2</span>
                    <p className="text-blue-200">Use o botão <Copy className="w-3 h-3 inline mx-1" /> para copiar qualquer prompt</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500/30 rounded-full flex items-center justify-center text-blue-300 text-xs font-bold mt-0.5 flex-shrink-0">3</span>
                    <p className="text-blue-200">Cole no ChatGPT e comece a praticar!</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-blue-200 text-sm">
                💡 <strong className="text-white">Dica:</strong> Comece pelo módulo que mais se adequa ao seu nível atual e explore os prompts gradualmente. Cada prompt foi desenvolvido para maximizar seu aprendizado!
              </p>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {modules.map((module, index) => (
            <ModuleCard
              key={module.id}
              module={{
                ...module,
                progress: moduleProgress[module.id] || 0
              }}
              onClick={() => handleModuleClick(module)}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Module Modal */}
        {selectedModule && (
          <ModuleModal
            module={{
              ...selectedModule,
              progress: moduleProgress[selectedModule.id] || 0
            }}
            onClose={handleCloseModal}
            onProgressUpdate={handleProgressUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;