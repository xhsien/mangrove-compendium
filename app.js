const modal = document.getElementById("myModal");

speciesDict = {
    1: {
        'name': 'Nyireh', 
        'species': 'Xylocarpus sp.', 
        'content': {
            'Where seen?': 'The handsome Mangrove cannon-ball tree (Xylocarpus granatum) is still commonly seen in our mangroves. But other Xylocarpus species are not as frequently encountered.', 
            'Features': 'Generally trees, the different species have tiny flowers that appear rather similar. The species are best distinguished by where they are growing, and structures of the leaves, bark, roots and fruits.'
        }
    },
    2: {
        'name': 'Mudskippers', 
        'species': 'Family Gobiidae', 
        'content': {
            'Where seen?': 'Mudskippers are commonly seen on many of our shores. They are particularly abundant in mangroves and muddy shores, but are also seen on rocky shores and near reefs.', 
            'Features': "Those seen about 6-12cm, some species can be much larger or smaller. Mudskippers are well adapted to the intertidal area. Being able to stay of water for a while gives mudskippers an advantage over 'normal' fishes. During low tide, they are among the few marine creatures that can exploit the dry muddy or sandy flats. More about how to tell apart small mudskippers commonly found on our shores."
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
    
    let buttonList = document.querySelector('.btn-group');
    let button = document.createElement('button')
    button.setAttribute('class', 'btn btn-secondary');
    button.setAttribute('id', 'button'+i)
    button.setAttribute('onclick', 'solved(this)');
    button.textContent = i;
    buttonList.appendChild(button);

}

// Species is solved
function solved(button) {
    let i = button.getAttribute('id').replace('button', '');

    let image = document.querySelector('#image'+i);
    image.setAttribute('src', 'assets/'+i+'.jpeg');
    image.setAttribute('onclick', 'showInfo(this)');

}

// Show Modal
function showInfo(image) {
    let i = image.getAttribute('id').replace('image', '');
    console.log(i);
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
}

// Close Modal <x>
var span = document.querySelector('.close');
span.onclick = function() {
  modal.style.display = "none";
}


for (i=1; i<=12; i++) {
    createContainer(i);
}