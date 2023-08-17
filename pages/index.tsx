import Forecast from "@/components/Forecast";
import Search from "@/components/Search";
import useForecast from "@/hooks/useForecast";

const Home = () : JSX.Element => {
  const {
    search,
    options,
    forecast,
    handleSearchChange,
    optionSelect,
    handleSubmit,
  } = useForecast();

  return (
    <main className="flex justify-center items-center bg-gradient-to-br bg-sky-400 h-[125vh] w-full">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          search={search}
          options={options}
          handleSearchChange={handleSearchChange}
          optionSelect={optionSelect}
          handleSubmit={handleSubmit}
        />
      )}
    </main>
  );
};

export default Home;
