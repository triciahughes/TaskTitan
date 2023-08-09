// route.js
// Import the necessary modules for SQLite
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Initialize a variable to hold the SQLite database connection
let db = null;

// Handler for GET requests to retrieve all todos
export async function GET(req, res) {
  // Open a new connection if there is none
  if (!db) {
    db = await open({
      filename: "./todo.db",
      driver: sqlite3.Database,
    });
  }

  // Query to get all todos from the "todo" table
  const todos = await db.all("SELECT * FROM todo");

  // Return the todos as a JSON response with a 200 status code
  return new Response(JSON.stringify(todos), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}

// Handler for POST requests to create a new todo
export async function POST(req, res) {
  // Open a new connection if there is none
  if (!db) {
    db = await open({
      filename: "./todo.db",
      driver: sqlite3.Database,
    });
  }

  // Extract the task from the request body
  const { task } = await req.json();

  // Insert the new task into the "todo" table
  await db.run("INSERT INTO todo (task) VALUES (?)", task);

  // Return a success message as a JSON response with a 200 status code
  return new Response(
    JSON.stringify(
      { message: "success" },
      {
        headers: { "content-type": "application/json" },
        status: 200,
      }
    )
  );
}

// Handler for DELETE requests to delete a todo by ID
export async function DELETE(req, res) {
  // Open a new connection if there is none
  if (!db) {
    db = await open({
      filename: "./todo.db",
      driver: sqlite3.Database,
    });
  }

  // Extract the ID from the request body
  const { id } = await req.json();

  // Delete the todo with the specified ID from the "todo" table
  await db.run("DELETE FROM todo WHERE id = ?", id);

  // Return a success message as a JSON response with a 200 status code
  return new Response(
    JSON.stringify(
      { message: "success" },
      { headers: { "content-type": "application/json" }, status: 200 }
    )
  );
}

// Handler for PATCH requests to update a todo by ID
export async function PATCH(req, res) {
  // Open a new connection if there is none
  if (!db) {
    db = await open({
      filename: "./todo.db",
      driver: sqlite3.Database,
    });
  }

  // Extract the ID and task from the request body
  const { id, task } = await req.json();

  // Update the todo with the specified ID in the "todo" table
  await db.run("UPDATE todo SET task = ? WHERE id = ?", task, id);

  // Return a success message as a JSON response with a 200 status code
  return new Response(
    JSON.stringify(
      { message: "success" },
      { headers: { "content-type": "application/json" }, status: 200 }
    )
  );
}
