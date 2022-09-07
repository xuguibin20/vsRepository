//定义转义HTML方法
function htmlEscape(htmlStr) {
    htmlStr.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case '<':
                return '&lt';
            case '>':
                return '&gt';
            case '"':
                return '&quot';
            case '&':
                return '&amp';
        }
    })
}


module.exports = {
    htmlEscape
}
