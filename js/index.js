//Initialisation
const button_addbook=document.getElementById("bt_add");
const button_search=document.getElementById("bt_search");
const button_cancel=document.getElementById("bt_cancel");
const form_search=document.getElementById("divformsearch");
form_search.style.display='none';
BookmarkManager.loadingBooksFromBookmark();

button_addbook.addEventListener('click',function() {
   DomManipulator.showHideSearchForm();
});

button_cancel.addEventListener('click',function() {
   DomManipulator.cancelSearch();
});

button_search.addEventListener('click',function(event) {
   Search.clickForSearch(event);
});