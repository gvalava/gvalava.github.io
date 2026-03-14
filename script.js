navElement = document.createElement('nav');
ulElement = document.createElement('ul');
navElement.appendChild(ulElement);

// inserts the nav element after the header element
headerElement = document.querySelector('header');
headerElement.after(navElement);

// get all headings in main element
h2Elements = document.querySelectorAll('main h2');
for (h2Element of h2Elements) {
    // create and assign id to the heading element using heading text
    h2ElementId = h2Element.textContent.trim().toLowerCase().replace(/\s+/g, '-');
    h2Element.id = h2ElementId;

    // create list item and anchor for each heading
    liElement = document.createElement('li');
    aElement = document.createElement('a');
    aElement.textContent = h2Element.textContent;
    
    // link anchor to actual heading using id
    aElement.href = '#' + h2ElementId;

    // add item to nav list
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
}