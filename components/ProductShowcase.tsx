import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Túi xách ECOBAM",
    category: "Túi xách",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974&auto=format&fit=crop",
    description: "Thiết kế tối giản, form hiện đại, phù hợp cho mọi dịp."
  },
  {
    id: 2,
    name: "Nón Tre Hiện Đại",
    category: "Nón",
    image: "/images/non1.png",
    description: "Thoáng khí, kháng khuẩn tự nhiên, bảo vệ bạn dưới nắng."
  },
  {
    id: 3,
    name: "Vòng Tay Sợi Tre",
    category: "Phụ kiện",
    image: "/images/vong_tay1.jpeg",
    description: "Nhỏ gọn, tinh tế, mang đậm tinh thần Eco-friendly."
  }
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-10 bg-bamboo-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-bamboo-green font-medium tracking-widest uppercase text-sm mb-4 block">
              Bộ sưu tập phụ kiện
            </span>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">
              Sản phẩm <span className="italic">nhỏ</span>, <br />
              tác động <span className="italic text-bamboo-green">lớn</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-bamboo-green font-medium hover:gap-4 transition-all group">
            Xem tất cả sản phẩm <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[32px] aspect-[4/5] mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-medium uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-bamboo-green transition-colors">
                {product.name}
              </h3>
              <p className="text-bamboo-dark/60 font-light leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}