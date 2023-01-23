// types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myString = 'hola mundo';
myString = 8 + '';
// tsc miArchivo.ts -w, para no tener que ejecutar tsc miArchivo.ts cada vez que hagamos un cambio
var myNumber = 0;
var myBoolean = true || false;
// any, para aceptar cualquier tipo de dato
var myVar = 'hello';
myVar = 8;
document.write(myString);
document.write(myNumber.toString());
// arrays
var stringArray = ['item1', 'item2'];
var numberArray = [1, 2, 3];
var booleanArray = [true, false, true];
var anyArray = ['', '', ''];
anyArray = [1, 2, 3, 'hola', true];
// tuples: arreglos con estructura definida
var strNumTuple;
strNumTuple = ['hola', 7];
// void(para definir tipo de dato vacio), undefined, null
/* let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;
 */
// Funciones
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// ? se pone para decir que este parametro es opcional
function getName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
function myVoidFunction() {
    return;
}
function showToDo(toDo) {
    console.log("".concat(toDo.title, " - ").concat(toDo.text));
}
var myToDo = {
    title: 'mi titulo',
    text: 'mi texto'
};
showToDo(myToDo);
// clases
var User = /** @class */ (function () {
    function User(name, email, age, password) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
    }
    // metodos del usuario
    User.prototype.register = function () {
        console.log("".concat(this.name, " is registered"));
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.ageInYear = function () {
        return this.age + 'years';
    };
    User.prototype.payInvoice = function () {
        console.log("".concat(this.name, " paide invoice"));
    };
    return User;
}());
var juan = new User('Juan', 'juan@gmail.com', 25, '12345');
juan.register();
// herencia 
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age, password) {
        var _this = _super.call(this, name, email, age, password) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var pedro = new Member(1, 'Pedro', 'p@p.com', 20, '4321');
pedro.payInvoice();
