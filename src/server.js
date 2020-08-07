//Dados
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89988899",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        suject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89988899",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        suject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]
const subjects =[
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Fisica",
    "Física",
    "geografia",
    "História",
    "Matemátiva",
    "português",
    "Química"
]
const weekdays=[
    "Segunda-Feira",
    "Terça-feira","Quarta-feira","Quinta-feira", "Sexta-Feira","Sabado", "Domingo"
]
//Funçoes
function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber-1
    return subjects[arrayPosition]
}
function pagelanding(req, res) {

        return res.render(__dirname + "/views/index.html")
}
function pageStudy(req, res) {
    const filters = req.query    
    return res.render("study.html", {proffys ,filters,subjects,weekdays})
}
function pageClasses(req,res){
        const data = req.query
        const isNotEmpty = Object.keys(data).length > 0
        //se tiver dados, adicionar
        //adicionar dados a lista de proffys
        if (isNotEmpty){
        data.subject = getSubject(data.subject)
            proffys.push(data)
        return res.redirect("/study")
}
//se não,mostrar a pagina        
return res.render("give-classes.html",{subjects, weekdays})
}
//Servidor
const express = require('express')
const server = express()

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//inicio e configuração servidor
server
// configurar arquivos estaticos (css,scripts, imagens)
    .use(express.static("public"))
    // rotas da aplicação
    .get("/",pagelanding) 
    .get("/study",pageStudy) 
    .get("/give-classes",pageClasses) 
    //start do servidor
    .listen(5500)
