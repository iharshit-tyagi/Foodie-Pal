import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resList";
const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <p>Search </p>
      </div>
      <div className="res-container">
        {resList.map((ele) => (
          <RestaurantCard key={ele.info.id} resObj={ele} />
        ))}
        {/*As the above method returns the
           {[
            <RestaurantCard resObj={resList[0]} />,
            <RestaurantCard resObj={resList[0]} />,
          ]} */}
      </div>
    </div>
  );
};

export default Body;
