//is descendent 

function isDescendant(parent, child){
    while (child.parentNode) {
      if (child.parentNode == parent)
        return true;
      else
        child = child.parentNode;
    }
  
    return false;
  }

  // make tree node 

  function makeNodeTree(root, elements) {
    let currentElement = document.createElement(elements[0]);
    root.appendChild(currentElement);
  
    for (let i = 1; i < elements.length; i++) {
      const newElement = document.createElement(elements[i]);
      currentElement.appendChild(newElement);
  
      currentElement = newElement;
    }
  
    currentElement.innerHTML = 'Done!';
  }