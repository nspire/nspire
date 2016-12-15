const mongoose  = require('mongoose')
const bcrypt    = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: 	{ type: String, required: true },
  email:    { type: String, required: true },
  pwd:      { type: String, required: true },
  role: 	{ type: String, required: true },
  img: 		{ type: String, required: false} 
});

userSchema.methods.hash = (password) => bcrypt.hashSync(password, 8)
userSchema.methods.valid = function(password) {
	return bcrypt.compareSync(password, this.pwd)
}

userSchema.pre('save', function(next) {
    if (this.isModified('password') && !this.isNew()) return next()
    this.pwd = this.hash(this.pwd)  
	next()
})

module.exports = mongoose.model('users', userSchema)