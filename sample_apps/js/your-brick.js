(function() {
    xtag.register('your-brick', {
        lifecycle: {
            created: function() {
                this.innerHTML = 'I am a brick';
            }
        },
        events: {
            tap: function(e) {
                this.style.background = '#' + Math.round(0xFFFFFF * Math.random()).toString(16);
            }
        }
    });
})();
