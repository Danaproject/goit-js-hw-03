const findBestEmployee = function (employees) {
    const keys = Object.keys(employees);
    let heroName = keys[0];

    for (const key of keys) {
        let maxTasks = employees[keys[0]];
        if (employees[key] > maxTasks) {
            maxTasks = employees[key];
            heroName = key;
        }  
    }
    return heroName;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux