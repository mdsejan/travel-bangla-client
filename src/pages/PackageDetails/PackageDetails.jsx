import { useParams } from "react-router-dom";
import Container from "../../components/Container";

const PackageDetails = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen">
      <Container>
        <h2>Package Details</h2>
        <p>Id: {id}</p>
      </Container>
    </div>
  );
};

export default PackageDetails;
