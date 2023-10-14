const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};
const ShimmerCard = () => {
  return (
    <div className="w-64 h-96 p-2 bg-white rounded-lg shadow-md animate-pulse">
      <div className="bg-gray-100 h-96 w-full rounded-lg"></div>
    </div>
  );
};
export default Shimmer;
