const mongoose = require("mongoose");
const { Ogrenci, Odev, Ders } = require("../models/model");

// Öğrencinin aldığı dersleri ve odevlerini donduren fonksiyon
const ogrenciDetay = async (req, res) => {
  const ogrenciId = req.params.id;
  try {
    const ogrenci = await Ogrenci.findById(ogrenciId)
      .populate("ders")
      .populate("odev");
    res.status(200).json(ogrenci);
    console.log("Öğrenci Bulundu");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Hata olustu" });
  }
};

const ogrenciEkle = async (req, res) => {
  const { isim, soyisim, numara, sinif, dersler } = req.body;

  const ogrenci = new Ogrenci({
    isim,
    soyisim,
    numara,
    sinif,
    dersler,
  });

  try {
    const yeniOgrenci = await ogrenci.save();
    res.status(201).json(yeniOgrenci);
    console.log("Ogrenci Eklendi");
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Ogrenci Eklerken Hata olustu" });
  }
};

const ogrenciGuncelle = async (req, res) => {
  const ogrenci = await Ogrenci.findById(req.params.id);

  if (!ogrenci) {
    return res.status(404).json({ message: "Ogrenci bulunamadi" });
  }
  const { isim, soyisim, numara, sinif, dersler } = req.body;

  ogrenci.isim = isim;
  ogrenci.soyisim = soyisim;
  ogrenci.numara = numara;
  ogrenci.sinif = sinif;
  ogrenci.dersler = dersler;

  try {
    const guncellenenOgrenci = await ogrenci.save();
    res.status(200).json(guncellenenOgrenci);
    console.log("Ogrenci Guncellendi");
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Ogrenci Guncellenirken Hata olustu" });
  }
};

const ogrenciSil = async (req, res) => {
  const ogrenci = await Ogrenci.findById(req.params.id);

  if (!ogrenci) {
    return res.status(404).json({ message: "Ogrenci bulunamadi" });
  }

  try {
    await ogrenci.remove();
    res.status(200).json({ message: "Ogrenci basariyla silindi" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ogrenci silinirken hata olustu" });
  }
};

const dersDetay = async (req, res) => {
  const dersId = req.params.id;
  try {
    const odevler = await Odev.find({ ders: dersId }).populate("ogrenci");
    res.status(200).json(odevler);
    console.log("Ders Bulundu");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Hata olustu" });
  }
};

const dersEkle = async (req, res) => {
  const { adi, kodu, kredi } = req.body;

  const ders = new Ders({
    adi,
    kodu,
    kredi,
  });

  try {
    const yeniDers = await ders.save();
    res.status(201).json(yeniDers);
    console.log("Yeni ders eklendi");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ders Eklerken Hata olustu" });
  }
};

const dersGuncelle = async (req, res) => {
  const ders = await Ders.findById(req.params.id);

  if (!ders) {
    return res.status(404).json({ message: "Ders bulunamadi" });
  }
  const { adi, kodu, kredi } = req.body;

  ders.adi = adi;
  ders.kodu = kodu;
  ders.kredi = kredi;

  try {
    const guncellenenDers = await ders.save();
    res.status(200).json(guncellenenDers);
    console.log("Ders Guncellendi");
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Ders Guncellenirken Hata olustu" });
  }
};

const dersSil = async (req, res) => {
  const ders = await Ders.findById(req.params.id);

  if (!ders) {
    return res.status(404).json({ message: "Ders bulunamadi" });
  }

  try {
    await ders.remove();
    res.status(200).json({ message: "Ders basariyla silindi" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ders silinirken hata olustu" });
  }
};

// Bir öğrencinin odevlerini donduren fonksiyon

const odevDetay = async (req, res) => {
  const odevID = req.params.id;
  try {
    const odev = await Odev.findById(odevID)
      .populate("ogrenci")
      .populate("ders");
    res.status(200).json(odev);
    console.log("Odev Bulundu");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Hata olustu" });
  }
};

const odevEkle = async (req, res) => {
  const { adi, aciklama, verilisTarihi, teslimTarihi, ogrenci, ders } =
    req.body;

  const odev = new Odev({
    adi,
    aciklama,
    verilisTarihi,
    teslimTarihi,
    ogrenci,
    ders,
  });

  try {
    const yeniOdev = await odev.save();
    res.status(201).json(yeniOdev);
    console.log("Yeni odev eklendi");
  } catch (err) {
    consoleç.error(err);
    res.status(500).json({ message: "Odev Eklerken Hata olustu" });
  }
};

const odevGuncelle = async (req, res) => {
  const odev = await Odev.findById(req.params.id);

  if (!odev) {
    return res.status(404).json({ message: "Odev bulunamadi" });
  }
  const { adi, aciklama, verilisTarihi, teslimTarihi, ogrenci, ders } =
    req.body;

  odev.adi = adi;
  odev.aciklama = aciklama;
  odev.verilisTarihi = verilisTarihi;
  odev.teslimTarihi = teslimTarihi;
  odev.ogrenci = ogrenci;
  odev.ders = ders;

  try {
    const guncellenenOdev = await odev.save();
    res.status(200).json(guncellenenOdev);
    console.log("Odev Guncellendi");
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Odev Guncellenirken Hata olustu" });
  }
};

const odevSil = async (req, res) => {
  const odev = await Odev.findById(req.params.id);

  if (!odev) {
    return res.status(404).json({ message: "Odev bulunamadi" });
  }

  try {
    await odev.remove();
    res.status(200).json({ message: "Odev basariyla silindi" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Odev silinirken hata olustu" });
  }
};

module.exports = {
  ogrenciDetay,
  ogrenciEkle,
  ogrenciGuncelle,
  ogrenciSil,
  dersDetay,
  dersEkle,
  dersGuncelle,
  dersSil,
  odevDetay,
  odevEkle,
  odevGuncelle,
  odevSil,
};
