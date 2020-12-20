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

        const pkgJson = {
            "name": answers.name,
            "version": "1.0.0",
            "main": "index.js",
            "license": "MIT",
            "devDependencies": {
                eslint: '^3.15.0'
            },
            "dependencies": {}
        };
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
        
        this.yarnInstall(["vue"], { "dev": false });
        this.yarnInstall(["webpack", "vue-loader", "vue-template-compiler", 'vue-style-loader', 'css-loader', 'copy-webpack-plugin'], { "dev": true });

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
            this.destinationPath("src/main.vue"),
            {}
        );
        this.fs.copyTpl(
            this.templatePath("index.html"),
            this.destinationPath("src/index.html"),
            { title: answers.name },
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