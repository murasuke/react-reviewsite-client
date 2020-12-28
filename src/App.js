import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { RootPage } from "./pages/Root.js";
import { RestaurantDetailPage } from "./pages/RestaurantDetail.js";
import { RestaurantListPage} from "./pages/RestaurantList.js";


// ログインボタン
// ・ログイン状態をチェック。ログイン中なら「ログアウト」、そうでなければ「ログイン」を表示する
// ・ボタンクリック時に認証処理を呼び出す
function AuthButton(){
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

// 各ページ共通のヘッダーコンポーネント
// ・共通とはいえ、各ページで読み込むのではなくトップページ(App)専用
//   ⇒ページ遷移は、コンテント領域のコンポーネントを入れ替えるという動きをするため
function Header(){
    return(
        <section className="hero is-warning">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        <Link to="/" >
                            テスト
                            <br className="is-hidden-tablet" />
                            ラーメンレビュー
                        </Link>
                    </h1>
                </div>
            </div>
        </section>
    );
}

// フッターコンポーネント
function Footer(){
    return(
        <footer className="footer">
            <div className="content">
                <p className="has-text-centered">
                    サンプルアプリケーションです。
                </p>
            </div>
        </footer>
    );
}

// ルートコンポーネント
// ・ページ全体の構成
// ・ログイン、ログアウトボタン
// ・ルーティング(ページ遷移)の設定を行う
export function App() {
    return(    
        <Router>    
            <Header />
            <section className="section has-background-waring-light">
                <div className="container">
                    <div className="block has-text-right">
                        {/* <button className="button is-warning is-inverted is-outlined">
                            ログイン
                        </button> */}
                        <AuthButton />
                    </div>                   
                    <Switch>
                        <Route path="/" exact>
                            <RootPage />
                        </Route>
                        <Route path="/restaurants" exact>
                            <RestaurantListPage />
                        </Route>
                        <Route path="/restaurants/:restaurantId">
                            <RestaurantDetailPage />
                        </Route>
                    </Switch>
                </div>
            </section>
            <Footer />
        </Router>       
    );
}