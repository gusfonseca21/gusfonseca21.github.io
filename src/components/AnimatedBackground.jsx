import React from "react";

import "./AnimatedBackground.css";

export default function AnimatedBackground({ children }) {
  return (
    <ul className='background'>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      {children}
    </ul>
  );
}
