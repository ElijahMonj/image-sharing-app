import NavigationBar from "./Components/NavigationBar";
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
    return ( 
        <UtilityBar data={user} /> 
     );
}
 
export default SideNav;