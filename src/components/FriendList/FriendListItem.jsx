import './FriendListItem.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="fr-item">
      <span className={`fr-status ${isOnline ? 'fr-online' : 'fr-offline'}`}></span>
      <img className="fr-avatar" src={avatar} alt={name} width="48" />
      <p className="fr-name">{name}</p>
    </li>
  );
}

export default FriendListItem;