import getCurrentUser from "../actions/getCurrentUser";

const Suggested = async () => {
    const currentUser = await getCurrentUser();
    return ( 
        <ul className="max-w-md p-4">
            <h1>Suggested</h1>
            <div className="divider"></div> 
                <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">
                            Neil Sims
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {currentUser?.email}
                            </p>
                        </div>
                        <div className="badge badge-primary">View</div>
                    </div>
                </li>
            
            </ul>
     );
}
 
export default Suggested;