"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Plane, Mail } from "lucide-react";
import NavbarItem from "./NavbarItem";

const links = [
  { text: "Giới thiệu", href: "/#gioi-thieu" },
  { text: "Dự án", href: "/#du-an" },
  { text: "Tổng kết", href: "/#tong-ket" },
  { text: "Liên hệ", href: "/#lien-he" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="site-nav">
        <Link href="/" className="nav-brand" aria-label="Trang chủ Đào Thị Vân Anh">
          <span className="brand-mark">VA</span>
          <span className="brand-copy"><strong>Vân Anh</strong><small>Deutsch · Digital</small></span>
        </Link>
        <nav className="nav-desktop" aria-label="Điều hướng chính">
          {links.map((link) => <NavbarItem key={link.text} {...link} />)}
        </nav>
        <a className="nav-mail" href="mailto:daovananhh2007@gmail.com"><Mail size={15}/><span>Email</span></a>
        <button className="nav-menu-button" onClick={() => setOpen(true)} aria-label="Mở menu"><Menu size={21}/></button>
      </header>

      <div className={`menu-overlay ${open ? "is-open" : ""}`} onClick={() => setOpen(false)}>
        <div className="menu-panel" onClick={(event) => event.stopPropagation()}>
          <div className="menu-head">
            <span>BOARDING MENU</span>
            <button onClick={() => setOpen(false)} aria-label="Đóng menu"><X size={22}/></button>
          </div>
          <div className="menu-route"><Plane size={18}/><span>Việt Nam</span><i/><span>Deutschland</span></div>
          <nav aria-label="Điều hướng di động">
            {links.map((link, index) => (
              <Link key={link.text} href={link.href} onClick={() => setOpen(false)}>
                <small>0{index + 1}</small><span>{link.text}</span>
              </Link>
            ))}
          </nav>
          <a className="menu-email" href="mailto:daovananhh2007@gmail.com">daovananhh2007@gmail.com</a>
        </div>
      </div>
    </>
  );
}
