'use client'
import { follow, unfollow } from "@/app/actions/server/follow";
import Link from "next/link";
import { useOptimistic } from "react";
import { MdModeEdit, MdPersonAddAlt1, MdPersonRemoveAlt1 } from "react-icons/md";
import ModalFollowers from "./ModalFollowers";
import ModalFollowing from "./ModalFollowing";
interface ProfileStatsProps{
    data:any
    currentUser:any
    isCurrentUser:boolean
    following:any
    followers:any
}
const ProfileStats:React.FC<ProfileStatsProps> = ({data,currentUser,isCurrentUser,following,followers}) => {
   
    const [optimisticFollowing,setOptimisticFollowing] = useOptimistic(data.followers,(state,action)=>{
        if(action){
            console.log([...state,currentUser.id])
            return [...state,currentUser.id]
        }else{
            const index = state.indexOf(currentUser.id);
            state.splice(index, 1);
            console.log(state)
            return state
        }
       
    })
    const followUser = follow.bind(null, data.id,currentUser.id)
    const unfollowUser = unfollow.bind(null, data.id,currentUser.id)
    
    return ( 
        <div className="lg:w-1.5/2 flex gap-4 mt-1 w-auto">
            <div className="lg:text-sm text-xs text-center flex flex-col justify-center">{data.posts.length} Posts</div>
                {/*@ts-ignore*/}
                <p className="lg:text-sm text-xs text-center flex flex-col justify-center cursor-pointer" onClick={()=>document?.getElementById('modalfollowing')?.showModal()}>{data.following.length} Following</p>
                {/*@ts-ignore*/}
                <p className="lg:text-sm text-xs text-center flex flex-col justify-center cursor-pointer" onClick={()=>document?.getElementById('modalfollowers')?.showModal()} >{optimisticFollowing.length} Followers</p>
                {isCurrentUser ? 
                <Link className="btn lg:btn-sm md:btn-sm btn-xs" href="/settings"><MdModeEdit /></Link>
                :  
                <>
                    {optimisticFollowing.includes(currentUser.id) ? 
                    <form action={ async () =>{
                        setOptimisticFollowing(false)
                        await unfollowUser()
                    }}>
                        <button className="btn btn-outline lg:btn-sm md:btn-sm btn-xs" type="submit">
                            <MdPersonRemoveAlt1 />
                        </button>
                    </form> 
                    : 
                    <form action={ async () =>{
                        setOptimisticFollowing(true)
                        await followUser()
                    }}>
                         <button className="btn btn-neutral lg:btn-sm md:btn-sm btn-xs" type="submit">
                            <MdPersonAddAlt1/>
                         </button>
                    </form>
                   }
                </>     
                }
                <ModalFollowing currentUser={currentUser} data={following}/>
                <ModalFollowers currentUser={currentUser} data={followers}/>
        </div> 
     );
}
 
export default ProfileStats;