import React from "react";
import "./Footer.css";

export default () => {
    return (
        <div className="Footer">
            <div className="built-with">
                <h4>Built with:</h4>
                <a
                    href="https://www.apollographql.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Apollo
                </a>
                <a
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React
                </a>
            </div>
            <div className="social-links">
                <a
                    href="https://github.com/SCollinA"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </div>
            <div className="copy-date">
                © 2019
            </div>
        </div>
    );
};
