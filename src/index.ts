import express, {Application} from 'express';
import { initDB } from "./db/config";
import { UserRoutes } from './routes/users.route';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

class App {
    
    public app: Application;
    public userRoutes: UserRoutes;
    constructor() {
        
        this.app = express();
        this.config();
        initDB();
        this.userRoutes = new UserRoutes();
        this.userRoutes.routes();
        this.app.use(`/api/${process.env.APP_VERSION}`, this.userRoutes.router);
    }
    
    private config(): void {
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(bodyParser.json());
        //configure header HTTP - CORS
        this.app.use(cors());
        console.log("Realiza el config")
    }
}

const PORT = process.env.PORT || 3000;
const app = new App().app;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

