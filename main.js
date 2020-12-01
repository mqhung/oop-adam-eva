//doi tuong tao
let appleEnvy = new Apple(10);
//doi tuong human
let adam = new Human("Adam",65,"Male");
let eva = new Human("Eva",45, "Female");

document.write("Adam say :" + adam.say("Hello Eva") + "<br>");
document.write("Eva say :" + eva.say("Hello Adam") + "<br>");
document.write("Apple's Weight is: " + appleEnvy.weight + "<br>");
document.write("Adam eat Apple" +"<br>");
document.write("Adam's Weight is: " + adam.eat(appleEnvy) + "<br>");
document.write("Check apple after Adam eat: " + adam.check(appleEnvy) + "<br>");
document.write("Eva eat Apple" +"<br>");
document.write("Eva's Weight is: " + eva.eat(appleEnvy) + "<br>");
document.write("Check apple after Eva eat: " + eva.check(appleEnvy) + "<br>");