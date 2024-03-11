"use client"
import Image from "next/image";


import WorkspaceHeader from "./(routes)/workspace/_components/WorkspaceHeader";
import Canvas from "./(routes)/workspace/_components/Canvas";

export default function Home() {
  
  


  return (
    <div>
      <WorkspaceHeader/>
      <Canvas />
    </div>
  );
}
