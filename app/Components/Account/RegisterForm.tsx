
import { FormEvent, useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { signIn } from 'next-auth/react';
const RegisterForm = () => {
    const [isLoading,setIsLoading]=useState<boolean>(false);
    const [name,setName]=useState<undefined|string>("")
    const [email,setEmail]=useState<undefined|string>("")
    const [password,setPassword]=useState<undefined|string>("")
    function handleSubmit(e:FormEvent){
        e.preventDefault()
        setIsLoading(true)
        const data = {
            name:name,
            email:email,
            password:password,
        }
        axios.post('/api/register',data).then(()=> signIn('credentials', data))
        .catch(()=>toast.error('Something went wrong!'))
        .finally(()=> {
            setIsLoading(false)
            toast.success('Account succesfully created!')   
        })
    }
    return ( 
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your name</label>
                <input type="text" name="name" id="name" 
                 onChange={(e)=>setName(e.target.value)}
                 value={name}
                className= "sm:text-sm rounded-sm block w-full p-3" placeholder="John Doe" required/>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                <input type="email" name="email" id="email" 
                 onChange={(e)=>setEmail(e.target.value)}
                 value={email}
                className= "sm:text-sm rounded-sm block w-full p-3" placeholder="name@company.com" required/>
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter a unique password" 
                 onChange={(e)=>setPassword(e.target.value)}
                 value={password}
                className="sm:text-sm rounded-sm block w-full p-3"required/>
            </div>
            <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium">Confirm password</label>
                <input type="password" name="confirm-password" id="confirm-password" placeholder="Re-enter your password" className="sm:text-sm rounded-sm block w-full p-3" required/>
            </div>
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border"required/>
                </div>
                <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light">I accept the <a className="font-medium hover:underline" href="#">Terms and Conditions</a></label>
                </div>
            </div>
            <button type="submit" className="btn-block btn btn-neutral rounded-sm text-center" disabled={isLoading}>Create an account</button>
           
        </form>
     );
}
 
export default RegisterForm;