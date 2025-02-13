import React, { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const storedData = JSON.parse(localStorage.getItem(key));
        if (!storedData) return initialValue;
        return storedData;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);
    return [storedValue, setStoredValue];
};

export default useLocalStorage;
