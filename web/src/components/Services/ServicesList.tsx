import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { Pagination } from "../Pagination"

type CustomerService = {
  id: string
  name: string
  option: string
  service: string
}

type Data = {
  limit: number
  offset: number
  total: number
  totalPages: number
  currentPage: number
  results: CustomerService[]
}

export function ServicesList() {
  const [offset, setOffset] = useState(0)
  const { data, isFetching } = useFetch<Data>(`/customerServices?offset=${offset}`, [offset])

  return (
    <>
      <table className="table-auto border-separate border-spacing-2 text-left text-sm">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Resposta</th>
            <th>Serviço</th>
          </tr>
        </thead>

        <tbody>
          { isFetching && <p>carregando...</p>}

          {data?.results.length === 0 ? <p>Nenhum registro cadastrado.</p> : (
            data?.results.map(service => {
              return (
                <tr key={service.id}>
                  <th className="font-normal">{service.name}</th>
                  <th className="font-normal">
                    {Number(service.option) === 1 && 'Bom/ótimo'}
                    {Number(service.option) === 2 && 'Regular'}
                    {Number(service.option) === 3 && 'Ruim'}
                  </th>
                  <th className="font-normal">{service.service}</th>
                </tr>
              )
            })

          )}
        </tbody>
      </table>

      { data && (
        <Pagination 
          limit={data.limit} 
          total={data.total} 
          offset={data.offset} 
          currentPage={data.currentPage} 
          totalPages={data.totalPages} 
          setOffset={setOffset}
        />
      ) }
    </>
  )
}