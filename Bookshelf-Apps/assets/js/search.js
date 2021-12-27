function searchBookByTitle() {
    let titleInput = document.getElementById('searchBookTitle');
    let filteredTitleInput = titleInput.value.toLowerCase();
    let containerToSearch = document.getElementsByClassName('book_list');
    let containerTitleElement = containerToSearch.querySelectorAll('.book_item > .inputed-title');

    for (title of containerTitleElement) {
        let aElement = containerTitleElement[title].getElementsByTagName("a")[0];
        let txtValue = aElement.textContent || aElement.innerText;
        if (txtValue.toLowerCase().indexOf(filteredTitleInput) > -1) {
            containerTitleElement[title].style.display = '';
        } else {
            containerTitleElement[title].style.display = 'none';

        }
    }
}