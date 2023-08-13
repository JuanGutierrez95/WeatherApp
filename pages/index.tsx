import Search from "@/components/Search";
import { Option } from "@/types/types";
import { ChangeEvent, useEffect, useState } from "react";

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<Option | null>(null);
  const [forecast, setForecast] = useState<null>(null);
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
    console.log(inputValue);
  };


  const getForecast = (city: Option) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setForecast(data));
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

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {forecast ? (
        'forecast'
      ):
      <Search
        search={search}
        options={options}
        handleSearchChange={handleSearchChange}
        optionSelect={optionSelect}
        handleSubmit={handleSubmit} 
        />
      }
    </main>
  );
};

export default Home;
