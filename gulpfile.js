const gulp = require("gulp");
const path = require("path");
const buildDir = path.resolve(__dirname, "./wwwroot");
const appDir = path.resolve(__dirname, "src");
const webpackStream = require("webpack-stream");
const electronInstaller = require('electron-winstaller');
const packageJSON = require('./package.json');
const run = require("gulp-run");

let webpackSettings = {
    mode: "development",
    devtool: "source-map",
    watch: true,
    entry: [
        "@babel/polyfill",
        appDir + "/index.js"
    ],
    output: {
        path: buildDir,
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx" ]
    },
    module: {
        rules: [
            {
                test: /\.[jsx|js]?/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "react",
                                "env"
                            ],
                            "plugins": ["transform-object-rest-spread"]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 2500,
                        name: "./images/[name].[hash].[ext]"
                    }
                }
            }
        ]
    },
    externals: [
        (function () {
          var IGNORES = [
            'electron'
          ];
          return function (context, request, callback) {
            if (IGNORES.indexOf(request) >= 0) {
              return callback(null, "require('" + request + "')");
            }
            return callback();
          };
        })()
  ]
};

gulp.task("package", function() {
     return run('npm run package').exec()
});

gulp.task("installer", ["package"], function() {
    resultPromise = electronInstaller.createWindowsInstaller({
        appDirectory: './Runner-win32-x64/',
        authors: 'TBC',
        exe: 'Runner.exe'
    });

    resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
});

gulp.task("default", function() {
    console.log(__dirname);
    return webpackStream(webpackSettings)
        .pipe(gulp.dest(buildDir));
});
