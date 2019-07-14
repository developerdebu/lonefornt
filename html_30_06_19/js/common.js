//Parallax Animation Start
window.addEventListener('scroll', function(event) {
    let parent = document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    for (let i = 0; i < children.length; i++) {
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
}, false);

//Navigation Start
jQuery(document).ready(function () {
    jQuery(".navBtn").click(function () {
        jQuery(".navWrapper").hide();
    });
    jQuery(".nav-icon").click(function () {
        jQuery(".navWrapper").show();
    });
    
    jQuery("#city").change(function () {
        var choosen_city = jQuery(this).val();
        if(choosen_city !== ''){
            window.location.href = choosen_city + '.html';
        }
    });
});
//Video Slider Start
$('.video-slider').owlCarousel({
    loop: false,
    items: 1,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
})
// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
//Video Code Start
var myVideo = document.getElementById("video1");
function playPause() {
    if (myVideo.paused)
        myVideo.play(document.getElementById("button").style.opacity = "0");
    else
        myVideo.pause(document.getElementById("button").style.opacity = "1");
}
