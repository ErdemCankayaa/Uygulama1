const mongoose = require("mongoose");

// Ogrenci tablosu icin schema
const OgrenciSchema = new mongoose.Schema({
  isim: { type: String, required: true },
  soyisim: { type: String, required: true },
  numara: { type: String, required: true },
  sinif: { type: String, required: true },
  ders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ders" }],
  odev: [{ type: mongoose.Schema.Types.ObjectId, ref: "Odev" }],
});

// Odev tablosu icin schema
const OdevSchema = new mongoose.Schema({
  adi: { type: String, required: true },
  aciklama: { type: String, required: true },
  verilisTarihi: { type: Date, required: true },
  teslimTarihi: { type: Date, required: true },
  ogrenci: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ogrenci",
    required: true,
  },
  ders: { type: mongoose.Schema.Types.ObjectId, ref: "Ders", required: true },
});

// Dersler tablosu icin schema
const DersSchema = new mongoose.Schema({
  adi: { type: String, required: true },
  kodu: { type: String, required: true },
  kredi: { type: Number, required: true },
  ogrenci: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ogrenci" }],
  odev: [{ type: mongoose.Schema.Types.ObjectId, ref: "Odev" }],
});

const Ogrenci = mongoose.model("Ogrenci", OgrenciSchema);
const Odev = mongoose.model("Odev", OdevSchema);
const Ders = mongoose.model("Ders", DersSchema);

module.exports = { Ogrenci, Odev, Ders };
