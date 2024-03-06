
document.addEventListener('DOMContentLoaded', () => {

    const inputBox = document.getElementById("inputbox");
    const crossBtn = document.getElementById("cross-btn");
    const searchBtn = document.getElementById('search-btn');
    crossBtn.addEventListener('click', () => {
        inputBox.value = "";
        crossBtn.style.zIndex=-1;
    });

    inputBox.addEventListener('input', () => {
        if (inputBox.value.length > 0) {
            crossBtn.style.zIndex=5;
        } else {
            crossBtn.style.zIndex=-1;
        }
    });

    searchBtn.addEventListener('click', () => {
        performSearch();
    });

    inputBox.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = inputBox.value;
        if (query !== "") {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }
});