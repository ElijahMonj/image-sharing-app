
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import {toast} from 'react-hot-toast'
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();
    const [isLoading,setIsLoading]=useState<boolean>(false);
    const [email,setEmail]=useState<undefined|string>("")
    const [password,setPassword]=useState<undefined|string>("")
    function handleSubmit(e:FormEvent){
        
        e.preventDefault()
        setIsLoading(true)
        const data={
            email:email,
            password:password
        }
        signIn("credentials",{
            ...data,
            redirect:false,
        }).then((callback)=>{
            if(callback?.error){
                toast.error('Invalid credentials');
            }
            if(callback?.ok && !callback?.error){
                toast.success('Logged in!')
            }
        })
        .finally(()=>{
            setIsLoading(false)
            router.refresh()
        })
    }
    return ( 
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <button onClick={()=>toast.success('Logged in!')} type='button'>Test</button>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                    <input type="email" name="email" id="email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    className= "sm:text-sm rounded-sm block w-full p-3" placeholder="name@company.com" required/>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" 
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    className="sm:text-sm rounded-sm block w-full p-3"required/>
                </div>
                
                <button type="submit" className="btn-block btn btn-neutral rounded-sm text-center" disabled={isLoading}>Sign-in</button>
                
        </form>
     );
}
 
export default LoginForm;