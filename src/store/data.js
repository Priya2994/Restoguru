// images
import chicken from "./../assets/chicken.png";
import hamburger from "./../assets/hamburger.png";
import authorImg from "./../assets/avatar.png";
import cheeseCake from "./../assets/cake.jpg";

export const recipesList = [
  {
    id: 1,
    author: "Jim",
    name: "Chicken Curry",
    authorimg: authorImg,
    description: "Delicious spicy chicken curry",
    image: chicken,
    preparationtime: "40 mins",
    ingredients:
      "Garlic, Curry powder, Ginger, Onion, Tomato,Paprika,Bay leaf, Coconut Milk ,500gms Fresh Chicken",
    preparationmethod:
      "Saute a diced onion in olive oil until lightly browned. Stir in the seasonings (garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar and salt). Add the chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce the heat, and simmer for 20 to 25 minutes. Remove the bay leaf and stir in the lemon juice and cayenne pepper. Continue simmering for about 5 more minutes.",
  },
  {
    id: 2,
    author: "Aravind",
    name: "Hamburger",
    authorimg: authorImg,
    description: "Juicy Veg burger with toppings and a soft bun",
    image: hamburger,
    preparationtime: "30 mins",
    ingredients:
      "Mixed Vegetables, Garam Masala Powder,  Red Chili Powder, Onion, Tomato, Turmeric Powder",
    preparationmethod:
      "Peel and chop potatoes, carrots in small cubes. Chop the beans to small pieces. Place the chopped veggies and green peas in a pan. Add water just about covering the vegetables. Cover and simmer on medium-low flame until veggies are fork tender.Once cooked strain the vegetables well. There should be no water or moisture in them",
  },
  {
    id: 3,
    author: "Balaji",
    name: "Cheese Cake",
    authorimg: authorImg,
    description: "Strawberry Cream Cheesecake",
    image: cheeseCake,
    preparationtime: "30 mins",
    ingredients:
      "Unsalted Butters, Graham Crackers, Marshmallows, 5 drops Purple Food Gel, 3 drops Blue Food Gel",
    preparationmethod:
      "Add the cream cheese to the marshmallow mixture and use a hand mixer or stand mixer fitted with a paddle attachment to mix until smooth.Add 1/3 of the mixture to a mixing bowl, add purple food gel and mix until well combined. Colour 1/3 of the mixture blue. Split the remaining mixture into two mixing bowls, colour one pink and leave the other white.",
  },
];
