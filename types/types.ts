import { ChangeEvent } from 'react';

export type Option = {
    name: string;
    country: string;
    lat: number;
    lon: number;
}

export type Props = {
    search: string;
    options: [];
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    optionSelect: (option: Option) => void;
    handleSubmit: () => void;
}


export type Forecast = {
    name: string;
    country: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
    list: [{
        dt: number;
        dts_txt: string;
        main: {
            feels_like: number;
            grnd_level: number;
            humidity: number;
            pressure: number;
            sea_level: number;
            temp: number;
            temp_max: number;  
            temp_min: number;
        },
        weather: [{
            description: string;
            icon: string;
            main: string;
        }],
        wind: {
            speed: number;
            deg: number;
            gust: number;
        },
        clouds: {
            all: number;
        },
        pop: number;
        visibility: number;
    }]
}

