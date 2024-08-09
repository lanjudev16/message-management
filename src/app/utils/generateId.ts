const generateId=(totalUser:number):string=>{
    const userId=totalUser+1
    const borderId=userId.toString().padStart(4,'0')
    return `B-${borderId}`
}

export default generateId;