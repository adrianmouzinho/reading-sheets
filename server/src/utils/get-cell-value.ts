import Exceljs from 'exceljs'

export function getCellValue (row:  Exceljs.Row, cellIndex: number) {
  const cell = row.getCell(cellIndex);
  
  return cell.value ? cell.value.toString() : '';
}