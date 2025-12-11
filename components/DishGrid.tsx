import React, { useState } from 'react';
import { dishes } from '../data';
import { Dish } from '../types';
import Modal from './Modal';
import { Utensils, MapPin, Clock } from 'lucide-react';

const DishGrid: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  return (
    <section id="mon-ngon" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-hanoi-red mb-4">12 Món Ngon Hà Nội</h2>
        <div className="w-24 h-1 bg-hanoi-gold mx-auto mb-4"></div>
        <p className="text-hanoi-brown/80 max-w-2xl mx-auto">
          Những hương vị tinh túy nhất, gói trọn hồn cốt của đất Kinh Kỳ ngàn năm văn hiến.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dishes.map((dish) => (
          <div 
            key={dish.id}
            onClick={() => setSelectedDish(dish)}
            className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-200 hover:-translate-y-1"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-xl font-bold text-hanoi-red mb-2 group-hover:text-hanoi-gold transition-colors">
                {dish.name}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-1 group-hover:text-gray-900">
                {dish.shortDesc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selectedDish} onClose={() => setSelectedDish(null)}>
        {selectedDish && (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 h-64 md:h-auto">
              <img 
                src={selectedDish.image} 
                alt={selectedDish.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 bg-hanoi-bg">
              <h3 className="font-serif text-3xl font-bold text-hanoi-red mb-4">
                {selectedDish.name}
              </h3>
              <p className="text-hanoi-brown mb-6 leading-relaxed italic border-l-4 border-hanoi-gold pl-4">
                "{selectedDish.shortDesc}"
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center font-bold text-hanoi-red mb-2">
                    <Utensils size={18} className="mr-2" /> Mô tả
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {selectedDish.fullDesc}
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center font-bold text-hanoi-red mb-2">
                    <Clock size={18} className="mr-2" /> Lịch sử
                  </h4>
                  <p className="text-sm text-gray-600">
                    {selectedDish.history}
                  </p>
                </div>

                <div className="bg-amber-100 p-4 rounded-lg">
                  <h4 className="flex items-center font-bold text-hanoi-brown mb-2">
                    <MapPin size={18} className="mr-2 text-hanoi-red" /> Địa chỉ gợi ý
                  </h4>
                  <p className="text-sm font-medium text-hanoi-red">
                    {selectedDish.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default DishGrid;