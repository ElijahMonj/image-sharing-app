'use client'
import Avatar from "@/app/Components/Avatar";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
interface GeneralProps{
    currentUser:any
}
const General:React.FC<GeneralProps> = ({currentUser}) => {
    const [oldName, setOldName] = useState(currentUser.name);
    const [oldImage, setOldImage] = useState(currentUser.image);
    const [oldBio, setOldBio] = useState(currentUser.bio);

    const [name,setName]=useState(currentUser.name);
    const [image,setImage]=useState(currentUser.image);
    const [bio,setBio]=useState(currentUser.bio);
    const [isLoading,setIsLoading]=useState(false);
    const [password,setPassword]=useState<undefined|string>("")
    const [confirmPassword,setConfirmPassword]=useState<undefined|string>("")
    const isGoogleAvatar=currentUser?.image.includes("googleusercontent");
    let avatarSource=image;
    if(isGoogleAvatar){
        avatarSource = avatarSource.replace("=s96", "=s256");
    }
    function saveChanges(){
        
        if((name==oldName)&&(image==oldImage)&&(bio==oldBio)){
            toast.error('There is nothing to be saved.');
            return
        }
        if(name.length<3){
            toast('Please enter a valid name.');
            document.getElementById('nameInput')?.classList.add("input-error")
            return
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
            setOldName(name)
            setOldImage(image)
            setOldBio(bio)
            setIsLoading(false)
        })
    }
    const handleUpload=(result:any)=>{
        setImage(result?.info?.secure_url)
        //@ts-ignore
       }
    function handleSubmit(e:FormEvent){
        e.preventDefault()
        if(confirmPassword==password){
            setIsLoading(true)
            const data = {
                id:currentUser.id,
                password:password,
            } 
            axios.post('/api/settings/password',data).then(()=> {
                setPassword("")
                setConfirmPassword("")
                toast.success('Password Changed.')
            })
            .catch(()=>toast.error('Something went wrong!'))
            .finally(()=> {
                setIsLoading(false)
            })
        }else{
            document.getElementById("confirmPassword")?.classList.add("input-error");
            toast.error('Password do match match! Please confirm your password.')
        }
        
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
                
                <div className="avatar w-16 m-5">       
                    <Avatar width={256} height={256} src={avatarSource as string}/>
                </div>
                <CldUploadButton             
                    options={{
                        maxFiles:1,
                        sources: ['local'],
                        cropping:true,
                        resourceType:'image',
                        minImageWidth:300,
                        minImageHeight:300,
                        theme:'minimal',
                        croppingAspectRatio:1.0
                    }}
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
            <div className="font-semibold">Change Password</div>
                <div className="bg-base-200 w-full p-5 rounded-lg mb-3">
                   <form onSubmit={handleSubmit}>
                    <input type="password" name="password" placeholder="Enter new password" className="input input-sm w-full mb-3"
                    id="password"
                    value={password}
                    onChange={(e) =>{
                        setPassword(e.target.value);
                       
                        }
                    }
                    maxLength={50}
                    required/>
                    <input type="password" name="confirmPassowrd" placeholder="Confirm password" className="input input-sm w-full"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) =>{
                        setConfirmPassword(e.target.value);
                        e.target.classList.remove("input-error");
                        }
                    }
                    maxLength={50}
                    required/>
                    <div className="flex justify-end mt-2">
                        <button className="btn btn-sm btn-neutral"
                            disabled={isLoading}
                            type="submit"
                            >Confirm</button>
                    </div> 
                    </form>   
                </div>   
                
        </div>
     );
}
 
export default General;