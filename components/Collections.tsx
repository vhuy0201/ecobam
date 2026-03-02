
import React from 'react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: "Miền Bắc",
    subtitle: "Họa tiết Núi Rừng Tây Bắc",
    description: "Lấy cảm hứng từ hoa văn thổ cẩm và núi rừng hùng vĩ, sử dụng tông màu đất, xanh rêu và form dáng tự do, phóng khoáng.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Miền Trung",
    subtitle: "Họa tiết Biển & Di Sản",
    description: "Cảm hứng từ sóng biển miền Trung và hoa văn kiến trúc cổ, với gam xanh biển - cát - nắng, thiết kế nhẹ nhàng và tinh tế.",
    image: "/images/ao_thun1.png"
  },
  {
    title: "Miền Nam",
    subtitle: "Họa tiết Đồng Bằng Sông Nước",
    description: "Tái hiện nét mềm mại của sông nước miền Tây qua đường nét uyển chuyển, màu nâu đất và xanh lá, mang cảm giác gần gũi và phóng khoáng.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  }
];

const Collections: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h3 className="text-earth-green font-medium tracking-widest uppercase text-sm mb-4">Concept Collections</h3>
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Bảo Tàng Số Về Thời Trang & Văn hóa</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {collections.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-white/80 text-xs uppercase tracking-[0.2em] mb-2">{item.subtitle}</p>
                <h4 className="text-white font-serif text-2xl">{item.title}</h4>
              </div>
            </div>
            <p className="text-gray-500 mb-4 line-clamp-2">{item.description}</p>
            <button className="flex items-center space-x-2 text-earth-green font-semibold tracking-wider text-sm group-hover:translate-x-2 transition-transform">
              <span>XEM CHI TIẾT</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
