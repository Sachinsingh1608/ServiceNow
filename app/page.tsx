"use client"
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import WorkspaceHeader from "./(routes)/workspace/_components/WorkspaceHeader";
import Canvas from "./(routes)/workspace/_components/Canvas";

export default function Home() {
  
  const {user}=useKindeBrowserClient();

  useEffect(()=>{
    console.log("--",user)
  },[user])
  return (
    <div>
      <WorkspaceHeader/>
      <Canvas
            
            />
    </div>
  );
}
