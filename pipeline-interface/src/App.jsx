import './App.css';
import { useEffect } from 'react';

// Client ID: Ov23lixPyJ7PanEfe12l
const CLIENT_ID = "Ov23lixPyJ7PanEfe12l";

function App() {

    useEffect(() => {
        //localhost:3000?code=Ov23liI82jzAEKzJVwwH
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const codeParam = urlParams.get("code");
        console.log(codeParam);

        //leave webpage for awhile and come back and still be logged in with github

        if(codeParam && (localStorage.getItem("accessToken") === null)){
            
        }



    }, []);

    function loginWithGithub() {
        window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID);
    }

        return (
            <div className="App">
                <header className="App-header">
                    <button onClick={loginWithGithub}>
                    Login with GitHub
                    </button>
                </header>
            </div>
        );
}

export default App;