import NewsfeedCard from "./NewsfeedCard";

const Newsfeed = () => {
    return ( 
        <div className="flex flex-col w-full lg:w-1/3 sm:w-1/2 max-w-screen items-center">
            <NewsfeedCard/>
            <div className="divider"></div> 
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
        </div>
     );
}
 
export default Newsfeed;