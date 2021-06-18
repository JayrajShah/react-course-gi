import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [allMeals, setAllMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    fetch("https://react-http-48387-default-rtdb.firebaseio.com/meals.json")
      .then((response) => response.json())
      .then((data) => {
        const loadedData = [];

        for (const key in data) {
          loadedData.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }

        setAllMeals(loadedData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setHttpError("Somthing Went Worng!!");
      });
  }, []);

  const MealsListComponent = () =>
    allMeals.map((meal) => (
      <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        id={meal.id}
      />
    ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && !httpError && (
          <p
            style={{
              color: "#ff5959",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Loading...
          </p>
        )}
        {!isLoading && !httpError && (
          <ul>
            <MealsListComponent />
          </ul>
        )}

        {!isLoading && httpError && (
          <p
            style={{
              color: "#ff5959",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {httpError}
          </p>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
