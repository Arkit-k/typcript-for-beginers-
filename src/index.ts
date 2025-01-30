let value:number = 10;
const result = value + 10; //implicit 
var obligation:any = "I am a string"; //explicit 
let valueread:boolean = true; //explicit
let mynumberf :unknown = "nature";
console.log(typeof mynumberf);

let myArray: number | string = 10;

const variable = JSON.parse("55");

const  number = [56,67,87];
number.push(5);
let head : number = number[0]
console.log(number);


//tuple 

//const mytuple45:[number,string,boolean] = [10,true,"hello"];

const mytuple:[number,string,boolean] = [10,"hello",true,];
mytuple.push(15);
console.log(mytuple);

const mytuple2:readonly[number,string,boolean] = [10,"hello",true];
//mytuple2.append(5);

//named tuple
const mytuple5: [a:number,b:string,c:boolean] = [10,"hello",true]

const valnaraible : {name:string,age:number} = {
      name:"john",
      age:25
}
const clary : {name:string, age:number} = {
      name:"john doe",
      age:25
}

clary.age = 30;
console.log(clary);

const valueanna = 10;

const valueanna5 :{name:unknown,age?:number} = 
{
      name:value ,
}
valueanna5.age = 20;

const keyboard :{ [index:string] : string} = {
      number:"hello",
      2:"world"
}

//enums 

enum color {
      red = 1,
      blue = 2,
      pink = 3 ,
      black = 4,
}

let currentcolor:color = color.red;
console.log(currentcolor);


//numeric enums 
enum StatusCodes {
      NotFound = 404,
      Success = 200,
      Accepted = 202,
      BadRequest = 400
    }
    console.log(StatusCodes.NotFound);
    console.log(StatusCodes.Success);


    //string enums
enum StatusCodes2 {
      NotFound = "error",
      Success = "char",
      Accepted = "value",
      BadRequest = "data"
    }
    console.log(StatusCodes.NotFound);
    console.log(StatusCodes.Success);


    //type 
type Car = {caryear?:number,carname:string,carcolor:string,carprice:number,carmodel:string};
const car: Car = {
      carname:"mercedis",
      carcolor:"red",
      carprice:50000,
      carmodel:"A class"
}

car.carprice = 60000;
console.log(car);

type User = {id:number, name:string, email?:string, isAdmin: true | false | "modrator"};

const user1: User = {
      id:1,
      name:"john",
      isAdmin:true,
}

type product  = { id:number, name:string, price:number,category:"electronics"| "clothing"| "grocery" , dicount?:number};

let product1:product = {
      id:1,
      name:"laptop",
      price:500,
      category:"electronics"
}

product1.dicount = 10;
console.log(product1);

const valueerrer :string | number | Car = {
      carname:"mercedis",
      carcolor:"red",
      carprice:50000,
      carmodel:"A class"      
}

//function 

function add():number{
      return 10+20;
}
console.log(add());

function add2():void{
      10+20;
}
console.log(add2());

function add3(a:number, b:number):void{
      a+b;
}
console.log(add3(10,20));

function add4(a:number, b:number):void{
      a+b;
}
console.log(add4(10,79));

function add5({a, b }: {a:number, b:number}):void{
      a+b;
}
//console.log(add5(10,true));

function getDiscountedPricev({price,discount = 0 }: {price:number, discount?:number  }): void {
       price - (price * discount/100);
}

function primeNumber (num:number):boolean{
      for(let i=2; i<num; i++){
            if(num % i === 0){
                  return false;
            }
      }
      return true;
}

//interface 

interface Rectangle {
      width: number;
      height: number;
    }
    
    const rect: Rectangle = {
      width: 10,
      height: 20
    };
    
    interface ColorRectangle extends Rectangle {
      color: string;
    }
    
    function calculateArea(rect1: Rectangle, color2: ColorRectangle): number {
      // We can use rect1 to calculate the area
      console.log(`Color of rectangle: ${color2.color}`); // Accessing the color from ColorRectangle
      return rect1.width * rect1.height; // Correct calculation using rect1
    }
    
    // Creating a ColorRectangle instance
    const coloredRect: ColorRectangle = {
      width: 15,
      height: 25,
      color: "red"
    };
    
    // Calling the function correctly
    const area = calculateArea(coloredRect, coloredRect);
    console.log(`Area of the rectangle: ${area}`);

//generics 
function identity<T>(arg: T): T {
      return arg;
    }

const result1 = identity(5);  // T is inferred as number
const result2 = identity("Hello");

function createPair<S, T>(v1: S, v2: T): [S, T] {
      return [v1, v2];
    }

    console.log(createPair<string, number>('hello', 42));


   // partial , required , record
interface Point {
      x: number;
      y: number;
}

let pointpart:Partial<Point> = {x: 10};

interface Point {
      x: number;
      y: number;
}


let pointpart2:Required<Point> = {x: 10, y: 20};

const namerecors:Record<number, string> = {
      2: "Builder",
      5:"crueal",
}

interface Person{
      name:string;
      age:number;
      location:string;
}

const bob: Omit<Person, "age" | "location" >  = {
      name:"Bob",
}

type Usereffect = {
      id: number;
      name: string;
      email: string;
      age: number;
    };
    
    function updateUser(user: Usereffect, update: Partial<Usereffect>): Usereffect {
      return { ...user, ...update };  // Merging the original user with the update
    }
    
    // Example Usage
    const user: Usereffect = {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      age: 25
    };
    
    const updatedUser = updateUser(user, { age: 26 }); // Only updating the age
    console.log(updatedUser);
    // Output: { id: 1, name: 'John Doe', email: 'john@example.com', age: 26 }
    

function pickUser (user: Usereffect, value:Pick<Usereffect, "name" | "email">): Usereffect{
      return {...user, ...value};
}
const pickedUser = pickUser(user, { name: user.name, email: user.email }); // Only updating the name and email
console.log(updatedUser);
