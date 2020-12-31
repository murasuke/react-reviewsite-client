# auth0-reactによる認証機能について
## 認証機能の組み込み
<app />を返す<Auth0Provider />でラップする。
 ⇒<app />内でuseAuth0フックを使用できるようになる。
 ・useAuth0フックでは認証に関するステートや、メソッドを利用できるようになる。
　 ・isLoading, isAuthenticated, user
　 ・loginWithRedirect(), logout()

* domain、clientId には Auth0で設定した値をセットする

## ログインの組み込みについて
useAuth0 フックで取得する、ログイン状態(isAuthenticated)と、ログイン画面表示(loginWithRedirect())を利用します。
* isAuthenticatedで未ログインであれば「ログイン」ボタンを表示。
* ボタン押下でloginWithRedirect()を実行し、Auth0のログイン画面へ遷移。認証後、元画面へリダイレクトします。
* ログアウトはlogout()を呼び出します(useAuth0フックから取得します)

## 認証済みユーザのみ参照可能なルート制御について
　
　＜課題：認証後のリダイレクトがうまくいかない＞

Routeコンポーネントをラップした<ProtectedRoute>を作成する
* 未認証の場合は、Auth0の認証ページへリダイレクト
* 認証済みの場合は、該当ページを表示する

## 参照ページ
  https://auth0.github.io/auth0-react/index.html
  
  https://dev.classmethod.jp/articles/protected-route-with-auth0-react-sdk/