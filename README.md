# jstut

## Javascript Variables
write about js variables

1. Variables are containers which hold reusable data.
2. It is basic unit of storage of programe.   
3. The value stored in a variable can be changed during program execution.
  <!-- var name;      (declaration) -->
  <!-- name = "rekha";  (initialize) -->
  <!-- var name = "rekha" ;  (both uper) -->
  <!-- var_test = "testing" ; -->
  <!-- document.write(_test); --> output - testing
  <!-- alert(name); -->   result - rekha

## Javascript Operators

An operator is a symbol that tell the compiler which arithmatic or logical operation to be performed between the respective operands.

These are following types.
<!-- 
1. Arithmetic  operators = { (x+y)addition , (x-y)subtraction , (x*y)multiplication , (x/y)division , 
                              (x%y)modulus , (x++)increment , (x--)decrement  }

2. Logical  operators =  { (X && Y)logical And , (X || Y)logical Or  }

3. Ternary operator =  { (2>1 ?) <true>:<false>}

4. Assignment operators = { (C=A)simple assignment , (C+=A)add and assignment  } 

5. camparison operator = { (X==Y)equal , (X!=Y)not equal , (X>Y)greater than , (X<Y)less than , 
                          (X>=Y)greater than or equal to , (X<=Y)less than or equal to   } -->

## Javascript Loop

## For loop
1. A loop is used to repeat a block of code until the specified condition is met.
2. when similiar task is needed to be done again and again.
3. Save time and leads to code reusability.  

   <!-- for(initialization; test condition; +ement/ -ement)
         for(i=0; i<=n; i++) -->

## While loop
1. A while loop is to execute a statement or code block repeatedly as long as Condition is true. 
2. Once the Condition becomes false, the loop terminates.
3. It is also called entry control loop.

     <!-- while(expression) -->

## forEach loop    
1. A forEach loop (method) is used to get data from JS array or object.
2. The method calls a function once for each element in an array, in order.

  <!-- var cars = ["car1" , "car2" , "car3"];
       cars.forEach(myfunction);                                    item - (here "car1") required parameter
       function myfunction(item, index, array){                     index - (here 0 for "car1") optional
       // body of the function                                      array - (here cars) optional
       }                                                            function - cars -->