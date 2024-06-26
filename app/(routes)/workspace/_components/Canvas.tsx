"use client"
import React, { useEffect, useState } from 'react'
import {  LiveCollaborationTrigger, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import dynamic from "next/dynamic";

const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  },
);

// Custom Logo component
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
    <div style={{ height: "800px" }}>
      <Excalidraw
        onChange={(excalidrawElements, appState, files) => (excalidrawElements)}
        UIOptions={{
          canvasActions: {
            saveToActiveFile: false,
            loadScene: true,
          }
        }}
      >
        <MainMenu>
        <CustomLogo />
          <MainMenu.DefaultItems.ClearCanvas/>
        
          <MainMenu.DefaultItems.Export/>
          <MainMenu.DefaultItems.SaveAsImage/>
          <MainMenu.DefaultItems.ToggleTheme/>
          <MainMenu.DefaultItems.ChangeCanvasBackground/>
        </MainMenu>
        <WelcomeScreen>
          <WelcomeScreen.Hints.MenuHint/>
          <WelcomeScreen.Hints.MenuHint/>
          <WelcomeScreen.Hints.ToolbarHint/>
          <WelcomeScreen.Center>
            
           <MainLogo/>
          </WelcomeScreen.Center>
        </WelcomeScreen>
      </Excalidraw>
    </div>
  )
}

export default Canvas;
