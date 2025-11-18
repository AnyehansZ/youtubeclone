import "../styles/filter.css";

export default function FilterButton({categories}) {
    return (
        <>
        {categories.map((category, index) => (
            <button key={index} className="filter_btn">
                {category}
            </button>
        ))}
        </>
    )
}