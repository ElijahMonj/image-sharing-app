'use client'
import { Key } from "react";
import Notification from "./Notification";

interface NotificationProps{
    notifications:any
    setNewNotifications:any
}
const NotificationModal:React.FC<NotificationProps> = ({notifications,setNewNotifications}) => {
    
    return ( 
        <dialog id="notification_modal" className="modal modal-bottom sm:modal-middle" >
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" id="notificationClose">✕</button>
                </form>
                <h3 className="font-bold text-lg">Notifications</h3>
                {notifications.length==0 ? <div className='h-24 flex justify-center flex-col text-center text-sm font-thin'>No notifications yet.</div> :<>
                    {notifications.map((n: { id: Key | null | undefined; }) =>
                        <div className="w-full rounded-lg hover:bg-base-200" key={n.id} >
                            <Notification data={n} setNewNotifications={setNewNotifications}/>
                        </div>
                    )}
                </>}  

            </div>
        </dialog>
     );
}
 
export default NotificationModal;