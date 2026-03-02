
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <h2 className="font-serif text-3xl font-bold tracking-tighter text-earth-green">ECOBAM</h2>
            <p className="text-gray-500 leading-relaxed">
              Dự án thời trang bền vững kể chuyện văn hóa Việt thông qua chất liệu tự nhiên và thiết kế tối giản.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-cream text-earth-green rounded-full hover:bg-earth-green hover:text-white transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-cream text-earth-green rounded-full hover:bg-earth-green hover:text-white transition-all"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-cream text-earth-green rounded-full hover:bg-earth-green hover:text-white transition-all"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">Khám phá</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#story" className="hover:text-earth-green transition-colors">Về chúng tôi</a></li>
              <li><a href="#collections" className="hover:text-earth-green transition-colors">Bộ sưu tập</a></li>
              <li><a href="#materials" className="hover:text-earth-green transition-colors">Chất liệu</a></li>
              <li><a href="#" className="hover:text-earth-green transition-colors">Blog văn hóa</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">Hỗ trợ</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-earth-green transition-colors">Chính sách vận chuyển</a></li>
              <li><a href="#" className="hover:text-earth-green transition-colors">Đổi trả & Bảo hành</a></li>
              <li><a href="#" className="hover:text-earth-green transition-colors">Hướng dẫn chọn size</a></li>
              <li><a href="#" className="hover:text-earth-green transition-colors">Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">Liên hệ</h4>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-earth-green" />
                <span>hello@ecobam.vn</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-earth-green" />
                <span>+84 (0) 90 123 4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-earth-green mt-1" />
                <span>Thành phố Hồ Chí Minh, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Ecobam Project. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
