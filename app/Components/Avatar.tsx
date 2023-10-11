import Image from "next/image";
import defaultAvatar from '@/public/images/defaultAvatar.jpg'
interface AvatarProps{
    size:number,
    src:string
}
const Avatar:React.FC<AvatarProps> = ({size,src}) => {


    return ( 
        <div className="avatar">
            <div className="rounded-full">
                <Image className="rounded-full" quality={100} width={size} height={size} src={src ? src:defaultAvatar} alt="user avatar"/>
            </div>
        </div>
     );
}
 
export default Avatar;