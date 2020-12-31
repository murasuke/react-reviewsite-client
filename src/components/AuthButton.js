import { useAuth0 } from "@auth0/auth0-react";

// ログインボタン
// ・ログイン状態をチェック。ログイン中なら「ログアウト」、そうでなければ「ログイン」を表示する
// ・ボタンクリック時に認証処理を呼び出す
export function AuthButton(){
    const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    function handleClickLoginButton(){
        loginWithRedirect({
            appState: {
                path: window.location.pathname,
            }
        });
    }

    function handleClickLogoutButton(){
        logout({
            localOnly: true,
            returnTo: "/"
        });
    }

    if( isLoading ){
        return (
            <button className="button is-warning is-inverted is-outlined is-loading">
                Loading
            </button>
        );
    }

    if ( isAuthenticated ){
        return (
            <button className="button is-warning is-inverted is-outlined" onClick={handleClickLogoutButton}>
                ログアウト
            </button>
        );
    }

    return (
        <button className="button is-warning is-inverted is-outlined" onClick={handleClickLoginButton}>
            ログイン
        </button>    
    );
}
