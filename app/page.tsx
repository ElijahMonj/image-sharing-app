import Image from 'next/image'
import NavigationBar from './Components/NavigationBar'
import UtilityBar from './Components/UtilityBar';
import Suggested from './Components/Suggested';
import Newsfeed from './Components/Newsfeed/Newsfeed';

export default function Home() {
  return ( 
    <div className="flex justify-between">
        <UtilityBar/> 
        <div className="lg:w-4/5 w-full">
            <NavigationBar/>
            <Newsfeed/>
        </div>
        <div className="w-1/5 xl:w-auto hidden lg:block">
            <Suggested/>
        </div>
  </div>
 );
}
