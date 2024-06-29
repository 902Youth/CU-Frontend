import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { DotsThree, HeartStraight, Chat } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/Store";
import "./EndorsementFeed.css";
import { fetchEndorsements } from "../../redux/endorsement/endorsementSlice";
import { fetchUsers } from "../../redux/user/userSlice";
import { useEffect } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";

const EndorsementFeed = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const endorsements = useSelector(
    (state: AppState) => state.endorsements.endorsements
  );
  const selectedSkill = useSelector(
    (state: AppState) => state.skills.selectedSkill
  );

  useEffect(() => {
    dispatch(fetchEndorsements(0));
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredEndorsements = selectedSkill
    ? endorsements.filter((endorsement) =>
        endorsement.skill?.includes(selectedSkill)
      )
    : endorsements;

  const user = useSelector(
    (state: AppState) => state.user.userAccountDetails
  );

  return (
    <div className="endorsement-feed">
      {filteredEndorsements.map((endorsement, key) => (
        <div className="endorsement" key={key} >
          <div className="endorser">
            <ProfilePicture name={endorsement.endorser_name} />
            <div className="endorser-info">
              <div className="endorser-details">
                <p className="endorser-name clickable">
                  {user.fullName} received an endorsement
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
                  @{endorsement.endorser_name}
                </span>
              </p>
            </div>
            <div className="message-content">
              <p>{endorsement.message ?? "Message not found"}</p>
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
