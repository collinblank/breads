// require mongoose
const mongoose = require('mongoose')
// creating shorthand for the schema constructor
const { Schema } = mongoose

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://live.staticflickr.com/4038/4502474766_17a734e153_b.jpg' },
  baker: { type: Schema.Types.ObjectId,
    ref: 'Baker'
  }
});
// helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}



const Bread = mongoose.model('Bread', breadSchema);

module.exports = Bread



  