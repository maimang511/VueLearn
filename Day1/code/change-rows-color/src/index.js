// 1. 适用ES6导入语法，导入jQuery

import $ from 'jQuery'

// 2. 定义jQuery的入口函数

$(function(){
    // 3. 实现奇偶行变色
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color','black')

})