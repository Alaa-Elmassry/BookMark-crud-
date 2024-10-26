var siteName=document.getElementById('siteName');
var siteURL=document.getElementById('siteURL');


var BookMarks=[];

if(localStorage.getItem("bookmarks") != null){
    BookMarks=JSON.parse(localStorage.getItem("bookmarks"));
    displayBookmark();
}


function addBookmark(){
    var bookmarks={
        name : siteName.value,
        url : siteURL.value,
    }

    BookMarks.push(bookmarks);
    localStorage.setItem("bookmarks",JSON.stringify(BookMarks));
    
    clearbookmarks();
    displayBookmark();
    visitBookmark();
}



function clearbookmarks(){
    siteName.value="";
    siteURL.value="";
}



function displayBookmark(){
    var cartona="";
    for(var i=0; i<BookMarks.length; i++){
        cartona +=`
        <tr>
            <td>${i + 1}</td>
            <td>${BookMarks[i].name}</td>
            <td><button class="btn btn-warning" onclick=" visitBookmark(); "><i class="fa-solid fa-eye text-light"></i><a href="${BookMarks[i].url}"> Visit</a></button></td>
            <td><button class="btn btn-danger" onclick="deleteBookmark(${i});"><i class="fa-solid fa-trash text-light"></i> Delete</button></td>
        </tr>`
    }
    document.getElementById('table-Body').innerHTML=cartona;
}



function deleteBookmark(elementnumber){
    BookMarks.splice(elementnumber,1);
    localStorage.setItem("bookmarks",JSON.stringify(BookMarks));
    displayBookmark();
}



function visitBookmark(e){
    // var websiteIndex = e.target;
    // open(Sitelist[websiteIndex].url);
    window.open('_blank',url);
}





