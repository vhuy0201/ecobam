
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 text-center">
      <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-gray-100 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cream rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
            Gia nhập cộng đồng <br className="hidden md:block" /> thời trang bền vững.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Đăng ký nhận bản tin để khám phá những câu chuyện văn hóa mới nhất và nhận ưu đãi độc quyền từ Ecobam.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email của bạn..." 
                required
                className="flex-1 px-8 py-5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-earth-green/20 transition-all text-gray-800"
              />
              <button 
                type="submit" 
                className="bg-earth-green text-white px-10 py-5 rounded-full font-bold tracking-widest hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                THAM GIA NGAY
              </button>
            </form>
          ) : (
            <div className="p-8 bg-emerald-50 rounded-2xl text-earth-green font-medium animate-fadeIn">
              Cảm ơn bạn đã tham gia hành trình cùng Ecobam! Hãy kiểm tra hộp thư nhé.
            </div>
          )}
          <p className="text-xs text-gray-400">Chúng tôi cam kết bảo mật thông tin và không gửi thư rác.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
