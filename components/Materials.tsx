
import React from 'react';
import { Wind, ShieldCheck, Leaf, Cloud } from 'lucide-react';

const features = [
  {
    icon: <Leaf size={24} />,
    title: "Thân thiện môi trường",
    desc: "Vải tre có khả năng tự phân hủy sinh học và cần rất ít nước để canh tác."
  },
  {
    icon: <Wind size={24} />,
    title: "Thoáng khí vượt trội",
    desc: "Cấu trúc sợi rỗng giúp hút ẩm và thoát nhiệt nhanh gấp 3 lần cotton."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Kháng khuẩn tự nhiên",
    desc: "Chứa hợp chất 'Bamboo Kun' giúp ngăn chặn mùi hôi và vi khuẩn tự nhiên."
  },
  {
    icon: <Cloud size={24} />,
    title: "Mềm mịn cho da",
    desc: "Bề mặt sợi vải tròn, trơn nhẵn, hoàn hảo cho cả những làn da nhạy cảm nhất."
  }
];

const Materials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 relative">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 space-y-10">
          <div>
            <h3 className="text-emerald-300 font-medium tracking-widest uppercase text-sm mb-4">Chất liệu bền vững</h3>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Vải Tre: Món quà từ <br /> mẹ thiên nhiên Việt Nam.</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((f, i) => (
              <div key={i} className="space-y-4">
                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-300">
                  {f.icon}
                </div>
                <h4 className="font-serif text-xl">{f.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="aspect-square rounded-full border-2 border-white/20 p-4 animate-[spin_20s_linear_infinite]">
            <div className="w-full h-full rounded-full border-2 border-white/10 p-4">
               <img 
                src="/assets/images/material.png" 
                alt="Bamboo Fabric Texture" 
                className="w-full h-full object-cover rounded-full rotate-[-15deg] transition-all"
              />
            </div>
          </div>
          {/* Decorative labels */}
          <div className="absolute top-10 right-0 bg-white text-earth-green px-4 py-2 rounded-full text-xs font-bold shadow-lg">100% ORGANIC</div>
          <div className="absolute bottom-10 left-0 bg-emerald-400 text-earth-green px-4 py-2 rounded-full text-xs font-bold shadow-lg">ANTI-BACTERIAL</div>
        </div>
      </div>
    </div>
  );
};

export default Materials;
