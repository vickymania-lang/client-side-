const form = document.querySelector('form'); //grabing element on the page
const loadingElement = document.querySelector('.loading');

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const mew = {
        name,
        content, 
    };
    console.log(mew);
    form.style.display = 'none';
    loadingElement.style.display ='';

});