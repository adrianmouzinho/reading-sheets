import { CustomerService } from '../../types/CustomerService'

interface ServicesListProps {
  data: CustomerService[]
}

export function ServicesList({ data }: ServicesListProps) {

  return (
    <table className="table-auto border-separate border-spacing-4 text-left text-sm">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Resposta</th>
          <th>Agente</th>
          <th>Serviço</th>
        </tr>
      </thead>

      <tbody>
        {data.length > 0 && (
          data.map(service => {
            return (
              <tr key={service.id}>
                <th className="font-normal">{service.name}</th>
                <th className="font-normal">
                  {Number(service.option) === 1 && 'Bom/ótimo'}
                  {Number(service.option) === 2 && 'Regular'}
                  {Number(service.option) === 3 && 'Ruim'}
                </th>
                <th className="font-normal">{service.agent}</th>
                <th className="font-normal">{service.service}</th>
              </tr>
            )
          })
        )}
      </tbody>
    </table>
  )
}