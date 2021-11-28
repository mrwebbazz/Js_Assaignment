


// (1). What is Variable ?
// Ans: A variable is any characteristics, number, or quantity that can be measured or counted.A variable may also be called a data item. Age, sex, business income and expenses, country of birth, capital expenditure, class grades, eye colour and vehicle type are examples of variables.

// Example : 
    var name = "Rumon";
// The variable is (Name) and the value of variable is (Rumon).

//=================================================

// (2). How to write Variable ?
// Ans : 
        var name = "Rumon";
        var age = 25;
//=================================================

// (3). What is string type variable and how to write it ?
// Ans : Basically we know that, Strign type variable is a characteristic value of a variable. But it can hold numbers like 100 and text values like "Rumon". In programming, text values are called text strings. ... Strings are written inside double or single quotes. Numbers are written without quotes. If you put a number in quotes, it will be treated as a text string.

// Example : 
var name = "Rumon";
var age = "25"; 
//=================================================

// (4). What is Number type variable and how to write it ?
// Ans : The number type variable is declared and initialized with a numeric value in the statement.

// Example : 
    var date = 10;
    var month = 10;
    var year = 1997;
// Numbers are written without quotes.
//=================================================

// (5). What is Boolean type variable and how to write it ?
// Ans : Boolean variables are variables that can have only two possible values: true, and false. To declare a Boolean variable, we use the keyword bool. To initialize or assign a true or false value to a Boolean variable, we use the keywords true and false.

// Example : 
        var name = true;
        var pass = false;
//=================================================

// (6). How to use the toUpperCase() and toLowerCase() ?
// Example for toUpperCase() :
    
    // var intro = "hi this is rumon. i'm 25 and i'm from sylhet Bangladesh.";
    console.log(intro.toUpperCase());
    // expected output: HI THIS IS RUMON. I'M 25 AND I'M FROM SYLHET BANGLADESH.

// Example for toLowerCase() :
    // var intro = "HI THIS IS RUMON. I'M 25 AND I'M FROM SYLHET BANGLADESH.";
    console.log(intro.toLowerCase());
    // expected output: hi this is rumon. i'm 25 and i'm from sylhet Bangladesh.
//=================================================

// (7). How many Operators in JavaScript ?
// Ans : There are three types of operator that programmers use: arithmetic operators. relational operators. logical operators.
//=================================================

// (8). Write the usign of Math.abs //
// Ans: The Math.abs is used for Convert a number type variable negative to Positive.
    // Example :
        var num = -100;
        num = Math.abs(num);
        console.log(num);
    // expected output: 100
//=================================================

// (9). Write the Usign of Math.ceil() ?
// Ans : The Math.ceil() function always rounds a number up to the next largest integer.

// Example :
     console.log(Math.ceil(.95));
// expected output: 1

     console.log(Math.ceil(7.004));
// expected output: 8

     console.log(Math.ceil(-7.004));
// expected output: -7
//=================================================

// (10). Write the Usign of Math.floor() ? 
// Ans : The Math.floor() function returns the largest integer less than or equal to a given number.

// Example : 
     console.log(Math.floor(5.95));
    // expected output: 5

     console.log(Math.floor(5));
    // expected output: 5

     console.log(Math.floor(-5.05));
    // expected output: -6
//======================================================================

// (11). Write the Usign of Math.round() ? 
// Ans : The Math.round() function returns the value of a number rounded to the nearest integer.

// Example : 
     console.log(Math.round(0.9));
// expected output: 1

    console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
    // expected output: 6 6 5

// console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// expected output: -5 -5 -6
//======================================================================

// (12). Write the Usign of Math.random() ? 
// Ans : The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

// Example :
var numA = Math.random();
console.log(numA);

// The Assignment is End here //

//First Assignment Done.

        // Thanks To Hablu Programmer //