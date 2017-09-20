//*Section 1
var myName: string="Derek";
var myAge: number = 41;
var canVote: boolean = true;
var anything: any = "dog";
anything = 3453452;
// document.getElementById("tsStuff").innerHTML="My Name is "+myName;
// document.write("my name is a " + typeof(myName)+"<br/>");
// document.write("anything is a " + typeof(anything)+"<br/>");

//*Section 2
var strToNum: number = parseInt("5");
var numToStr: number = 5;
// document.write("numberToStr is a "+typeof(numToStr.toString())+"<br/>");
const PI = 3.14159;

//*Section 3
interface SuperHero{
    realName: String;
    superName: String;
}
var superman: SuperHero={
    realName: "Clark Kent",
    superName: "Superman"
}
// document.write(superman.realName + " is " + superman.superName + "<br />");

//*Section 4
var employees: string[]=["Bob", "Sally", "Sam"];
//employees.push(5);    wrong
//document.write(employees.toString() + "<br/>");
interface SuperHero{
    realName: String;
    superName: String;
}
var superheroes: SuperHero[] = [];
superheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});
//document.write(superheroes[0].realName + " is " + superheroes[0].superName + "<br/>");

//*Section 5
// document.write("5 + 4 = " + (5+4)+ "<br/>");
var randNum: number = 1;
// document.write("randNum++ = " + randNum++ + "<br/>"); //not working 
// document.write("randNum++ = " + ++randNum + "<br/>");

//*S6
let sample = 123;
if(true){
    let sample= 456;//let**
}
//document.write("sample: " + sample + "<br/>");//123
let sampleVar = 123;
// if(true){
//     var sampleVar= 456; //var here***
// }
//document.write("sample: " + sampleVar + "<br/>");//456

//*S7
var randArray= [5,6,7,8];
for (var val in randArray){//for in***
    //document.write(val +"<br/>");
}//0 1 2 3 ***the index, interesting
var strArray= randArray.map(String);
for( var num of randArray){ //fot of***
    //document.write(num + "<br/>");
} //5 6 7 8

//*S8
var getSum = function(num1:number,num2:number):number{
    return num1 + num2;
}
var theSum1: number = getSum(5,2);
//ocument.write("5+2 = "+theSum1 + "<br/>");
var getDiff = function(num1:number, num2 = 2, num3?:number):number{
    if(typeof num3 !== "undefined"){
        return num1 - num2 - num3;
    }
    return num1 - num2;
}
//document.write("5-2 = "+getDiff(5) + "<br/>");//3
//document.write("5-2-3 = "+getDiff(5,undefined,3) + "<br/>");//0  or could be getDiff(5,2,3)

//S9
var sumAll = function(...nums:number[]):void{
    // We can use reduce with the array to add all, the values together one by one
    var sum = nums.reduce((a,b) => a + b, 0);
    //document.write("Sum: " + sum + "<br/>");
}
sumAll(1,2,3);
// Arrow functions don't include function in the definition
var addOne = (x)=> x+1;
//document.write(addOne(7)); //8

//S10
class Animal{
    public favFood: string; 
    // static fields have values that are shared by every object
    static numOfAnimals: number = 0;
    
    // If you define an attribute with private the value is automatically assigned
    constructor(private name: string, private owner: string){
        Animal.numOfAnimals++;
    }

    // You can define methods as private but then it can't be seen by subclasses, or accessed by any code other then that within the class
    ownerInfo(){
        document.write(this.name + " is owned "+ this.owner + "<br/>" );
    }

    // Static methods are accessed using the class name
    static howManyAnimals():number{
        return Animal.numOfAnimals;
    }
    
    //setter & getter
    private _weight:number;
    get weight(): number{
        return this._weight;
    }
    set weight(weight: number){
        this._weight = weight;
    }
}

//create animal object
var spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100;
// document.write("Spot weight is " + spot.weight+"<br>"); //Spot is owned Doug , Spot weight is 100
//only access static method by calling the class name
// document.write("# of animal: "+Animal.howManyAnimals()+ "<br>"); //1

//inheritance & overwritten
class Dog extends Animal{
    constructor(name: string, owner:string){
        super(name, owner);
        Dog.numOfAnimals++;
    }
}
var grover = new Dog("Grover","Jimmy");
// document.write("# of Animals: " + Animal.howManyAnimals() + "<br>"); //2
// document.write("Dog is Animals?: " + (grover instanceof Animal) + "<br>"); //true
// document.write("Grover have name?: " + ('name' in grover) + "<br>"); //true

//S11 Interface
//interface, contract, class must create all functions defined in the interface
interface Vehicle{
    drive():any;
}
class Car implements Vehicle{
    constructor(private wheels: number){}
    drive():void{
        document.write("Car With # " +this.wheels + " of wheels.<br>");
    }
}
class Bicycle implements Vehicle{
    constructor(private wheels: number){}
    drive():void{
        document.write("Bicycle With # " +this.wheels + " of wheels.<br>");
    }
}
var car = new Car(4);
var bike = new Bicycle(2);
car.drive();
bike.drive();

//S12 Generic
//multiple datatype in similar ways
function GetType<T>(val: T):string{
    return typeof(val);
}
var aStr="A String";
var aNum = 12;
document.write(GetType(aStr));



