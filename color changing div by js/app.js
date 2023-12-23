
const body = document.querySelector('body')
const div = document.querySelector('div')
const color = ['red' , 'green' , 'blue' , 'orange' , 'purple' , 'pink' , 'yellow' , 'aqua']

for (let i = 0; i<color.length; i++)
{
    div.innerHTML += `<button style="margin: 10px;"  onclick="change(${i})">${color[i]}</button>`
}

function change(i)
{
    body.style.background = color[i];
}