import rythemLogo from "../media/rythem.png";

import groupAssignmentIcon from "../media/groupAssignment.png";

import progressBar from "../media/progressBar.png";

const AssignmentCard = () => {
  return (
    <>
      <div className="card">
        <div className="topContainer">
          <img className="rythemIcon" src={rythemLogo}></img>
          <div className="titlesGroup145234">
            <div className="title1">Pentatonic in A</div>
            <div className="subTitle1">Blues</div>
          </div>

          <div className="instructionGroup145345">
            <div className="textInstructions">4 days / 6 minutes per day</div>

            <img src={groupAssignmentIcon}></img>
          </div>
          <div className="progressGroup145346">
            <img src={progressBar}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentCard;
