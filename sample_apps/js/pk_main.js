window.addEventListener('DOMComponentsLoaded', function() {
    
    // install button, install stuff
    var installBtn = document.getElementById('install');
    
    if(navigator.mozApps) {

        installBtn.addEventListener('click', function() {
            navigator.mozApps.install(location.href + 'manifest.webapp');
        }, false);

        var req = navigator.mozApps.getSelf();
        req.onsuccess = function() {
            if(!req.result) {
                installBtn.style.display = 'inline';
            }
        };

    }

    // load new images on #cute tap
    var cute = document.getElementById('cute');
    cute.addEventListener('click', function() {
        loadImage();

        // Also remove the tooltip once the image has been tapped
        var tooltip = document.querySelector('x-tooltip');
        if(tooltip) {
            tooltip.parentNode.removeChild(tooltip);
        }

    }, false);

    var lastIndex = 0;

    var images = [
        'pandas.gif',
        'meow.gif',
        'meow2.gif',
        'catball.gif',
        'vacuuming.gif',
        'catbrace.gif',
        'catno.gif',
        'catwtf.gif',
        'catdangerous.gif',
        'catglasses.gif',
        'catcham.gif',
        'cattired.gif',
        'catfail.gif'
    ];

    function getNextIndex() {
        return Math.round(Math.random() * images.length) % images.length;
    }

    function loadImage() {
        var index;
        
        index = getNextIndex();
        if(index === lastIndex) {
            index = ++index % images.length;
        }

        lastIndex = index;

        cute.style.backgroundImage = 'url(cute_images/' + images[index] + ')';
    }


}, false);
