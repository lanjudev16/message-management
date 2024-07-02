const generateMealId=(id:number)=>{
    const date=new Date()
    const day=date.getDay().toString().padStart(2,"0")
    const month=(Number(date.getMonth())+1).toString().padStart(2,"0")
    const year=date.getFullYear().toString()
    const mealId=day+month+year+(id.toString().padStart(2,'0'))
    return mealId
}
export default generateMealId;