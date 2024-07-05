function onlyOdds(num) {
    let sum = 0;
    console.log ("sum initiated", sum);
    
    for (let i = 1; i <= num; i += 2) {
       
      sum += i;
      console.log ("sum initiated", i);
    }
    
    console.log("The sum of odd numbers from 1 to", num, "is:", sum);
    return sum;
  }
  
  // Call the function with a test value
  const testNum = 10;
  const result = onlyOdds(testNum);
  
  console.log("The function returned:", result);