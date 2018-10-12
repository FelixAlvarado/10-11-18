function isDescendant(parent, child){
    while (child.parentNode) {
      if (child.parentNode == parent)
        return true;
      else
        child = child.parentNode;
    }
  
    return false;
  }