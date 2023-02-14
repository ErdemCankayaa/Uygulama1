const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/Ogrenci";
mongoose.set("strictQuery", false);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Veritabanına bağlanıldı");
  })
  .catch((err) => {
    console.log("Veri tabanı bağlantı hatası" + err, err);
  });
