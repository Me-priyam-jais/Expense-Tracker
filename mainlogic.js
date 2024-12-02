let themeType=document.querySelector("#style-change");
let themeSelector=document.querySelector("#theme-selector");
let options=document.querySelectorAll(".opts")
themeSelector.addEventListener("change",()=>
{
if(themeSelector.value=="Default")
{
themeType.href="Homepagestyle-Default.css";
}
else if(themeSelector.value=="Dark")
{
themeType.href="Homepagestyle-Dark.css"
}
else
{
themeType.href="Homepagestyle-light.css"
}
})