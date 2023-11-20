import "./ChartBar.css"


const ChartBar = ( props) => {
    console.log(props.data);
    console.log(props.maximumValue);
    return(
        <div className="chartContainer">
            {props.data.map( (val, index) => {
                let heightUpdate = 0;
                if(props.maximumValue > 0){
                 heightUpdate= Math.round(((val.value * 100) / props.maximumValue));
                }
                return < div className="monthDataContainer" key={index} > 
                <div>
                    <div className="valueDiv">{val.value}</div>
                </div>
                <div className="chart__inner">
                    <div className="chart__fill" style={{height:`${heightUpdate}%`}}></div>
                </div> 
                <div>
                    <div className="labelDiv">{val.label}</div>
                </div>
                

                </div>
            })}
        </div>
    )
}

export default ChartBar;