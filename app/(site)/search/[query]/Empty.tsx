import { PiMagnifyingGlassMinusLight } from "react-icons/pi";
const Empty = () => {
    return ( 
        <div className="flex flex-col w-96 max-w-full absolute my-auto h-full justify-center">
            <div className="grid card rounded-box place-items-center ">
                <PiMagnifyingGlassMinusLight size={120} className="text-secondary"/>
            </div>                       
            <div className="grid card rounded-box place-items-center text-center text-secondary">No results found.</div>
        </div> 
     );
}
 
export default Empty;