import React, { useState } from 'react';
import { modules } from '../data/modules';
import ModuleCard from './ModuleCard';
import ModuleModal from './ModuleModal';
import { Module } from '../types';
import { GraduationCap, Target, TrendingUp } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            500 Prompts de ChatGPT
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Para Aprender e Dominar o Inglês
          </p>
        </div>
          
        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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