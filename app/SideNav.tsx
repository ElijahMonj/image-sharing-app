
import UtilityBar from "./Components/UtilityBar";
import getCurrentUser from "./actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import getSession from "./actions/getSession";
const SideNav = async () => {
    const session = await getSession();
    if(!session?.user?.email){
        return null;
    }
    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email as string
        }
    })
    const notifications= await prisma.notification.findMany({
        where: {
          ownerId:user?.id
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