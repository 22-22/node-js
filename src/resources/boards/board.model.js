// const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const columnSchema = new Schema(
  {
    title: String,
    order: Number
  },
  { versionKey: false }
);

const boardSchema = new Schema(
  {
    title: String,
    columns: [columnSchema]
    // _id: {
    //   type: String,
    //   default: uuid
    // }
  },
  { versionKey: false }
);

boardSchema.static('toResponse', board => {
  const { id, title, columns } = board;
  return { id, title, columns };
});

const Board = mongoose.model('boards', boardSchema);

module.exports = Board;
