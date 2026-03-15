import React from 'react';
import { PERSON_DETAILS } from '../constants';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            AK
          </div>
          <span className="text-white font-bold tracking-tight">Ankit Khatri</span>
        </div>
        
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Ankit Khatri. All rights reserved.
        </div>
        
        <div className="text-gray-400 text-sm font-medium">
          Designed & Built by <span className="text-indigo-500">Ankit Khatri</span>
        </div>
      </div>
    </footer>
  );
}
