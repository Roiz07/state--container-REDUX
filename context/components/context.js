
/** 
  UserContext File
  - Set up user context
  - Set up user provider which can be wrapped around your necessary components that require this state 
  - Down the chain we can use this little hook and deconstruct the values that get passed into the UserContext Provider's value
*/

export const Context = () => {
    const UserContext = React.createContext();

    const UserProvider = ({ ...props }) => {
        const [username, setUsername] = React.useState('Daryl')

        const value = {
            username,
            setUsername
        }

        return <UserContext.Provider {...props} value={value} />;
    }

    /** NOICE HOOK */
    const useUserContext = () => {
        return React.useContext(UserContext);
    };

}