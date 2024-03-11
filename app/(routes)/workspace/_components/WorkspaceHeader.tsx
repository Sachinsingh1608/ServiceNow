import { Button } from '@/components/ui/button'
//@ts-ignore
import { Link, Save } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader({onSave}:any) {
  return (
    <div className='p-3 border-b flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <Image src={'/ServiceNow_logo.svg.png'}
          alt='logo'
          height={200}
          width={200} />
        
      </div>
      <div className='flex items-center gap-4'>
        
       
      </div>
    </div>
  )
}

export default WorkspaceHeader