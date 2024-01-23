'use client'

import { BsChat } from "react-icons/bs";
import {PiPaperPlaneTilt} from 'react-icons/pi'

interface OpenModalProps{
    postId:string
    currentUser:any
}
const OpenModal:React.FC<OpenModalProps> = ({postId}) => {
    return ( 
        <>
        <BsChat className="h-6 w-6 hover:cursor-pointer hover:fill-secondary" 
            onClick={()=>{
              
                // @ts-ignore
            document?.getElementById(`post_modal_${postId}`)?.showModal()
            }} />
        <PiPaperPlaneTilt className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"
         //@ts-ignore
         onClick={()=>document?.getElementById(`share_${postId}`)?.showModal()}/>
        </>
        
        
     );
}
 
export default OpenModal;