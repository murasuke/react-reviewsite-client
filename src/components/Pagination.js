/**
 * ページ切替コンポーネント
 * ・次へ、前へを表示する
 * ・先頭ページを判断し、前へリンクを無効化する
 * ・最終ページを判断し、次へリンクを無効化する
 */
import { Link } from "react-router-dom";

export function Pagination({ path, page, perPage, count }) {
  return (
    <nav className="pagination is-centered">
      <Link
        className="pagination-previous"
        to={`${path}?page=${page - 1}`}
        disabled={page === 1}
      >
        前の{perPage}件
      </Link>
      <Link
        className="pagination-next"
        to={`${path}?page=${page + 1}`}
        disabled={perPage * page >= count}
      >
        次の{perPage}件
      </Link>
    </nav>
  );
}
