const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware - adds data to req.body

app.use(express.json());

// routes
app.get("/hello", (req, res, next) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", taskRoutes);

// app.get('api/v1/tasks')                  - get all tasks
// app.post('api/v1/tasks')                 - create a new task
// app.get('api/v1/tasks/:id')              - get a single task
// app.patch('api/v1/tasks/:id')            - update task
// app.delete('api/v1/tasks/:id')           - delete task

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
