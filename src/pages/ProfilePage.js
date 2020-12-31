/**
 * プロファイルページ
 * ・未ログイン時は<ProtectedRoute>により、ログイン画面へリダイレクト
 * ・Auth0で取得したuser情報を一覧表示する。
 */
import { useAuth0 } from "@auth0/auth0-react";

export function ProfilePage() {
    const { user } = useAuth0();

    return (
        <>
            <h2 className="title">Profile</h2>
            <dl style={{marginLeft:'30px'}}>
                {Object.keys(user).map( key => {
                    return(
                        <>
                            <dt key={key}>{key}</dt>
                            <dd key={key + '2'} style={{marginLeft:'30px'}}>{user[key]}</dd>
                        </>
                    );
                })}        
            </dl>
        </>
    );
}