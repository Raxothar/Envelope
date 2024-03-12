const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production', // Режим production автоматически включает оптимизацию
    entry: {
        'envelope': './envelope/js/index.js', // Базовый JS файл
        // Добавьте дополнительные точки входа для CSS, если они не импортируются в JavaScript
    },
    output: {
        filename: '[name].min.js', // Генерирует минифицированный .js файл
        path: path.resolve(__dirname, 'envelope/dist/js'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js'], // Добавляет расширения файлов, которые Webpack будет обрабатывать
    },
    optimization: {
        minimize: true, // Включает минификацию
        minimizer: [
            new TerserPlugin(), // Для JS
        ],
    },
};