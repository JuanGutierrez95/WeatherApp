import { ChangeEvent } from 'react';

export type Option = {
    name: string;
    lat: number;
    lon: number;
    /*state: string;
    country: string;*/
}

export type Props = {
    search: string; //name
    options: []; //arreglo vacio
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
}