let ice= {
    fruits: ["apple","mango","banana","strawberry"],
    base: ["milk","water"],
    toppings:["almonds", "gems"]

}

let first = (fruit_pos, second) => {
    setTimeout(()=>{
        console.log(`${ice.fruits[fruit_pos]} was selected!`)
        second();
    },2000);}
    

let second = () => {
    setTimeout(()=>{
        console.log("We are in the second process of making the ice-cream");
    },4000);
}

first(0,second);