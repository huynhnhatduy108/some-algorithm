

const intersectionUpdate = listFilter?.filter(function(e) {
    return branchList?.findIndex(function(item){return item.branch_code ===e.hrm_branch_id}) < 0;
});