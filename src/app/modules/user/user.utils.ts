const generateAdminId=(id:number)=>{
    const totalAdmin=Number(id)
    const adminId=(totalAdmin+1).toString().padStart(4,'0')
    return `A-${adminId}`
}
export const admin={
    generateAdminId
}