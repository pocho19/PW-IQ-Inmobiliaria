

const Profile = (props) => {
    return (
        <div className="profile">
        <div className="profile-header">
            <div className="profile-header-avatar">
            <img src={props.avatar} alt="avatar" />
            </div>
            <div className="profile-header-name">
            <h1>{props.name}</h1>
            <h2>{props.username}</h2>
            </div>
        </div>
        <div className="profile-bio">
            <p>{props.bio}</p>
        </div>
        <div className="profile-stats">
            <ul>
            <li>
                <span className="profile-stat-count">{props.followers}</span>
                <span className="profile-stat-name">Followers</span>
            </li>
            <li>
                <span className="profile-stat-count">{props.following}</span>
                <span className="profile-stat-name">Following</span>
            </li>
            <li>
                <span className="profile-stat-count">{props.posts}</span>
                <span className="profile-stat-name">Posts</span>
            </li>
            </ul>
        </div>
        </div>
    );
}
export default Profile;