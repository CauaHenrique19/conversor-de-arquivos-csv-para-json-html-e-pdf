const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const Writer = require('./Writer')
const PDFWriter = require('./PDFWriter')
const Json = require('./Json')

var leitor = new Reader()
var escritor = new Writer()

async function main() {
    var dados = await leitor.Read('./Pasta1.csv')
    var dadosProcessados = Processor.Process(dados)

    var usuarios = new Table(dadosProcessados)

    const usuariosJson = Json.Load(usuarios)
    escritor.writer('usuarios.json', JSON.stringify(usuariosJson))
}
main()

