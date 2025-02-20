import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const dir  = '/api/data';

app.use(cors());
app.use(express.json());

const dataFilePath = path.resolve(__dirname, "data.json");
const readData = () => {
    try {
        const data = fs.readFileSync(dataFilePath, "utf8");
        return JSON.parse(data) 
    } catch (error) {
        console.log("Error al leer el archivo json", error);
        return {error: "No se pudo leer el archivo de datos"}
    }
    
}

app.get('/', (req, res) => {
    const data = readData();
    res.json(data)
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
