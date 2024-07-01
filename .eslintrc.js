/* cSpell:disable */
module.exports = {
    // lint 環境
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: ['airbnb-base'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        /**
         * 'off' 或 0 - 关闭规则
         * 'warn' 或 1 - 开启规则，使用警告级别的错误：warn
         * 'error' 或 2 - 开启规则，使用错误级别的错误：error
         */
        // Code style
        'brace-style': [2, 'stroustrup'],
        // 允許類別內函式沒有調用到自身的屬性或其他函式
        'class-methods-use-this': 0,
        // cc.Class 為非正規 export 用法，所以要允許 unresolved-import
        'import/no-unresolved': 0,
        // TS去除副档名规则
        'import/extensions': ['off', 'ignorePackages'],
        // 部分情境下會使用到，改為 warning
        'import/prefer-default-export': 1,
        // Code style
        indent: [2, 4, {
            SwitchCase: 1,
        }],
        // Code style
        'max-len': [1, {
            code: 140,
            tabWidth: 4,
        }],
        // 保留 continue 使用
        'no-continue': 1,
        // 為了可以使用 ++a / a++
        'no-plusplus': 0,
        // 允許變數名稱包含底線
        'no-underscore-dangle': 0,
        // 允許使用三元運算子
        'no-unused-expressions': [2, {
            allowTernary: true,
        }],
        // 允許提升 functions & classes
        // 'no-use-before-define': [2, { functions: false, classes: false }],
        // 不使用 array destructuring
        'prefer-destructuring': 0,
        // CocosCreator engine 自帶 'use strict'，所以不用自己加
        strict: 0,
        // 強制使用單引號
        quotes: [2, 'single'],
        // 去除LF规则
        'linebreak-style': [0, 'error', 'windows'],
        // 关闭JS 未使用属性,开启ts
        'no-unused-vars': 0,
        // 未使用变量报错规则
        '@typescript-eslint/no-unused-vars': [2, {
            vars: 'all',
            args: 'none',
            ignoreRestSiblings: true,
            varsIgnorePattern: 'property',
        }],
        // 关闭parseInt必须指定第二个参数
        radix: 0,
        'eol-last': 0,
        // 关闭不允许同名函数
        'no-dupe-class-members': 0,
        // 关闭一个文件只允许1个class
        'max-classes-per-file': 0,
        // 关闭修改传入参数的限制
        'no-param-reassign': 0,
        // 关闭位操作限制
        'no-bitwise': 0,
        // 关闭函数名限制
        'func-names': 0,
        // 关闭点号取属性限制
        'dot-notation': 0,
        // In ES2015 (ES6) or later, if you don't want to be notified about arguments variables, then it's safe to disable this rule.
        'prefer-rest-params': 0,
        'no-console': [2, {
            allow: ['warn', 'error'],
        }],
        'no-use-before-define': ['error', {
            functions: false,
            classes: false,
        }],
        'no-await-in-loop': 0,
    },
    // 告知 lint 有這些 global variable
    globals: {
        cc: false,
        Editor: false,
        Immutable: false,
        jsb: false,
        sdkbox: false,
        CC_EDITOR: false,
        CC_PREVIEW: false,
        CC_DEV: false,
        CC_DEBUG: false,
        CC_BUILD: false,
        CC_JSB: false,
        CC_TEST: false,
        dragonBones: false,
        sp: false,
        require: false,
    },
};