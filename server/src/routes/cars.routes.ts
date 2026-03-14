import { Router } from "express"
import { getCars, getCarById } from "../services/car.service"
import { serializeBigInt } from "../utils/serializer"
import { CarFiltersDto } from "../types/car.types"

const router = Router()

router.get("/", async (req, res) => {
    try {
        const filters: CarFiltersDto = {
            ...req.query,
            page: req.query.page ? Number(req.query.page) : 1,
            limit: req.query.limit ? Number(req.query.limit) : 20,
        }

        const data = await getCars(filters)
        res.json(serializeBigInt(data))
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})


router.get("/:id", async (req, res) => {
    const car = await getCarById(req.params.id)

    if (!car) {
        return res.status(404).json({ message: "Not found" })
    }

    res.json(serializeBigInt(car))
})

export default router
