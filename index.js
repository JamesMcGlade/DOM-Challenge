let body = document.getElementsByTagName('body')[0];
let wrapper = document.createElement('div');
let form = document.createElement('form');
let input = document.createElement('input');
let submit = document.createElement('input');
let clear = document.createElement('input');
var box = document.createElement('div');
var img = document.createElement('img');
img.src = "https://source.unsplash.com/random/500x500//?bunny"
box.className = "box";
wrapper.id = "wrapper";
form.id = "form";
submit.type = "button";
clear.type = 'button';

body.appendChild(form);
form.appendChild(input);
form.appendChild(submit);
form.appendChild(clear);
body.appendChild(wrapper);

submit.onclick = ()  =>{
    numBoxes = input.value;
    for (i = 0; i < numBoxes; i++) {
        var box = document.createElement('div');
        box.className = "box";
        var img = document.createElement('img');
        img.src = "https://source.unsplash.com/random/500x500//?bunny";
        img.setAttribute ("height", "100vw / 3.5");
        img.setAttribute ("width", "100vw / 3.5");
        box.appendChild(img);
        box.classList.add('box');
        box.appendChild(img);
        wrapper.appendChild(box);
        }
}

clear.onclick = () =>{
    const getwrap = document.getElementById('wrapper');
    while (getwrap.lastElementChild) {
        getwrap.removeChild(wrapper.lastElementChild);
    }

}
//     document.getElementById('box').appendChild(box);
//     myBoxes = [];
//     numBoxes = 9;
    
//         myBoxes.push(boxGenerator());
//         wrapper.appendChild(boxes);
//         boxes.appendChild(myBoxes[i]);
//     }
    
// }

// // let text = document.createTextNode('JS');

// wrapper.appendChild(div);
// div.appendChild(text);

// // div.textContent = 'CSS';


// // myDiv.classList.add('class1', 'class2');
// // myDiv.classList.toggle();
// // myDiv.classList.remove();

// console.log(div);