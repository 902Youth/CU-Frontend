import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { DotsThree, HeartStraight, Chat } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/Store";
import "./EndorsementFeed.css";

const EndorsementFeed = () => {
  const endorsements = useSelector(
    (state: AppState) => state.endorsements.endorsements
  );
  const selectedSkill = useSelector(
    (state: AppState) => state.skills.selectedSkill
  );

  const filteredEndorsements = selectedSkill
    ? endorsements.filter((endorsement) =>
        endorsement.skill?.includes(selectedSkill)
      )
    : endorsements;

  return (
    <div className="endorsement-feed">
      {filteredEndorsements.map((endorsement) => (
        <div className="endorsement">
          <div className="endorser">
            <ProfilePicture name={endorsement.endorser.name} />
            <div className="endorser-info">
              <div className="endorser-details">
                <p className="endorser-name clickable">
                  {endorsement.recipient.name} received an endorsement
                </p>
                <p className="posted-date">2 hrs ago</p>
              </div>
              <div className="endorsement-options">
                <DotsThree size={32} />
              </div>
            </div>
          </div>
          <div className="message">
            <div className="message-details">
              <p>
                Endorsement by{" "}
                <span className="endorser-username">
                  @{endorsement.endorser.name}
                </span>
              </p>
            </div>
            <div className="message-content">
              <p>{endorsement.message}</p>
            </div>
          </div>
          <div className="stats">
            <div className="endorsement-stat">
              <HeartStraight size={18} className="icon" />
              <p>{endorsement.likes} likes</p>
            </div>
            <div className="endorsement-stat">
              <Chat size={18} className="icon" />
              <p>{endorsement.comments}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EndorsementFeed;
