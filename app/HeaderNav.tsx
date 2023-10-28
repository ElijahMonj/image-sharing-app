import NavigationBar from "./Components/NavigationBar";
import getCurrentUser from "./actions/getCurrentUser";
import getPosts from "./actions/getPosts";

const HeaderNav = async () => {
    const currentUser = await getCurrentUser();
    const posts = await getPosts();
    return ( 
        <NavigationBar data={currentUser}/>
     );
}
 
export default HeaderNav;