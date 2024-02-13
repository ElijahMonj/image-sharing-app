import { MdOutlineHideImage } from "react-icons/md";
const Empty = () => {
    return ( 
        <div className="flex flex-col w-96 max-w-full justify-center absolute my-auto h-full">
            <div className="grid card rounded-box place-items-center ">
                <MdOutlineHideImage size={120} className="text-secondary"/>
            </div>                       
            <div className="grid card rounded-box place-items-center text-center text-secondary">There are no posts to explore yet.</div>
        </div> 
     );
}
 
export default Empty;