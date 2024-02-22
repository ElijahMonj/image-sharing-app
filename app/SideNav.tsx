
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
    const notifications= await prisma.notification.findMany({
        where: {
          ownerId:currentUser?.id
        },
        include: {
            notifier: true,
        },
      })
    
    const taggableUsers = await prisma.user.findMany({
        where: {
            id: { in: user?.followers.filter((u: any) => user?.following.includes(u)) },
        }
    })
    
    return ( 
        <UtilityBar currentUser={user}taggableUsers={taggableUsers} data={user} notifications={notifications.reverse()}/> 
     );
}

export default SideNav;