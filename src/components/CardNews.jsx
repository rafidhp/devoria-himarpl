import React from "react";

export const Card = ({ children, className }) => {
    return (
        <div className={`bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden mb-5 ${className}`}>
            {children}
        </div>
    )
};