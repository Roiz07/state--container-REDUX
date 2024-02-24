import { useUserContext } from './context';

/** 
  UserInput File
  User Input, we are using this to change the username, setting the username in our context
*/
export const UserInput = () => {
    const { username, setUserName } = useUserContext();
    return (
        <fieldset ClassName="user-input-fieldset">
            <label>
                Input for changing the
                global UserContext State:
                <input type="text" value={username}
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }} />
            </label>
        </fieldset>
    );
}