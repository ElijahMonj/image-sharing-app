
import { getServerSession } from 'next-auth/next';

import { Toaster } from 'react-hot-toast';

import { authOptions } from '../authOptions';
import Dashboard from './Dashboard';
import EmojiPicker from 'emoji-picker-react';

export default async function Home() {
    
    return ( 
      
      <> 
      
        <Dashboard/>
        <Toaster />
        
      </>
   );
  }