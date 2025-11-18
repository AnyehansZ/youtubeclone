import SearchBar from "./search_bar";
import Toolbar from "./toolbar";
import "../styles/wrapper.css"

export default function SearchToolbarWrap() {
    return (
        <div className="st_wrap flex_row">
            <SearchBar />
            <Toolbar />
        </div>
    )
}