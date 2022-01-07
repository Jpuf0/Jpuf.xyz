import {useEffect, useState} from "react";

const getDate = (timestamp: number): number => {
    let time = new Date().getTime() - new Date(timestamp).getTime()
    time /= 3.15576e10
    return time;
}

export const useTimePassed = (timestamp: number) => {
    const [age, setAge] = useState(getDate(timestamp));

    useEffect(() => {
        const ageChange = setInterval(() => {
            setAge(getDate(timestamp))
        }, 5e1);

        return () => {
            clearInterval(ageChange)
        };
    }, [timestamp])

    return age;
}
