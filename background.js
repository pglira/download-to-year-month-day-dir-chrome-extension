chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0 based
    var day = date.getDate().toString().padStart(2, '0');
    var newFilename = `${year}-${month}-${day}/${item.filename}`;

    suggest({
        filename: newFilename,
        conflictAction: 'uniquify'
    });
});
