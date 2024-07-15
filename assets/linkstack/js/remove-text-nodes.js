// Function to remove text nodes from a given element
function removeTextNodes(element) {
    const childNodes = Array.from(element.childNodes);
    
    childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        element.removeChild(node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Recursively remove text nodes from child elements
        removeTextNodes(node);
      }
    });
  }

  function removeTextNodesFromElementsMatchingSelector(selector) {
    // Find all elements with the class 'button-bbrt'
    const elements = document.querySelectorAll(selector);
    
    // Remove text nodes from each of these elements
    elements.forEach(element => {
      removeTextNodes(element);
    });
  }

  export { removeTextNodes, removeTextNodesFromElementsMatchingSelector };

$(document).ready(function() {
    removeTextNodesFromElementsMatchingSelector('.button-bbrt');
});