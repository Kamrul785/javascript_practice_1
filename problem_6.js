var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

function checkLength(friends){
    let maxlength = friends[0];
    for(let i = 0 ; i < friends.length;i++){
        if(friends[i].length > maxlength.length){
            maxlength = friends[i];
        }
    }
    return maxlength;
}

const result = checkLength(friends);
console.log(result); 
