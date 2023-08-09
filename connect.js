const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./todo.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    } else {
      console.log("Connected to the SQlite database.");
    }
  }
);

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS todo (
            id INTEGER PRIMARY KEY,
            task TEXT
        )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created todo table");

      db.run(`DELETE FROM todo`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("Deleted items in todo table");

        const value1 = ["Buy groceries"];
        const value2 = ["Walk Sam"];
        const value3 = ["Fold laundry"];
        const value4 = ["Workout"];

        const insertSql = `INSERT INTO todo (task) VALUES (?)`;

        db.run(insertSql, value1, (err) => {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID;
          console.log(`Added todo item with id ${id}`);
        });

        db.run(insertSql, value2, (err) => {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID;
          console.log(`Added todo item with id ${id}`);
        });
        db.run(insertSql, value3, (err) => {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID;
          console.log(`Added todo item with id ${id}`);
        });
        db.run(insertSql, value4, (err) => {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID;
          console.log(`Added todo item with id ${id}`);
        });

        db.close((err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Closed the database connection.");
        });
      });
    }
  );
});
