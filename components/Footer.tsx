import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="lien-he" className="bg-hanoi-brown text-stone-300 pt-16 pb-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl text-white mb-6 font-bold">Hà Nội Trên Mâm</h3>
          <p className="text-stone-400 text-sm leading-relaxed mb-6">
            Dự án giới thiệu văn hóa ẩm thực Hà Nội đến bạn bè năm châu. Chúng tôi trân trọng những giá trị truyền thống và mong muốn gìn giữ hương vị xưa.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-hanoi-gold hover:text-hanoi-brown transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-hanoi-gold hover:text-hanoi-brown transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-hanoi-gold hover:text-hanoi-brown transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Khám Phá</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#mon-ngon" className="hover:text-hanoi-gold transition-colors">12 Món Ngon Đặc Trưng</a></li>
            <li><a href="#food-map" className="hover:text-hanoi-gold transition-colors">Bản Đồ Ẩm Thực</a></li>
            <li><a href="#cau-chuyen" className="hover:text-hanoi-gold transition-colors">Câu Chuyện Văn Hóa</a></li>
            <li><a href="#" className="hover:text-hanoi-gold transition-colors">Blog Ẩm Thực</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Liên Hệ</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <MapPin size={18} className="mr-3 text-hanoi-gold shrink-0" />
              <span>36 Phố Cổ, Hoàn Kiếm, Hà Nội, Việt Nam</span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-3 text-hanoi-gold shrink-0" />
              <span>+84 90 123 4567</span>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-3 text-hanoi-gold shrink-0" />
              <span>info@hanoitrenmam.vn</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center text-xs text-stone-500">
        <p>&copy; {new Date().getFullYear()} Hà Nội Trên Mâm. All rights reserved.</p>
        <p className="mt-2">Designed with love for Hanoi Cuisine.</p>
      </div>
    </footer>
  );
};

export default Footer;