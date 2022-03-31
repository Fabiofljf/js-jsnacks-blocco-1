const shoppingListElement = document.querySelector('.shopping .list')
const shopping_list = ['pane', 'latte', 'gelato', 'pizza']

let i = 0;

//voglio un contatore che d
while (i < shopping_list.length) {
    const product = shopping_list[i]
    const li = document.createElement('li')
    li.append(product)
    shoppingListElement.append(li)
    i++
}

for (let index = 0; index < shopping_list.length; index++) {
    const product = shopping_list[i]
    const li = document.createElement('li')
    li.append(product)
    shoppingListElement.append(li)
}

document.querySelector('form').addEventListener