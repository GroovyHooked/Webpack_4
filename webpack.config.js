
const path = require('path') // On importe le module de cehmin relatif

module.exports = {
	entry: './src/index.js', // Fichier traité
	output: {					// Génération du fichier de sortie par Webpack
		filename: 'js/site.js',
		path: path.resolve(__dirname, 'dist') // On se sert du module pour le chemin
											// relatif du fichier de sortie
		},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								ident: 'postcss',
								plugins: [
									require('autoprefixer')(),
									]
								}
							}
					},
					"sass-loader",
				]
			},
			{
				test: /\.(png|jpeg|jpg|gif)$/i,
				loader: 'url-loader',
				options: {
					limit: 102400,
					name: '[name].[ext]',
					outputPath: 'images'
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts'
				}
			},
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: [
					{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
						}
					}
				]
			},
		], // end rules array
	}, // end module object
	devtool: 'none',
} // end of module.exports object
// Attention à changer la src du script dans le fichier html src="js/site.js"
