
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/background_image.png" 
          alt="Ecobam Sustainable Fashion" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl fade-in">
        <h2 className="text-white/80 uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium">Bản sắc Việt • Sống Xanh</h2>
        <h1 className="font-serif text-5xl md:text-8xl text-white mb-8 leading-tight italic">
          Thời trang kể chuyện <br className="hidden md:block" /> văn hóa Việt.
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Mỗi sản phẩm là một mảnh ghép văn hóa, được dệt nên từ tâm huyết và lòng yêu thiên nhiên.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <button className="bg-white text-earth-green px-10 py-4 rounded-full font-medium tracking-wider hover:bg-cream transition-colors duration-300 w-full md:w-auto">
            KHÁM PHÁ NGAY
          </button>
          <button className="border border-white text-white px-10 py-4 rounded-full font-medium tracking-wider hover:bg-white/10 transition-colors duration-300 w-full md:w-auto">
            XEM BỘ SƯU TẬP
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white opacity-50">
        <ArrowDown size={32} strokeWidth={1} />
      </div>
    </div>
  );
};

export default Hero;
