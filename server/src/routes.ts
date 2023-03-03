import { Router } from 'express'
import multer from 'multer'
import path from 'node:path'

import { createCustomerServices } from './use-cases/customer-services/create-customer-services'
import { deleteAllCustomerServices } from './use-cases/customer-services/delete-all-customer-services'
import { deleteOneCustomerService } from './use-cases/customer-services/delete-one-customer-service'
import { listCustomerServiceById } from './use-cases/customer-services/list-customer-service-by-id'
import { listCustomerServices } from './use-cases/customer-services/list-customer-services'
import { listCustomerServicesBetweenDates } from './use-cases/customer-services/list-customer-services-between-dates'
import { getAnswerCount } from './use-cases/customer-services/get-answer-count'
import { getAnswerCountByAgent } from './use-cases/customer-services/get-answer-count-by-agent'
import { getAnswerCountByService } from './use-cases/customer-services/get-answer-count-by-service'

// const multerConfig = multer()

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename(req, file, callback) {
      callback(null, file.originalname)
    },
  }),
})

export const routes = Router()

routes.post('/customerServices', upload.single('file'), createCustomerServices)

routes.get('/customerServices/date', listCustomerServicesBetweenDates)

routes.get('/customerServices/count', getAnswerCount)

routes.get('/customerServices/count/agent', getAnswerCountByAgent)

routes.get('/customerServices/count/service', getAnswerCountByService)

routes.get('/customerServices', listCustomerServices)

routes.get('/customerServices/:id', listCustomerServiceById)

routes.delete('/customerServices', deleteAllCustomerServices)

routes.delete('/customerServices/:id', deleteOneCustomerService)