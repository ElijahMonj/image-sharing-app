
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { Toaster } from "react-hot-toast";
import General from "./components/General";
const Settings = async () => {
    const currentUser = await getCurrentUser();
    const user = await prisma.user.findUnique({
        where: {
           id:currentUser?.id
        }
    })
    return ( 
        <>
        
        
            <div className="w-full">
                <div className="flex flex-col w-full lg:max-w-[40rem] lg:absolute md:max-w-[35rem] sm:max-w-[40rem] left-0 right-0 items-center m-auto mt-16">
                    <General currentUser={user}/>
                </div>            
            </div>
            <Toaster />
    </>
     );
}
 
export default Settings;