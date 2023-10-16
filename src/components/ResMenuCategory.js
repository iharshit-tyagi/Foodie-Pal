import RestaurantMenuItem from "./RestaurantMenuItem";
const ResMenuCategory = (props) => {
  const { category, showItems, setShowIndex } = props;
  const { itemCards } = category?.card?.card;
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        onClick={handleClick}
        className="flex justify-between m-5 cursor-pointer w-6/12 mx-auto my-5 bg-blue-50 rounded-sm shadow-lg p-4 font-bold "
      >
        {category?.card?.card.title} {"(" + itemCards.length + ")"}
        <span>🔽</span>
      </div>
      {showItems &&
        itemCards.map((itemInfo) => {
          return (
            <RestaurantMenuItem
              key={itemInfo.card.id}
              itemDetails={itemInfo.card}
            />
          );
        })}
    </div>
  );
};
export default ResMenuCategory;
