1/ Answer: B: ReferenceError: greeting is not defined

Reason:
There is a typo in the sample code. You accidentally allocated an empty object to a variable with the name greeting after declaring one with the incorrect spelling. You'll get a ReferenceError since greeting was not specified as a variable.

2/ Answer: C: "12"

Reason:
the sum function takes two parameters a and b and attempts to add them together using the + operator. When you call sum(1, "2"), JavaScript performs type coercion by converting the number 1 to a string and then concatenates.

3/ Answer: C: ['🍝', '🍕', '🍫', '🥑', '🍔']

Reason:
we first create an array food containing four food emojis. Then, we create an object info with a property favoriteFood that is initially set to the first element of the food array, which is "🍕". Later in the code, we change the value of info.favoriteFood to "🍝".

4/ Answer: B: Hi there, undefined

Reason:
The sayHi function in the provided code anticipates only one argument, name, which is utilized to create a greeting string. However, name becomes undefined when you call sayHi() without passing in an argument, but the method is still called.

5/ Answer: C: 3

Reason:
In the provided code, you have an array numbs containing four elements: [0, 1, 2, 3]. The forEach method iterates over each element of the array and executes the provided callback function. In the callback function, there's an if condition that checks if num is truthy (i.e., not equal to 0).
