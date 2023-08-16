import { Forecast } from "@/types/types"

type PropsForecast = {
    data: Forecast
}

const Forecast = ({data} : PropsForecast) : JSX.Element => {
  return (
    <div>
        <p>Forecast</p>
    </div>
  )
}

export default Forecast