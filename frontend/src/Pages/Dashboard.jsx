import {Appbar} from "../components/Appbar.jsx";
import {SubHeading} from "../components/SubHeading.jsx";
import {SearchBar} from "../components/SearchBar.jsx";

export default function Dashboard(){
    return(
       <div>
        <Appbar/>
        <SearchBar/>
       </div>
    )
}