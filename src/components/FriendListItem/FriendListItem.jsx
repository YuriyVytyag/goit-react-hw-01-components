import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{
          borderRadius: '50%',
          display: 'block',
          width: '15px',
          height: '15px',
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      />

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
