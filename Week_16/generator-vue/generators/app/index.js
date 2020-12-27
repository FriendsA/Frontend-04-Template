var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

    }
    async initPackage() {
        let answers = await this.prompt([
            {
                type: "input",
                name: "name",
                massage: "Your project name",
                default: this.appname,
            }
        ])


        // this.yarnInstall(["vue"], { "dev": false });
        // this.yarnInstall(["webpack", "vue-loader", "vue-template-compiler", 'vue-style-loader', 'css-loader', 'copy-webpack-plugin'], { "dev": true });

        const pkgJson = {
            "name": answers.name,
            "version": "1.0.0",
            "main": "index.js",
            "license": "MIT",
            "scripts":{
                "test":"mocha --require @babel/register",
                "coverage":"nyc mocha --require @babel/register",
                "build": "webpack"
            },
            "devDependencies": {
                eslint: '^3.15.0'
            },
            "dependencies": {}
        };
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
        this.npmInstall(["vue"], { "save-dev": false });
        this.npmInstall([
            "babel-plugin-istanbul", "mocha", "nyc", "@babel/core", "babel-loader",
            "@babel/preset-env", "@babel/register", "@istanbuljs/nyc-config-babel"], { "save-dev": true });
        this.npmInstall(["webpack","webpack-cli", "vue-loader", "vue-template-compiler", 'vue-style-loader', 'css-loader', 'copy-webpack-plugin'], { "save-dev": true });

        this.fs.copyTpl(
            this.templatePath("HelloWorld.vue"),
            this.destinationPath("src/HelloWorld.vue"),
            {}
        );
        this.fs.copyTpl(
            this.templatePath("webpack.config.js"),
            this.destinationPath("webpack.config.js"),
            {}
        );
        this.fs.copyTpl(
            this.templatePath("main.js"),
            this.destinationPath("src/main.js"),
            {}
        );
        this.fs.copyTpl(
            this.templatePath("index.html"),
            this.destinationPath("src/index.html"),
            { title: answers.name },
        );
        this.fs.copyTpl(
            this.templatePath(".babelrc"),
            this.destinationPath(".babelrc"),
            {}
        );
        this.fs.copyTpl(
            this.templatePath(".nycrc"),
            this.destinationPath(".nycrc"),
            {}
        );
        this.fs.copyTpl(
            this.templatePath("sample-test.js"),
            this.destinationPath("test/sample-test.js"),
            {}
        );
    }

    // async step1() {

    //     this.fs.copyTpl(
    //         this.templatePath('index.html'),
    //         this.destinationPath('public/index.html'),
    //         { title: 'Templating with Yeoman' }
    //     );

    // }
};