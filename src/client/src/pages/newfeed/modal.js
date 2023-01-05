import React from "react";
export default function Modal({visible, value}){
    if (!visible) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-bur-sm flex justify-center items-center">
        <div className='bg-white p-2 rounded'> My modal</div>
        </div>


    );
}