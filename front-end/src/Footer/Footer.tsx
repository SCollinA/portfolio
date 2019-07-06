import React from "react";
import "./Footer.css";

export default () => {
    return (
        <div className="Footer">
            <div className="built-with">
                <h4>Built with:</h4>
                <a href="https://www.apollographql.com/">Apollo</a>
                <a href="https://reactjs.org">React</a>
            </div>
            <div className="social-links">
                <a href="https://github.com/SCollinA">
                    GitHub
                </a>
            </div>
            <div className="copy-date">
                © 2019
            </div>
        </div>
    );
};
