
import {redirect} from 'next/navigation'

import Form from "@/app/(auth)/account/Components/Form";
import { getServerSession } from 'next-auth/next';
import { Toaster } from 'react-hot-toast';
import { authOptions } from "@/app/authOptions";

import Phone from './Components/Phone';

export default async function AccountPage () {
    
    const session=await getServerSession(authOptions)
    if(session){
        redirect('/')
    }
    return ( 
        <>
        <section className="lg:h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="flex flex-col w-full lg:flex-row">
                <div className="flex-grow card rounded-box lg:w-1/2 justify-end lg:place-items-end place-items-center hidden lg:grid">
                    
                    <div className="mockup-phone my-auto">
                        <div className="camera"></div> 
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">
                                
                            <Phone/>
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
 
