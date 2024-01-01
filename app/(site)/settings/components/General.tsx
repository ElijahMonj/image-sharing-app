
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
interface GeneralProps{
    currentUser:any
}
const General:React.FC<GeneralProps> = ({currentUser}) => {
    const [name,setName]=useState(currentUser.name);
    const [image,setImage]=useState(currentUser.image);
    const [bio,setBio]=useState(currentUser.bio);
    const isGoogleAvatar=currentUser?.image.includes("googleusercontent");
    let avatarSource=image;
    if(isGoogleAvatar){
        avatarSource = avatarSource.replace("=s96", "=s256");
    }
    function saveChanges(){
        alert(image)
    }
    const handleUpload=(result:any)=>{
        setImage(result?.info?.secure_url)
        //@ts-ignore
       }
    return ( 
        <div className="w-full">
            <h1 className="font-bold text-2xl my-5">Edit Profile</h1>
            <div className="font-semibold">Change Name</div>
            <div className="bg-base-200 w-full p-5 rounded-lg mb-5">
                <input type="text" placeholder="Name" className="input input-sm w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required/>
            </div>

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
                          >Change Avatar
                </CldUploadButton>
            </div>
            <div className="font-semibold">Change Bio</div>
            <div>
            <textarea className="textarea resize-none textarea-sm textarea-bordered rounded-lg w-full" placeholder="Bio" 
            value={bio}
            onChange={(e) => setBio(e.target.value)}></textarea>
            </div>
            <div className="flex justify-end">
                 <button className="btn btn-sm btn-neutral"
                 onClick={saveChanges}
                 >Save</button>
            </div>
           
            
            
        </div>
     );
}
 
export default General;