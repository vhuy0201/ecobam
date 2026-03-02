
import React from 'react';
import { Palette, BookOpen, Heart } from 'lucide-react';

const usp = [
  {
    icon: <Palette size={32} />,
    title: "Bản sắc Văn hóa",
    desc: "Mỗi thiết kế là một tác phẩm nghệ thuật hiện đại nhưng vẫn mang đậm dấu ấn dân tộc Việt Nam."
  },
  {
    icon: <BookOpen size={32} />,
    title: "Storytelling",
    desc: "Chúng tôi không chỉ bán quần áo. Chúng tôi kể câu chuyện về con người và lối sống xanh qua từng sản phẩm."
  },
  {
    icon: <Heart size={32} />,
    title: "Cá nhân hóa",
    desc: "Ecobam hướng đến việc mỗi khách hàng có thể tìm thấy tiếng nói riêng của mình trong từng concept."
  }
];

const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h3 className="text-earth-green font-medium tracking-widest uppercase text-sm mb-4">Giá trị cốt lõi</h3>
        <h2 className="font-serif text-4xl text-gray-900 mb-6 italic">Mặc một câu chuyện. <br /> Sống một lối sống xanh.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {usp.map((item, i) => (
          <div key={i} className="text-center space-y-6 group p-8 hover:bg-cream rounded-3xl transition-colors duration-500">
            <div className="mx-auto w-20 h-20 bg-cream group-hover:bg-white rounded-full flex items-center justify-center text-earth-green transition-colors shadow-sm">
              {item.icon}
            </div>
            <h4 className="font-serif text-2xl text-gray-900">{item.title}</h4>
            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
