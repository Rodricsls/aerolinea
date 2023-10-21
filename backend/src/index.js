// import express
const app= require("./server");
require("./routes/Insert")(app);
require("./routes/Update")(app);

app.listen(app.get("port"), 
() => console.log(`Escuchando en servidor puerto : ${app.get("port")}`));