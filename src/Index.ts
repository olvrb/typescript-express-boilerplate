import express from "express";
import { json, urlencoded } from "body-parser";
import { join } from "path";
import { Configuration } from "./Config.example";
import { connect } from "./Database/Index";
import { BindControllers } from "./Controllers/Index";
const app = express();

app.set("view engine", "ejs");
app.set("views", join(__dirname, "../views"));
app.use(json()); // for parsing application/json
app.use(urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(join(__dirname, "../public")));

// Routes
BindControllers();

const port = Configuration.Web.Port;
connect()
    .then(() => {
        app.listen(port, () => {
            console.log(`Listening on port ${port}: http://localhost:${port}`);
        });
    })
    .catch(console.error);
export { app };
