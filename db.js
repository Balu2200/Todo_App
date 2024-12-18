const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://BaluPasumarthi:*******@firstdb.7argj.mongodb.net/Todo");

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed : Boolean
});

const todo = mongoose.model("todo", todoSchema);

module.exports ={
    todo
};
