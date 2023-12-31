
import {redirect} from 'next/navigation'
import Image from "next/image"
import Brand from "@/public/test/phone.jpg"
import Form from "@/app/(auth)/account/Components/Form";
import { getServerSession } from 'next-auth/next';
import { Toaster } from 'react-hot-toast';
import { authOptions } from "@/app/authOptions";



export default async function AccountPage () {
    const session=await getServerSession(authOptions)
    if(session){
        redirect('/')
    }
    return ( 
        <>
        <section className="lg:h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow card bg-base-300 rounded-box lg:w-1/2 items-center lg:place-items-end place-items-center">
                    <Image src={Brand} width={390} alt="brand" className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"/>
                </div> 
            <div className="divider lg:divider-horizontal"></div> 
                <div className="grid flex-grow card bg-base-300 rounded-box lg:w-1/2 lg:place-items-start place-items-center my-auto">
                    <Form/>
                </div>
            </div>
        </section>
        <Toaster />
        </>
         
     );
}
 
