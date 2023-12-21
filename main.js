const imageUploadInp = document.querySelector("#imageUpload");
const btnUpload = document.querySelector("#upload");
var image = document.querySelector(".uploaded-image");

btnUpload.addEventListener("click", function(){
    var reader = new FileReader();
    reader.readAsDataURL(imageUploadInp.files[0]);
    reader.onload = function(){
        var link = reader.result;
        console.log(link);
        image.src = link;
    }
})