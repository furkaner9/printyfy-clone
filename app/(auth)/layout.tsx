import React from 'react'


interface AuthLayoutProps {
    children: React.ReactNode
}
const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <div className='flex gap-2 max-h-screen relative'>
        
      {children}
    </div>
  )
}

export default AuthLayout
