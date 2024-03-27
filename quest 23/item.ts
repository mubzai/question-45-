
interface Item {
    name: string;
    category: string;
    price: number;
    quantity: number;
  }
  const laptop: Item = 
  { name: "Laptop",
    category: "Electronics",
    price: 1200,
    quantity: 5,};
  
  const book: Item = 
  { name: "The Great Gatsby",
    category: "Books",
    price: 15,
    quantity: 10,};
  
  const bicycle: Item = 
  { name: "Mountain Bike",
    category: "Sports",
    price: 500,
    quantity: 2,};
  
  console.log("Item 1:", laptop);
  console.log("Item 2:", book);
  console.log("Item 3:", bicycle);