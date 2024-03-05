import NavigationBar from "./Components/NavigationBar";
import getCurrentUser from "./actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import getSession from "./actions/getSession";
        
const HeaderNav = async () => {
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
        <NavigationBar data={user}/>
     );
}
 
export default HeaderNav;