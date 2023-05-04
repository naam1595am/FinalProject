import { GoogleLogin } from 'react-google-login';

const clientId = "1084493453935-kmj0oh3e6kl1dtintpt3kr74q3seutme.apps.googleusercontent.com";

function Login()
{

    const onSuccess = (res) => {
        console.log("Login success!: ",res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed!: ",res);
    }

    return(<div id="signInButton">
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    </div>
    )
}

export default Login;