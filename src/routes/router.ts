import { Router, Response, Request} from 'express'
import Heroes from '../models/heroes'
import MySql from '../mysql/mysql'

const router = Router()

router.get('/test',(req: Request, res: Response) => {
    res.json({
        ok: 200,
        msg: 'Todo bien'
    })
})
router.get('/heroes',(req: Request, res: Response) => {
    const q = `SELECT * FROM heroes`
    MySql.ejecutarQuery(q,(err: any, heroes: Object[])=>{
        if(err){
            res.status(400).json({
                ok: false,
                error: err
            })
        }else{
            res.json({
                ok: true,
                heroes
            })
        }
    })
})
router.get('/heroes/:id',(req: Request, res: Response) => {
    const { id } = req.params
    const q = `SELECT * FROM heroes WHERE id=${MySql.instance.cnn.escape(id)}`
    MySql.ejecutarQuery(q,(err: any, heroe: Object[])=>{
        if(err){
            res.status(400).json({
                ok: false,
                error: err
            })
        }else{
            res.json({
                ok: true,
                heroe: heroe[0]
            })
        }
    })
})
router.get('/seq/heroes',async(req: Request, res: Response)=>{
    try {
        const heroes = await Heroes.findAll()
        res.json({
            ok: true,
            heroes
        })
    }catch (err){
        res.status(500).json({
            ok: false,
            error: err
        })
    }
})

export default router