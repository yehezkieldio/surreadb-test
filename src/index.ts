import { getDatabase, initDatabase } from "./utils/surreal";

await initDatabase();
const db = await getDatabase();

if (!db) {
    throw new Error("Database not initialized");
}

type Person = {
    id: string;
    name: string;
};

// const result = await db.query<[Person[], Person[]]>(
//     'CREATE person SET name = "John"; SELECT * FROM type::table($tb);',
//     { tb: "person" },
// );

// console.log(result[0]);

const result = await db.query("CREATE person SET name = 'elizielx'");

await db.query("SELECT * FROM person");
