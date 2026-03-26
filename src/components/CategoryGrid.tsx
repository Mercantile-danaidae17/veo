import React from 'react';
import { CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export const CategoryGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {CATEGORIES.map((category, index) => {
        const IconComponent = (Icons as any)[category.icon];
        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            className="p-6 bg-[#111] border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 group"
          >
            <div className="p-3 bg-white/5 rounded-xl group-hover:bg-orange-500/10 transition-colors">
              <IconComponent className="w-6 h-6 text-white/40 group-hover:text-orange-500 transition-colors" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors text-center">
              {category.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};
