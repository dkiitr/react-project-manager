import React from "react";

const Input = ({ label, textarea, ...props }, ref) => {
    let classes =
        "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-400";
    return (
        <p className="flex flex-col gap-1 my-4">
            <label
                ref={ref}
                className="text-sm font-bold text-stone-500 uppercase"
            >
                {label}
            </label>
            {textarea ? (
                <textarea ref={ref} className={classes} {...props} />
            ) : (
                <input ref={ref} className={classes} {...props} />
            )}
        </p>
    );
};

export default Input;
