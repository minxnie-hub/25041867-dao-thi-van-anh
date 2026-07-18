import Link from "next/link";

export default function NavbarItem({ text, href, onClick }) {
  return (
    <Link className="nav-link" href={href} onClick={onClick}>
      <span>{text}</span>
      <span aria-hidden="true">{text}</span>
    </Link>
  );
}
