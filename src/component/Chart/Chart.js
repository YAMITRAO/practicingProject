
import "./Chart.css"
import ChartBar from "./ChartBar/ChartBar";

const Chart = (props ) => {

    let chartData = [ 
        {label:"Jan", value: 0},
        {label:"Feb", value: 0},
        {label:"Mar", value: 0},
        {label:"Apr", value: 0},
        {label:"May", value: 0},
        {label:"Jun", value: 0},
        {label:"Jul", value: 0},
        {label:"Aug", value: 0},
        {label:"Sep", value: 0},
        {label:"Oct", value: 0},
        {label:"Nov", value: 0},
        {label:"Dec", value: 0},
    ]

    let maxValue = 0;
    let receivedDataFromProject = props.renderedData;
    receivedDataFromProject.map( (val) => {
        
        chartData[val.itemDate.getMonth()].value += val.itemRate;
        console.log(chartData[val.itemDate.getMonth()].value)
        if( chartData[val.itemDate.getMonth()].value > maxValue){
            maxValue = chartData[val.itemDate.getMonth()].value;
        }

        return  0;
    });



    return(
        <>
        <ChartBar  data = {chartData} maximumValue = {maxValue} />
        </>
    )
}

export default Chart;