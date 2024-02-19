import { signIn } from 'next-auth/react';
import {MdFacebook} from 'react-icons/md'
import {AiFillGoogleCircle,AiFillGithub} from 'react-icons/ai'
const ScoailButtons = () => {
    return ( 
        <div className="grid grid-cols-2 place-content-center">
            
            <button className="btn" onClick={()=>signIn("google")}><AiFillGoogleCircle className="h-6 w-6"/>Google</button>
            <button className="btn" onClick={()=>signIn("github")}><AiFillGithub className="h-6 w-6"/>Github</button>
        </div>
     );
}
 
export default ScoailButtons;