import React, { useEffect, useState } from 'react'
import { Excalidraw, LiveCollaborationTrigger, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { FILE } from '../../dashboard/_components/FileList';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Main } from 'next/document';
function Canvas() {
  
    
    return (
    <div style={{ height: "800px" }}>
   { <Excalidraw
   
   
   
    
   
    onChange={(excalidrawElements, appState, files)=>
        (excalidrawElements)}
    UIOptions={{
        canvasActions:{
            saveToActiveFile:false,
            loadScene:true,
            
        
           

        }
    }}
    >
        <MainMenu>
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
                <WelcomeScreen.Center.MenuItemHelp/>
            </WelcomeScreen.Center>
        </WelcomeScreen>
        
        </Excalidraw>}
  </div>
  )
}

export default Canvas