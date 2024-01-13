import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, ' Quantas linhas tem no logo do serviço de streaming de música Spotify?', [
        RespostaModel.errada(' 2 linhas'),
        RespostaModel.errada('5 linhas'),
        RespostaModel.errada('4 linhas'),
        RespostaModel.certa('3 linhas.'),
    ]),
    new QuestaoModel(202, 'Qual é o formato do salgadinho Doritos?', [
        RespostaModel.errada('Redondo'),
        RespostaModel.errada('Oval'),
        RespostaModel.errada('Quadrado'),
        RespostaModel.certa('Triangular'),
    ]),
    new QuestaoModel(203, ' Qual animal representa o símbolo da paz?', [
        RespostaModel.errada('Elefante'),
        RespostaModel.errada('Cobra'),
        RespostaModel.errada('Gato'),
        RespostaModel.certa('Pomba'),
    ]),
    new QuestaoModel(204, 'O sushi é um prato original de qual país?', [
        RespostaModel.errada('Tailândia'),
        RespostaModel.errada('China'),
        RespostaModel.errada('Coreia '),
        RespostaModel.certa('Japão'),
    ]),
    new QuestaoModel(205, 'Qual é o animal que aparece no logotipo da Ferrari?', [
        RespostaModel.errada('Leão'),
        RespostaModel.errada('Leopardo'),
        RespostaModel.errada('Tigre'),
        RespostaModel.certa('Cavalo'),
    ]),
    new QuestaoModel(206, 'Qual é o nome da empresa de tecnologia que criou o iPhone?', [
        RespostaModel.errada(' Google  '),
        RespostaModel.errada('Amazon'),
        RespostaModel.errada('Microsoft'),
        RespostaModel.certa('Apple'),
    ]),
    new QuestaoModel(207, 'Qual é o sobrenome mais comum no Brasil?', [
        RespostaModel.errada('Souza'),
        RespostaModel.errada('Santos'),
        RespostaModel.errada('Oliveira'),
        RespostaModel.certa('Silva'),
    ]),
    new QuestaoModel(208, 'Qual é o nome do inventor do telefone?', [
        RespostaModel.errada('Thomas Edison'),
        RespostaModel.errada(' Nikola Tesla'),
        RespostaModel.errada('Guglielmo Marconi'),
        RespostaModel.certa('Alexander Graham Bell'),
    ]),
    new QuestaoModel(209, 'Quantos lados tem um dado?', [
        RespostaModel.errada('Cinco lados'),
        RespostaModel.errada('Quatro lados'),
        RespostaModel.errada('Sete lados'),
        RespostaModel.certa('Seis lados'),
    ]),
]

export default questoes