var userAccounts = [
    {
        name: 'Ten',
        email: '10@ juno.com',
        numFriends: 10
    },
    {
        name: 'Twenty',
        email: '20@ juno.com',
        numFriends: 20
    },
    {
        name: 'Thirty',
        email: '30@ juno.com',
        numFriends: 30
    },
];




var accountsToAdd = [
    {
        name: 'Forty',
        email: '40@ juno.com',
        numFriends: 40
    },
    {
        name: 'Fifty',
        email: '50@ juno.com',
        numFriends: 50
    },
    {
        name: 'Sixty',
        email: '60@ juno.com',
        numFriends: 60
    },
    {
        name: 'Ten',
        email: '10@ juno.com',
        numFriends: 1000
    },

]


function addNewAccounts() {
    j = accountsToAdd[3];
    
    for (var i = 0; i < userAccounts.length; i++) {
        if (accountsToAdd[i].name === i) {
                userAccounts.push(accountsToAdd[i].numFriends);
            } else userAccounts.push(j);
        
    }
}

//        userAccounts.push(accountsToAdd[i]);
//    }
//}

addNewAccounts();
console.log(userAccounts);


function combine(arr) {
    for (var i = 0; i < arr.length; i++){
        
        for(var j = 0; j < arr.length; j++){
            
            
            if((i != j) && arr[i].email === arr[j].email){
                arr[i].numFriends += arr[j].numFriends;
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}