"use client";

import { useEffect } from "react";

export default function SiteMotion() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.classList.add("motion-ready");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(
      "main section > div, main section article, main section aside, main section h2, main section iframe, main .group"
    ));

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    elements.forEach((element) => observer.observe(element));

    let frame = 0;
    const updatePointer = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
        frame = 0;
      });
    };
    const updateScroll = () => root.style.setProperty("--hero-shift", `${Math.min(window.scrollY * 0.12, 80)}px`);

    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);
      if (frame) cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return <><div className="cursor-aura" aria-hidden="true" /><div className="site-wind" aria-hidden="true"><span /><span /><span /><span /></div></>;
}
