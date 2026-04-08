const mongoose = require('mongoose');
const Product = require('..models/product');

class ProductController {
  static index(req, res) {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        Product.find({}).then((products) => {
            res.send(JSON.stringify(products));
            mongoose.connection.close();
        })
    })
    .catch((err) => {
        res.send("Error")
    })
    };

  static show(req, res) {
    return Product[req.params.id];
  };

  static create(req, res) {
    const { name, preco } = req.body;
    let product = {
      name: name,
      preco: preco,
    };

    Books[Books.last + 1] = livro;
    Books.last += 1;

    return livro;
  };

  static update(req, res) {
    const { id } = req.params;
    const { name, description, author } = req.body;

    let book = Object(Books[id]);
    if (name !== undefined) book.name = name;
    if (description !== undefined) book.description = description;
    if (author !== undefined) book.author = author;

    Books[id] = book;
    return book;
  };

  static delete(req, res) {
    const { id } = req.params;
    Books[id] = null;
  };
};