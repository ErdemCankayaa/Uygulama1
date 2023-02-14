const Router = require("express").Router();
const controller = require("../controllers/controller");

// Öğrenciler için controller

Router.get("/ogrencidetay/:id", controller.ogrenciDetay);
Router.post("/ogrenciekle", controller.ogrenciEkle);
Router.put("/ogrenci/:id", controller.ogrenciGuncelle);
Router.delete("/ogrenci/:id", controller.ogrenciSil);

// Dersler için controller
Router.post("/dersEkle", controller.dersEkle);
Router.get("/ders", controller.dersDetay);
Router.put("/ders/:id", controller.dersGuncelle);
Router.delete("/ders/:id", controller.dersSil);

// Ödevler için controller

Router.post("/odevekle", controller.odevEkle);
Router.get("/odev/:id", controller.odevDetay);
Router.put("/odev/:id", controller.odevGuncelle);
Router.delete("/odev/:id", controller.odevSil);

module.exports = Router;
