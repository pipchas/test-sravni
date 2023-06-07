import { useMemo } from "react";

const Pagination = ({ page, limit, onPageChange, offset, total }) => {

    const pageCount =
    useMemo(
      () => Math.ceil(total / limit),
      [total, limit]
    );

    return (
        <div className="pagination">
            <button
                disabled={page === 1}
                className="button"
                onClick={() => {
                    page--
                    onPageChange(page)
                }}
            >
                Назад
            </button>
            <button
                disabled={page === pageCount}
                className="button"
                onClick={() => {
                    page++
                    onPageChange(page)
                }}
            >
                Вперед
            </button>
        </div >
    )
}

export default Pagination