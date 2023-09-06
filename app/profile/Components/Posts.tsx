import Picture from '@/public/test/1by1.jpg'
import Phone from '@/public/test/phone.jpg'
import Desktop from '@/public/test/desktop.jpg'
import Long from "@/public/test/long.jpg";
import Image from 'next/image';

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
                 <div className="overflow-hidden cursor-pointer relative group" key={posts.id}>
                    <div className="z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer 
                    absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                     <div>
                         <div
                             className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0
                              translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                             <div className="opacity-60 text-sm ">
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
                </div>
                );
            })} 
            <div className="overflow-hidden cursor-pointer relative group">
            <div className="z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer 
            absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                    <div
                        className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0
                         translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        <div className="opacity-60 text-sm ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing            
                        </div>
                    </div>
                </div>
            </div>
            <img
                alt=""
                className="object-cover aspect-square transition duration-300 ease-in-out"
                src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
"
            />
        </div>
        </div>
     );
}
 
export default Posts;