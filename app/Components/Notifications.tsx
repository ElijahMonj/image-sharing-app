import { PiPaperPlaneTiltFill } from "react-icons/pi";
import Avatar from "./Avatar";
import { BsChatFill,BsHeartFill,BsChatTextFill  } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
const Notifications = () => {
    const notifications=[ 
        {  
        id :"123",
        ownerId :"456",
        userName: "Commenter commenter",
        userImage: "aksjdklas./com",
        createdAt: "Few Secs",
        type: "comment",
        seen:false 
        },
        {  
            id :"123",
            ownerId :"456",
            userName: "Commenter commenter",
            userImage: "aksjdklas./com",
            createdAt: "Few Secs",
            type: "share",
            seen:false 
        },
        {  
            id :"123",
            ownerId :"456",
            userName: "Commenter commenter",
            userImage: "aksjdklas./com",
            createdAt: "Few Secs",
            type: "like",
            seen:false 
        },
        {  
            id :"123",
            ownerId :"456",
            userName: "Commenter commenter",
            userImage: "aksjdklas./com",
            createdAt: "Few Secs",
            type: "message",
            seen:false 
        },
        {  
            id :"123",
            ownerId :"456",
            userName: "Commenter commenter",
            userImage: "aksjdklas./com",
            createdAt: "Few Secs",
            type: "app",
            seen:false 
        }  
        ];
        function notificationIcon(type:string) {
            if (type=="comment"){
                return (
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-primary rounded-full">
                    <BsChatFill className="w-3 h-3 text-white" aria-hidden="true"/>
                <span className="sr-only">Message icon</span>
                </span>
                ) 
            }
            else if (type=="share"){
                return (
                    <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-accent rounded-full">
                        <PiPaperPlaneTiltFill className="w-3 h-3 text-white" aria-hidden="true"/>
                    <span className="sr-only">Message icon</span>
                    </span>
                    ) 
            }
            else if (type=="like"){
                return (
                    <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-error rounded-full">
                        <BsHeartFill className="w-3 h-3 text-white" aria-hidden="true"/>
                    <span className="sr-only">Message icon</span>
                    </span>
                    ) 
            }
            else if (type=="message"){
                return (
                    <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-success rounded-full">
                        <BsChatTextFill className="w-3 h-3 text-white" aria-hidden="true"/>
                    <span className="sr-only">Message icon</span>
                    </span>
                    ) 
            }
            else{
                return (
                    <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-info rounded-full">
                        <MdNotifications className="w-4 h-4 text-white" aria-hidden="true"/>
                    <span className="sr-only">Message icon</span>
                    </span>
                    ) 
            }
            
        } 

    return ( 
        <dialog id="notification_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                
                {notifications.map((n) =>
                    <div className="w-full rounded-lg hover:bg-base-200" role="alert" key={n.id}>
                        <div className="flex items-center">
                            <div className="relative inline-block shrink-0">
                                <Avatar width={45} height={45} src={"/"}/>
                                {notificationIcon(n.type)}
                            </div>
                            <div className="ms-3 text-sm font-normal">
                                <div className="text-sm font-bold">Bonnie Green</div>
                                <div className="text-sm font-normal">commented on your photo</div> 
                                <span className="text-xs font-medium text-secondary">a few seconds ago</span>   
                            </div>
                            <div className="w-2 h-2 bg-primary ms-auto me-3 rounded-full"></div>
                        </div>
                       
                    </div>
                )}

            </div>
        </dialog>
     );
}
 
export default Notifications;