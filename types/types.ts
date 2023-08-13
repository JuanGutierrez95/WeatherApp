import { ChangeEvent } from 'react';

export interface ILocalNames {
    [languageCode: string] : string;
}
export interface IWeather {
    id: number;
    country: string;
    lat: number;
    local_names: ILocalNames;
    lon: number;
    name: string;
    state: string;
}

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