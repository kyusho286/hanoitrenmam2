import React, { useState } from 'react';
import { stories } from '../data';
import { Story } from '../types';
import Modal from './Modal';
import { ArrowRight, BookOpen } from 'lucide-react';

const Stories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <section id="cau-chuyen" className="py-20 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-stone-200 pb-6">
        <div className="mb-4 md:mb-0">
          <h2 className="font-serif text-4xl text-hanoi-red mb-2">Câu Chuyện</h2>
          <p className="text-xl text-hanoi-brown font-serif italic">"Sau mỗi mâm ăn là một nét văn hóa"</p>
        </div>
        <button className="text-hanoi-red font-medium hover:text-hanoi-gold transition-colors flex items-center">
          Xem tất cả <ArrowRight size={16} className="ml-2" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <div 
            key={story.id} 
            className="group flex flex-col h-full bg-white rounded-lg overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-hanoi-red transition-colors">
                {story.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                {story.excerpt}
              </p>
              <button 
                onClick={() => setSelectedStory(story)}
                className="inline-flex items-center text-sm font-bold text-hanoi-red hover:underline mt-auto uppercase tracking-wide"
              >
                Đọc thêm
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selectedStory} onClose={() => setSelectedStory(null)}>
        {selectedStory && (
          <div className="bg-white">
            <div className="relative h-64 md:h-80">
              <img 
                src={selectedStory.image} 
                alt={selectedStory.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-lg">
                  {selectedStory.title}
                </h2>
              </div>
            </div>
            <div className="p-8 md:p-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-center text-hanoi-brown mb-8 opacity-60">
                 <BookOpen size={20} className="mr-2"/>
                 <span className="uppercase text-xs tracking-widest">Góc Chuyện Trò</span>
              </div>
              <div className="prose prose-stone lg:prose-lg mx-auto text-justify font-light text-gray-800">
                <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-hanoi-red first-letter:mr-2 first-letter:float-left">
                  {selectedStory.content}
                </p>
                {/* Simulated extra content for scrolling effect */}
                <p className="mt-4">
                  Đó là lý do tại sao người ta nói, muốn hiểu Hà Nội, hãy ra đường, ngồi xuống một quán cóc ven đường, gọi một bát nước chè xanh và lắng nghe hơi thở của thành phố.
                </p>
              </div>
              <div className="mt-12 pt-6 border-t border-stone-200 text-center">
                <button 
                  onClick={() => setSelectedStory(null)}
                  className="px-8 py-3 bg-hanoi-bg text-hanoi-brown border border-hanoi-brown hover:bg-hanoi-brown hover:text-white transition-all rounded-full font-serif"
                >
                  Đóng bài viết
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Stories;