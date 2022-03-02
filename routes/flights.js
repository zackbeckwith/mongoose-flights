import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// GET /flights/new
router.get('/new', flightsCtrl.new)

// GET /flights
router.get('/', flightsCtrl.index)

//POST /flights
router.post('/', flightsCtrl.create)



export {
	router
}
