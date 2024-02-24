import * as ReactDOM from 'react-dom';
import { UserProvider } from './components/context';
import { UserCard } from './components/card';
import { UserInput } from './components/user-input';


const App = () => (
    <div className="center">
        <UserProvider>
            <h1>Context with custom hook example</h1>
            <p>
                This is a pretty cool example where if
                you store the context and all
                the context logic along with a
                little hook in 1 file, it can make
                for some interesting ways of using
                your data.
            </p>
            <p>
                This is a pretty cool example where if
                you store the context and all the context
                logic along with a little hook in 1 file,
                it can make for some interesting ways
                of using your data.
            </p>
            <hr />
            <h2>Example Below</h2>
            <section>
                <UserCard />
                <UserInput />
            </section>
        </UserProvider>
    </div>
);

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);