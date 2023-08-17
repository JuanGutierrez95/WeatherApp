import { timeStamp } from "console";

export const getSunTime = (timeStamp: number) => {
    const date = new Date(timeStamp * 1000);
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();

    if(hours.length <= 1) hours = `0${hours}`;
    if(minutes.length <= 1) minutes = `0${minutes}`;
    
    return `${hours}:${minutes}`;
}