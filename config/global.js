// 全局配置
var config = new Map();

// mysql
config.set('mysql', {
  host: '127.0.0.1',
  port: 3306,
  user: 'kanban',
  password: '123456',
  database: 'kanban'
});

// redis
config.set('redis', {
  host: '127.0.0.1',
  port: 6379
});

// 合并配置，customer中没有定义的就使用global的配置，有的则覆盖；类似PHP的array_merge效果
var fs = require('fs');
if (fs.existsSync(__dirname + '/customer.js')) {
  var customer = require('./customer');
  customer.forEach(function (value, key) {
    config.set(key, value);
  });
}

module.exports = config;