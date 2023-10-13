import NavigationBar from "@/app/Components/NavigationBar";
import UtilityBar from "@/app/Components/UtilityBar";
import getCurrentUser from "@/app/actions/getCurrentUser";


interface IParams {
    query: string;
};


const Search = async ({params}:{params:IParams}) => {
    const currentUser = await getCurrentUser();
    
    return ( 
         <>
            <NavigationBar data={currentUser}/>
            <div className="flex justify-between w-full">  
                <UtilityBar data={currentUser}/> 
                <div className="w-full">
                    <div className="flex flex-col w-full lg:max-w-[40rem] lg:absolute md:max-w-[40rem] sm:max-w-[40rem] left-0 right-0 items-center m-auto mt-16">
                        <div>Search: {params.query}</div>
                    </div>            
                </div>
            </div>
        </>
     );
}
 
export default Search;