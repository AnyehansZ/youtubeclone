import "../styles/navigation.css";
export default function SubsButton({ StartImage, ButtonName, EndIcon, Color, EndSize }) {
    return (
        <div className="button-wrap">
        <button className="button">
            <div className="inline">
            <div className="subs_img">
              {StartImage && <img src={StartImage} className="subs_img" alt="img" /> }  
            </div>
            <p className="overflow">{ButtonName}</p>
            </div>
            {EndIcon && <EndIcon size={EndSize} className="icon" color={Color} />}
        </button>
        </div>
    );
}