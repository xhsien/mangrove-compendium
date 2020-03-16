speciesDict = {
    1: {
        'name': 'Nyireh', 
        'species': 'Xylocarpus sp.', 
        'content': {
            'Where seen?': 'The handsome Mangrove cannon-ball tree (Xylocarpus granatum) is still commonly seen in our mangroves. But other Xylocarpus species are not as frequently encountered.', 
            'Features': 'Generally trees, the different species have tiny flowers that appear rather similar. The species are best distinguished by where they are growing, and structures of the leaves, bark, roots and fruits.'
        },
        'quest': {
            'question': 'Quest: Mangroves are well-known for their exposed root structure. What is the main function of it?',
            'answer': 'true',
            'correct': 'Correct! Mangroves live in a harsh environment. The mud in mangrove areas is poorly oxygenated and structurally unstable. Having roots aboveground increases exposed surface area that help mangroves breathe, and the structural complexity of roots allow mangroves to anchor themselves in the mud.',
            'wrong': 'Oopsee… Don’t forget mangroves live in a harsh environment! The mud in mangrove areas is poorly oxygenated and structurally unstable. Having roots aboveground increases exposed surface area that help mangroves breathe, and the structural complexity of roots allow mangroves to anchor themselves in the mud.'
        }
    },
    2: {
        'name': 'Mudskippers', 
        'species': 'Family Gobiidae', 
        'content': {
            'Where seen?': 'Mudskippers are commonly seen on many of our shores. They are particularly abundant in mangroves and muddy shores, but are also seen on rocky shores and near reefs.', 
            'Features': "Those seen about 6-12cm, some species can be much larger or smaller. Mudskippers are well adapted to the intertidal area. Being able to stay of water for a while gives mudskippers an advantage over 'normal' fishes. During low tide, they are among the few marine creatures that can exploit the dry muddy or sandy flats. More about how to tell apart small mudskippers commonly found on our shores."
        },
        'quest': {
            'question': 'Quest: What is the root type in the image?',
            'image': 'assets/quest2.jpeg',
            'answer': 'false',
            'correct': 'Correct! They are side branches that grow upward from the horizontal roots of mangroves. This root type is commonly seen in Avicennia and Sonneratia species. The former has pencil-like pneumatophores which can grow up to 30 cm, while those of the latter are thicker in diameter and can reach 3 m height in optimal growing condition.',
            'wrong': 'Oopsee… please try again :('
        }
    },
    3: {
        'name': 'Tree climbing crab', 
        'species': 'Episesarma sp.', 
        'content': {
            'Where seen?': 'This crab with a flat, squarish body and flat pointed legs is commonly seen in our mangroves. Our mangrove trees are often full of crabs!', 
            'Features': "Body width 4-5cm. Body flat and squarish, legs flat with pointed tips. Pincers may be colourful. The sides of the body have a structure with a net-like pattern that help recirculate and oxygenate water in the gill chambers. In this way, these crabs can breathe air and stay out of the water for some time."
        },
        'quest': {
            'question': 'Quest: What is the root type in the image?',
            'image': 'assets/quest3.jpeg',
            'answer': 'true',
            'correct': 'Correct! Stilt roots develop from the lower part of the main steam and grow downwards in a sloping manner. An underground root system is developed once they reach the ground. It can be found in Rhizophora species.',
            'wrong': 'Oopsee… please try again :('
        }
    },
    4: {
        'name': 'Bakau', 
        'species': 'Rhizophora sp.', 
        'content': {
            'Where seen?': "These trees with arching stilt roots are commonly seen in many of our mangroves. Burkill describes Rhizophora as making up 70-90% of the mangrove stock in Malaya. He describes them as growing so densely 'as to make almost pure forest' behind a 'protective belt' of Avicennia which faces the open sea.", 
            'Features': "Leaves eye-shaped (8-15cm long), shiny green. Older leaves with tiny evenly distributed black spots on the underside. These are cork warts, openings through which air enters. The air is then stored in specialised air spaces within the leaves called leaf aerenchyma."
        },
        'quest': {
            'question': 'Quest: Mangroves perform better than tropical rainforest in carbon sequestration.',
            'answer': 'true',
            'correct': 'Correct! Under the same unit area, mangroves have been proven to be four times more effective in sequestering atmospheric carbon than rainforest. This implies that losing one hectare of mangrove will release more carbon than losing the same unit area of rainforest.',
            'wrong': 'Oopsee… please try again :('
        }
    },
    5: {
        'name': 'Api-api jambu', 
        'species': 'Avicennia marina', 
        'content': {
            'Where seen?': "This is Singapore's rarest Avicennia. According to Ng, it is known only from St. John's Island, Pulau Tekong and Pulau Unum, where it is found on river banks or in marine lagoons. It has since been found on Pulau Semakau and also at Sungei Pandan. According to Hsuan Keng, it was found at Tuas and Pulau Sudong.", 
            'Features': "In Singapore, the tree may be tall (2-3m) or short (under 2m). Bark mottled greenish yellow, flaky and peeling in patches. Pneumatophores slender with pointed tips (10-15cm). Stems squarish all the way from flower/fruit to leaf-bearing portions."
        },
        'quest': {
            'question': 'Quest: Mangroves can prevent coast-related natural disaster such as storm surge and tsunami.',
            'answer': 'false',
            'correct': 'Correct! A healthy and extensive mangrove can largely reduce the wave energy of storm and tsunami. However, when they are fragmented due to human development, they lose the ability to provide such function, and the snapped branches or tree bodies uprooted by waves could destroy infrastructure and cause economic loss when they are swept inland.',
            'wrong': 'Oopsee… please try again :('
        }
    }
}

