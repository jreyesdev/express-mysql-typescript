import { Router, Response, Request} from 'express'

const router = Router()

router.get('/test',(req: Request, res: Response) => {
    res.json({
        ok: 200,
        msg: 'Todo bien'
    })
})

export default router