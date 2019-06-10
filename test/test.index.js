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
            mode: 'simple',
            format: '/page/%#%'
        });

        var html = p.render({
            page: 3,
            total: 3
        });

        console.log(html);
    });

    it('range mode', function () {
        var p = new Pagination({
            mode: 'range',
            format: function (page) {
                return p._s + '/p/' + page;
            }
        });
        p._s = 'abc';

        var html1 = p.render({
            page: 3,
            total: 5
        });

        var html2 = p.render({
            page: 3,
            total: 10
        });

        var html3 = p.render({
            page: 7,
            total: 10
        });

        var html4 = p.render({
            page: 3,
            total: 50
        });

        var html5 = p.render({
            page: 25,
            total: 50
        });

        var html6 = p.render({
            page: 48,
            total: 50
        });

        var html7 = p.render({
            page: 4,
            total: 50
        });

        var html8 = p.render({
            page: 8,
            total: 10,
            range: 4
        });

        var html9 = p.render({
            page: 3,
            total: 10,
            range: 4
        });

        // console.log(html1);
        // console.log(html2);
        // console.log(html3);
        // console.log(html4);
        // console.log(html5);
        // console.log(html6);
        // console.log(html7);
        // console.log(html8);
        console.log(html9);
    });

});

