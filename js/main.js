var websiteName=document.getElementById("bookmarkName");
var websiteURL=document.getElementById("siteURL");
 
var websitesContainer=[]


if(localStorage.getItem('websites')!= null)
{
    websitesContainer=JSON.parse(localStorage.getItem("websites"));

    displayWebsite(websitesContainer);
}

function addWebsite(){

var website={
    siteName:websiteName.value,
    siteURL:websiteURL.value,
}
websitesContainer.push(website)
localStorage.setItem("websites",JSON.stringify(websitesContainer))
displayWebsite(websitesContainer)
clearForm()
}


function displayWebsite(websitesContainer)
{
    var cartona="";
    for(var i=0; i<websitesContainer.length;i++){

cartona+=`<tr>
<td>${i+1}</td>
<td>${websitesContainer[i].siteName}</td>
<td><a href="${websitesContainer[i].siteURL}" target="_blank" > <button class="btn text-white visitButton "><i class="fa-solid fa-eye pe-2"></i>Visit</button></a> </td>

<td><button onclick="deleteWebsite(${i})" class="btn text-white deleteButton btn-bg-danger"> <i class="fa-regular fa-trash-can pe-2"></i>Delete</button>
</td>
</tr>`

    }
    document.getElementById("tableBody").innerHTML=cartona;
}



function clearForm(){
websiteName.value="",
websiteURL.value=""
}

function deleteWebsite(webSiteIndex){

    websitesContainer.splice(webSiteIndex,1);
    localStorage.setItem("websites",JSON.stringify(websitesContainer));
    displayWebsite(websitesContainer);

}
