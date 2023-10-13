import NavigationBar from "@/app/Components/NavigationBar";
import UtilityBar from "@/app/Components/UtilityBar";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ProfileHeader from "../Components/ProfileHeader";
import ProfileContent from "../Components/ProfileContent";
import getUserPosts from "@/app/actions/getUserPosts";
import getUser from "@/app/actions/getUser";

interface IParams {
    profileId: string;
};


const user = async ({params}:{params:IParams}) => {
    const currentUser = await getCurrentUser();
    const userPosts = await getUserPosts(params.profileId);
    const userData = await getUser(params.profileId);
    function checkUser(){
        if(params.profileId==currentUser?.id){
            return currentUser
        }else{
            return userData
        }
    }
    return ( 
         <>
            <NavigationBar data={currentUser}/>
            <div className="flex justify-between w-full">  
                <UtilityBar data={currentUser}/> 
                <div className="w-full">
                    <div className="flex flex-col w-full lg:max-w-[40rem] lg:absolute md:max-w-[40rem] sm:max-w-[40rem] left-0 right-0 items-center m-auto mt-16">
                        <ProfileHeader data={checkUser()} isCurrentUser={params.profileId==currentUser?.id}/>
                        <div className="divider mb-0 "></div>
                            <ProfileContent posts={userPosts} currentUser={currentUser} />
                    </div>            
                </div>
            </div>
        </>
     );
}
 
export default user;