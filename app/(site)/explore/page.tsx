
import getCurrentUser from "../../actions/getCurrentUser";

import Grid from "./grid";
import prisma from "@/app/libs/prismadb";
const Explore = async () => {
    const currentUser = await getCurrentUser();
    
    return ( 
        <>
        
        
            <div className="w-full">
                <div className="flex flex-col w-full lg:max-w-[40rem] lg:absolute md:max-w-[40rem] sm:max-w-[40rem] left-0 right-0 items-center m-auto mt-16">
                    <Grid currentUser={currentUser}/>
                </div>            
            </div>
        
        </>
     );
}
 
export default Explore;