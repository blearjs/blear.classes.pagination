/**
 * 主导出（适配）
 * @author ydr.me
 * @create 2018-10-17 16:39
 * @update 2018-10-17 16:39
 */


'use strict';

var Pagination = require('../pagination.class');
var fs = require('fs');
var path = require('path');

Pagination.template = function (mode) {
    switch (mode) {
        case 'simple':
            return fs.readFileSync(path.join(__dirname, '../templates/simple.html'), 'utf8');

        default:
            return fs.readFileSync(path.join(__dirname, '../templates/range.html'), 'utf8');
    }
};
module.exports = Pagination;

