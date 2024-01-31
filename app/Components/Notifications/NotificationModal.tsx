
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "../../actions/getCurrentUser";
import Notification from "./Notification";
const NotificationModal = async () => {
    const currentUser = await getCurrentUser();
    const notifications= await prisma.notification.findMany({
        where: {
          ownerId:currentUser?.id
        }
      })
    return ( 
        <dialog id="notification_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" id="notificationClose">✕</button>
                </form>
                <h3 className="font-bold text-lg">Notifications</h3>
                
                {notifications.reverse().map((n) =>
                    <div className="w-full rounded-lg hover:bg-base-200" key={n.id} >
                        <Notification data={n}/>
                    </div>
                )}

            </div>
        </dialog>
     );
}
 
export default NotificationModal;