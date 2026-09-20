let name =prompt("What is your name?");
let age=prompt("enter your age");
let gender=prompt("Enter your gender: Male or Female");
let isValidOrder=false;

console.log(name);
console.log(age);
console.log(gender);

// check the gender
if (gender=="Male"){
    document.write("Welcome Mr. " + name+ "<br>");
}
else if (gender=="Female"){
    document.write(" Welcome Ms."+ name+ "<br>");
}
else{
    document.write("Welcome"+ name+ "<br>");
}

//check the customers age
if( age <16 ){
    document.write("You are not eligible to place an order"+ "<br>");
}
else {
    document.write("Continue with the order"+ "<br>");
    let order=prompt("Enter your order: Burger or Shawarma or Zinger");
    console.log(order);

    //choose an order

    if (order=="Zinger" || order=="Burger" || order=="Shawarma"){
        isValidOrder = true;
        document.write("your order is being prepared" + "<br>");
    }
    else{
        isValidOrder = false;
        document.write(".Invalid order. Please try again" + "<br>");
    }

    // logical operators
    if (age>=18 && isValidOrder==true){
        document.write("Order confirmed"+ "<br>");
    }

    if (age<18 || isValidOrder==false){
        document.write("Order requires verification"+ "<br>");
    }
}


