/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function MediaGallery({ items = [], columns = 2 }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const close = (event) => { if (event.key === "Escape") setActive(null); };
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="media-gallery" style={{ "--gallery-columns": columns }}>
        {items.map((item, index) => (
          <figure key={`${item.src}-${index}`}>
            <button type="button" onClick={() => setActive(item)} aria-label={`Phóng to ${item.alt || item.caption}`}>
              <img src={`${base}${item.src}`} alt={item.alt || item.caption || "Ảnh minh chứng"} loading="lazy"/>
              <span><ZoomIn size={17}/> Phóng to</span>
            </button>
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ))}
      </div>
      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Xem ảnh minh chứng" onClick={() => setActive(null)}>
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Đóng ảnh"><X size={24}/></button>
          <div onClick={(event) => event.stopPropagation()}>
            <img src={`${base}${active.src}`} alt={active.alt || active.caption || "Ảnh minh chứng"}/>
            {active.caption && <p>{active.caption}</p>}
          </div>
        </div>
      )}
    </>
  );
}
