
const comicsController = {}

comicsController.getComics = (req, res) => {
    res.json({message: 'lista de comics'});
}


module.exports = comicsController;