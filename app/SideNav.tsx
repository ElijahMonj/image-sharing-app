import NavigationBar from "./Components/NavigationBar";
import UtilityBar from "./Components/UtilityBar";
import getCurrentUser from "./actions/getCurrentUser";
import getPosts from "./actions/getPosts";

const SideNav = async () => {
    const currentUser = await getCurrentUser();
    const posts = await getPosts();
    return ( 
        <UtilityBar data={currentUser} /> 
     );
}
 
export default SideNav;