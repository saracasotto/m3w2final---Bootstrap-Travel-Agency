
/*The section is collapsed when .btn.collapse is clicked*/

document.querySelectorAll('.btn-collapse').forEach(button => {
    button.addEventListener('click', function () {
        const section = this.closest('section');
        const sectionContent = section.querySelector('.row');
        if (sectionContent.classList.contains('d-none')) {
            sectionContent.classList.remove('d-none');
            sectionContent.classList.add('d-md-flex');
            button.innerHTML = "Collapse Section";
        } else {
            sectionContent.classList.remove('d-md-flex');
            sectionContent.classList.add('d-none');
            button.innerHTML = "Open Section";
        }
    });
});


/*Function to count the cards corresponding to travels*/
function travelCounter() {
    const cardElements = document.querySelectorAll('.card');
    let count = cardElements.length - 1; /*One travel has two cards, deduct one to get the right amount*/
    return count;
}
const travelsNumber = travelCounter()
console.log(travelsNumber) /*Check the number*/


/*Function to remove all cards wen #remove-all-btn is clicked*/
document.getElementById('remove-all-btn').addEventListener('click', function () {
    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach(card => {
        card.remove();
    });
});

/*Modal function and reload page when alert is closed*/
document.getElementById("send-btn").addEventListener("click", function () {
    const email = document.getElementById("user-email").value.trim();
    const message = document.getElementById("message-text").value.trim();

    if (email === "" || message === "") {
        alert("Please fill in both email and message fields.");
        return;
    }

    const modal = document.getElementById("exampleModal");
    modal.style.display = "none";

    alert("Request Sent");

    window.scrollTo(0, 0);
    setTimeout(function () {
        window.location.reload();  /*the page scrolls back to top and reloads in 0.9 second to give time to scroll back*/
    }, 900);
});

/*Function to go back to top when #back-to-top-btn is clicked*/
document.getElementById('back-to-top-btn').addEventListener('click', function () {
    window.scrollTo(0, 0);

})
