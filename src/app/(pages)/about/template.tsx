import { MotionDiv } from '@/app/_components/MotionDiv';
import React from 'react';

export default function Template(props: { children: React.ReactNode }) {
  return (
    <MotionDiv
      layout
      transition={{ ease: "easeInOut", duration: 0.4 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {props.children}
    </MotionDiv>
  );
};