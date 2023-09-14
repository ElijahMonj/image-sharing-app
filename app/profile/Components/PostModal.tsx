import Image from 'next/image'
import Picture from '@/public/test/1by1.jpg'
import Phone from '@/public/test/phone.jpg'
import Desktop from '@/public/test/desktop.jpg'
import Long from "@/public/test/long.jpg";
interface PostModalProps {
    postId:any
    data:any
}

const PostModal:React.FC<PostModalProps> = ({postId,data}) => {
    return ( 
        <dialog id={postId} className="modal">
            
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
                <div className="modal-box w-11/12 lg:w-max max-w-7xl h-auto p-0">
                    <div className="flex flex-col lg:flex-row place-items-center">
                        <div className='grid lg:w-max w-full'>
                        <Image 
                                src={Phone}
                                style={{objectFit:"contain",maxHeight:"50rem"}}
                                alt="post"
                                className='flex-grow rounded-sm w-full'/>
                        </div>
                       
                        <div className="divider lg:divider-horizontal">OR</div> 
                        <div className="grid h-auto lg:max-w-96 card bg-base-300 rounded-box place-items-center">content</div>
                    </div>
                </div>
            </dialog>
     );
}
 
export default PostModal;