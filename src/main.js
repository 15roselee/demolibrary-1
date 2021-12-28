const div = dom.create("<div>newDiv</div>");
console.log(div);
dom.after(test, div)
const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)

const nodes = dom.empty(window.empty)
console.log(nodes);

dom.attr(test, 'title', 'Hi,I am roseLee')
const title = dom.attr(test, 'title')
console.log(`title: ${title}`)

dom.text(test, '你好，我是仙女')
dom.text(test)

dom.style(test, {
   border: '1px solid red',
   color: 'red'
})

console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

dom.class.add(test, 'pink')
dom.class.remove(test, 'pink')
console.log(dom.class.has(test, 'pink'))

const fn = () => {
   console.log('点击了');
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)


const testDiv = dom.find('#test')[0]
console.log(testDiv);
const test2 = dom.find('.pink')[0];
console.log(dom.find('.pink')[0]);

console.log(dom.parent(test));

console.log(dom.siblings(dom.find('#s3')[0]));
console.log(dom.next(dom.find('#s2')[0]));

console.log(dom.previous(dom.find('#s2')[0]));

const t = dom.find('#travel')[0]
console.log(t);
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'pink'))


console.log(dom.index(s2));