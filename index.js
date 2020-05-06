const wrapper = document.createElement('div');
wrapper.id = "wrapper";
numBoxes = 9;

for (i = 0; i < numBoxes; i++) {
    var box = document.createElement('div');
    box.className = "box";
    document.getElementById("box").appendChild(box);
    }

wrapper.appendChild(box);


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