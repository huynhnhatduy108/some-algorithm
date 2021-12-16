const recursion = (dataParent, dataFilter, level, idx )=>{
    let oldLenght = dataFilter?.length;
    for (let x = 0; x < dataParent?.length; x++) {
        if(!dataParent?.children?.length) dataParent[x].rank="level"+level;
        for (let y = 0; y < dataFilter?.length; y++) {
            if(dataParent[x]?.menu_id===dataFilter[y]?.parent_id){
                dataParent[x].children.push(dataFilter[y]);
                dataParent[x].rank="level"+level;
                dataFilter.splice(y,1);
            } 
            idx+=1
        }
        if(oldLenght!==dataFilter) recursion(dataParent[x]?.children, dataFilter, level + 1, idx );  
        idx+=1

    }
    return dataParent;
} 
recursion(dataParent, dataFilter, 1,1);