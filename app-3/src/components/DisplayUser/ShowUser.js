import React from "react";
import Card from "../UI/Card";
import styles from "./ShowUser.module.css";

const ShowUser = ({ userData }) => {
  //Components
  const ShowUserItem = ({ age, name }) => {
    return <div className={styles.showUser__item}>{`${name} - ${age}`}</div>;
  };

  const NoUserFound = () => {
    return <div className={styles.noUser}>No User Found</div>;
  };
  return (
    <Card>
      <div className={styles.showUser__container}>
        {userData.length === 0 && <NoUserFound />}
        {userData.length > 0 &&
          userData.map((ele, idx) => (
            <ShowUserItem age={ele.age} name={ele.name} key={idx} />
          ))}
      </div>
    </Card>
  );
};

export default ShowUser;
