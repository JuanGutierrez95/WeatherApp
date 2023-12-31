import { Forecast, Option } from '@/types/types';
import { useState, useEffect, ChangeEvent } from 'react';

const useForecast = () => {
    const [search, setSearch] = useState<string>("");
    const [options, setOptions] = useState<[]>([]);
    const [city, setCity] = useState<Option | null>(null);
    const [forecast, setForecast] = useState<Forecast | null>(null);
    const getSearch = (value: string) => {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
          process.env.NEXT_PUBLIC_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((data) => setOptions(data));
    };
  
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim();
      const lettersOnly = value.replace(/[^a-zA-Z ]/g, "");
      const inputValue =
        lettersOnly.charAt(0).toUpperCase() + lettersOnly.slice(1);
      setSearch(inputValue);
      if (lettersOnly === "") return;
      getSearch(inputValue);
    };
  
  
    const getForecast = (city: Option) => {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
            
            const forecastData = {
                ...data.city,
                list: data.list.slice(0, 16)
            }
            setForecast(forecastData)
        }
        )
    }
  
  
    const handleSubmit = () => {
      if(!city) return;
  
      getForecast(city)
    }
  
  
    const optionSelect = (option: Option) => {
      setCity(option);
    };
  
  
      useEffect(() => {
        if(city){
         setSearch(city.name) 
         setOptions([])
        }
      },[city])

      return {
        search,
        forecast,
        options,
        handleSearchChange,
        optionSelect,
        handleSubmit,
    }
}

export default useForecast