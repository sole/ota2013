(function() {
    xtag.register('web-bell', {
        lifecycle: {
            created: function() {
                this.innerHTML = '&#x1f514;';
                this.audioTag = document.createElement('audio');
                this.audioTag.src = 'audio/doorbell.wav';
            }
        },
        events: {
            'tap': function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.dingDong();
            }
        },
        methods: {
            dingDong: function() {
                this.audioTag.currentTime = 0;
                this.audioTag.play();
            }
        }
    });
})();

