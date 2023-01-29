const bookForm = document.getElementById("add_form");
const bookTitle = document.getElementById("book_title");
const bookLink = document.getElementById("book_link");

const API_ENDPOINT = `http://localhost:5000/`

let bookArr = [];

bookForm.addEventListener('submit', function(e){
    e.preventDefault();
    bookTitle.value && bookLink.value ? addNewEbook(bookTitle.value, bookLink.value) : console.log("Wrong values for book and link");
});


const fetchEbooks = async()=>{
    console.log("Books loaded");
}

window.addEventListener('load', ()=>{
    fetchEbooks();
})


const addNewEbook = async(bkTitle, bkLink)=>{
    console.log(bkTitle, bkLink);
    // handle submission using rest api
}

