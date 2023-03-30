import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Count } from '../../types/Count'

interface PieChartProps {
  data: Count | null
}

export function PieChart({ data }: PieChartProps) {

  if (!data) {
    return <p>Carregando...</p>
  }

  const options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: Object.keys(data.counts),
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        }
      }
    }]
  }

  const counts = Object.values(data.counts)
  const series = counts

  return (
    <ReactApexChart options={options} series={series} type="donut" />
  )
}