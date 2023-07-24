import { forecastType } from "../types";

type Props = {
    data: forecastType
}

const Forecast = ({ data }: Props): JSX.Element => {
    console.log(data);
    
    return ( 
    <div>
        <p>{data.name}</p>
    </div> );
}

export default Forecast;