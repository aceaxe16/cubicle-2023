const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minLength: 3
    },
    password:{
        type: String,
        required: true,
        minLength: [6, "password is too short"]
    }
})

userSchema.pre('save', function(next){
    crypto.hash(this.password,10)
    .then(hash => {
        this.password = hash;

        next()
    })
})

userSchema.method('validatePassword', function(password){
    return bcrypt.compare(password, this.password)
})

const User = mongoose.model('User', userSchema);


module.exports = User