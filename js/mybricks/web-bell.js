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
                this.audioTag.currentTime = 0;
                this.audioTag.play();
            }
        },
        methods: {
            noteOn: function(frequency) {
                this.audioNode.frequency.value = frequency;
                console.log('note On TODO:', frequency, this.audioNode);
                this.audioNode.start(0);
                //this.audioNode.start(this.audioNode.context.currentTime);
            },
            noteOff: function() {
                var ctx = this.audioNode.context;

                this.audioNode.stop(0);
                this.audioNode.disconnect();

                this.audioNode = ctx.createOscillator();
                
                var parentAudioNode = this.parentNode && this.parentNode.audioNode;
                console.log(parentAudioNode);
                if(parentAudioNode) {
                    this.audioNode.connect(parentAudioNode);
                }
                //this.audioNode.stop(this.audioNode.context.currentTime);
            }
        }
    });
})();

