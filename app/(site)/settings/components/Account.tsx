
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
interface AccountProps{
    currentUser:any
}
const Account:React.FC<AccountProps> = ({currentUser}) => {
    
    return ( 
        <div className="w-full px-5">
            <h1 className="font-bold text-2xl my-5">Manage Account</h1>
            <div className="font-semibold">Change Name</div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1"/> 
                <div className="collapse-title text-xl font-medium">
                    Change Email
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
                </div>
                <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-medium">
                    Change Password
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
                </div>
                <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
                
        </div>
     );
}
 
export default Account;