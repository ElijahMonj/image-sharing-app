import NavigationBar from "./Components/NavigationBar";
import getCurrentUser from "./actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

const HeaderNav = async () => {
    const currentUser = await getCurrentUser();
    const user = await prisma.user.findUnique({
        where: {
           id:currentUser?.id
        }
    })
    
    return ( 
        <NavigationBar data={user}/>
     );
}
 
export default HeaderNav;