import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Panner",
    description: "Finest vegies",
    price: 180,
  },
  {
    id: "m2",
    name: "Chole Bhature",
    description: "Finest vegies",
    price: 180,
  },
  {
    id: "m3",
    name: "Panner-Tikka",
    description: "Finest vegies",
    price: 180,
  },
  {
    id: "m4",
    name: "Burger",
    description: "Finest vegies",
    price: 180,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
    id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
