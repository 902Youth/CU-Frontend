import React, {useEffect} from "react";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { DotsThree, HeartStraight, Chat } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/Store";
import "./EndorsementFeed.css";

interface EndorsementFeedProps {
  userId?: string;
  following?: boolean;
}

const EndorsementFeed: React.FC<EndorsementFeedProps> = ({userId}) => {
  //I will use the userId to select the correct endorsements for that user when the EndorsementFeed is being rendered on the /account or the /user/${userId} page

  //I also need to add an onClick for the userPfp inside of the endorsement, and somehow send that specific data to the ProfileQuickView. This ONLY happens at /home. This ability will be disabled for any other route, because from /account, the user can click on the @user_name inside of the endorsement in order to view their profile. Important note: if a user at /account or /user/:userId clicks on an @user_name, it will navigate to that @user_name's full profile view and does not show a quick view of their profile

  //If at /user/:userId the user doesn't have any endorsements, I need default text that says they don't have any but you can write them one and a link to the endorsements page. Maybe we auto-populate the user's username since they navigated from that text to endorsements.
   
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
