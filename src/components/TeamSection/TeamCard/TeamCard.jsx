import "./TeamCard.css";

const TeamCard = ({ avatar, name, role, bio }) => {
  return (
    <div className="team-card">
      <div className="team-avatar"> <img src={avatar} alt={`${name}'s avatar`} /> </div>

      <div className="team-member-info">
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-role">{role}</p>
        <p className="team-member-bio" dangerouslySetInnerHTML={{ __html: bio }}></p>
      </div>
    </div>
  );
};

export default TeamCard;