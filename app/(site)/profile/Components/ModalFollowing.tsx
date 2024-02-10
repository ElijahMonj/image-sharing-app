import Avatar from "@/app/Components/Avatar";
import Image from "next/image"
import Link from "next/link";

interface ModalFollowingProps{
    currentUser:any
    data:any
}

const ModalFollowing:React.FC<ModalFollowingProps> = ({data,currentUser}) => {
    const following=data;
    return ( 
        <dialog id="modalfollowing" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Following</h3>
                <ul className="menu rounded-box divide-y">
                   
                    {following.length==0 ? 
                    <div>This user is not following any user at the moment.</div> :
                    <>
                     {/*@ts-ignore*/}
                    {following.map((f) =>
                        <li key={f.id}>
                        <Link className="flex items-center space-x-4" href={'/profile/'+f.id}>
                            <div className="flex-shrink-0 avatar w-10">
                                <Avatar width={256} height={256} src={f?.image as string}/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">
                                {f.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                {f.email}
                                </p>
                            </div>
                            <div className="badge badge-neutral">View</div>
                        </Link>
                        </li>
                    )}
                    </>
                    }
                </ul>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
     );
}
 
export default ModalFollowing;