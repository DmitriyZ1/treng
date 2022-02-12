const arr = [
    {id:1, value: 'hello1'},
    {id:2, value: 'hello2'},
    {id:3, value: 'hello3'},
    {id:4, value: 'hello4'},
    {id:5, value: 'hello5'},
    {id:6, value: 'hello6'},
    {id:7, value: 'hello7'},
];


const bl = document.querySelector('.blocks');
const hopa = document.querySelector('.hopa');

bl.addEventListener('click', (e) => {
    if(e.target.classList.contains('blocks__item')){
        let txt = e.target.dataset.val;
        hopa.innerHTML += `${txt} </br>`
    }
})

function createel(a, ou) {

    a.forEach(element => {
        let o = document.createElement('div');
        o.classList.add('blocks__item');
        o.id = `bl${element.id}`;
        o.dataset.val = element.value; 
        o.textContent = element.value;
        ou.append(o)
    });
}

createel(arr, bl)

