/* =====================================================================
   THÔNG TIN TRÊN THIỆP — chỉ cần sửa file này, cả 2 trang tự cập nhật.
   (index.html = thiệp mời, bai-do-xe.html = danh sách bãi đỗ xe)
   ===================================================================== */
window.THIEP = {
  graduate: {
    name: "Nhật Long",                 // tên hiển thị trên thiệp
    shortName: "Long",                 // tên gọi trong lời nhắn
    classOf: "2026",
    photo: "assets/long-chan-dung.jpg",   // ảnh trong khung vòm
    photoFull: "assets/long-toan-canh.jpg", // ảnh polaroid
    phone: "0898682979",
  },

  school: {
    name: "Trường Đại học Khoa học Tự nhiên",
    short: "HCMUS",
    sub: "ĐHQG-HCM",
    logo: "assets/logo-khtn.png",
  },

  event: {
    date: "2026-11-26",      // YYYY-MM-DD
    start: "10:30",
    end: "12:00",
    tz: "+07:00",
    venue: "Giảng đường 1",
    campus: "Trường Đại học Khoa học Tự nhiên – Cơ sở 1",
    address: "227 Nguyễn Văn Cừ, Phường Chợ Quán, TP.HCM",
    mapUrl: "https://maps.app.goo.gl/XkD8krvVbiMBUw3J6",
  },

  // Tên khách mặc định khi link không có ?to=Tên
  defaultGuest: "bạn",

  message: [
    "Sau những năm tháng học tập dưới mái trường Khoa học Tự nhiên, Long sắp chính thức nhận tấm bằng tốt nghiệp.",
    "Long rất mong bạn đến chung vui và chụp cùng Long thật nhiều tấm ảnh kỷ niệm. Sự hiện diện của bạn là niềm vinh hạnh của Long!",
  ],

  /* 4 bãi đỗ xe. Mỗi bãi: dán link Google Maps vào mapUrl nếu có;
     để trống thì nút "Chỉ đường" tự tìm theo mapQuery.
     vehicles: ví dụ ["Xe máy", "Ô tô"]; note: ghi chú thêm (giá, giờ mở cửa...). */
  parking: [
    {
      name: "Bãi đỗ xe chính ĐHKHTN",
      where: "Khu vực Trường ĐH Khoa học Tự nhiên · 227 Nguyễn Văn Cừ",
      vehicles: [],
      note: "",
      mapUrl: "https://maps.app.goo.gl/XkD8krvVbiMBUw3J6",
      mapQuery: "",
    },
    {
      name: "Bãi đỗ xe phụ ĐHKHTN",
      where: "Khu vực Trường ĐH Khoa học Tự nhiên · 227 Nguyễn Văn Cừ",
      vehicles: [],
      note: "",
      mapUrl: "https://maps.app.goo.gl/XkD8krvVbiMBUw3J6",
      mapQuery: "",
    },
    {
      name: "Bãi đỗ xe Chuyên Lê Hồng Phong",
      where: "Trường THPT chuyên Lê Hồng Phong · 235 Nguyễn Văn Cừ, ngay cạnh trường KHTN",
      vehicles: [],
      note: "",
      mapUrl: "https://maps.app.goo.gl/AuHX9vRo86T3s1R49",
      mapQuery: "Trường THPT chuyên Lê Hồng Phong, 235 Nguyễn Văn Cừ, TP.HCM",
    },
    {
      name: "Bãi đỗ xe ĐH Sư phạm TP.HCM",
      where: "Trường ĐH Sư phạm TP.HCM · 280 An Dương Vương",
      vehicles: [],
      note: "",
      mapUrl: "https://maps.app.goo.gl/iDaUPzhskU2p4aE89",
      mapQuery: "",
    },
  ],
};
