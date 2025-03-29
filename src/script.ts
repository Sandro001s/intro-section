const features = document.getElementById("featuresid") as HTMLLIElement;
const company = document.getElementById("companyID") as HTMLLIElement;
const featuresDiv = document.getElementById("featuresDivID") as HTMLDivElement;
const companyDiv = document.getElementById("companyDivID") as HTMLDivElement;
const menuIcon = document.querySelector(".menuicon") as HTMLImageElement;
const menuDiv = document.querySelector(".menudiv") as HTMLDivElement;
const closeIcon = document.getElementById("menuIcon") as HTMLImageElement;
const menufeatures = document.getElementById("menufeatures") as HTMLLIElement;
const menucompany = document.getElementById("menucompany") as HTMLLIElement;
const menufeaturesUl= document.getElementById("menufeaturesul") as HTMLDivElement;
const menucompanyUl= document.getElementById("menucompanyul") as HTMLDivElement;

function togglefunc(){

    featuresDiv.style.display = "none";
    companyDiv.style.display = "none";
    menufeaturesUl.style.display = "none";
    menucompanyUl.style.display = "none";
    
    features.addEventListener("click", (e) => {
        e.stopPropagation();
        if (featuresDiv.style.display === "flex") {
            featuresDiv.style.display = "none";
        } else {
            featuresDiv.style.display = "flex";
            companyDiv.style.display = "none";
        }
    });
    
    company.addEventListener("click", (e) => {
        e.stopPropagation();
        if (companyDiv.style.display === "flex") {
            companyDiv.style.display = "none";
        } else {
            companyDiv.style.display = "flex";
            featuresDiv.style.display = "none";
        }
    });
    
    document.addEventListener("click", () => {
        featuresDiv.style.display = "none";
        companyDiv.style.display = "none";
    });
    
    menuIcon.addEventListener("click", () => {
        menuDiv.style.display = "block";
    });
    
    closeIcon.addEventListener("click", () => {
        menuDiv.style.display = "none";
    });

    menufeatures.addEventListener("click", (e) => {
        e.stopPropagation();
        if (menufeaturesUl.style.display === "flex") {
            menufeaturesUl.style.display = "none";
        } else {
            menufeaturesUl.style.display = "flex";
        }
    });

    menucompany.addEventListener("click", (e) => {
        e.stopPropagation();
        if(menucompanyUl.style.display === "flex"){
            menucompanyUl.style.display = "none";
        }else{
            menucompanyUl.style.display = "flex";
        }
    })

}
togglefunc();
