const express = require("express");
const app = express();
const cors=require("cors")
app.use(cors())
const PORT = 4000;
const project = require("./routes/projectRoute");
const user = require("../backend/routes/usersRoute");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/projects", project);
app.use("/api/users", user);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
