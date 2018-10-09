# SOLUTION TASK 1

## 1.

The output will be printed as ```4``` in four times because of the scope problem, we used ```setTimeout``` to print the numbers, which will wait it to finish the loop, and then print it out with polluting the global scope, that is variable ```i```, ```var``` is a function scope, so we can solve this problem with wrapping the ```setTimeout``` with IIFE. Or, simply we can use ```let``` keyword which is a block scope.

```javascript
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}
```

## 2.
```javascript
function Person(name, age) {
	this.name = name;
	this.age = age;
}

function Running(place) {
	var person = new Person('Rudy', 25);
	this.name = person.name;
	this.age = person.age;
	return `${this.name} age of ${this.age} likes to run in ${place}`;
}

var x = Running('Jakarta');
console.log(x);
```

## 3.
```javascript
var Person = function (fullName) {
  this.fullName = fullName; 
  this.walking = () => {
    return `${this.fullName} is walking`;
  }
}

Person.prototype.running = function () {
  return `${this.walking()} and then running`;
}

var x = new Person('John Doe');
x.running();
```

## 4.
```javascript
var a = [1, 2, 3, 4] + [5, 6, 7, 8];
var b = [1, 2, 3, 4] - [5, 6, 7, 8];
```

The variable ```b``` resulted ```NaN``` that's because those two arrays operation will result string operation, ```String``` can use ```+``` operator which will combine the ```String``` itself, but can't use ```-``` operator. Of course, ```String - String``` will give us the result as ```NaN```.
