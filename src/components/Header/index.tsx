import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const headerY = useTransform(
    scrollYProgress,
    [0.08, 0.1],
    ['0%', '-100%'],
  )

  return (
    <Container style={{
      y: headerY,
    }} >
      <h3 style={{ fontFamily: 'sans-serif', fontWeight:'bold', color:'green'}}>Header</h3>
    </Container>
  );
};

export default Header;
