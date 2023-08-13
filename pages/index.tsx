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
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
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
