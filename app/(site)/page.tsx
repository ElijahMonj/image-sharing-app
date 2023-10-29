
import { getServerSession } from 'next-auth/next';

import { Toaster } from 'react-hot-toast';

import { authOptions } from '../authOptions';
import Dashboard from './Dashboard';

export default async function Home() {
    const session=await getServerSession(authOptions)
    return ( 
      
      <>
      
      { 
          session ? <Dashboard/>:<Dashboard/>
      }
      
      <Toaster />
      </>
   );
  }