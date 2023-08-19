import {AiOutlineHeart} from 'react-icons/ai'
import {BsChat,BsBookmark} from 'react-icons/bs'
import {PiPaperPlaneTilt} from 'react-icons/pi'

const NewsfeedCard = () => {
    return ( 
        <div className="p-4">
            <div className="rounded-sm max-w-md">
                <div className="flex items-center px-4 py-3">
                <img className="h-8 w-8 rounded-full" src="https://picsum.photos/id/1027/150/150"/>
                <div className="ml-3">
                    <span className="text-sm font-semibold antialiased block leading-tight">8fact</span>
                    <span className="text-gray-600 text-xs block">Asheville, North Carolina</span>
                </div>
                </div>
                <img src="https://picsum.photos/id/244/900/900"/>
                <div className="flex items-center justify-between mx-4 mt-3 mb-2">
                <div className="flex gap-5">
                    <AiOutlineHeart className="h-6 w-6" stroke="currentColor"/>
                    <BsChat className="h-6 w-6" stroke="currentColor"/>
                    <PiPaperPlaneTilt className="h-6 w-6" stroke="currentColor"/>
                </div>
                <div className="flex">
                    <BsBookmark className="h-6 w-6" stroke="currentColor"/>
                </div>
                </div>
                <div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
            </div>
        </div>
     );
}
 
export default NewsfeedCard;