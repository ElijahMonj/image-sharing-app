
import prisma from "@/app/libs/prismadb";
import Image from 'next/image'
import Comments from './Comments';
import defaultAvatar from '@/public/images/defaultAvatar.jpg'
import ShareModal from "../Sharing/ShareModal";

interface PostModalProps {
    postId:string
    currentUser:any
}

const PostModal:React.FC<PostModalProps> = async ({currentUser,postId}) => {

    const user = await prisma.user.findUnique({
        where:{
            id:currentUser.id
        }
    })
    const post = await prisma.post.findUnique({
        where:{
            id:postId
        },
        include:{
            author:true,
            comments:true
        }
    })
    const postComments = await prisma.comment.findMany({
        where:{
            postId:post?.id
        }, 
        include:{
            author:true,
        }
    })
    let taggedUser;
    if((post?.tagged.length==0) || (post?.tagged[0]=="")){
        taggedUser=false
    }else{
        taggedUser = await prisma.user.findUnique({
            where:{
                id:post?.tagged[0]
            }
        })
    }
     
    return ( 
        <dialog id={`post_modal_${postId}`} className="modal">
                
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
                <div className="modal-box w-11/12 lg:w-max max-w-7xl h-auto p-0">
                    
                    <div className="flex flex-col lg:flex-row place-items-center items-stretch">
                        <div className='grid lg:w-max w-full bg-slate-950'>
                            
                            <Image 
                            src={post?.image ? post?.image : defaultAvatar}
                            style={{objectFit:"contain",maxHeight:"50rem"}}
                            alt="post"
                            width={999}
                            height={999}
                            className='flex-grow rounded-sm w-full my-auto'/>
                            
                        
                        </div>
                       
                        <div className="grid lg:max-w-96 card bg-base-300 rounded-box">
                        
                            <Comments postData={post} postComments={postComments} currentUser={user} isTagged={taggedUser}/>
                        
                        </div>
                    </div>
                    
                   
                </div>
                <ShareModal currentUser={currentUser} postId={postId}/> 
            </dialog>
     );
}
 
export default PostModal;