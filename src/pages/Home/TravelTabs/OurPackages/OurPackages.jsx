import { Link } from "react-router-dom";
import PackageCard from "../../../../components/PackageCard";
import usePackages from "../../../../hooks/usePackages";

const OurPackages = () => {
  const [packages] = usePackages();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-16 lg:py-10">
        {packages?.slice(0, 4).map((item) => (
          <PackageCard key={item._id} item={item}></PackageCard>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/all-package">
          <button className="bg-[#7CAB9B] hover:bg-[#7CAB9B] text-white text-md font-semibold py-2 px-8 rounded">
            All Packages
          </button>
        </Link>
      </div>
    </>
  );
};

export default OurPackages;
