import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components";

// export function PrivateRoute({ component, ...args }) {
//     return (
//         <Route component={withAuthenticationRequired(component, {})} {...args} />
//     );
// }

export function ProtectedRoute({ component, ...args }) {
    return(
        <Route
        component={withAuthenticationRequired(component, {
            onRedirecting: () => <Loading />,
        })}
        {...args}
        />
    );
}

