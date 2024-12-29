export default (function utilsUI() {
    function setActiveElement(element) {
        element.classList.add('active');
    }
    function removeActiveElement(element) {
        element.classList.remove('active');
    }
    function toggleActiveElement(oldElement,newElement) {
        removeActiveElement(oldElement);
        setActiveElement(newElement);
    }
    function toggleActiveElement(element) {
        if (element.classList.contains('active')) {
            removeActiveElement(element);
        } else {
            setActiveElement(element);
        }
    }

    return {
        setActiveElement, 
        removeActiveElement, 
        toggleActiveElement 
    }
})();