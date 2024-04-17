"use client";
import React from 'react'
import {Search} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {SignInButton,SignUpButton,useUser,UserButton} from '@clerk/nextjs'

function Header() {
  
  const {user,isSignedIn}=useUser(); 

  return (
    <div className='relative flex mb-8 justify-between items-center p-6  shadow-sm
    fixed w-full top-0 left-0 z-20'>
      <img
      className='cursor-pointer'
       src="./logo.png" alt="Logo"
      width={200} height={200} />
      <div className='hidden md:flex border p-2 rounded-lg bg-gray-100 w-96'>
        <input type="text" className='bg-transparent w-full outline-none' placeholder='Search'/>
        <Search/>
      </div>
      {isSignedIn?
      <UserButton afterSignOutUrl="/"/>:
      <div className='flex gap-5'>
        <SignInButton mode="modal">
            <Button variant="outline">
              Login
            </Button>
        </SignInButton>
        <SignUpButton mode='modal'>
            <Button>
                Signup
            </Button>
        </SignUpButton>
      </div>
}
    </div>
  )
}

export default Header
