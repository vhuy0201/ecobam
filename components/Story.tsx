
import React from 'react';

const Story: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="/assets/images/story.png" 
            alt="Craftsmanship" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-cream rounded-2xl p-8 shadow-xl hidden lg:block border border-gray-100">
          <p className="font-serif italic text-earth-green text-xl mb-4">"Mỗi concept là một câu chuyện."</p>
          <p className="text-sm text-gray-500 leading-relaxed">Ecobam không chỉ bán quần áo, chúng tôi mang đến một trải nghiệm văn hóa trọn vẹn.</p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-earth-green font-medium tracking-widest uppercase text-sm mb-4">Câu chuyện của chúng tôi</h3>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">Gìn giữ nét Việt <br /> trong từng sợi vải.</h2>
        </div>
        
        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
          <p>
            <strong>Ecobam</strong> ra đời từ mong muốn kết nối vẻ đẹp vĩnh cửu của văn hóa dân tộc với lối sống hiện đại, bền vững. Chúng tôi tin rằng thời trang không chỉ là vẻ bề ngoài, mà là cách chúng ta thể hiện sự tôn trọng với cội nguồn và môi trường.
          </p>
          <p>
            Từng thiết kế tại Ecobam là kết quả của quá trình nghiên cứu tỉ mỉ về các họa tiết dân gian, kết hợp cùng kỹ thuật may mặc tối giản. Chúng tôi lựa chọn vải tre (bamboo) - biểu tượng của sự dẻo dai và kiên cường của người Việt - làm chất liệu chủ đạo.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-6">
          <div>
            <p className="text-3xl font-serif text-earth-green font-bold">100%</p>
            <p className="text-sm text-gray-500 uppercase tracking-widest">Tự nhiên</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-earth-green font-bold">Vietnamese</p>
            <p className="text-sm text-gray-500 uppercase tracking-widest">Heritage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
