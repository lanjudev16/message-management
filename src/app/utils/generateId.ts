const generateId=(totalUser:number):string=>{
    const userId=totalUser+1
    return userId.toString().padStart(4,'0')
}
export default generateId;