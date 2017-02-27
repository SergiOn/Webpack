# webpack screencast
http://learn.javascript.ru/screencast/webpack <br>
https://github.com/webpack/webpack/tree/master/examples <br>

# 03-multi-4
**build information:** <br>
`webpack --display-modules` <br>
`webpack --display-modules -v` <br>
`webpack --json --profile >stats.json` <br>
http://webpack.github.io/analyse/ <br>

# 03-multi-5
**chunkPlugin information:** <br>
http://webpack.github.io/docs/list-of-plugins.html <br>
http://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin <br>
https://github.com/webpack/webpack/tree/master/examples/multiple-commons-chunks <br>


# 05-library-2
**webpack.ProvidePlugin**
<pre>
plugins: [
    new webpack.ProvidePlugin({
        map: 'lodash/map',
        '_': 'lodash'
    })
]
</pre>

# 05-library-2
**angular with babel** <br>
<pre>
webpack --profile --display-modules --display-reasons
</pre>
**angular with babel. add noParse** <br>
<pre>
noParse: /angular[\\/]angular\.js/
</pre>

# 06-style-assets-2
**add regExp to file-loader** <br>
<pre>
test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
include: /node_modules/,
loader: "file?name=[1].[ext]&regExp=node_modules\\\\(.*)"
or
loader: "file?name=[1].[ext]&regExp=node_modules/(.*)"
</pre>