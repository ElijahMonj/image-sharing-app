
import { getServerSession } from 'next-auth/next';
import { authOptions } from './authOptions';
import Dashboard from './Dashboard';
import AccountPage from './Components/Account/AccountPage';
import { Toaster } from 'react-hot-toast';

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
