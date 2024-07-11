"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const task_entity_1 = require("./task/task.entity");
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'your_db_user',
    password: 'your_db_password',
    database: 'task_manager',
    entities: [task_entity_1.Task],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map