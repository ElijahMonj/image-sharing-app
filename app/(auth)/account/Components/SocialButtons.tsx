import { signIn } from 'next-auth/react';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';
const ScoailButtons = () => {
    return ( 
        <div className="grid grid-cols-3 place-content-center">
            <button className="btn btn-sm hidden lg:inline-flex md:inline-flex sm:inline-flex"><MdFacebook className="h-4 w-4"/>Facebook</button>
            <button className="btn btn-sm hidden lg:inline-flex md:inline-flex sm:inline-flex"  onClick={()=>signIn("google")}><AiFillGoogleCircle className="h-4 w-4"/>Google</button>
            <button className="btn btn-sm hidden lg:inline-flex md:inline-flex sm:inline-flex" onClick={()=>signIn("github")}><AiFillGithub className="h-4 w-4"/>Github</button>

            <button className="btn lg:hidden md:hidden sm:hidden"><MdFacebook className="h-8 w-8"/></button>
            <button className="btn lg:hidden md:hidden sm:hidden"  onClick={()=>signIn("google")}><AiFillGoogleCircle className="h-8 w-8"/></button>
            <button className="btn lg:hidden md:hidden sm:hidden" onClick={()=>signIn("github")}><AiFillGithub className="h-8 w-8"/></button>
        </div>
     );
}
 
export default ScoailButtons;