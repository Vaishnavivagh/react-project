

function customRender(reactElement, container) { // renderer function which takes react element and container where we want to render the element
    // const domElement = document.createElement(reactElement.type);

    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // container.appendChild(domElement);
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children  // set the text inside the tag : google page link
    
    for (const prop in reactElement.props) {
        if (prop ==='children') continue 

        domElement.setAttribute(prop, reactElement.props[prop]);
        
    }
    container.appendChild(domElement);
}

const reactElement = {
    type :'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    Children: 'google page link'
}

const mainContainer = document.querySelector('#root'); //This runs the renderer and adds the created anchor (<a>) to our page inside the #root div.

customRender(reactElement, mainContainer);

// React first creates a DOM node for each element, fills in its content and attributes, and then adds it to the document.