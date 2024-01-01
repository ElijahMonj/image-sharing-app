import NavigationBar from "@/app/Components/NavigationBar";

import UtilityBar from "@/app/Components/UtilityBar";
import SettingsTabs from "./components/SettingsTabs";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
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
                <div className="flex flex-col w-full lg:max-w-[40rem] lg:absolute md:max-w-[40rem] sm:max-w-[40rem] left-0 right-0 items-center m-auto mt-16">
                    <SettingsTabs currentUser={user}/>
                </div>            
            </div>
        
    </>
     );
}
 
export default Settings;