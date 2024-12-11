const button = document.getElementById('myButton');

    // Toggle the "active" class when the button is clicked
    button.addEventListener('click', () => {
      button.classList.toggle('active');
    });

const billInput = document.querySelector(`#bill`);

billInput.addEventListener(`input`, function(){
    console.log(billInput.value);
});