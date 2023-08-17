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
    <main className="flex justify-center items-center bg-gradient-to-br from-purple-500 via-amber-300 to-gray-300 h-[125vh] w-full">
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
