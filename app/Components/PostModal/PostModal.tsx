import Image from 'next/image'
import Comments from './Comments';

interface PostModalProps {
    
    post:any
}

const PostModal:React.FC<PostModalProps> = ({post}) => {
    return ( 
        <dialog id={'post_modal'} className="modal">
            
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
                <div className="modal-box w-11/12 lg:w-max max-w-7xl h-auto p-0">
                    
                    <div className="flex flex-col lg:flex-row place-items-center items-stretch">
                        <div className='grid lg:w-max w-full'>
                        <Image 
                                src={post.image}
                                style={{objectFit:"contain",maxHeight:"50rem"}}
                                alt="post"
                                width={999}
                                height={999}
                                className='flex-grow rounded-sm w-full'/>
                        </div>
                       
                        <div className="grid w-96 lg:max-w-96 card bg-base-300 rounded-box">
                            <Comments data={post}/>
                        </div>
                    </div>
                    
                   
                </div>
            </dialog>
     );
}
 
export default PostModal;