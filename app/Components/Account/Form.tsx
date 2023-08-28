import {MdFacebook} from 'react-icons/md'
import {AiFillGoogleCircle,AiFillGithub} from 'react-icons/ai'
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';


const Form = () => {
    const [isRegister,setIsRegister] = useState(false)
    
    function formType(){
      if(!isRegister){
        return (
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tightmd:text-2xl">
                Sign-in
            </h1>
            <LoginForm/>
            <div className="divider">or continue with:</div>
                <div className="grid grid-cols-3 place-content-center">
                    <button className="btn btn-sm"><MdFacebook className="h-4 w-4"/>Facebook</button>
                    <button className="btn btn-sm"  onClick={()=>signIn("google")}><AiFillGoogleCircle className="h-4 w-4"/>Google</button>
                    <button className="btn btn-sm" onClick={()=>signIn("github")}><AiFillGithub className="h-4 w-4"/>Github</button>
                </div>
            <p className="text-sm font-light text-center">
                Don&apos;t have an account? <a onClick={()=>setIsRegister(true)} className="cursor-pointer font-medium hover:underline">Create an account</a>
            </p>
        </div>
        )
      } else{
        return(
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tightmd:text-2xl">
                    Create and account
                </h1>
                <RegisterForm/>
                <div className="divider">or continue with:</div>
                <div className="grid grid-cols-3 place-content-center">
                    <button className="btn btn-sm"><MdFacebook className="h-4 w-4"/>Facebook</button>
                    <button className="btn btn-sm"><AiFillGoogleCircle className="h-4 w-4"/>Google</button>
                    <button className="btn btn-sm"><AiFillGithub className="h-4 w-4"/>Github</button>
                </div>
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