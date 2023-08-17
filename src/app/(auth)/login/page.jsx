import Form from '@/components/Form'
import { LogIn } from 'lucide-react'
import React from 'react'

const Login = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center  dark:bg-slate-900  ">
    <div className="flex min-h-4 border-slate-400 items-center justify-center py-12 px-6 sm:px-6 lg:px-8 max-w-[500px] w-[80vw] shadow-md  rounded-md border-2 border-r-slate-300">
      <div className="w-full flex flex-col items-center max-w-md space-y-4">
        {/* top  */}
        <div className="flex flex-col items-center gap-4 dark:text-slate-200 w-full">
          <LogIn size={40} />
          <h2 className="mt-4 text-center dark:text-slate-200 text-2xl font-bold tracking-tight text-grey-900">
            Sign In to your Account
          </h2>
        </div>
        {/* form */}

        <Form />
       
      </div>
    </div>
  </div>
  )
}

export default Login