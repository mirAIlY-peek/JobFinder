import Wrapper from "../assets/wrappers/JobInfo";

const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="icon a">{icon}</span>
      <span className="text a">{text}</span>
    </Wrapper>
  );
};

export default JobInfo;
