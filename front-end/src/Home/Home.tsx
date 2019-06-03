import React from "react";
import "./Home.css";

export default () => {
    return (
        <div className="Home">
            <h1>Hello World!</h1>
            <img
                src="./images/profile.jpg"
                alt="Collin's profile"
            />
            <p>
                Welcome to the latest installment of
                Collin Argo's portfolio! This version
                was built with some pretty cool things
                like GraphQL and schema stitching.
                Please explore the site and check out
                the source code!
            </p>
        </div>
    );
};
