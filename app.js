

//JPY: 156.5
//USD: 1.07
//GBP: 0.87

function fromEuroToDollar(euroValue){
    let dollarValue = euroValue * 1.07;
    return dollarValue;
}

function fromDollarToYen(dollarValue){
    let yenValue = dollarValue * 156.5;
    return yenValue;
}

function fromYenToPound(yenValue){
    let poundValue = yenValue * 0.87;
    return poundValue;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };