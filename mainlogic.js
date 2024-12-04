let themes=["Default","Dark","Light"];
let currentTheme;
if(page===1)
{
let themeType=document.querySelector("#style-change");
let themeSelector=document.querySelector("#theme-selector");
let pageChanger=document.querySelector("#M-E-btn");
currentTheme=themeSelector.value;
themeSelector.addEventListener("change",()=>
{
if(themeSelector.value=="Default")
{
currentTheme=themes[0];
themeType.href=`Homepagestyle-${themes[0]}.css`;
}
else if(themeSelector.value=="Dark")
{
currentTheme=themes[1];
themeType.href=`Homepagestyle-${themes[1]}.css`;
}
else
{
currentTheme=themes[2];
themeType.href=`Homepagestyle-${themes[2]}.css`;
}
})
pageChanger.addEventListener("click",()=>
{
window.location.href="monthlyexpense.html";
})
}

