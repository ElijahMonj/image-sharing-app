
import Image from "next/image"

interface ModalFollowersProps{
    currentUser:any
    data:any
}

const ModalFollowers:React.FC<ModalFollowersProps> = ({data,currentUser}) => {
    const followers=data;
    console.log(followers)
    const numbers = [1, 2, 3, 4, 5];
    return ( 
        <dialog id="modalfollowers" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Followeras</h3>
                <ul className="menu rounded-box divide-y">
                    {/*@ts-ignore*/}
                    {followers.map((f) =>
                        <li key={f.id}>
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <Image className="w-8 h-8 rounded-full" width={32} height={32} src={f?.image as string} alt="Neil image"/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">
                                {f.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                asdfasdfasd
                                </p>
                            </div>
                            <div className="badge badge-primary">View</div>
                        </div>
                        </li>
                    )}
                 

                </ul>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
     );
}
 
export default ModalFollowers;