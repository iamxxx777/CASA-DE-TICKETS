document.addEventListener("DOMContentLoaded", () => {
    var btn = document.getElementById('toggle');
        var drop = document.getElementById('sidebar');
        var close = document.querySelector('.close-btn');

        btn.addEventListener('click', function() {
            drop.classList.add("side-show");
        });;

        close.addEventListener('click', () => {
            drop.classList.remove("side-show");
        });
});