import "./BtnGitHub.css";
import gitHubIcon from "./../../img/icons/gitHub-black.svg";

const BtnGitHub = (props) => {
  return (
    <a href={props.link} target="_blank" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repository
    </a>
  );
};

export default BtnGitHub;
