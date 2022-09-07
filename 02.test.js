const itheima = require('./itheima-tools-erzimen');

const dt = itheima.dateFormat(new Date());

console.log(dt);

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';

const str = itheima.htmlEscape(htmlStr);

console.log(str);
