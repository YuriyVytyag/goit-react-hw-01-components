import css from './Profile.module.css';
import PropTypes from 'prop-types';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.item}>
          <span>{Object.keys(stats)[0]}</span>
          <span className={css.quantity}>{stats['followers']}</span>
        </li>
        <li className={css.item}>
          <span>{Object.keys(stats)[1]}</span>
          <span className={css.quantity}>{stats['views']}</span>
        </li>
        <li className={css.item}>
          <span>{Object.keys(stats)[2]}</span>
          <span className={css.quantity}>{stats['likes']}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
