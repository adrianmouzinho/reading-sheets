import dayjs from 'dayjs'
import { Request, Response } from 'express'
import Exceljs from 'exceljs'
import path from 'node:path'

import { prisma } from '../../database/client'

import { getCellValue } from '../../utils/get-cell-value'

type CustomerService = {
  date: string
  name: string
  phoneNumber: string
  cpfCnpj: string
  answer: string
  option: string
  protocol: string
  code: string
  externalNumber: string
  agent: string
  channel: string
  account: string
  service: string
  uf: string
}

export async function createCustomerServices(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'File is required' })
    }
    
    const { filename, buffer } = req.file
    const filePath = path.resolve(__dirname, '..', '..', '..', 'uploads', filename)

    const workbook = new Exceljs.Workbook()
    const content = await workbook.xlsx.readFile(filePath)

    for (let worksheet of content.worksheets) {
      const rowStartIndex = 2
      const numberOfRows = worksheet.rowCount - 1
  
      const rows = worksheet.getRows(rowStartIndex, numberOfRows) ?? []
  
      const customerServices = rows.map((row): CustomerService => {
        return {
          date: getCellValue(row,1),
          name: getCellValue(row, 2),
          phoneNumber: getCellValue(row, 3),
          cpfCnpj: getCellValue(row, 4),
          answer: getCellValue(row, 5),
          option: getCellValue(row, 6),
          protocol: getCellValue(row, 7),
          code: getCellValue(row, 8), 
          externalNumber: getCellValue(row, 9),
          agent: getCellValue(row, 10),
          channel: getCellValue(row, 11),
          account: getCellValue(row, 12),
          service: getCellValue(row, 13),
          uf: getCellValue(row, 14),
        }
      })
  
      for (let {
        date,
        name,
        phoneNumber,
        cpfCnpj,
        answer,
        option,
        protocol,
        code,
        externalNumber,
        agent,
        channel,
        account,
        service,
        uf,
      } of customerServices) {
        const customerService = await prisma.customerService.findUnique({
          where: {
            protocol,
          }
        })
  
        if (!customerService) {
          await prisma.customerService.create({
            data: {
              date: dayjs(date).toDate(),
              name: name.replace('\n', ' '),
              phone_number: phoneNumber,
              cpf_cnpj: cpfCnpj,
              answer,
              option: option,
              protocol,
              code,
              external_number: externalNumber,
              agent,
              channel,
              account,
              service,
              uf,
            }
          })
        }
      }
    }

    return res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}