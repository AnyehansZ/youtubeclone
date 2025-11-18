import "../styles/navigation.css";

export default function NavButton( {StartIcon, ButtonName, EndIcon, Color, EndSize}){
    return(
        <div className="button-wrap ">
            <button className="button">
                <div className="inline">
                    {StartIcon && <StartIcon size={20}  className="icon"/>}
                    <p>{ButtonName}</p>
                </div>
                {EndIcon && <EndIcon size={EndSize} className="icon" color={Color} />}
            </button>
        </div>
    )
}