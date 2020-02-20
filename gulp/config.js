'use strict'

module.exports = {
    src: 'src',
    dest: 'public',
    base: '',
    siteConfig: '../config',
    pleeease: {
        "autoprefixer": {
            "browsers": [
                "ie >= 10",
                "ie_mob >= 10",
                "ff >= 30",
                "chrome >= 34",
                "safari >= 9",
                "opera >= 23",
                "ios >= 9",
                "android >= 4.4",
                "bb >= 10"
            ]
        },
        "minifier": false
    }
}
