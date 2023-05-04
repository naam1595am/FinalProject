import { GoogleLogout } from 'react-google-login';

const clientId = "1084493453935-kmj0oh3e6kl1dtintpt3kr74q3seutme.apps.googleusercontent.com";

function Logout()
{

    const onSuccess = (res) => {
        console.log("Logout success!: ");
    }

    return(<div id="signOutButton">
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        />
    </div>
    )
}
export default Logout;