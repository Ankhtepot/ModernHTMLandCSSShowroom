function initMap() {
    const loc = { lat: 29.9791264, lng: 31.1342383 };
    const map = new google.maps.Map(
        document.querySelector('.map'),
        {
            zoom: 16,
            center: loc
        });
    const marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}

// Sticky menu background
window.addEventListener('scroll', function()
{
    if (window.scrollY > 150)
    {
        document.querySelector('#navbar').style.opacity = '0.9';
    }
    else
    {
        document.querySelector('#navbar').style.opacity = '1';
    }
});

// Smooth Scrolling
$('.smoothscroll').on('click', function(event)
{
    if (this.hash !== '')
    {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});