import { injectable, inject } from "inversify";
import { Router, Request, Response, NextFunction } from "express";
import Types from "./types";
import { Api } from "./routes/api";
@injectable()
export class Routes {

    public constructor(@inject(Types.Api) private auth: Api) {}

    public get routes(): Router {
        const router: Router = Router();

        router.post('/api/auth/register', (req: Request, res: Response, next: NextFunction) => this.auth.authRegister(req,res,next))
        router.post('/api/auth/login', (req: Request, res: Response, next: NextFunction) => this.auth.authLogin(req,res,next))

        router.get('/api/daycare', (req: Request, res: Response, next: NextFunction) => this.auth.getDayCare(req,res,next))
        router.get('/api/sportEvent',(req:Request,res:Response,next:NextFunction)=> this.auth.getSpotEvents(req,res,next))
        router.get('/api/dayCareCamps',(req:Request,res:Response,next:NextFunction)=> this.auth.getDayCareCamp(req,res,next))
        router.get('/api/alerts',(req:Request,res:Response,next:NextFunction)=> this.auth.getAlerts(req,res,next))
        router.post('/api/alerts',(req:Request,res:Response,next:NextFunction)=> this.auth.createAlert(req,res,next))
        router.post('/api/registration',(req:Request,res:Response,next:NextFunction)=> this.auth.createRegistration(req,res,next))
        router.get('/api/registration',(req:Request,res:Response,next:NextFunction)=> this.auth.getRegistration(req,res,next))
        router.get('/api/allRegistration',(req:Request,res:Response,next:NextFunction)=> this.auth.getAllRegistrations(req,res,next))
        
        
        return router;
    }
}
