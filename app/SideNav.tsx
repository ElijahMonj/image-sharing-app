import NavigationBar from "./Components/NavigationBar";
import UtilityBar from "./Components/UtilityBar";
import getCurrentUser from "./actions/getCurrentUser";

const SideNav = async () => {
    const currentUser = await getCurrentUser();
    return ( 
        <UtilityBar data={currentUser} /> 
     );
}
 
export default SideNav;