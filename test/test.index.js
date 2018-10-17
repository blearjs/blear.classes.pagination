/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai-jasmine').expect;
var Pagination = require('../src/exports/node');

describe('测试文件', function () {

    it('simple mode', function () {
        var p = new Pagination({
            mode: 'simple'
        });

        var html = p.render({
            page: 3,
            total: 3
        });

        console.log(html);
    });

    it('range mode', function () {
        var p = new Pagination({
            mode: 'range'
        });

        var html = p.render({
            page: 3
        });

        console.log(html);
    });

});

