import { monthNames } from "../constant"

const monthlySummaryId=()=>{
    const date=new Date()
    const month=date.getMonth()+1
    const year=date.getFullYear()
    return `${month}${year}`
}
const getMonth=(month:number)=>{
    if(month===1){
        return monthNames[0]
    }else if(month===2){
        return monthNames[1]
    }
    else if(month===3){
        return monthNames[2]
    }
    else if(month===4){
        return monthNames[3]
    }
    else if(month===5){
        return monthNames[4]
    }
    else if(month===6){
        return monthNames[5]
    }
    else if(month===7){
        return monthNames[6]
    }
    else if(month===8){
        return monthNames[7]
    }
    else if(month===9){
        return monthNames[8]
    }
    else if(month===10){
        return monthNames[9]
    }
    else if(month===11){
        return monthNames[10]
    }
    else if(month===12){
        return monthNames[11]
    }
}
export const generateId={
    monthlySummaryId,
    getMonth
}