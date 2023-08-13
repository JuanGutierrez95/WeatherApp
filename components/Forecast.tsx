import { Forecast } from "@/types/types"

type Props = {
    data: Forecast
}

const Forecast = ({data} : Props) : JSX.Element => {
  return (
    <div>
        <p>Forecast</p>
    </div>
  )
}

export default Forecast