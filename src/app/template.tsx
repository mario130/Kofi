import React from 'react';
import { MotionDiv } from './_components/MotionDiv';

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