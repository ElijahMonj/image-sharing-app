import { Toaster } from 'react-hot-toast';
import Dashboard from './Dashboard';

export default async function Home() {
    
    return (  
      <> 
        <Dashboard/>
        <Toaster />   
      </>
   );
}