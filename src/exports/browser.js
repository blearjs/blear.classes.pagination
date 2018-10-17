/**
 * 主导出（适配）
 * @author ydr.me
 * @create 2018-10-17 16:39
 * @update 2018-10-17 16:39
 */


'use strict';

var Pagination = require('../pagination.class');

Pagination.template = function (mode) {
    switch (mode) {
        case 'simple':
            return require('../templates/simple.html');

        default:
            return require('../templates/range.html');
    }
};
module.exports = Pagination;

