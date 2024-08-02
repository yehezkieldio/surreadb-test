import Surreal from "surrealdb.js";

let db: Surreal | undefined;

export async function initDatabase() {
    if (db) return db;
    db = new Surreal();

    try {
        await db.connect("http://127.0.0.1:8000/rpc");
        await db.use({ namespace: "test", database: "test" });

        return db;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function closeDatabase() {
    if (!db) return;
    await db.close();
    db = undefined;
}

export async function getDatabase() {
    if (!db) {
        await initDatabase();
    }
    return db;
}
