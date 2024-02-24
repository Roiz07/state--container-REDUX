import { useUserContext } from './context';

/** 
  UserCard file
  Our user card, this displays our username, pulling fron the context 
*/
export const UserCard = () => {
    const { username } = useUserContext();
    return (
        <div className="user-card">
            <h3>Username</h3>
            <p>
                <b>This is my username from the context:</b> {username}
            </p>
        </div>
    )
}