import React from "react";

export default function ButtonRow({ children }) {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "space-around"}}>
            {children}
        </div>
    );
}