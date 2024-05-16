import VendorChart from "./VendorChart";
import AverageVendorRating from "./AverageVendorRating";
const DashBoard = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 w-full">
        <VendorChart />
        {/* <AverageVendorRating /> */}
      </div>
    </div>
  );
};

export default DashBoard;
