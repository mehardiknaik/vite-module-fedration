
import { Link } from "react-router";

const About = () => {
  return (
    <div>
      <Link to={".."}>go back</Link>
      <Link to={"detail"}>go Detail page</Link>
    </div>
  );
};

export default About;
