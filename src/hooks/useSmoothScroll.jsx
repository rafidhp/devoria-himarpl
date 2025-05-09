import { useEffect, useRef } from "react";

export default function useSmoothScroll(onScrollChange) {
  const scrollRef = useRef(null);
  const currentScroll = useRef(0);
  const targetScroll = useRef(0);
  const ease = 0.05;
  const animationRef = useRef(null);
  const isRunningRef = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const updateScroll = () => {
      const diff = targetScroll.current - currentScroll.current;
      currentScroll.current += diff * ease;
      scrollContainer.scrollTop = currentScroll.current;
      onScrollChange?.(currentScroll.current);

      if (Math.abs(diff) > 0.5) {
        animationRef.current = requestAnimationFrame(updateScroll);
      } else {
        currentScroll.current = targetScroll.current;
        scrollContainer.scrollTop = currentScroll.current;
        animationRef.current = null;
        isRunningRef.current = false;
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY * 0.7;
      targetScroll.current += delta;
      const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      targetScroll.current = Math.max(0, Math.min(targetScroll.current, maxScroll));
      if (!isRunningRef.current) {
        isRunningRef.current = true;
        animationRef.current = requestAnimationFrame(updateScroll);
      }
    };

    const handleScrollMobile = () => {
      onScrollChange?.(scrollContainer.scrollTop);
    };

    targetScroll.current = scrollContainer.scrollTop;
    currentScroll.current = scrollContainer.scrollTop;

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

    scrollContainer.addEventListener("scroll", handleScrollMobile, { passive: true });

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
      scrollContainer.removeEventListener("scroll", handleScrollMobile);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [onScrollChange]);

  return scrollRef;
}
