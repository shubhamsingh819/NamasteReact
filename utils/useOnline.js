import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true)
        }
        const handleOffLine = () => {
            setIsOnline(false);
        }
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffLine)
        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffLine)
        }
    }, [])

    return isOnline;//return true or false
}

export default useOnline;
