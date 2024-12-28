const navUIManager = (() => {
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

    return { toggleActiveElement }
})();