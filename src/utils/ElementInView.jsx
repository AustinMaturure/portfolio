import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useElementInView = (querySelector, options = {}) => {
  const { threshold = 0.2 } = options;
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold,
  });

  useEffect(() => {
    const elements = document.querySelectorAll(querySelector);

    if (inView) {
      elements.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform = "scale(1)";
        element.style.transition = "all 1.5s";
        element.style.animationPlayState = "running";
      });
    } else {
      elements.forEach((element) => {
        element.style.animationPlayState = "paused";
      });
    }
  }, [inView, querySelector]);

  return { ref, inView };
};

export default useElementInView;
