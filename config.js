module.exports = {
    app: {
        px: '!',
        token: 'ODI4MTY2NDE5Njk4ODEwOTAw.YGloFQ.jc6C8KaBiHTe3DsfxmlPXOt6AdI',
        playing: 'suca'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
