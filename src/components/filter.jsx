import FilterButton from "../tiny_builds/filter_btn";
import "../styles/filter.css";

export default function Filter() {
    const categories= [
        "All",
        "Music",
        "Sports",
        "Gaming",
        "Movies & Shows",
        "News",
        "Live",
        "Learning",
        "Fashion & Beauty",
        "Podcasts",
        "Comedy",
        "Auto & Vehicles",
        "Technology",
        "Science & Tech",
        "Cooking & Recipes",
        "Art & Design",
        "Travel & Events",
        "How-to & DIY"
      ]
    return(
        <div className="filter_container">
            <div className="filter_btn_wrap">
             <FilterButton categories={categories} />
            </div>
        </div>
    )
}