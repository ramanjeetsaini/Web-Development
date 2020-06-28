const HOST = 'server.com/';

const goElement = document.getElementsByClassName("go")[0];
goElement.onclick = function(){
    const inputElement = document.getElementsByClassName("test")[0];
    api.get(HOST+"menus",{menu:inputElement.value},displayText);
}

function displayText(response){
    const outputElement = document.getElementsByClassName("output")[0];
    outputElement.innerHTML += (response+"<br>");
}

// Server
function getMenus(data) {
    switch(data.menu) {
        case "a":
            return "i got an A";
        case "b":
            return "i got a b";
        default:
            return "i do not know what you wrote"
    }
}

const endpoints = {
  "/": {
    "get": () => "hello world"
  },
  "/menus": {
      "get": getMenus
  }
}


//api library
function getFunction(url, data, callback) {
  const domain = url.substring(0, url.indexOf("/"));
  const endpoint = url.substring(url.indexOf("/"), url.length);

  callback(endpoints[endpoint]["get"](data));
}

const api = {
  get: getFunction
};