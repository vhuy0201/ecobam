import React, { useState } from "react";

const PreorderForm: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    budget: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("https://script.google.com/macros/s/AKfycbyJwCFlQ_teuPRyip_QUdHiieFGreQQ55nrzL3ETwHeKFck2xKOwcRgiGW2MK6tgUsBTA/exec", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);

    setFormData({ name: "", phone: "", product: "", budget: "" });
  };

  return (



    <div className="max-w-xl mx-auto">

      {success && (
        <div className="mb-6 p-5 rounded-xl bg-green-50 border border-green-200 text-green-700 flex items-center gap-3 shadow-sm animate-fadeIn">
          <span className="text-xl">🌿</span>
          <p className="text-xl font-medium">
            Đăng ký thành công! Chúng tôi sẽ liên hệ sớm nhất.
          </p>
        </div>
      )}

      <h2 className="text-3xl font-serif mb-6 text-center">
        Đặt Hàng Thử ECOBAM
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Họ và tên"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="text"
          name="phone"
          placeholder="Số điện thoại"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <select
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        >
          <option value="">Chọn sản phẩm</option>
          <option value="Túi tre">Túi tre</option>
          <option value="Nón tre">Nón tre</option>
          <option value="Vòng tay tre">Vòng tay tre</option>
          <option value="Áo thun tay ngắn">Áo thun tay ngắn</option>
          <option value="Áo thun tay dài">Áo thun tay dài</option>
          <option value="Áo polo">Áo polo</option>
        </select>

        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        >
          <option value="">Ngân sách</option>
          <option value="Dưới 100k">Dưới 100k</option>
          <option value="100k-200k">100k - 200k</option>
          <option value="100k-200k">200k - 300k</option>
          <option value="Trên 200k">Trên 300k</option>
        </select>

        <button
          type="submit"
          className="w-full bg-earth-green text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Gửi đăng ký
        </button>
      </form>
    </div>
  );
};

export default PreorderForm;