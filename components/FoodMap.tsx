import React, { useState } from 'react';
import { mapPoints } from '../data';
import { MapPoint } from '../types';
import Modal from './Modal';
import { MapPin, ExternalLink } from 'lucide-react';

const FoodMap: React.FC = () => {
  const [activePoint, setActivePoint] = useState<MapPoint | null>(null);

  return (
    <section id="food-map" className="py-20 bg-amber-100 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-hanoi-red mb-4">Bản Đồ Ẩm Thực</h2>
          <p className="text-hanoi-brown italic">Khám phá các tọa độ ăn uống quanh thủ đô</p>
        </div>

        <div className="relative w-full aspect-[4/3] md:aspect-[2/1] bg-[#e8dec0] rounded-3xl shadow-inner border-4 border-white overflow-hidden mx-auto max-w-5xl">
          {/* Abstract River Shape */}
          <div className="absolute top-[10%] right-[-10%] w-[50%] h-[150%] bg-[#a8c6fa] opacity-60 rounded-[50%] rotate-12 blur-xl"></div>
          
          {/* City Center Hint */}
          <div className="absolute top-[40%] left-[45%] w-[30%] h-[40%] bg-amber-200/50 rounded-full blur-3xl"></div>

          {/* Markers */}
          {mapPoints.map((point) => (
            <button
              key={point.id}
              onClick={() => setActivePoint(point)}
              style={{ top: point.top, left: point.left }}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:scale-125 group
                ${activePoint?.id === point.id ? 'scale-125 z-30' : ''}`}
            >
              <div className="relative">
                <MapPin 
                  size={32} 
                  className={`drop-shadow-lg ${activePoint?.id === point.id ? 'text-hanoi-red fill-current' : 'text-hanoi-brown hover:text-hanoi-red'}`} 
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 bg-white/90 text-xs font-bold whitespace-nowrap rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {point.name}
                </span>
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-full animate-ping bg-red-400 opacity-20 group-hover:opacity-50"></div>
              </div>
            </button>
          ))}

          {/* Map Legend/Decoration */}
          <div className="absolute bottom-4 left-4 bg-white/80 p-3 rounded-lg text-xs text-hanoi-brown backdrop-blur-sm">
            <p className="font-bold">Hà Nội Food Map</p>
            <p>Click vào các điểm để xem chi tiết</p>
          </div>
        </div>

        {/* Central Overlay Modal for Map Info & Iframe */}
        <Modal isOpen={!!activePoint} onClose={() => setActivePoint(null)}>
          {activePoint && (
            <div className="bg-hanoi-bg p-6 md:p-8 w-full">
              <div className="mb-6 border-b border-hanoi-gold/30 pb-4">
                <h3 className="font-serif text-3xl font-bold text-hanoi-red mb-2">{activePoint.name}</h3>
                <p className="text-hanoi-brown italic text-sm md:text-base">
                  {activePoint.description}
                </p>
              </div>

              {/* Google Maps Embed Iframe */}
              <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md border border-stone-200 mb-6 bg-stone-100">
                <iframe 
                  src={activePoint.iframeUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Bản đồ ${activePoint.name}`}
                ></iframe>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-hanoi-red font-bold mb-3 border-b border-hanoi-red/20 pb-1">Đặc sản khu vực</p>
                  <div className="flex flex-wrap gap-2">
                    {activePoint.specialties.map((item, idx) => (
                      <span key={idx} className="bg-amber-50 text-hanoi-brown px-3 py-1 rounded-full text-sm font-medium border border-amber-200 shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-xs uppercase tracking-wider text-hanoi-red font-bold mb-3 border-b border-hanoi-red/20 pb-1">Quán nổi tiếng</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {activePoint.famousShops.map((shop, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-hanoi-gold rounded-full mr-2"></span> {shop}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 text-right">
                <a 
                   href={`https://www.google.com/maps/search/${encodeURIComponent(activePoint.name + " Hà Nội")}`} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center justify-center px-4 py-2 bg-white text-hanoi-red border border-hanoi-red rounded hover:bg-hanoi-red hover:text-white transition-colors text-sm font-medium"
                >
                  <ExternalLink size={16} className="mr-2" /> Xem trên Google Maps
                </a>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default FoodMap;