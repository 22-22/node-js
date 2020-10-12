const uuid = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'TASK',
    order = 1,
    description = 'task_description',
    boardId,
    userId = null,
    columnId = null
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
