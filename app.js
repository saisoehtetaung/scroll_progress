var getprogressbar = document.getElementById("progress-bar");

window.onscroll = function () {
    scrollpoint();
};

function scrollpoint() {
    // console.log("i am working");
    var getscrolltop = document.documentElement.scrollTop;
    var getscrollheight = document.documentElement.scrollHeight;
    var getclientheight = document.documentElement.clientHeight;

    var getresult = Math.round(getscrolltop * 100 / (getscrollheight - getclientheight));

    // console.log(getresult);

    getprogressbar.style.width = `${getresult}%`;
}

function printme() {
    window.print();
}