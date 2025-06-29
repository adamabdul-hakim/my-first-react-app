import React from "react";
import '../styles.css'

export default function Footer(){

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-text">
                &#169; {currentYear} Moviedux, All rights reserved.
            </div>
        </footer>
    );
}