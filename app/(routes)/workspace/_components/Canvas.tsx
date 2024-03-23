"use client";
import { Tldraw } from 'tldraw'
import './index.css'



const CustomLogo = () => {
  return (
    <img src="/ServiceNow_logo.svg.png" 
      height={100}
      width={100}
      alt="Custom Logo" />
  );
};

const MainLogo = () => {
  return (
    <img src="/ServiceNow_logo.svg.png" 
      height={500}
      width={500}
      alt="Custom Logo" />
  );
};

function Canvas() {


  return (
    <div>


    <div style={{ position: 'fixed', inset: 0 }}>
    <Tldraw />
  </div>
  </div>
  );
}

export default Canvas;