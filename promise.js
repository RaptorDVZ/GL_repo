
let ice= {
    fruits: ["apple","mango","banana","strawberry"],
    base: ["milk","water"],
    toppings:["almonds", "gems"]
}

let is_true = true;

let order = (time, work )=> {
    return new Promise ((resolve,reject)=>
    {
        if(is_true){
            setTimeout(()=>{
                resolve(work());
            },time);

            }
        
        else{
            reject(()=>{
                console.log("sorry we cannot serve you");
            })
        }
    })
}

order(4000,()=>console.log(`<h1>Selected the fruit ${ice.fruits[3]}</h>`));cls