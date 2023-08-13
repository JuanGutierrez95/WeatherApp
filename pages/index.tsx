import { ChangeEvent, useState } from "react";

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const [options, setOptions] = useState<[]>([]);

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

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
        <h1 className="mb-4 text-4xl font-bold">Weather Forecast</h1>
        <p className="mt-2 mb-4 text-sm">
          Enter below a place you want to know the weather of and select an
          option from the dropdown
        </p>

        <div className="relative flex mt-10 md:mt-4">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            className="px-2 py-1 border-2 border-white rounded-l-md"
          />
          <ul className="absolute top-9 bg-white ml-0 rounded-b-md">
        {options.map((option: { name: string }, index: number) => (
          
          <li key={option.name + '-' + index}>
            <button
              className="text-left text-sm w-full px-2 py-1 border-b-2 border-blue-200 hover:bg-blue-100"
              onClick={() => setSearch(option.name)}>
              {option.name}
              </button>
          </li>
          ))}
          </ul>
          <button className="px-2 py-1 border-2 cursor-pointer rounded-r-md border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100">
            Search
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
