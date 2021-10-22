import {Link} from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to='/about'>About</Link>
    </footer>
  );
};

export default Footer;
