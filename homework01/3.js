/*
    3) Напишите рекурсивную функцию findElementByClass, 
    которая принимает корневой элемент дерева DOM и название класса в качестве аргументов 
    и возвращает первый найденный элемент с указанным классом в этом дереве.
*/

const findElementByClass = (root, targetClassName) => {
    const { children: rootChildren } = root;

    if (rootChildren.length === 0) {
        return -1;
    }

    const [_, ...rest] = rootChildren;

    for (let i = 0; i < rootChildren[0].children.length; i++) {
        const element = rootChildren[0].children[i]
        if (element.className === targetClassName) {
            return element.localName;
        }
    }

    return findElementByClass({ children: rest }, targetClassName);
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);