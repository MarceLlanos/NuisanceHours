import { parseCsvToJson } from "./csvProcessor";
import { addUser } from "./userService";

const csvFilePath = "/Users/marcelallanos/Downloads/example_of_data_file.csv"

const main = async () => {
    try {
        console.log("Procesando archivo CSV...");
        const users = await parseCsvToJson(csvFilePath);
        console.log(`Usuarios procesados: ${users.length}`);

        for (const user of users) {
            await addUser({
                name: user.name,
                email: user.email,
                phone: user.phone ?? "00000000",
                employee_no: user.employee_no,
                address: user.new_address,
                city: user.new_city,
                zip: user.new_zip
            });
        }

        console.log("Todos los usuarios fueron agregados.");
    } catch (error) {
        console.error("Error en la ejecución:", error);
    }
};

main();
