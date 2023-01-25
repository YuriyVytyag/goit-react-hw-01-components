import css from './FriendListItem.module.css';
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

export default FriendListItem;
