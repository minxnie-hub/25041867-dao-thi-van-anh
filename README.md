# Portfolio Đào Thị Vân Anh — 25041867

Portfolio môn **Nhập môn Công nghệ số & AI** dành cho Đào Thị Vân Anh, sinh viên ngành **Ngôn ngữ và Văn hóa Đức**.

## Ý tưởng thiết kế

Giao diện sử dụng hình ảnh **chuyến bay từ Việt Nam đến Đức** làm mạch kể xuyên suốt. Hiệu ứng cửa sổ máy bay của source gốc được giữ lại và tái thiết kế toàn bộ phần nhận diện, nội dung, hình ảnh đích đến, logo, màu sắc và các trang dự án.

## Nội dung

- Trang giới thiệu cá nhân theo bố cục thẻ lên máy bay.
- Sáu bài tập được trình bày thành sáu trang chi tiết riêng.
- Bảng dữ liệu được dựng lại bằng HTML, không nhúng PDF thay cho nội dung.
- Ảnh minh chứng nằm ngay sau phần nội dung liên quan và có chế độ phóng to.
- Có phần tổng kết cá nhân, liên hệ và liên kết tới tài liệu PDF gốc.
- Hỗ trợ desktop, tablet và mobile.
- Xuất website tĩnh và có sẵn workflow triển khai GitHub Pages.

## Chạy trên máy

```bash
npm ci
npm run dev
```

Mở `http://localhost:3000`.

## Kiểm tra bản production

```bash
npm run lint
npm run build
```

Sau khi build, website tĩnh nằm trong thư mục `out`.

## Triển khai GitHub Pages

1. Tạo repository mới và đưa toàn bộ source lên nhánh `main`.
2. Vào **Settings → Pages**.
3. Tại **Build and deployment → Source**, chọn **GitHub Actions**.
4. Workflow `.github/workflows/deploy.yml` sẽ tự build và deploy sau mỗi lần push lên `main`.

`next.config.mjs` tự nhận tên repository trên GitHub Actions để thiết lập `basePath`, vì vậy các ảnh, file PDF và đường dẫn trang con vẫn hoạt động khi deploy dưới dạng `https://username.github.io/repository-name/`.

## Thông tin sinh viên

- **Họ và tên:** Đào Thị Vân Anh
- **Mã sinh viên:** 25041867
- **Ngành/Khoa:** NN&VH Đức
- **Email:** daovananhh2007@gmail.com
