

const mostFrequentTask = (array) =>{
    let itemCount = {};
    let maxItem = null;
    let maxCount = 0;

    for (let item in array){
        itemCount[item] = (itemCount[item] || 0) + 1;
        if(itemCount[item] > maxCount){
            maxCount = itemCount[item];
            maxItem = item;
        } 
    }

    return maxItem;
}

const array = ["A","B","A","C","A","B","A"];


mostFrequentTask(array)

