import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { StatsContainer, Loading, ChartsContainer } from "../../components";

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      <div className="container">
        <StatsContainer />
        {/* {monthlyApplications.length > 0 && <ChartsContainer />} */}
        {monthlyApplications && <ChartsContainer />}
      </div>
    </>
  );
};

export default Stats;
