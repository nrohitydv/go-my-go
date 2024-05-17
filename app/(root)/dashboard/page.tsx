import AverageVendorRatingChart from "@/components/AverageVendorRating";
import Header from "@/components/Header";
import TableComponent from "@/components/TableContent";
import VendorBreakdownChart from "@/components/VendorChart";

const DashBoard = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-4 pt-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 w-full max-w-6xl">
          <div className="md:col-span-1">
            <VendorBreakdownChart />
          </div>
          <div className="md:col-span-3">
            <AverageVendorRatingChart />
          </div>
        </div>
        <div className="w-full max-w-6xl mt-4">
          <TableComponent />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
