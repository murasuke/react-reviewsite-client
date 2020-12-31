import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RootPage } from "./pages/Root.js";
import { RestaurantDetailPage } from "./pages/RestaurantDetail.js";
import { RestaurantListPage} from "./pages/RestaurantList.js";
import { ProfilePage} from "./pages/ProfilePage.js";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { AuthButton } from "./components/AuthButton.js";
import { ProtectedRoute } from "./components/ProtectedRoute.js";


// ルートコンポーネント
// ・ページ全体の構成
// ・ログイン、ログアウトボタン
// ・ルーティング(ページ遷移)の設定を行う
// ・「/profile」はログイン状態でない場合、ログイン画面を表示する
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
                        {/* <Route path="/profile" component={ProfilePage} /> */}
                        <ProtectedRoute path="/profile" component={ProfilePage} />
                    </Switch>
                </div>
            </section>
            <Footer />
        </Router>       
    );
}


