const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
const connectDatabse = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    })
    .then((data) =>
      console.log(`MngoDb is Connected to ${data.connection.host}`)
    ).catch((err) => console.log(err));;
};

module.exports = connectDatabse;
