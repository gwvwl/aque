import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
   
    const request = useCallback(async (url, method = 'GET', body = null, token = null) => {
        setLoading(true);
        try {
            const response = await fetch(url, {method, body, headers:{ "Accept":  "application/json", 
                                                                        "Content-Type": "application/json", 
                                                                        "Authorization": `Bearer ${token}`}});

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            setLoading(false);
            return data;
        } catch(e) {
            setLoading(false);
            setError(true);
            throw e;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return {loading, request, error, clearError}
}