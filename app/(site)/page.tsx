
import { getServerSession } from 'next-auth/next';

import { Toaster } from 'react-hot-toast';
import NextNProgress from 'nextjs-progressbar';
import { authOptions } from '../authOptions';
import Dashboard from './Dashboard';
import AccountPage from '../Components/Account/AccountPage';

export default async function Home() {
    const session=await getServerSession(authOptions)
    return ( 
      
      <>
      
      { 
          session ? <Dashboard/>:<AccountPage/>
      }
      
      <Toaster />
      </>
   );
  }