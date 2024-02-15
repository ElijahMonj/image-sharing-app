
import {redirect} from 'next/navigation'

import Form from "@/app/(auth)/account/Components/Form";
import { getServerSession } from 'next-auth/next';
import { Toaster } from 'react-hot-toast';
import { authOptions } from "@/app/authOptions";
import pic1 from '@/public/images/slideshow/test.png'
import Phone from './Components/Phone';
import { MdOutlineSignalWifi4Bar, MdSignalCellular3Bar } from 'react-icons/md';
import { IoCaretBack, IoMenu } from 'react-icons/io5';
import Image from 'next/image';
import { FaBatteryHalf } from 'react-icons/fa6';
import { RiHome2Fill } from "react-icons/ri";
export default async function AccountPage () {
    
    const session=await getServerSession(authOptions)
    if(session){
        redirect('/')
    }
    return ( 
        <>
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center mx-5 md:mx-0 md:my-0">
            <div className="flex flex-col w-full lg:flex-row">
                <div className="flex-grow card rounded-box lg:w-1/2 justify-end lg:place-items-end place-items-center hidden lg:grid">
                    
                    <div className="mockup-phone my-auto z-50 mt-5">
                        <div className="camera"></div> 
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">
                                
                                <Phone/>
                            
                            </div>
                        </div>
                    </div>
                    <div className="mockup-phone my-auto right-28 absolute z-0 bottom-10">
                        <div className="camera"></div> 
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">
                            <>
                                <div className="w-full flex h-7 justify-between bg-black z-0">  
                                    <div className="text-xs my-auto mx-7 font-semibold text-slate-400 select-none">17:38</div>
                                    <div className="flex mx-6 gap-1">
                                    <MdSignalCellular3Bar className="h-4 w-4 text-slate-400 my-auto"/>
                                    <MdOutlineSignalWifi4Bar className="h-4 w-4 text-slate-400 my-auto"/>
                                    <FaBatteryHalf  className="h-4 w-4 text-slate-400 my-auto"/>        
                                    </div>
                                            
                                </div>
                                <div className="image-slider h-auto">
                                    <Image
                                        
                                        src={pic1}
                                        alt="darkui"
                                        className='active object-cover w-full h-full'
                                    />
                                </div>
                                <div className="w-full flex h-7 justify-around bg-black">  
                                    <IoMenu className="h-4 w-4 text-slate-300 my-auto"/> 
                                    <RiHome2Fill className="h-4 w-4 text-slate-300 my-auto"/>
                                    
                                    <IoCaretBack className="h-5 w-5 text-slate-300 my-auto"/>     
                                </div>
                                </>
                            
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="divider lg:divider-horizontal hidden lg:block"></div> 
                <div className="grid flex-grow card rounded-box lg:w-1/2 lg:place-items-start place-items-center my-auto">
                    <Form/>
                </div>
            </div>
        </section>
        <Toaster />
        </>
         
     );
}
 
