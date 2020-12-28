/**
 * パンくずリスト
 * ・url、タイトル、リンクで表示するかしないか(active)フラグ の配列を受け取り、スラッシュ区切りで順に表示する仕組み
 * 　⇒区切りのスラッシュはcssの疑似要素で挿入される
 */
import { Link } from "react-router-dom";

export function Breadcrumb({ links }) {
  return (
    <nav className="breadcrumb">
      <ul>
        {links.map(({ href, content, active }, i) => {
          return (
            <li key={i} className={active ? "is-active" : ""}>
              <Link to={href}>{content}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
