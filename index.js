const testomonals=[
    {photo:'images/1 (1).jpg',    
    text:'Adipisicing elit. Voluptate hic  error natus sed, dolores explicabo repellat eveniet nihil quo beatae autem repellendus culpa sunt iure? Enim, magnam?',
    name:'Kila'
    }, 
    {photo:'images/1 (2).jpg',    
    text:'Dolor sit amet consectetur, adipisicing elit. Voluptate hic vel similique laudantium error natus sed, dolores explicabo repellat eveniet nihil quo beatae autem repellendus culpa sunt iure? Enim, magnam?',
    name:'Lila'
    }, 
    {photo:'images/1 (3).jpg',    
    text:'Adipisicing elit. Voluptate hic vel similique laudantium error natus sed, dolores explicabo repellat eveniet nihil quo beatae autem repellendus culpa sunt iure? Enim, magnam?',
    name:'jan'
    }, 
    {photo:'images/1 (4).jpg',    
    text:'Sit amet consectetur, adipisicing elit. Voluptate hic vel similique laudantium error natus sed, dolores explicabo repellat eveniet nihil quo beatae autem repellendus culpa sunt iure? Enim, magnam?',
    name:'Devad'
    }, 
];

const textEl =document.querySelector('.text');
const photoEl =document.querySelector('img');
const userEl =document.querySelector('.user-name');
let index =0;
testo_update()
function testo_update(){
    const {
        photo,text,name
    }=testomonals[index];
    textEl.innerText = text;
    photoEl.src = photo;
    userEl.innerText = name;
    index++;
    if(index == testomonals.length){
        index =0;
    }
    setTimeout(() => {
        testo_update();
    }, 4000);
}