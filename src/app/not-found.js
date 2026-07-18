import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><span>404 · LOST LUGGAGE</span><h1>Không tìm thấy chặng bay này.</h1><Link href="/">Quay về trang chủ</Link></main>;
}
