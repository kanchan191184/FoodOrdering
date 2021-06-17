import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Meals, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious breakfast, lunch or dinner at home.
      </p>
      <p>
        Perfect for anyone who wants to eat and feel better, especially if
        you're busy or working.
      </p>
    </section>
  );
};

export default MealsSummary;
