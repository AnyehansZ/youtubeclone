import { Search, Mic } from 'lucide-react';

// import { search } from '@lucide/lab'; 
import "../styles/wrapper.css";

export default function SearchBar() {
    return (
        <div className="tm_s_wrap flex_row">
        <div className="flex_row search_wrap">
            <input type="text" className="input" placeholder="Search" />
            <button className="search_btn" >
                <Search size={24}/>
            </button>
        </div>
            <button className="microph_btn">
                <Mic size={26}/>
            </button>
        </div>
    )
}
