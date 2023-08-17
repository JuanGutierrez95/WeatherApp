import { timeStamp } from "console";

export const getWindDirection = (deg: number) : string =>{

    if( deg > 15 && deg <= 75) return 'NE';
    if( deg > 75 && deg <= 105) return 'E';
    if( deg > 105 && deg <= 165) return 'SE';
    if( deg > 165 && deg <= 195) return 'S';
    if( deg > 195 && deg <= 255) return 'SW';
    if( deg > 255 && deg <= 285) return 'W';
    if( deg > 285 && deg <= 345) return 'NW';

    return 'N';
}

export const getHumidityValue = (level: number) : string => {
    if(level <= 55) return 'Dry and confortable';
    if(level > 55 && level <= 65) return 'A bit unconfortable, sticky feeling';

    return 'Lots of moisture, unconfortable air'
}

export const getSunTime = (timeStamp: number) => {
    const date = new Date(timeStamp * 1000);
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();

    if(hours.length <= 1) hours = `0${hours}`;
    if(minutes.length <= 1) minutes = `0${minutes}`;
    
    return `${hours}:${minutes}`;
}

export const getPop = (value: number) : string => {
    if(value <= 0.33) return 'Low probability'
    if(value > 0.33 && value <= 0.66) return 'Moderate probability'

    return 'High probability'
}