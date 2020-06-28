//client side
const HOST = 'server.com/';

function showSubmenu(){
    const item = document.getElementsByClassName("menu__sub")[0];
    item.style.display = "block";

}

function hideSubmenu(){
    const item = document.getElementsByClassName("menu__sub")[0];
    item.style.display ="none";
}

let active = null;
function onMenuItemEnter(menuItem){
    if (active){
        active.classList.remove("main__menu__item-active");
    }
    active = menuItem;
    menuItem.classList.add("main__menu__item--active");
    showSubmenu();
}

const menuElement = document.getElementsByClassName("menu__main__item");
for(const menuItem of menuElement){
    menuItem.onmouseenter = () => onMenuItemEnter(menuItem)
}

const menu = document.getElementsByClassName("menu")[0];
menu.onmouseleave = hideSubmenu







//server 
function getCategories(data){
    switch(data.category){
        case "top":
            return [
                "top Apple",
                "top Banana",
                "top Mangoes",
                "top Pears",
            ]
        case "additional":
            return [
                "Add Apple",
                "Add Banana",
                "Add Mangoes",
                "Add Pears",
            ]
        default:
            return []
    }   
}

// API library
const endpoint = {
    "/categories": getCategories
}

function getFunction(url,data,callback){
    const domain = url.substring(0,url.indexof("/"));
    const endpoint = url.substring(url.indexof("/"),url.length);

    callback(endpoints[endpoint]["get"](data));
}