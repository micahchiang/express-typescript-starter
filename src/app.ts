import * as express from 'express';

class App {

    public express;

    constructor() {
        this.express = express();
        this.loadRoutes();
    }

    private loadRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.send('hello world');
        });
        this.express.use('/', router);
    }
}

export default new App().express;


