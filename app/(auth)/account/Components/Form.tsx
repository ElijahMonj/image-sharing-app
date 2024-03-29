'use client'
import { useState } from 'react';
import { SiLens } from "react-icons/si";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import SocialButtons from './SocialButtons';

const Form = () => {
    const [isRegister,setIsRegister] = useState(false)
    
    function formType(){
      if(!isRegister){
        return (
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="normal-case text-3xl ms-auto me-auto w-full flex gap-2 font-semibold justify-center"><SiLens className="mt-1"/>Swiftsnap</div>
            <h1 className="text-xl font-bold leading-tight tracking-tightmd:text-xl">
                Sign-in
            </h1>
            <LoginForm/>
            <div className="divider">or continue with:</div>
                <SocialButtons />
            <p className="text-sm font-light text-center">
                Don&apos;t have an account? <a onClick={()=>setIsRegister(true)} className="cursor-pointer font-medium hover:underline">Create an account</a>
            </p>
        </div>
        )
      } else{
        return(
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tightmd:text-xl text-center">
                    Create an account
                </h1>
                <RegisterForm/>
                <div className="divider">or continue with:</div>
                <SocialButtons />
                <p className="text-sm font-light text-center">
                    Already have an account? <a onClick={()=>setIsRegister(false)} className="font-medium hover:underline cursor-pointer">Sign-in</a>
                </p>
            </div>
        )
      } 
    }
    return ( 
        <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-base-200">
            {formType()}
        </div>
     );
}
 
export default Form;