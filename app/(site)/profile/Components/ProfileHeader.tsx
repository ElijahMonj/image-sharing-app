
import prisma from "@/app/libs/prismadb";
import Image from "next/image";
import ProfileStats from "./ProfileStats";
interface ProfileHeaderProps{
    data:any
    currentUser:any
    isCurrentUser:boolean
}
const ProfileHeader:React.FC<ProfileHeaderProps> = async ({data,isCurrentUser,currentUser}) => {
    const followers = await prisma.user.findMany({
        where: {
            id: { in: data.followers }
        }
    })
    const following = await prisma.user.findMany({
        where: {
            id: { in: data.following }
        }
    })
    const isGoogleAvatar=data?.image.includes("googleusercontent");
    let avatarSource=data?.image;
    if(isGoogleAvatar){
        avatarSource = avatarSource.replace("=s96", "=s256");
    }
    return ( 
        <>
        <div className="flex max-w-full lg:gap-8 sm:gap-8 md:gap-8 w-auto lg:w-auto md:w-auto sm:w-auto justify-center px-2 gap-2">
            <div className="flex lg:w-1/3 md:w-1/4 sm:w-1/4 w-1/4 place-items-center">
                <div className="avatar lg:w-32 md:w-auto sm:w-auto w-20">
                    
                    <Image className="rounded-full" quality={100} width={256} height={256} src={avatarSource as string} alt="user avatar"/>
                
                </div>
            </div>
            <div className="lg:w-2/3 md:w-3/4 sm:w-3/4 w-3/4 flex flex-col">
                <div className="lg:text-l text-md font-semibold">
                   {data.name}
                </div>
                <div className="w-full flex justify-between">
                    <div className="flex justify-center flex-col text-slate-500 lg:text-sm text-xs overflow-hidden">{data.email}</div> 
                                  
                </div>
                
                <ProfileStats data={data} isCurrentUser={isCurrentUser} currentUser={currentUser} following={following} followers={followers}/>
                
                <div className="mt-2 w-40 lg:w-72 md:w-72 sm:w-72">
                    <p className="text-sm max-w-full text-wrap text-ellipsis overflow-hidden">{data.bio}</p>
                </div>
            </div>
           
        </div>
        
        </>
     );
}
 
export default ProfileHeader;