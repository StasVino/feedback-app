import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <Link to="/">Back home</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
