const nightmareHandler = require('../../lib');

// 获得扩展之后的 Nightmare
const NightmarePlus = nightmareHandler.getNightmarePlus();

// 初始化 nightmare 对象
const nightmare = NightmarePlus({ show: true });

// 执行
nightmare
    .exDevice('pc')
    .goto('https://www.qq.com')
    .wait('#top-login')
    .wait(1000)
    .exScrollToBottom()
    .wait(1000)
    .exScrollToTop()
    .wait(1000)
    .evaluate(function () {
        return {
            title: document.title,
            pageYOffset: window.pageYOffset,
            pageXOffset: window.pageXOffset,
            scrollHeight: document.body.scrollHeight
        };
    })
    .end()
    .then(function (result) {
        console.log('success: ', result);
    })
    .catch(function (error) {
        console.error('error: ', error);
    });