let setStyle=document.querySelector("#Styles");
const themeSetter=()=>
{
    const transferedTheme=sessionStorage.getItem("transferedTheme");
    if(transferedTheme)
    console.log(transferedTheme);
    setStyle.href="monthlyexpense-"+transferedTheme+".css";
}
document.addEventListener("DOMContentLoaded",setTheme=()=>
{
themeSetter();
})
