// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var moviesEntries = documents.GetElementsByClassName("movie-entry");

var form = document.GetElementByID("search-and-filter-form");

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var i, entry;

    var term = document.getElementById("search").value;

    var mpaa = [];
    var mpaaCheckBoxes = document.getElementsByClassName("mpaa");

    for (i = 0; i < moviesEntries.length; i++) {
        entry = moviesEntries[i];
        entry.style.display = "block";

        if (term) {
                if (!entry.dataset.title.toLowerCase().includes(term.toLowerCase())) {
                    entry.style.display = "none";
                }
        }
    }

    if (mpaa.length > 0) {
        if (!mpaa.includes(entry.dataset.mpaa)) {
            entry.style.display = "none";
        }
    }

});