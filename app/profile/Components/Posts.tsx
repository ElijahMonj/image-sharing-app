import Picture from '@/public/test/1by1.jpg'
import Phone from '@/public/test/phone.jpg'
import Desktop from '@/public/test/desktop.jpg'
import Long from "@/public/test/long.jpg";
import Image from 'next/image';
import PostModal from './PostModal';

const Posts = () => {
    const posts = [
        {id: 1, name: 'Alice', src:Picture},
        {id: 2, name: 'Bob', src:Phone},
        {id: 3, name: 'Carl', src:Desktop},
        {id: 4, name: 'Dean', src:Long},
      ];
    return ( 
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {posts.map(posts => {
                return (
                    // @ts-ignore
                 <div className="overflow-hidden cursor-pointer relative group" key={posts.id} onClick={()=>document?.getElementById(`${posts.id}`)?.showModal()}>
                    <div className="z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer 
                    absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                     <div>
                         <div
                             className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0
                              translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                             <div className="opacity-60 text-sm">
                                 Lorem ipsum dolor sit amet, consectetur adipisicing            
                             </div>
                         </div>
                     </div>
                 </div>
                 <Image
                     alt=""
                     className="object-cover aspect-square transition duration-300 ease-in-out"
                     src={posts.src}
                     
                 />
                    <PostModal data={posts.name} postId={posts.id}/>
                </div>
                
                );
                
            })} 
            <button className="btn">open modal</button>
            
            
        </div>
     );
}
 
export default Posts;