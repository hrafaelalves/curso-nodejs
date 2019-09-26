module.exports.index = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModal = new application.app.models.NoticiasDAO(connection);

    noticiasModal.get5UltimasNoticias(function(error, result){
        res.render("home/index", {noticias: result});
    });
}