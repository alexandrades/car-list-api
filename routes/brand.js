
import {promises as fs} from "fs"
import express from "express"

const router = express.Router()

const getBrands = async () => {
    const carList = await fs.readFile("./car-list.json", "utf-8")
    return JSON.parse(carList)
}

router.get('/maisModelos', async (req, res) => {
    try {
        const brands = await getBrands()
        let result = []
        let max = 0

        for(const b of brands){
            if(b.models.length > max) {
                max = b.models.length
                result = []
                result.push(b)
            }
            else if(b.models.length === max) {
                result.push()
            }
        }

        if(result.length === 1) {
            res.send(result[0].brand)
        }
        else {
            res.send(result.map(b => {
                b.brand
            }))
        }

    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.get('/menosModelos', async (req, res) => {
    try {
        const brands = await getBrands()
        let result = []

        let min = brands[0].models.length
        result.push(brands[0])

        for(let i = 1; i < brands.length; i++){
            let b = brands[i]
            if(b.models.length < min) {
                min = b.models.length
                result = []
                result.push(b)
            }
            else if(b.models.length === min) {
                result.push()
            }
        }

        if(result.length === 1) {
            res.send(result[0].brand)
        }
        else {
            res.send(result.map(b => {
                b.brand
            }))
        }

    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.get("/listaMaisModelos/:qtd", async (req, res) => {
    try {
        const brands = await getBrands()
        brands.sort((a, b) => {
            if(a.models.length === b.models.length) {
                return a.brand.localeCompare(b.brand)
            }
            return b.models.length - a.models.length
        })

        res.send(brands.slice(0, req.params.qtd).map(b => `${b.brand} - ${b.models.length}` ))
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.get("/listaMenosModelos/:qtd", async (req, res) => {
    try {
        const brands = await getBrands()
        brands.sort((a, b) => {
            if(a.models.length === b.models.length) {
                return a.brand.localeCompare(b.brand)
            }
            return a.models.length - b.models.length
        })

        res.send(brands.slice(0, req.params.qtd).map(b => `${b.brand} - ${b.models.length}` ))
    } catch (error) {
        console.log(error)
        res.send(error)
    }
    
})

router.post("/listaModelos", async (req, res) => {
    try {
        const brands = await getBrands()
        const brand = brands.find(b =>  b.brand.toUpperCase() === req.body.nomeMarca.toUpperCase())
        if(brand) {
            res.send(brand.models)
        }
        else {
            res.send([])
        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

export default router