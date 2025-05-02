
const dressOptions = document.querySelectorAll('.dresses img');
const doll = document.getElementById('first'); 


dressOptions.forEach(option => {
    option.addEventListener('click', function() {
        const dressSrc = this.src;


        const dressOnDoll = document.createElement('div');
        dressOnDoll.style.position = 'absolute'; 
        dressOnDoll.style.top = '0';
        dressOnDoll.style.left = '0';
        dressOnDoll.style.width = '100%'; 
        dressOnDoll.style.height = '100%';
        dressOnDoll.style.backgroundImage = `url(${dressSrc})`; 
        dressOnDoll.style.backgroundSize = 'cover'; 

        
        const existingDress = document.getElementById('dress-on-doll');
        if (existingDress) {
            existingDress.remove();
        }

    
        dressOnDoll.id = 'dress-on-doll';

        doll.parentElement.appendChild(dressOnDoll);
    });
});
alert('hello');
