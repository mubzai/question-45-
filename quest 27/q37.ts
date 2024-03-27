function makeShirt(size: string = "Large", message: string = "Hope Not Out"): void {
    console.log(`The shirt is size ${size} and has the message: "${message}".`);
  }
  makeShirt();
  makeShirt("Medium"); 
  
  makeShirt("Small", "Never Give Up!");
  