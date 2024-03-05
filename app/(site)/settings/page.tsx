
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { Toaster } from "react-hot-toast";
import General from "./components/General";
import getSession from "@/app/actions/getSession";
const Settings = async () => {
    const session = await getSession();
    if(!session?.user?.email){
        return null;
    }
    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email as string
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