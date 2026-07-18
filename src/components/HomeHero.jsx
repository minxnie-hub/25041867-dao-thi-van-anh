"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, MapPin, Plane } from "lucide-react";
import innerImage from "@/assets/images/innerImage.webp";
import outerImage from "@/assets/images/outerImage.webp";
import shadowImage from "@/assets/images/shadowImage.webp";
import aboveImage from "@/assets/images/aboveImage.webp";
import skyImage from "@/assets/images/skyImage.webp";
import cloudsImage from "@/assets/images/cloudsImage.webp";
import logo from "@/assets/images/logo.svg";

gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {
  const scope = useRef(null);
  const windowLayer = useRef(null);
  const copyLayer = useRef(null);
  const logoLayer = useRef(null);
  const arrival = useRef(null);

  useGSAP(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const mm = gsap.matchMedia();
    mm.add({ desktop: "(min-width: 900px)", mobile: "(max-width: 899px)" }, (ctx) => {
      const scale = ctx.conditions.desktop ? 5.4 : 4.1;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
        },
      });
      timeline
        .to(windowLayer.current, { scale, rotate: 0.01, ease: "power2.inOut" }, 0)
        .to(copyLayer.current, { opacity: 0, scale: 1.35, y: -60, ease: "power2.in" }, 0)
        .to(logoLayer.current, { y: ctx.conditions.desktop ? -260 : -190, scale: 0.58, opacity: 0.88, ease: "power2.inOut" }, 0.12)
        .fromTo(arrival.current, { opacity: 0, y: 90, filter: "blur(12px)" }, { opacity: 1, y: 0, filter: "blur(0px)", ease: "power3.out" }, 0.62);
    });
    return () => mm.revert();
  }, { scope });

  return (
    <section ref={scope} className="hero-scroll" aria-label="Mở đầu portfolio">
      <div className="hero-sticky">
        <Image className="hero-sky" src={skyImage} alt="Khung cảnh nước Đức nhìn từ máy bay" fill priority sizes="100vw" />
        <div className="hero-clouds" style={{ backgroundImage: `url(${cloudsImage.src})` }} />
        <div className="hero-gradient" />

        <div ref={logoLayer} className="hero-logo">
          <Image src={logo} alt="Biểu trưng Đào Thị Vân Anh" priority />
          <p>ĐÀO THỊ VÂN ANH</p>
          <span>25041867 · NN&amp;VH Đức</span>
        </div>

        <div ref={windowLayer} className="hero-window" aria-hidden="true">
          <Image src={innerImage} alt="" fill priority className="window-image" />
          <Image src={shadowImage} alt="" fill priority className="window-image window-shadow" />
          <Image src={outerImage} alt="" fill priority className="window-image" />
          <div className="window-top"><Image src={aboveImage} alt="" /></div>
        </div>

        <div ref={copyLayer} className="hero-copy">
          <div className="hero-copy-left">
            <span className="hero-kicker">PORTFOLIO · CNS &amp; AI</span>
            <h1>Từ một<br/>chuyến bay</h1>
            <p>Mỗi kỹ năng số là một chặng nhỏ trên hành trình học ngôn ngữ, hiểu văn hóa và tiến gần hơn đến nước Đức.</p>
          </div>
          <div className="hero-copy-right">
            <h2>đến những<br/><em>chân trời mới.</em></h2>
            <div className="route-mini"><span>VN</span><i/><Plane size={16}/><i/><span>DE</span></div>
          </div>
        </div>

        <div className="hero-scroll-cue"><ArrowDown size={17}/><span>Cuộn để bắt đầu hành trình</span></div>

        <div ref={arrival} className="hero-arrival">
          <span className="arrival-label"><MapPin size={15}/> DESTINATION · DEUTSCHLAND</span>
          <h2>Sáu bài tập.<br/>Một hành trình học tập.</h2>
          <p>Portfolio ghi lại quá trình Đào Thị Vân Anh thực hành kỹ năng số, nghiên cứu học thuật và sử dụng AI có trách nhiệm.</p>
        </div>
      </div>
    </section>
  );
}
