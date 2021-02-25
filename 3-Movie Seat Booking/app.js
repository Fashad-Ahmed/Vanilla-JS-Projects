const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();
let ticketPrice = +movieSelect.nodeValue;

setData = (index, price) => {
    localStorage.setItem('selectedMovieIndex', index);
    localStorage.setItem('selectedMoviePrice', price);
}

updateCount = () => {
    const selectedSeat = document.querySelectorAll('.row .seat.selected');
    const seatIndex = [...selectedSeat].map(seat = () => {[...seats].indexOf(seat)});

    localStorage.setItem('selectedSeat', JSON.stringify(seatIndex));

    const selectedSeatsCount = selectedSeat.length;
    total.innerText = selectedSeatsCount * ticketPrice;

    setData(movieSelect.seatIndex, movieSelect.value);
}

populateUI = () => {
    const selectedSeat = JSON.parse(localStorage.getItem('selectedSeat'));

    if(selectedSeat !== null && selectedSeat.length > 0){
        seats.forEach((seat, index) => {
            if(selectedSeat.indexOf(index) >= 0){
                seat.classList.add('selected');
            }
        });
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex !== null){
        movieSelect.seatIndex = selectedMovieIndex;
    }
}

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setData(e.target.selectedSeat, e.target.value);
    updateCount();
});

container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateCount();
    }
});

updateCount();