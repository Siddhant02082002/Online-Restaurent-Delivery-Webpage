import classes from "./MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favourite meal from our board selection of available meals
        and enjoy a Delicious lunch or dinner at home
      </p>
      <p>
        All aor meals are cooked with high-quality ingridients, just-in-time of
        course by experienced chefs!
      </p>
    </section>
  );
};
export default MealsSummary;
