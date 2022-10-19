 let stack = [];
 //push 
 console.log(stack);
 console.log("Push Operation");
 stack.push(2);
 console.log(stack);
 stack.push(3);
 console.log(stack);
 stack.push(6);
 console.log(stack);
 stack.push(8);
 console.log(stack);
 stack.push(10);
 console.log(stack);

 // pop
 console.log("Pop Operation");
 stack.pop();
 console.log(stack);
 stack.pop();
 console.log(stack);
 stack.pop();
 console.log(stack);


 function reverse(str) {
    let stack = [];
    // push letter into stack
    for (let index = 0; index < str.length; index++) {
        stack.push(str[index]);
    }

    // pop letter from the stack
    let reverseStr = "";
    while(stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
 }
 let massage = "malayalam"; 
 ; 
//  let massage = "JavaScript Stack";
 let reverseMsg = reverse(massage);
 console.log(massage);
 console.log(reverseMsg);

 const isPalindrome = massage == reverseMsg ?
 "palindrome" : "Not Palindrome";
 console.log(isPalindrome);
