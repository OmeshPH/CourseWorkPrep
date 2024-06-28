function consoleStyler(color, background, fontSize, txt) {
  
    
     message = "%c" + txt;
  

     style = `color: ${color};`;
  
 
    style += `background-color: ${background};`;
    style += `font-size: ${fontSize};`;
  
    
    console.log(message, style);
  }
  
  function celebrateStyler(reason) {

  
   
     fontStyle = "color: tomato; font-size: 50px";
  
   
    if (reason === "birthday") {
      console.log(`%cHappy birthday!`, fontStyle);
    } else if (reason === "champions") {
      console.log(`%cCongrats on the title!`, fontStyle);
    } else {
      console.log("Congratulations! But for what reason?");
    }
  }
  
  consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
  

  celebrateStyler('birthday');
  
 
  function styleAndCelebrate(color, background, fontSize, txt, reason) {
    
   
  
  
    celebrateStyler(reason);
  
    consoleStyler(color, background, fontSize, txt);
  }
  

  styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');