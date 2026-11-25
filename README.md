# Thiệp mời Lễ tốt nghiệp – Nhật Long

Thiệp mời online cho Lễ tốt nghiệp của Nhật Long, Trường Đại học Khoa học Tự nhiên – ĐHQG-HCM.
Thứ Năm 26/11/2026 · 10:30 – 12:00 · Giảng đường 1, 227 Nguyễn Văn Cừ, Phường Chợ Quán, TP.HCM.

## Các file

| File | Nội dung |
| --- | --- |
| `index.html` | Thiệp mời: phong thư dấu sáp → thiệp có ảnh, lời mời, thời gian và đếm ngược, địa điểm (link Google Maps), chỗ gửi xe, liên hệ, pháo hoa và mũ cử nhân |
| `bai-do-xe.html` | Trang "Xem chỗ gửi xe": danh sách 4 bãi đỗ xe, mỗi bãi có nút chỉ đường Google Maps |
| `config.js` | **Toàn bộ thông tin trên thiệp.** Chỉ cần sửa file này, cả 2 trang tự cập nhật |
| `assets/` | Ảnh của Long (đã cắt sẵn), logo trường KHTN (bản xanh và bản trắng) |

## Gửi thiệp kèm tên người nhận

Thêm `?to=Tên` vào cuối đường link, dùng dấu `+` thay cho khoảng trắng:

```
https://<địa-chỉ-thiệp>/?to=Thầy+Minh
https://<địa-chỉ-thiệp>/?to=Chị+Hà
```

Phong thư sẽ ghi "Gửi Thầy Minh", lá thư ghi "Thân mời Thầy Minh". Link không có `?to=` thì
khách được mời tự nhập tên ở ngoài phong thư (không bắt buộc).

## Sửa thông tin

Mở `config.js`:

- `event`: ngày (`YYYY-MM-DD`), giờ bắt đầu/kết thúc, giảng đường, địa chỉ, `mapUrl` (link Google Maps).
- `message`: lời nhắn trong thư, mỗi đoạn là một dòng.
- `parking`: 4 bãi đỗ xe. Mỗi bãi có `name`, `where` (địa chỉ ngắn), `mapUrl` (dán link Google Maps
  của bãi), `vehicles` (ví dụ `["Xe máy", "Ô tô"]`), `note` (giá, giờ mở cửa…). Bãi nào chưa có
  link thì trang hiện số điện thoại của Long để khách hỏi đường.

## Xem thử trên máy

Mở `index.html` bằng trình duyệt là xem được. Muốn phong thư hiện lại sau khi đã mở, đóng tab và mở lại.

## Đưa lên mạng bằng GitHub Pages

Repo → **Settings → Pages** → *Source: Deploy from a branch* → chọn nhánh chứa thiệp, thư mục `/ (root)` → **Save**.
Sau khoảng 1 phút thiệp có địa chỉ dạng `https://<tên-tài-khoản>.github.io/Thi-p-m-i/`.
