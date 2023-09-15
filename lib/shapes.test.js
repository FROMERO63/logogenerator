const {Circle, Square, Triangle} = require("./shapes")

//test the circle
test ('Circle', ()=>{
    const shape = new Circle();
    var color= ('red');
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="${color}"/>`)
})

//test the square
test ('Square', ()=>{
    const shape = new Square();
    var color= ('pink');
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
})


//test the triangle
test ('Triangle', ()=>{
    const shape = new Triangle();
    var color= ('purple');
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`)
})

