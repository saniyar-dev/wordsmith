const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';


const inputField = document.getElementById('input');
const submitButton = document.getElementById('submit-btn');
const responseField = document.getElementById('response');


const getSuggestions = (event) => {
    event.preventDefault();
    const wordQuery = inputField.value;
    const endpoint = url + queryParams + wordQuery;
  
    const xhr = new XMLHttpRequest;
  
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        renderResponse(xhr.response);
        console.log(endpoint);
      }
    };
  
    xhr.open('GET', endpoint);
    xhr.send();
};

const displaySuggestions = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
      responseField.removeChild(responseField.firstChild);
    };
    getSuggestions();
  }

submitButton.addEventListener('click', getSuggestions);