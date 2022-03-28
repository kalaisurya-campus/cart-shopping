import * as React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const ChildScrollParallax = () => {
  const [scrollEl, setScrollElement] = React.useState<HTMLDivElement>(null);
  const ref = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    setScrollElement(ref.current);
  });

  return (
    <div className="your-scroll-container" ref={ref}>
      <ParallaxProvider scrollContainer={scrollEl}>
        {props.children}
      </ParallaxProvider>
    </div>
  );
};