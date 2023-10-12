import RestaurantMenuItem from "./RestaurantMenuItem";

const ResMenuCategories = (props) => {
  const { category } = props;
  const { itemCards } = category?.card?.card;
  //   console.log(itemCards[0].card.info.name);
  return (
    <div>
      {itemCards.map((itemInfo) => {
        return <RestaurantMenuItem itemDetails={itemInfo.card} />;
      })}
    </div>
  );
};
export default ResMenuCategories;
