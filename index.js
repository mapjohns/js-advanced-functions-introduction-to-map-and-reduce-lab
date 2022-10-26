// Your code here
function mapToNegativize(array) {
    return array.map(x => x*-1)
}

function mapToNoChange(array) {
    return array.map(x => x)
}

function mapToDouble(array) {
    return array.map(x => x*2)
}

function mapToSquare(array) {
    return array.map(x => x**2)
}

function reduceToTotal(array, startingPoint = 0) {
    return array.reduce((accum, curr) => accum + curr, startingPoint)
}
function reduceToAllTrue(array) {
    let test = array.reduce(function(accum, curr) {
        if (accum[`${!!curr}`]) {
            accum[`${!!curr}`]++
        }
        else {
            accum[`${!!curr}`] = 1
        }
        return accum
   }, {})
   if (!!test.false) {
    return false
   }
   else {
    return true
   }
}

function reduceToAnyTrue(array) {
    let test = array.reduce(function(accum, curr) {
        if (accum[`${!!curr}`]) {
            accum[`${!!curr}`]++
        }
        else {
            accum[`${!!curr}`] = 1
        }
        return accum
    }, {})
    if (!!test.true) {
        return true
    }
    else {
        return false
    }
}