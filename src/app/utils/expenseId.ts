const generateExpenseId=(id:number)=>{
    const expenseId=(Number(id)+1).toString().padStart(6,'0')
    return expenseId;
}
export default generateExpenseId;