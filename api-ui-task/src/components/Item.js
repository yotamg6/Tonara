import rythemLogo from '../media/rythem.png';

import groupAssignmentIcon from '../media/groupAssignment.png';

const Item = ({ assignment }) => {
  const progress = (assignment.days_practiced / assignment.days) * 254;
  const progressPercentage = Math.round(
    (assignment.days_practiced / assignment.days) * 100
  );

  return (
    <>
      <div className="card">
        <div className="topCardContainer">
          <img className="rythemIcon" src={rythemLogo}></img>
          <div className="titlesGroup145234">
            <div className="title1">{assignment.title}</div>
            <div className="subTitle1">{assignment.music_genre}</div>
          </div>

          <div className="instructionGroup145345">
            <div className="textInstructions">
              {assignment.days} days / {assignment.practice_time} minutes per
              day
            </div>

            <img src={groupAssignmentIcon}></img>
          </div>
          <div className="progressGroup145346">
            <div className="innerProgGroup145242">
              <div
                className="progRectangle26"
                style={{
                  width: `${progress}px`,
                }}
              ></div>
            </div>
          </div>
          <div className="progPercentage">{progressPercentage}%</div>
        </div>
      </div>
    </>
  );
};

export default Item;
