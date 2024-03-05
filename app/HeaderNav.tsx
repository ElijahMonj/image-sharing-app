import NavigationBar from "./Components/NavigationBar";
import getCurrentUser from "./actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import {getServerSession} from 'next-auth';
import { authOptions } from '@/app/authOptions'
        
const HeaderNav = async () => {
    const session = await getServerSession(authOptions);
    if(!session?.user?.email){
        console.log("ELIJAH NULL")
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