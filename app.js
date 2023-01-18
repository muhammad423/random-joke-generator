const inpuEl = document.querySelector('.input');
const btnEl = document.querySelector('.btn');


const apiKey = 'kMmvH3RnmF3q8pIepbykgA==jfJzqaVr1R199Z3G';

const option = {
    method : 'GET',
    headers: { 'X-Api-Key': apiKey}
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';


async function jockApi() {
    try {
    inpuEl.textContent = 'Updating...';
    btnEl.disabled = true;
    btnEl.textContent = 'Loading..'
    const response = await fetch(apiURL, option);
    const data = await response.json();
    inpuEl.textContent = data[0].joke
    btnEl.disabled = false;
    btnEl.textContent = 'Tell me a joke'
    inpuEl.style.color = 'green'
    } catch (error) {
    inpuEl.textContent = 'An error happened try again later'
    inpuEl.style.color = 'red'
    btnEl.disabled = false; 
    btnEl.textContent = 'Tell me a joke'
    }

}

btnEl.addEventListener('click', jockApi)