import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useElementInView = (querySelector, options = {}) => {
  const { threshold = 0.2 } = options;
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold,
  });

  useEffect(() => {
    if (inView) {
      const elements = document.querySelectorAll(querySelector);
      elements.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform = "scale(1)";
        element.style.transition = "all 1.5s";
        element.style.animationPlayState = "running";
      });
    } else {
      const elements = document.querySelectorAll(querySelector);
      elements.forEach((element) => {
        element.style.animationPlayState = "paused";
      });
    }
  }, [inView, querySelector]);

  return ref;
};

export default useElementInView;
