import prisma from "@/app/libs/prismadb";
import Link from "next/link";
import getCurrentUser from "../actions/getCurrentUser";
import Avatar from "./Avatar";

const Suggested = async () => {
    const currentUserId = await getCurrentUser();
    const currentUser = await prisma.user.findUnique({
        where:{
            id: currentUserId?.id, 
        }
    }) 
    const notFollowedUsers = await prisma.user.findMany({
        where:{
            NOT:{
                id: { in: currentUser?.following },
            } 
        }
    }) 
    const users = notFollowedUsers.filter(user => user.id != currentUser?.id);
    
    return ( 
        <>
            {users.length==0 ? 
            <></>:
            <ul className="max-w-[280px] p-4">
            <h1>Suggested</h1>
            <div className="divider"></div> 
                {users?.slice(0,4).map(u => (
                    <li className="pb-3 sm:pb-4" key={u.id}>
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0 ">
                                <Link href={`/profile/${u?.id}`} className='avatar w-12 mt-2'>
                                    <Avatar width={256} height={256} src={u?.image as string} />
                                </Link>
                            </div>
                            <div className="flex-1 min-w-0">
                                <Link href={`/profile/${u?.id}`}>
                                    <p className="truncate text-md font-bold">
                                        {u.name}
                                    </p>
                                   
                                </Link>
                                <p className="text-sm truncate">
                                {u?.email}
                                </p>
                            </div>
                            <Link href={`/profile/${u?.id}`} className="btn btn-xs btn-neutral">View</Link>
                        </div>
                    </li>
                ))} 
            
            </ul>
            }
        </>
        
       
     );
}
 
export default Suggested;