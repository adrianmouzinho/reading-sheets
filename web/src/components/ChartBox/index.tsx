import { Chart } from '../Chart'

export function ChartBox() {
  return (
    <main className="flex-1 grid grid-cols-2 gap-6">
        <div className="bg-blue-100 p-8 rounded-lg">
          <strong className="block mb-4">
            Título do gráfico
          </strong>

          <Chart />
        </div>

        <div className="bg-blue-100 p-8 rounded-lg">
          <strong className="block mb-4">
            Título do gráfico
          </strong>

          <Chart />
        </div>
      </main>
  )
}