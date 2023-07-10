import express, {Request, Response} from "express"
import { UserController } from "../controller/user.controller";

export class UserRoutes {
    public router: express.Router;
    public userController: UserController;
    constructor() {
        this.userController = new UserController();
        this.router = express.Router();
        this.routes();
    }
    public routes() {
        this.router.get('/users', async (_req: Request, res: Response) => {
            const users = await this.userController.getAllUsers();
            res.json(users);
        });
        this.router.get('/users/:id', async (req: Request, res: Response) => {
            const user = await this.userController.getUserById(parseInt(req.params.id));
            res.json(user);
        });
        this.router.post('/users', async (req: Request, res: Response) => {            
            const user = await this.userController.createUser(req.body);
            res.json(user);
        });
        this.router.put('/users/:id', async (req: Request, res: Response) => {
            const user = await this.userController.updateUser(parseInt(req.params.id), req.body);
            res.json(user);
        });
        this.router.delete('/users/:id', async (req: Request, res: Response) => {
            const user = await this.userController.deleteUser(parseInt(req.params.id));
            res.json(user);
        });
    }
}