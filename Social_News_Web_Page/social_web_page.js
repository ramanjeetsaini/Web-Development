


// Write - Your - Code
class Link {
    constructor(title,url,author){
        let absoluteUrl = url;
        if( !absoluteUrl.startsWith('http://') && !absoluteUrl.startsWith('https://')){
            absoluteUrl = `http://${absoluteUrl}`;
        }
        this.title = title;
        this.author = author;
        this.url = absoluteUrl;
    }
    toString(){
        return `${this.title} (${this.url}).Author: ${this.author}`;
    }
}

const contentElement = document.getElementById("content");

//create and return a DOM element showing a link
const createLinkElement = link => {
    const titleElement = document.createElement('a');
    titleElement.href = link.url;
    titleElement.classList.add('linkTitle');
    titleElement.appendChild(document.createTextNode(link.title));

    const urlElement = document.createElement('span');
    urlElement.classList.add("linkUrl")
    urlElement.appendChild(document.createTextNode(link.url))

    const headlineElement = document.createElement('h4');
    headlineElement.classList.add("linkHeadline");
    headlineElement.appendChild(titleElement);
    headlineElement.appendChild(urlElement);

    const authorElement = document.createElement('span');
    authorElement.classList.add("linkAuthor");
    authorElement.appendChild(document.createTextNode(`Submitted by ${link.author}`));

    //create DOM element for link - headline + author elements 
    const linkElement = document.createElement('div');
    linkElement.classList.add("link");
    linkElement.appendChild(headlineElement);
    linkElement.appendChild(authorElement);

    return linkElement;
};

createInputElement = (name,placeholder,size)=>{
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.setAttribute("name",name);
    inputElement.setAttribute("placeholder",placeholder);
    inputElement.setAttribute("size",size);
    inputElement.classList.add("form-control");

    return inputElement;
};

//const createLinkForm = () = {
    // creating input fields for link properties
    const authorElement = createInputElement("author","enter author",20);
    const titleElement = createInputElement("title","enter title",20);
    const urlElement = createInputElement("url","enter url",20);
//};

document.getElementById("submitButton").addEventListener("click",e=>{
    e.preventDefault();
    const formElement = createLinkForm();
});

// Initial links array
const links = [];
links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));
links.push(new Link("Reddit", "https://reddit.com", "Thomas"));
links.push(new Link("Boing Boing", "boingboing.net", "Daniel"));

links.forEach(link =>{
    contentElement.appendChild(createLinkElement(link));
});


