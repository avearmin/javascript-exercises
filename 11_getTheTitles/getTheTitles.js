const getTheTitles = function(array) {
    let titles = [];
    for (item of array) {
        titles.push(item.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
