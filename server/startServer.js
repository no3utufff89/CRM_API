import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

export const startApp = async () => {
    try {
        app.listen(PORT, () =>
            console.log(
                `Server started on port: ${PORT}, address is: http://localhost:${PORT}`
            )
        );
       
    } catch (e) {
        console.log(e);
    }
};
