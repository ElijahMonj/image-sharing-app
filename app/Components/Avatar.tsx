import Image from "next/image";
import defaultAvatar from '@/public/images/defaultAvatar.jpg'
interface AvatarProps{
    width:number,
    height:number,
    src:string
}
const Avatar:React.FC<AvatarProps> = ({width,height,src}) => {


    return ( 
        
            <div className="rounded-full">
                <Image className="rounded-full" 
                quality={100} width={width} 
                height={height} src={src ? src:defaultAvatar} 
                alt="user avatar"/>
            </div>
        
     );
}
 
export default Avatar;