const mongoose = require('mongoose')

// defined schema of a model|collection
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already exist"]
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

// userSchema.pre("save", function (next) {
//     this.password = bcrypt.hash(this.password,10)
//     code***
//     next()
// })
// pre() function after of model_schema
// pre() function takes two argument: 
    // - first argument ==> pre("events"). Here save is event.
    // - second argument ==> pre("events", function(next){*** next()}). function.
    // - In middleware we have to use this. never use callback as middleware as we cannot use this keyword in middleware.

// create mongodb_collection mapping mongoose_model with respective mongoose_schema.
const userModel = new mongoose.model("usersCollection", userSchema);

module.exports = userModel;


