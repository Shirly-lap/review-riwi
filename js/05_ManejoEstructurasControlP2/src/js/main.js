
const listFruits = [
    "apple",
    "orange",
    "banana",
    "grape",
    "strawberry",
    "kiwi",
    "pineapple",
    "watermelon",
    "mango",
    "pear",
    "peach",
    "plum",
    "cherry",
    "blueberry",
    "raspberry",
    "blackberry",
    "lemon",
    "lime",
    "coconut",
    "pomegranate"
  ];

  //print list with classic for 

  for (let i = 0; i < listFruits.length; i++) {
    console.log(i);
    
  }

  //forech

  listFruits.forEach(fruta => {
        console.log(fruta);
  });

  listFruits.forEach(fruta => {
        console.log( fruta.toUpperCase());
  });


  listFruits.forEach(fruta => {
    console.log( fruta.toLowerCase());
});


for (const key in listFruits){
    console.log(key);
}

for (const key in listFruits){
    console.log(listFruits[key]);
}

listFruits.forEach((fruit, index) => {
    console.log("The fruit " + fruit + " is in position " + index);
});
