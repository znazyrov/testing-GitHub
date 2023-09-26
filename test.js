function christmasGifts(input){
    let index = 0;
    let childrens = 0;
    let adults = 0;
    let toysPrice = 0;
    let sweaterPrice = 0;
    let command = input[index];
    index++;
    
    while (command !== "Christmas"){
        let ages = Number (input[index]);
        if (ages <= 16){
            childrens++;
            toysPrice += 5;
        }else {
            adults++;
            sweaterPrice += 15;
        }
        command = input[index];
        index++;
    } console.log(`Number of adults: ${adults}`);
      console.log(`Number of kids: ${childrens}`);
      console.log(`Money for toys: ${toysPrice}`);
      console.log(`Money for sweaters: ${sweaterPrice}`);

}
christmasGifts(["16",
"16",
"16",
"16",
"16",
"Christmas"])


