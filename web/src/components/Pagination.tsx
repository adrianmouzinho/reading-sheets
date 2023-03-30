import { CaretLeft, CaretRight } from "phosphor-react"

interface PaginationProps {
  limit: number
  total: number
  offset: number
  currentPage: number
  totalPages: number
  setOffset: (offset: number) => void
}

const maxItems = 5
const maxLeft = (maxItems - 1) / 2

export function Pagination({ limit, offset, total, currentPage, totalPages, setOffset }: PaginationProps) {
  const first = Math.max(currentPage - maxLeft, 1)

  function onPageChange(page: number) {
    setOffset((page - 1) * limit)
  }

  return (
    <footer className="flex items-center justify-between">
      <span>
        <strong>{offset + 1}</strong> - <strong>{limit + offset}</strong> de <strong>{total}</strong>
      </span>

      <ul className="flex items-center gap-1">
        <li>
          <button 
            className="w-8 h-8 rounded-md font-bold bg-blue-600 hover:bg-blue-700 transition disabled:hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            title="anterior"
          >
            <CaretLeft className="text-white mx-auto" weight="bold" />
          </button>
        </li>

        { Array.from({ length: maxItems })
          .map((_, index) => index + first) 
          .map(page => (
            <li key={page}>
              { page <= totalPages ? (

              <button 
                className={`w-8 h-8 rounded-md font-bold bg-blue-300 hover:bg-blue-400 transition ${page === currentPage ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}`}
                onClick={() => onPageChange(page)}
                title={`${page}`}
              >
                {page}
              </button>
              ) : null}
            </li>
          ))
        }

        <li>
          <button 
            className="w-8 h-8 rounded-md font-bold bg-blue-600 hover:bg-blue-700 transition disabled:hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            title="próxima"
          >
            <CaretRight className="text-white mx-auto" weight="bold" />
          </button>
        </li>
      </ul>
    </footer>
  )
}