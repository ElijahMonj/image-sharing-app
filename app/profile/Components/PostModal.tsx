import Image from 'next/image'

interface PostModalProps {
    
    post:any
}

const PostModal:React.FC<PostModalProps> = ({post}) => {
    return ( 
        <dialog id={post.id} className="modal">
            
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
                <div className="modal-box w-11/12 lg:w-max max-w-7xl h-auto p-0">
                    <div className="flex flex-col lg:flex-row place-items-center">
                        <div className='grid lg:w-max w-full'>
                        <Image 
                                src={post.image}
                                style={{objectFit:"contain",maxHeight:"50rem"}}
                                alt="post"
                                width={999}
                                height={999}
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