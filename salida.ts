

// types

var myString: string = 'hola mundo'
myString = 8 + ''

// tsc miArchivo.ts -w, para no tener que ejecutar tsc miArchivo.ts cada vez que hagamos un cambio

var myNumber: number = 0;
var myBoolean: boolean = true || false

// any, para aceptar cualquier tipo de dato
var myVar: any = 'hello'
myVar = 8

document.write(myString)
document.write(myNumber.toString())

// arrays

var stringArray: string[] = ['item1', 'item2']
var numberArray: number[] = [1, 2, 3]
var booleanArray: boolean[] = [true, false, true]

var anyArray: any[] = ['', '', '']
anyArray = [1, 2, 3, 'hola', true]

// tuples: arreglos con estructura definida

var strNumTuple: [string, number];
strNumTuple = ['hola', 7]

// void(para definir tipo de dato vacio), undefined, null

/* let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;
 */

// Funciones

function getSum(num1: number, num2: number): number {
    return num1 + num2;
}

let mySum = function(num1: number | string, num2: number | string): number {
    if (typeof(num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof(num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
}

// ? se pone para decir que este parametro es opcional
function getName(firstName: string, lastName?: string): string {
    return firstName + ' ' + lastName
}

function myVoidFunction(): void {
    return;
}

// interfaces'
interface ItoDo {title: string; text: string}

function showToDo(toDo: ItoDo) {
    console.log(`${toDo.title} - ${toDo.text}`);
}

let myToDo: ItoDo = {
    title: 'mi titulo',
    text: 'mi texto'
}
showToDo(myToDo)

// clases

class User {
    name: string;
    public email: string;
    protected age: number;
    private password: string;

    constructor(name: string, email: string, age: number, password: string) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
    }

    // metodos del usuario

    register() {
        console.log(`${this.name} is registered`);
    }

    showMeAge() {
        return this.age
    }

    private ageInYear () {
        return this.age + 'years'
    }

    payInvoice() {
        console.log(`${this.name} paide invoice`);
        
    }
}

var juan = new User('Juan', 'juan@gmail.com', 25, '12345');

juan.register()

// herencia 
class  Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number, password: string) {
        super(name, email, age, password)
        this.id = id
    }

    payInvoice() {
        super.payInvoice()
    }
}

var pedro = new Member(1, 'Pedro', 'p@p.com', 20, '4321')
pedro.payInvoice()