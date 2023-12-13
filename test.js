const {suma} = require('./app.js');


test("One euro should be 1.07 dollars", function(){
    //Importo la funcion desde app.js
    const {fromEuroToDollar} = require('./app.js')
    
    //Uso la funcion como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    //Si 1 euro son 1.07 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    //Hago la prueba
    expect(fromEuroToDollar(3.5)).toBe(3.745);// 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test('One dollar should be 156.5 yens', function(){
    const {fromDollarToYen} = require('./app.js');
    const yens = fromDollarToYen(5);
    const expected = 5 * 156.5;
    expect(fromDollarToYen(5)).toBe(782.5);

})

test('One yen should be 0.87 pounds', function(){
    const {fromYenToPound} = require('./app.js');
    const pounds = fromYenToPound(10.7);
    const expected = 10.7 * 0.87;
    expect(fromYenToPound(10.7)).toBe(9.309);
})