// print first last of a name in an array
function printFL(array) {
    array.forEach(function(val){
        let end = val.length;
        console.log(end);
        console.log(val[0] + val[end-1]);
    })
}


// take in arr of objs and add an unknown key and value to it with foreach
function addKeyandValue(arrObjs, key, value) {

    arrObjs.forEach(function(oneObj){

        oneObj[key] = value;

    })
    return arrObjs;
}
// MAP practice:
function valTimesIndex(arrayNums) {
    return arrayNums.map(function (val, index) {
        return val * index;
    })    
}

function extractKey(arrObjs, nameOfKey) {

    return arrObjs.map(function (val) {

        if (val[nameOfKey]) {
            return val[nameOfKey]
        }
    })
}

function filterLetters(array, letter) {
    let count = 0;
    array.filter(function(val) {
        if (val.toLowerCase() === letter) {
            count++
        }

    })
    return count;
}

function filterKey(arrObjs, key) {
    return arrObjs.filter(function (val) {
        return val[key] === true;
    })
}

function extractKey(arrObjs, name) {
    arrObjs.reduce(function (acc, next) {
        if (arrObjs[name]) {
            acc = next;
        }
        return acc;
    }, [])
}