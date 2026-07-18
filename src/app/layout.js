import "./globals.css";
import Navbar from "@/components/Navbar";
import LenisProvider from "./providers/LenisProvider";

export const metadata = {
  title: {
    default: "Đào Thị Vân Anh | Portfolio Công nghệ số & AI",
    template: "%s | Đào Thị Vân Anh",
  },
  description:
    "Portfolio học tập của Đào Thị Vân Anh, sinh viên Ngôn ngữ và Văn hóa Đức.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <LenisProvider>
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
