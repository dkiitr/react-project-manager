import React, { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(url)
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(
                        `Encountered an error... ${res.statusText}`
                    );
                } else res.json();
            })
            .then((resultData) => setData(resultData))
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);
    return { data, loading, error };
};

export default useFetch;
