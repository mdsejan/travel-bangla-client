import Container from "../../components/Container";
import PackageCard from "../../components/PackageCard";
import usePackages from "../../hooks/usePackages";

const AllPackage = () => {
  const [packages] = usePackages();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-16 lg:py-10">
        {packages?.slice(0, 8).map((item) => (
          <PackageCard key={item._id} item={item}></PackageCard>
        ))}
      </div>
      <div className="text-center my-10">
        <button className="bg-[#7CAB9B] hover:bg-[#7CAB9B] text-white text-md font-semibold py-2 px-8 rounded">
          Show All Package
        </button>
      </div>
    </Container>
  );
};

export default AllPackage;
