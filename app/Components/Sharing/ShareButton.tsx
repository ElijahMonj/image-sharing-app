import Avatar from '../Avatar';
import { PiPaperPlaneTilt } from 'react-icons/pi';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
interface ShareButtonProps{
    user:any
    postId:string
    currentUser:any
}
const ShareButton:React.FC<ShareButtonProps> = ({user,postId,currentUser}) => {

    const [isShared, setIsShared] = useState(false);

    return ( 

        <div key={user.id} className='flex flex-row justify-between py-1'>
            <div className='flex'>
                <div className='w-8'>
                    <Link href={`/profile/${user?.id}`} >
                    <Avatar 
                    width={256}
                    height={32}
                    src={user?.image as string}
                    />
                    </Link>
                </div>
            <div className='font-semibold my-auto ms-3'>
                {user.name}
            </div>
            
            </div>
            {!isShared ? 
                <button className='btn btn-xs mt-1 btn-primary w-22' onClick={()=>{
                    setIsShared(true)
                    const data = {
                        ownerId:user.id,
                        userName:currentUser.name,
                        userImage:currentUser.image,
                        link:"/post/"+postId,
                    }
                    axios.post('/api/share',data)
                        .catch(()=>{
                            toast.error('Something went wrong!')
                            setIsShared(false)
                        })
                        .finally(()=> {                   
                            toast.success('Post shared with '+user.name);
                        })
                }}><PiPaperPlaneTilt/>Share</button> :
                <button className='btn btn-xs mt-1 btn-primary btn-disabled w-22'><PiPaperPlaneTilt/>Shared</button>
            }
            
                            
        </div>

     );
}
 
export default ShareButton;