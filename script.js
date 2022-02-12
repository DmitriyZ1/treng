const arr =[
    {id: 1, value: 'hello1'},
    {id: 2, value: 'hello2'},
    {id: 3, value: 'hello3'},
    {id: 4, value: 'hello4'},
    {id: 5, value: 'hello5'},
    {id: 6, value: 'hello6'},
    {id: 7, value: 'hello7'},
    {id: 8, value: 'hello8'},
    {id: 9, value: 'hello9'},
    {id: 10, value: 'hello10'},
    {id: 11, value: 'hello11'},
    {id: 12, value: 'hello12'}
]; 

const bl = document.querySelector('.blocks');
const out = document.querySelector('.out');

function gg(a, parent){
    a.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('blocks__item');
        div.id = `b${element.id}`;
        div.addEventListener('click', (e) => {outtext(e, element.value, out)} )
        parent.append(div);
    });
}



function outtext(e, value, outp){
   outp.innerHTML += `${value} </br>`;
}

gg(arr, bl);