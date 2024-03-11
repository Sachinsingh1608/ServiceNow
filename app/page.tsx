import dynamic from "next/dynamic";
import Image from "next/image";


import WorkspaceHeader from "./(routes)/workspace/_components/WorkspaceHeader";

const Canvas = dynamic(
  async () => (await import("./(routes)/workspace/_components/Canvas")).default,
  {
    ssr: false,
  },
);

export default function Home() {
  
  


  return (
    <div>
      <WorkspaceHeader/>
      <Canvas />
    </div>
  );
}
