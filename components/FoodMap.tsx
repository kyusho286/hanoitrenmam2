import React, { useState } from 'react';
import { mapPoints } from '../data';
import { MapPoint } from '../types';
import Modal from './Modal';
import { MapPin, ExternalLink } from 'lucide-react';

const FoodMap: React.FC = () => {
  const [activePoint, setActivePoint] = useState<MapPoint | null>(null);

  return (
    <section id="food-map" className="py-24 bg-hanoi-bg relative overflow-hidden scroll-mt-20">
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-hanoi-red mb-4 font-bold">Bản Đồ Ẩm Thực</h2>
          <div className="w-24 h-1 bg-hanoi-gold mx-auto mb-4"></div>
          <p className="text-hanoi-brown italic text-lg">Khám phá các tọa độ ăn uống quanh thủ đô</p>
        </div>

        {/* High-end Art Map Container */}
        <div className="relative w-full aspect-[4/3] md:aspect-[2/1] bg-gradient-to-br from-[#fdfbf7] via-[#fffbf0] to-[#e0f2fe] rounded-[24px] border-[3px] border-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.05)] overflow-hidden mx-auto max-w-6xl group">
          
          {/* Decorative Map Elements (Abstract) */}
          {/* River */}
          <div className="absolute top-[-10%] right-[10%] w-[30%] h-[120%] bg-blue-200/40 rounded-[100%] blur-[60px] transform rotate-12"></div>
          {/* City Center Heatmap */}
          <div className="absolute top-[40%] left-[45%] w-[40%] h-[40%] bg-amber-200/30 rounded-full blur-[80px]"></div>
          {/* Grid lines overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          {/* Markers */}
          {mapPoints.map((point) => (
            <button
              key={point.id}
              onClick={() => setActivePoint(point)}
              style={{ top: point.top, left: point.left }}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 group/marker focus:outline-none
                ${activePoint?.id === point.id ? 'scale-125 z-30' : 'hover:scale-110'}`}
            >
              <div className="relative flex flex-col items-center">
                {/* Ripple Effect */}
                <div className="absolute w-full h-full bg-hanoi-red/30 rounded-full animate-ping opacity-75"></div>
                
                <MapPin 
                  size={40} 
                  className={`drop-shadow-xl filter transition-colors duration-300 ${activePoint?.id === point.id ? 'text-hanoi-red fill-hanoi-red' : 'text-hanoi-red fill-white'}`} 
                />
                
                <div className="mt-2 px-3 py-1 bg-white/95 backdrop-blur-sm text-hanoi-brown text-xs font-bold uppercase tracking-wider rounded-full shadow-lg border border-hanoi-gold/30 opacity-90 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap">
                  {point.name}
                </div>
              </div>
            </button>
          ))}

          {/* Legend */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-stone-100 max-w-xs hidden md:block">
            <h4 className="font-serif font-bold text-hanoi-red mb-1">Hà Nội Food Map</h4>
            <p className="text-xs text-stone-500">Chọn địa điểm để khám phá ẩm thực đặc trưng.</p>
          </div>
        </div>

        {/* Central Overlay Modal - High End Style */}
        <Modal 
          isOpen={!!activePoint} 
          onClose={() => setActivePoint(null)}
          className="w-[90%] md:w-[60%] rounded-[20px]" 
        >
          {activePoint && (
            <div className="bg-white">
              {/* Header with image/gradient logic could go here, for now using clean layout */}
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-stone-100 pb-6">
                   <div>
                      <h3 className="font-serif text-3xl md:text-4xl font-bold text-hanoi-red">{activePoint.name}</h3>
                      <div className="h-1 w-20 bg-hanoi-gold mt-2 rounded-full"></div>
                   </div>
                   <div className="mt-4 md:mt-0 px-4 py-2 bg-amber-50 rounded-lg border border-amber-100">
                      <span className="text-amber-800 text-sm font-medium">Khu vực ẩm thực nổi bật</span>
                   </div>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                  {/* Left Column: Info */}
                  <div className="md:col-span-2 space-y-6">
                    <p className="text-gray-600 leading-relaxed italic">
                      "{activePoint.description}"
                    </p>
                    
                    <div>
                      <h4 className="font-bold text-hanoi-brown uppercase text-xs tracking-widest mb-3 flex items-center">
                        <span className="w-2 h-2 bg-hanoi-red rounded-full mr-2"></span>
                        Món ngon đặc trưng
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activePoint.specialties.map((item, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-stone-100 text-stone-700 rounded-md text-sm font-medium hover:bg-stone-200 transition-colors cursor-default">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-hanoi-brown uppercase text-xs tracking-widest mb-3 flex items-center">
                        <span className="w-2 h-2 bg-hanoi-red rounded-full mr-2"></span>
                        Địa chỉ gợi ý
                      </h4>
                      <ul className="space-y-2">
                         {activePoint.famousShops.map((shop, idx) => (
                           <li key={idx} className="text-sm text-gray-700 flex items-start">
                             <span className="text-hanoi-gold mr-2">•</span> {shop}
                           </li>
                         ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Map Embed */}
                  <div className="md:col-span-3">
                    <div className="relative w-full aspect-video md:aspect-square lg:aspect-video rounded-xl overflow-hidden shadow-inner border border-stone-200 bg-stone-100">
                      <iframe 
                        src={activePoint.iframeUrl}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Bản đồ ${activePoint.name}`}
                        className="absolute inset-0 w-full h-full"
                      ></iframe>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                       <a 
                          href={`https://www.google.com/maps/search/${encodeURIComponent(activePoint.name + " Hà Nội ẩm thực")}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-bold text-hanoi-red hover:text-hanoi-gold transition-colors"
                       >
                          Mở rộng bản đồ <ExternalLink size={14} className="ml-1" />
                       </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default FoodMap;