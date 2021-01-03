/**
 * 認証済みユーザのみ参照可能なルートを実現するコンポーネント
 */
import { Route } from "react-router-dom";
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

