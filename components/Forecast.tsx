import { getSunTime } from "@/helpers";
import Sunrise from "@/icons/Sunrise";
import Sunset from "@/icons/Sunset";
import { Forecast } from "@/types/types";
import Image from "next/image";

type PropsForecast = {
  data: Forecast;
};

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>°</sup>
  </span>
);

const Forecast = ({ data }: PropsForecast): JSX.Element => {
  const today = data.list[0];
  console.log({ today });

const image = `https://openweathermap.org/img/wn/${today.weather[0].icon}.png`;
  return (
    <div
      className="w-full md:max-w-[500px] py-4 md:py-4
    md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20
    backdrop-blur-ls rounded drop-shadow-lg"
    >
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">{data.name}</h2>
          <span className="font-thin">{data.country}</span>
          <h1 className="text-4xl font-extralight">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <p> {today.weather[0].main} </p>
          <p className="text-sm">
            Max: <Degree temp={Math.ceil(today.main.temp_max)} /> Min:{" "}
            <Degree temp={Math.floor(today.main.temp_min)} />
          </p>
        </section>

        <section className="flex pb-2 mt-4 mb-5 overflow-x-scroll">
          {data.list.map((item, index) => (
            <div className="inline-block text-center w-[50px] flex-shrink-0" key={index}>
              <p className="text-sm">
                {
                  index === 0 ? 'Now' : new Date(item.dt * 1000).getHours() + ':00'
                }
                </p>
              <Image
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                width={50}
                height={50}
                alt={`weather-icon-${item.weather[0].description}`}
              />
              <p className="text-sm font-bold">
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </section>
        <section className="flex justify-between text-zinc-700">
          <div className="w-[140px] text-xs font-bold flex flex-col
          items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
         <Sunrise/> <span className="mt-2">{getSunTime(data.sunrise)}</span>
          </div>
          <div className="w-[140px] text-xs font-bold flex flex-col
          items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
          <Sunset /> <span className="mt-2">{getSunTime(data.sunset)}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Forecast;
