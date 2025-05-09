import { useEffect, useRef } from "react";

export default function useSmoothScroll(onScrollChange) {
  const scrollRef = useRef(null);
  const currentScroll = useRef(0);
  const targetScroll = useRef(0);
  const ease = 0.05;

  useEffect(() => {
    let isRunning = true;

    const scrollContainer = scrollRef.current;

    const updateScroll = () => {
      if (!isRunning) return;

      currentScroll.current += (targetScroll.current - currentScroll.current) * ease;

      if (scrollContainer) {
        scrollContainer.scrollTop = currentScroll.current;
        onScrollChange?.(currentScroll.current);
      }

      if (Math.abs(targetScroll.current - currentScroll.current) > 0.5) {
        requestAnimationFrame(updateScroll);
      }
    };

    const handleWheel = (e) => {
      if (!scrollContainer) return;
      e.preventDefault();

      targetScroll.current += e.deltaY;
      const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      targetScroll.current = Math.max(0, Math.min(targetScroll.current, maxScroll));
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
      targetScroll.current = scrollContainer.scrollTop;
      currentScroll.current = scrollContainer.scrollTop;
      requestAnimationFrame(updateScroll);
    }

    return () => {
      isRunning = false;

      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, [onScrollChange]);

  return scrollRef;
}
