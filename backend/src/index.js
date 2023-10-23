// import express
const app= require("./server");
require("./routes/Insert")(app);
require("./routes/Update")(app);
require("./routes/Select")(app);
require("./routes/Verification")(app);
require("./routes/get")(app);
require("./routes/web-services")(app);

app.listen(app.get("port"), 
() => console.log(`Escuchando en servidor puerto : ${app.get("port")}`));