const path = require('path');

module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap((options) => {
                const loader = {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: path.resolve(__dirname, 'styles/variables.scss')
                    }
                };
                options.loaders['scss'].push(loader);
                options.loaders['sass'].push(loader);

                return options;
            });

        config.resolve
            .alias
            .set('styles', path.resolve(__dirname, 'styles'));
    }
};
