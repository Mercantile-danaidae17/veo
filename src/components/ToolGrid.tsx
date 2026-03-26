import React from 'react';
import { TOOLS } from '../constants';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export const ToolGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {TOOLS.map((tool, index) => {
        const IconComponent = (Icons as any)[tool.icon];
        return (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-[#111] border border-white/10 rounded-3xl group cursor-pointer hover:border-orange-500/30 transition-all duration-500"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-orange-500/10 transition-colors">
                <IconComponent className="w-8 h-8 text-white/40 group-hover:text-orange-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold tracking-tight group-hover:text-orange-500 transition-colors">
                  {tool.name}
                </h4>
                <p className="text-sm text-white/40 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
