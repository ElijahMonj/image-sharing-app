'use client'
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
interface GeneralProps{
    currentUser:any
}
const General:React.FC<GeneralProps> = ({currentUser}) => {
    const [name,setName]=useState(currentUser.name);
    const [image,setImage]=useState(currentUser.image);
    const [bio,setBio]=useState(currentUser.bio);
    const [isLoading,setIsLoading]=useState(false);
    const isGoogleAvatar=currentUser?.image.includes("googleusercontent");
    let avatarSource=image;
    if(isGoogleAvatar){
        avatarSource = avatarSource.replace("=s96", "=s256");
    }
    function saveChanges(){

        if((name==currentUser.name)&&(image==currentUser.image)&&(bio==currentUser.bio)){
            toast.error('There is nothing to be saved.');
            return
        }
        if(name.length<3){
            toast('Please enter a valid name.');
            document.getElementById('nameInput')?.classList.add("input-error")
        }
        if(bio.length==0){
            setBio("No information given.")
        }
        setIsLoading(true)
        const data = {
            id:currentUser.id,
            name:name,
            image:image,
            bio:bio,
        }
        axios.post('/api/settings/general',data)
        .then(()=>toast.success('Profile updated.'))
        .catch(()=>toast.error('Something went wrong!'))
        .finally(()=> {
            setIsLoading(false)
        })
    }
    const handleUpload=(result:any)=>{
        setImage(result?.info?.secure_url)
        //@ts-ignore
       }
    return ( 
        <div className="w-full px-5">
            <h1 className="font-bold text-2xl my-5">Edit Profile</h1>
            <div className="font-semibold">Change Name</div>
            <div className="bg-base-200 w-full p-5 rounded-lg mb-5">
                <input type="text" placeholder="Name" className="input input-sm w-full"
                id="nameInput"
                value={name}
                onChange={(e) =>{
                    setName(e.target.value);
                    e.target.classList.remove("input-error");
                    }
                }
                maxLength={50}
                required/>
            </div>
            <div className="font-semibold">Change Avatar</div>
            <div className="flex justify-between bg-base-200 rounded-lg mb-5">
                {/* <Avatar size={} width={} src={}/>*/}
                <div className="avatar w-16 m-5">
                    <Image className="rounded-full" quality={100} width={256} height={16} src={avatarSource as string} alt="user avatar"/>
                </div>
                <CldUploadButton             
                          options={{maxFiles:1}}
                          onUpload={handleUpload}
                          uploadPreset='rfrpttac'
                          className="m-5 btn btn-sm btn-neutral my-auto"
                          >Upload Avatar
                </CldUploadButton>
            </div>
            <div className="font-semibold">Change Bio</div>
            <div>
            <textarea className="textarea resize-none textarea-sm textarea-bordered rounded-lg w-full" placeholder="Bio" 
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={100}></textarea>
            </div>
            <div className="flex justify-end">
                 <button className="btn btn-sm btn-neutral"
                 disabled={isLoading}
                 onClick={saveChanges}
                 >Save</button>
            </div>


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
            </div>      
        </div>
     );
}
 
export default General;