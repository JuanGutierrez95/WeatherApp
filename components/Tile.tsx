import Feels from "@/icons/Feels"
import Humidity from "@/icons/Humidity"
import Pop from "@/icons/Pop"
import Pressure from "@/icons/Pressure"
import Visibility from "@/icons/Visibility"
import Wind from "@/icons/Wind"

type IProps = {
    icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
    title: string
    info: string | JSX.Element
    description: string
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop
}
const Tile = ({
    icon, title, info, description
}: IProps) : JSX.Element => {
  const Icon = icons[icon]
  return (
    <div>
        <Icon />
    </div>
  )
}

export default Tile