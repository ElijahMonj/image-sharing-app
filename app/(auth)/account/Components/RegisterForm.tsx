
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import Terms from './Terms';
const RegisterForm = () => {
    const router = useRouter();
    const [isLoading,setIsLoading]=useState<boolean>(false);
    const [boxDisabled,setBoxDisabled]=useState<boolean>(true)
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
        console.log(email)
        axios.post('/api/register',data).then(()=> {
            signIn('credentials', data)
            toast.success('Account succesfully created!')
            router.push('/') 
        })
        .catch((err)=>
        {
            if(err.response.data=='Email already in use'){
                toast.error('Username or email is already in use.')
                document.getElementById('email')?.classList.add("input-error")
            }else{
                toast.error('Something went wrong!')
            }
        })
        .finally(()=> {
            setIsLoading(false) 
        })
    }
    return ( 
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your name</label>
                <input type="text" name="name" id="name" 
                 onChange={(e)=>setName(e.target.value)}
                 value={name}
                className= "sm:text-sm input block w-full p-3 input-bordered" placeholder="John Doe" required/>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email or username</label>
                <input type="text" name="email" id="email" 
                 onChange={(e)=>{
                    setEmail(e.target.value)
                    e.target.classList.remove("input-error");
                 }}
                 value={email}
                className= "sm:text-sm input block w-full p-3 input-bordered" placeholder="name@company.com" required/>
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter a unique password" 
                 onChange={(e)=>setPassword(e.target.value)}
                 value={password}
                className="sm:text-sm input block w-full p-3 input-bordered"required/>
            </div>
            <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium">Confirm password</label>
                <input type="password" name="confirm-password" id="confirm-password" placeholder="Re-enter your password" className="sm:text-sm input block w-full p-3 input-bordered" required/>
            </div>
            <div className="flex justify-center">
                <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border"required disabled={boxDisabled}/>
                </div>
                <div className="ml-3 text-sm ">
                <label htmlFor="terms" className="font-light">I accept the <a className="font-medium hover:underline" href="#"
                onClick={()=>{
                    setBoxDisabled(false)
                    
                    //@ts-ignore
                    document.getElementById('termsmodal').showModal();
                    //@ts-ignore
                    document.getElementById('termstext').scrollTop = 0;}
                    }>Terms and Conditions</a></label>
                </div>
            </div>
            <button type="submit" className="btn-block btn btn-neutral rounded-sm text-center" disabled={isLoading}>Create an account</button>
            <Terms/>
        </form>
     );
}
 
export default RegisterForm;