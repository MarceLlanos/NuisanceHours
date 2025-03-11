import fs from "fs";
import csv from "csv-parser";
import { UserDataInputInterface } from "./interface/UserDataInputInterface.interface";

export const parseCsvToJson = async (filePath: string): Promise<UserDataInputInterface[]> => {
    return new Promise((resolve, reject) => {
        const results: UserDataInputInterface[] = [];

        fs.createReadStream(filePath, { encoding: "utf8" })
            .pipe(csv({ separator: ";" }))
            .on("data", (row) => {
                try {
                    const user: UserDataInputInterface = {
                        email: row["Email"]?.trim() || "",
                        name: row["Fulde navn"]?.trim() || "",
                        employee_no: parseInt(row["Medarbejdernummer"], 10) || 0,
                        new_manager: row["NyManager"]?.trim() || null,
                        old_manager: row["GammelManager"]?.trim() || null,
                        new_address: row["NyPrivatadresse"]?.trim() || null,
                        new_street: row["NyPrivatadressevej"]?.trim() || null,
                        new_city: row["NyPrivatadresseBy"]?.trim() || null,
                        new_zip: row["NyPrivatadressePostnummer"]?.trim() || null,
                        old_address: row["GammelPrivatadresse"]?.trim() || null,
                        new_work_address: row["NyArbejdsadresse"]?.trim() || null,
                        old_work_address: row["GammelArbejdsadresse"]?.trim() || null,
                        manager_email: row["ManagerEmail"]?.trim() || null,
                        manager_phone: row["ManagerMobilnummer"]?.trim() || null,
                        phone: row["Mobilnummer"]?.trim() || null,
                        status: row["Status"]?.trim() || null
                    };
                    results.push(user);
                } catch (error) {
                    console.error("Error al procesar la fila:", row, error);
                }
            })
            .on("end", () => {
                fs.writeFileSync("output.json", JSON.stringify(results, null, 2));
                resolve(results);
            })
            .on("error", (error) => {
                console.error("Error al leer el archivo CSV:", error);
                reject(error);
            });
    });
};
