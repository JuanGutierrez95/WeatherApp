import { Option, Props } from "@/types/types";

const Search = ({
  search,
  options,
  handleSearchChange,
  optionSelect,
  handleSubmit,
}: Props): JSX.Element => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br bg-sky-200 h-[150vh] w-full">
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
          <ul className="absolute ml-0 bg-white top-9 rounded-b-md">
            {options.map((option: Option, index: number) => (
              <li key={option.name + "-" + index}>
                <button
                  className="w-full px-2 py-1 text-sm text-left border-b-2 border-blue-200 cursor-pointer hover:bg-blue-100"
                  onClick={() => optionSelect(option)}
                >
                  {option.name}, {option.country}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleSubmit}
            className="px-2 py-1 border-2 cursor-pointer rounded-r-md border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100"
          >
            Search
          </button>
        </div>
      </section>
    </main>
  );
};

export default Search;
