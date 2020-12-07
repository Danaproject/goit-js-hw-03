const countProps = function(obj) {
    let total = 0;
    for (const key in obj) {
    total += 1;  
    }
    return total;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3