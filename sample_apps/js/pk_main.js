window.addEventListener('DOMComponentsLoaded', function() {
    
    // install button, install stuff
    var installBtn = document.getElementById('install');
    
    if(navigator.mozApps) {

        var manifestPath = 'http://localhost:8888/manifest.webapp'; // HAAACK
        installBtn.addEventListener('click', function() {
            var installRequest = navigator.mozApps.install(manifestPath);

            installRequest.onsuccess = function() {
                installBtn.style.display = 'none';
            };

        }, false);

        
        var req = navigator.mozApps.checkInstalled(manifestPath);
        req.onsuccess = function() {
            if(!req.result) {
                installBtn.style.display = 'inline';
            } else {
                installBtn.style.display = 'none';
            }
        };

    }

    // load new images on #cute tap
    var cute = document.getElementById('cute');
    cute.addEventListener('click', function() {
        onNextImage();
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
        'catfail.gif',
        'minicat.gif',
        'catstrategy.gif',
        'catwater.gif',
        'catmassage.gif',
        'catdance.gif',
        'catpiano.gif',
        'catfinity.gif',
        'catdry.gif',
        'catlick.gif'
    ];

    function getNextIndex() {
        return Math.round(Math.random() * images.length) % images.length;
    }


    function onNextImage() {
        loadImage();
        
        // Also remove the tooltip once the image has been tapped
        var tooltip = document.querySelector('x-tooltip');
        if(tooltip) {
            tooltip.parentNode.removeChild(tooltip);
        }

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
