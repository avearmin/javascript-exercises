const findTheOldest = function(array) {
    let oldestPerson;
    let oldestAge = 0;
    const currentYear = new Date().getFullYear();
    
    for (item of array) {
        if (item.hasOwnProperty("yearOfDeath")) {
            if (item.yearOfDeath - item.yearOfBirth > oldestAge) {
                oldestAge = item.yearOfDeath - item.yearOfBirth;
                oldestPerson = item;
            }
        } else {
            if (currentYear - item.yearOfBirth > oldestAge) {
                oldestAge = currentYear - item.yearOfBirth;
                oldestPerson = item;
            }
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
