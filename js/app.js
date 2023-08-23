var siteName = document.getElementById("bookmarkName");
var siteUrl = document.getElementById("bookmarkURL");
var visit =  document.getElementById("visit-btn");
 var sitesContainer = [];
var nameRegex = /^\w{3,}(\s+\w+)*$/;
var regex = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;
 
if(localStorage.getItem("sites") != null) {
    sitesContainer = JSON.parse( localStorage.getItem("sites"));
    displayData();
}
function addData() {
    var sites = {
        websiteName : siteName.value,
        websiteUrl : siteUrl.value
    }
     sitesContainer.push(sites);
    localStorage.setItem("sites", JSON.stringify(sitesContainer));
    displayData();
    clearDate()
}
function displayData() {
   var container = '';
   for (let i = 0; i < sitesContainer.length; i++) { 
    container+=  `
    <tr>
    <td>${i +1}</td>
    <td>${sitesContainer[i].websiteName}</td>
    <td><button onclick = "visitData(${i})"  class="btn size btn-warning"><i class="fa-solid fa-eye pe-2"></i> Visit</button></td>
    <td><button onclick = "deleteData(${i})"  class="btn size btn-danger pe-2"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>
    `;
    document.getElementById("tableContent").innerHTML = container;
   }
}
function clearDate() {
    siteName.value = "";
    siteUrl.value = "";
}
function deleteData(index){
    sitesContainer.splice(index,1)
    localStorage.setItem("sites", JSON.stringify(sitesContainer))
    displayData();
}
function visitData(url){
    var site = sitesContainer[url].websiteUrl
        window.open(site);
}
function validation() {
    if( nameRegex.test(siteName.value) == true ){
        siteName.classList.add("is-valid")
        siteName.classList.remove("is-invalid")
    }else{
        siteName.classList.remove("is-valid")
        siteName.classList.add("is-invalid")
    }
    if( regex.test(siteUrl.value) == true ){
        siteUrl.classList.add("is-valid")
        siteUrl.classList.remove("is-invalid")
    }else{
        siteUrl.classList.remove("is-valid")
        siteUrl.classList.add("is-invalid")
    }
} 