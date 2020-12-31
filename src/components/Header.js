import { Link } from "react-router-dom";

// 各ページ共通のヘッダーコンポーネント
// ・共通とはいえ、各ページで読み込むのではなくトップページ(App)専用
//   ⇒ページ遷移は、コンテント領域のコンポーネントを入れ替えるという動きをするため
export function Header(){
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
                    <div className="block has-text-right">
                        <Link to="/profile" >Profile</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}