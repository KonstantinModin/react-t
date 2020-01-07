const users = [
    {name: 'Jhon Snow', id:25, age: 24},
    {name: 'Mary Gold', id:48, age: 23},
    {name: 'Scarlet Way', id:15, age: 21},
];

function emulateRequest(timeout = 1000){
    return new Promise((resolve) => {
        setTimeout(resolve, timeout)
    });
}

function all(){
    return emulateRequest().then(() => {
        return users.map(({name,id})=>({name, id}));
    })
}

function get(id){
    return emulateRequest().then(()=>{
        const index = users.findIndex(user=> user.id === id);
        // console.log(id,index, users[index]);
        return ~index ? users[index] : null ;
    });
}

export { all, get };