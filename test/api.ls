'use strict'

require! {
    path
    'child_process': { spawn }
    'os': { EOL }
}


describe 'LaTeX.js API test', !->

    test 'node API', ->
        const node = spawn 'babel-node', ['test/api/node.js'], { env: { PATH: process.env.PATH } }

        expect new Promise (resolve, reject) ->
            stdout = ""
            stderr = ""

            node.stdout.on 'data', (data) ->
                stdout += data.toString!

            node.stderr.on 'data', (data) ->
                stderr += data.toString!

            node.on 'exit', (code, signal) ->
                if code == 0
                    resolve stdout
                else
                    reject stderr

            node.on 'error', (err) ->
                node.removeAllListeners 'exit'
                reject err

        .to.eventually.equal '<html style="--size:13.284px;--textwidth:56.162%;--marginleftwidth:21.919%;--marginrightwidth:21.919%;--marginparwidth:48.892%;--marginparsep:14.612px;--marginparpush:6.642px"><head><title>untitled</title><meta charset="UTF-8"></meta><link type="text/css" rel="stylesheet" href="css/katex.css"><link type="text/css" rel="stylesheet" href="css/article.css"><script src="js/base.js"></script></head><body><div class="body"><p>Hi, this is a line of text.</p></div></body></html>' + EOL

    test 'browser API', ->

    test 'web component API', !->>
        await page.goto 'http://localhost:3000/test/api/webcomponent.html'
        await takeScreenshot path.join __dirname, 'screenshots/webcomponent'
