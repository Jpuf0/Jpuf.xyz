import {useEffect, useState} from "react";

const isBirthday = (birthday: Date, now: Date) => {
    if (birthday.getDate() === now.getDate() && birthday.getMonth() === now.getMonth()) return true;
    return false;
};

export const useIsBirthday = (timestamp: number) => {
    const [birthday, setBirthday] = useState(isBirthday(new Date(timestamp), new Date()));

    useEffect(() => {
        const isBirthdayCheck = setInterval(() => {
            setBirthday(isBirthday(new Date(timestamp), new Date()));
        }, 2e4);

        return () => {
            clearInterval(isBirthdayCheck)
        }
    }, [timestamp]);
    return birthday;
};
