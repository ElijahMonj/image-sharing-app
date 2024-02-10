
import Image from "next/image";
import prisma from "@/app/libs/prismadb";
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
        <div className="w-full flex">
            <div className="grid lg:w-1/3 md:w-1/4 sm:w-1/4 w-1/4 place-items-center">
                <div className="avatar">
                    <div className="rounded-full lg:w-36 md:w-32 sm:w-32 w-20">
                        <Image className="rounded-full" quality={100} width={256} height={256} src={avatarSource as string} alt="user avatar"/>
                    </div>
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
                
                <div className="mt-2">
                    <p className="text-sm hidden lg:block md:block sm:block">{data.bio}</p>
                </div>
            </div>
           
        </div>
        <div className="lg:hidden md:hidden sm:hidden text-xs w-3/6 mx-auto">
            {data.bio}
        </div>
        </>
     );
}
 
export default ProfileHeader;