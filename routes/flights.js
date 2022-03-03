import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// GET /flights/new
router.get('/new', flightsCtrl.new)

// GET /flights
router.get('/', flightsCtrl.index)

//GET /flights/:id
router.get('/:id', flightsCtrl.show)

// GET - /flights
router.get("/", flightsCtrl.index)
// GET - /flights/new
router.get('/new', flightsCtrl.new)
//  GET - /flights/:id
router.get('/:id', flightsCtrl.show)
// GET - /flights/:id/edit
router.get('/:id/edit', flightsCtrl.edit)

// POST - /flights
router.post("/", flightsCtrl.create)
// POST - /flights/:id/tickets
router.post('/:id/tickets', flightsCtrl.createTicket)
// POST - /:id/meals
router.post('/:id/meals', flightsCtrl.addMeal);

// PUT - /flights/:id
router.put('/:id', flightsCtrl.update)

// DELETE - /flights/:id
router.delete('/:id', flightsCtrl.delete)

export {
	router
}
