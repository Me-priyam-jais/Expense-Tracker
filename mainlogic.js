let themes=["Default","Dark","Light"];
let mainContainer=document.querySelector("#Main-container");
let currentTheme;
let expenseAdderBtn=document.querySelector("#A-E-btn");
let expenseDesContainer=document.querySelector("#ExpenseDes");
let expentAmountContainer=document.querySelector("#Amount");
let expenseRemoveBtn=document.querySelector("#D-E-btn");
let themeType=document.querySelector("#style-change");
let themeSelector=document.querySelector("#theme-selector");
let pageChanger=document.querySelector("#M-E-btn");
let dltPopup=document.querySelector("#Delete-Pop-Up");
let YesBtn=document.querySelector("#YES");
let NoBtn=document.querySelector("#NO");
const themeChanger=()=>
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
    }
const expenseAdder=()=>
{
    let expenseNumber=document.querySelectorAll(".Description").length;
    let newdDesBtn=document.createElement("input");
    newdDesBtn.setAttribute("class","Description");
    newdDesBtn.setAttribute("type","Text");
    newdDesBtn.value=`${expenseNumber+1}.`
    expenseDesContainer.appendChild(newdDesBtn);
    let newAmountbBtn=document.createElement("input")
    newAmountbBtn.setAttribute("class","Amount");
    newAmountbBtn.setAttribute("type","number");
    expentAmountContainer.appendChild(newAmountbBtn);
}
const transferTheme=()=>
    {
    sessionStorage.setItem("transferedTheme",currentTheme);
    }
const deleteExpense=()=>
    {
    dltPopup.style.display="block";
    NoBtn.addEventListener("click",()=>
    {
        dltPopup.style.display="none";
    })
    YesBtn.addEventListener("click",()=>
    { 
        dltPopup.style.display="none";
    })
    }
currentTheme=themeSelector.value;
themeSelector.addEventListener("change",()=>
{
themeChanger();
})
pageChanger.addEventListener("click",()=>
{
window.location.href="monthlyexpense.html";
transferTheme();
})
expenseAdderBtn.addEventListener("click",()=>
{
expenseAdder();
})
expenseRemoveBtn.addEventListener("click",()=>{
deleteExpense();  
})