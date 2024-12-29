export default (function utilsUI() {
    function setActiveElement(element) {
        element.classList.add('active');
    }
    function removeActiveElement(element) {
        element.classList.remove('active');
    }
    function toggleActiveElement(element, newElement=null) {
        if (newElement) {
            removeActiveElement(element);
            setActiveElement(newElement);
        }
        else {
            if (element.classList.contains('active')) {
                removeActiveElement(element);
            } else {
                setActiveElement(element);
            }
        }
    }

    return {
        setActiveElement, 
        removeActiveElement, 
        toggleActiveElement 
    }
})();