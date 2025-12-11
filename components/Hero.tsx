import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/hanoistreet/1920/1080" 
          alt="Hanoi Street Food" 
          className="w-full h-full object-cover filter brightness-[0.6] sepia-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hanoi-bg via-transparent to-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-[fadeIn_1s_ease-out]">
        <p className="text-hanoi-gold uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-bold">
          Chào mừng đến với
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Hà Nội <br/>
          <span className="italic font-light text-amber-200">Trên Mâm</span>
        </h1>
        <p className="text-stone-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Khám phá tinh hoa ẩm thực đường phố, nơi mỗi món ăn kể lại một câu chuyện lịch sử ngàn năm của mảnh đất Kinh Kỳ.
        </p>
        
        <a 
          href="#mon-ngon" 
          className="inline-block px-8 py-3 md:px-10 md:py-4 bg-hanoi-red text-white font-medium text-sm uppercase tracking-widest hover:bg-hanoi-gold transition-colors duration-300 rounded shadow-lg"
        >
          Khám phá ngay
        </a>
      </div>

      <a 
        href="#mon-ngon"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white animate-bounce transition-colors"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;