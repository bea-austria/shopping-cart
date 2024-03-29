import React from "react";
import "../styles/header.scss"

function HeaderIcon({
    src,
    alt,
    btnClass,
    onClick
}){
    return (
        <button
                type="button"
                className="header__btn"
                // onClick={toggleSearchView}
                // data-testid="search-button"
                >
                <img
                    src={src} // Replace with the actual path to your image file
                    alt={alt}
                    className={btnClass}// Apply any necessary styling classes
                    onClick = {onClick}
                />
        </button>
    )
}
export default HeaderIcon
