import React from "react";
import "./Spinner.css";

const Spinner = () => {
    return (
        <div className="spinCont">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;