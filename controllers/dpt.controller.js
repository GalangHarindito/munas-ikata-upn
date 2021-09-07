const { dpt, Sequelize } = require("../models");

exports.create = (req, res) => {
  dpt.create({ pin: Math.floor(100000 + Math.random() * 900000), ...req.body })
    .then(data => {
      res.send({
        status : 200,
        data: data,
        message: 'Data DPT baru berhasil ditambahkan'
      });
    })
    .catch(err => {
      res.status(500).send({
        status : 500,
        data: {},
        message:
          { errors : err.errors, fields : err.fields } || "Data DPT baru gagal ditambahkan"
      });
    });
};

exports.findAll = (req, res) => {
  const nama = req.body.nama;
  var condition = nama ? { nama: { [Sequelize.Op.like]: `%${nama}%` } } : null;
  
  dpt.findAll({ where: condition })
    .then(data => {
      res.send({
        status : 200,
        data: data,
        message: 'Data seluruh DPT berhasil diambil'
      });
    })
    .catch(err => {
      res.status(500).send({
        status : 500,
        data: [],
        message:
          err.message || "Data seluruh DPT gagal diambil"
      });
    });
};

exports.findAllVoted = (req, res) => {
  dpt.findAll({ where: { voted: true } })
    .then(data => {
      res.send({
        status : 200,
        data: data,
        message: 'Data DPT yang sudah melakukan voting berhasil diambil'
      });
    })
    .catch(err => {
      res.status(500).send({
        status : 500,
        data: [],
        message:
          err.message || "Data DPT yang sudah melakukan voting gagal diambil"
      });
    });
};

exports.findOne = (req, res) => {
  dpt.findByPk(req.params.id)
    .then(data => {
      res.send({
        status : 200,
        data: data,
        message: 'Data DPT berdasarkan id berhasil diambil'
      });
    })
    .catch(err => {
      res.status(500).send({
        status : 500,
        data: {},
        message: err.message || "Data DPT berdasarkan id " + id + " gagal diambil"
      });
    });
};

exports.update = (req, res) => {
  dpt.update(req.body, {
    where: { id: req.params.id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          status : 200,
          data: req.body,
          message: "Data DPT berhasil diperbaharui"
        });
      } else {
        res.status(500).send({
          status : 500,
          data: req.body,
          message: `Gagal memperbaharui data dengan id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        status : 500,
        data: {},
        message: err.message || `Gagal memperbaharui data dengan id=${id}`
      });
    });
};

exports.delete = (req, res) => {
  dpt.destroy({
    where: { id: req.params.id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          status : 200,
          message: "Data DPT berhasil dihapus"
        });
      } else {
        res.status(500).send({
          status : 500,
          message: `Gagal menghapus data dengan id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        status : 500,
        data: {},
        message: err.message || `Gagal menghapus data dengan id=${id}`
      });
    });
};