import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// GET /flights/new
router.get('/new', flightsCtrl.new)

// GET /flights
router.get('/', flightsCtrl.index)

//GET /flights/:id
router.get('/:id', flightsCtrl.show)

//POST /flights
router.post('/', flightsCtrl.create)

router.delete("/:id", flightsCtrl.delete)
router.get("/:id/edit", flightsCtrl.edit)
export {
	router
}
