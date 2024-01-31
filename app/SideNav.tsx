
import UtilityBar from "./Components/UtilityBar";
import getCurrentUser from "./actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
const SideNav = async () => {
    const currentUser = await getCurrentUser();
    const user = await prisma.user.findUnique({
        where: {
           id:currentUser?.id
        }
    })
    const notifications = await prisma.notification.findMany({
        where:{
            ownerId:user?.id
        }
    })
    return ( 
        <UtilityBar data={user} notifications={notifications}/> 
     );
}
 
export default SideNav;