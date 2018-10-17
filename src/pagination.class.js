/**
 * blear.classes.pagination
 * @author ydr.me
 * @create 2016年06月04日14:09:36
 */


'use strict';

var Class = require('blear.classes.class');
var Template = require('blear.classes.template');
var object = require('blear.utils.object');

var defaults = {
    /**
     * 命名空间（class 前缀）
     * @type string
     */
    namespace: 'pagination',

    /**
     * 分页模式，有 simple/range 两种
     * @type String
     */
    mode: 'simple',

    /**
     * 分页可视范围
     * @type Number
     */
    range: 7,

    /**
     * 分页总数
     * @type Number
     */
    total: 1,

    /**
     * 当前页码
     * @type Number
     */
    page: 1,

    /**
     * 前一页文本
     * @type String
     */
    prev: '≪',

    /**
     * 后一页文本
     * @type String
     */
    next: '≫',

    /**
     * 省略页文本
     * @type String
     */
    ellipsis: '•••',

    /**
     * 分页 URL 格式，使用 `%#%` 来表示分页页码
     * @type string
     */
    format: '?page=%#%'
};
var parsers = {
    simple: require('./parsers/simple'),
    range: require('./parsers/range')
};
var Pagination = Class.extend({
    calssName: 'Pagination',
    constructor: function (options, template) {
        var the = this;

        options = the[_options] = object.assign({}, defaults, options);
        the[_tpl] = new Template(Pagination.template(options.mode));
        the[_tpl].filter('page', function (page) {
            if (page < 1 || page > options.total) {
                return 'javascript:;';
            }

            return options.format.replace(/%#%/g, page);
        });
    },

    /**
     * 渲染
     * @param [pager]
     * @param pager.page
     * @param pager.total
     * @returns {string}
     */
    render: function (pager) {
        var the = this;
        var options = object.assign(the[_options], pager);
        options.total = Math.max(options.total, options.page);
        return the[_tpl].render(parsers[options.mode](options));
    }
});
var sole = Template.sole;
var _options = sole();
var _tpl = sole();

Pagination.defaults = defaults;

/**
 * 需要在外部导出器里重写
 * @param mode
 * @returns {string}
 */
Pagination.template = function (mode) {
    return '';
};

module.exports = Pagination;
