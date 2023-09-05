import axios from 'axios';
import { signIn } from 'next-auth/react';

function SocialAction (social:string){
    signIn("google")
    console.log("done!")
}