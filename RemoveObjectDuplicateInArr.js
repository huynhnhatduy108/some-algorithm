
const uniqueArray= listAddDateTime.filter((v,i,arr)=>arr.findIndex((t)=>(t.hrm_branch_id === v.hrm_branch_id))===i)