// Initialize species containers
function createContainer(i) {
    let containerList = document.querySelector('.row');
    let container = document.createElement('div');
    container.setAttribute('class', 'col');
    container.setAttribute('id', 'container'+i);
    containerList.appendChild(container);

    let image = document.createElement('img');
    image.setAttribute('id', 'image'+i);
    image.setAttribute('src', 'assets/container_background.jpg');
    container.appendChild(image);
}

for (i=1; i<=12; i++) {
    createContainer(i);
}

// Submit image
var input = document.querySelector('#file-upload');
input.addEventListener('change', checkImage);

function checkImage(event) {
    var input = event.srcElement;
    var fileName = input.files[0].name.split('.')[0];
    if (Object.keys(speciesDict).includes(fileName)) {
        solved(fileName);
    } else {
        alert('unrecognised')
    }
}

// Species is solved
function solved(i) {
    let image = document.querySelector('#image'+i);
    image.setAttribute('src', 'assets/'+i+'.jpeg');
    image.setAttribute('class', 'solved');
    image.setAttribute('onclick', 'showInfo(this)');
}

// Show Modal
var modal = document.getElementById("myModal");

function showInfo(image) {
    let i = image.getAttribute('id').replace('image', '');
    modal.style.display = "block";

    let name = document.querySelector('#name');
    name.textContent = speciesDict[i]['name'];
    let species = document.querySelector('#species');
    species.textContent = speciesDict[i]['species'];

    let content = document.querySelector('.modal-body');
    content.innerHTML = "";
    for (let pairs of Object.entries(speciesDict[i]['content'])) {
        let title = document.createElement('h6');
        title.textContent = pairs[0];
        content.appendChild(title);
        let detail = document.createElement('p');
        detail.textContent = pairs[1];
        content.appendChild(detail);
    }

    let question = document.querySelector('#question');
    question.textContent = speciesDict[i]['quest']['question'];

    let trueRadio = document.querySelector('#true');
    trueRadio.checked = false;
    let falseRadio = document.querySelector('#false');
    falseRadio.checked = false;
    let answer = document.querySelector('#answer');
    answer.innerHTML = "";

    var btn = document.querySelector('.submit');
    btn.setAttribute('id', 'button'+i);
    btn.setAttribute('onclick', 'checkAnswer(this)');

}

// Close Modal <x>
var span = document.querySelector('.close');
span.onclick = function() {
  modal.style.display = "none";
}

// Check Answer
function checkAnswer(btn) {
    let i = btn.getAttribute('id').replace('button', '');
    let answer = document.querySelector('#answer');

    let trueRadio = document.querySelector('#true');
    let falseRadio = document.querySelector('#false');
    if ((trueRadio.checked & speciesDict[i]['quest']['answer']=='true') | (falseRadio.checked & speciesDict[i]['quest']['answer']=='false')) {
        answer.innerHTML = speciesDict[i]['quest']['correct'];
        answer.style.color = "green";
    } else {
        answer.innerHTML = speciesDict[i]['quest']['wrong']
        answer.style.color = "red";
    }
}

solved(1);
solved(3);
solved(5);