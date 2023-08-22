
import Picture from '@/public/test/1by1.jpg'
import Phone from '@/public/test/phone.jpg'
import Desktop from '@/public/test/desktop.jpg'
import NewsfeedCard from "./NewsfeedCard";
import Long from "@/public/test/long.jpg";
const Newsfeed = () => {
    return ( 
        <div className="flex flex-col w-full items-center h-min m-auto mt-20"> 
           
                <NewsfeedCard src={Desktop}/>
                <NewsfeedCard src={Phone}/>
                <NewsfeedCard src={Picture}/>
                <NewsfeedCard src={Long}/>
                
                
        </div>
     );
}
 
export default Newsfeed;