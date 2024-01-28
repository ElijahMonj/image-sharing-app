import { PiPaperPlaneTiltFill } from "react-icons/pi";
import Avatar from "./Avatar";
import { BsChatFill,BsHeartFill,BsChatTextFill  } from "react-icons/bs";
import { MdNotifications,MdPersonAddAlt1 } from "react-icons/md";
import prisma from "@/app/libs/prismadb";
import { timeAgo } from "../actions/convertDate";
import getCurrentUser from "../actions/getCurrentUser";
import Link from "next/link";
const Notifications = async () => {
    const currentUser = await getCurrentUser();
    const notifications= await prisma.notification.findMany({
        where: {
          ownerId:currentUser?.id
        }
      })
      
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
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-warning rounded-full">
                    <PiPaperPlaneTiltFill className="w-3 h-3 text-white" aria-hidden="true"/>
                <span className="sr-only">Share icon</span>
                </span>
                ) 
        }
        else if (type=="like"){
            return (
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-error rounded-full">
                    <BsHeartFill className="w-3 h-3 text-white" aria-hidden="true"/>
                <span className="sr-only">Heart icon</span>
                </span>
                ) 
        }
        else if (type=="message"){
            return (
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-accent rounded-full">
                    <BsChatTextFill className="w-3 h-3 text-white" aria-hidden="true"/>
                <span className="sr-only">Message icon</span>
                </span>
                ) 
        }
        else if (type=="follow"){
            return (
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-success rounded-full">
                    <MdPersonAddAlt1 className="w-3 h-3 text-white" aria-hidden="true"/>
                <span className="sr-only">Follow icon</span>
                </span>
                ) 
        }
        else{
            return (
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-info rounded-full">
                    <MdNotifications className="w-4 h-4 text-white" aria-hidden="true"/>
                <span className="sr-only">Bell icon</span>
                </span>
                ) 
        }
        
    } 
    function notificationDescription(type:string) {
        if (type=="comment"){
            return (
                <div className="text-sm font-normal">commented on your post.</div> 
            ) 
        }
        else if (type=="share"){
            return (
                <div className="text-sm font-normal">shared a post with you.</div> 
                ) 
        }
        else if (type=="like"){
            return (
                <div className="text-sm font-normal">liked your post.</div> 
                ) 
        }
        else if (type=="message"){
            return (
                <div className="text-sm font-normal">has messaged you.</div> 
                ) 
        }
        else if (type=="follow"){
            return (
                <div className="text-sm font-normal">has started following you!</div> 
                ) 
        }
        else{
            return (
                <div className="text-sm font-normal">Welcome!</div> 
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
                <h3 className="font-bold text-lg">Notifications</h3>
                
                {notifications.reverse().map((n) =>
                    <div className="w-full rounded-lg hover:bg-base-200" key={n.id} >
                        <a className="flex items-center p-2" href={n.link}>
                            <div className="relative inline-block shrink-0">
                                <Avatar width={45} height={45} src={n.userImage}/>
                                {notificationIcon(n.type)}
                            </div>
                            <div className="ms-3 text-sm font-normal">
                                <div className="text-sm font-bold">{n.userName}</div>
                                {notificationDescription(n.type)}
                                <span className="text-xs font-medium text-secondary">{timeAgo(n.createdAt)}</span>   
                            </div>
                            <div className="w-2 h-2 bg-primary ms-auto me-3 rounded-full"></div>
                        </a>
                    </div>
                )}

            </div>
        </dialog>
     );
}
 
export default Notifications;