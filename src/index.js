import 'bootstrap'
import './styles/styles.scss'

let titre = document.getElementById('title')
const version = "4";
let maPhrase = `Ceci est une initiation Webpack v${version} !`
titre.append(maPhrase)