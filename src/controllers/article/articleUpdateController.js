import { Article } from '../../models/article.js'

class update {

    static async edit(req, res) {

        try {

            const article =  await Article.findByIdAndUpdate( req.params.id,req.body,{new:true})
           
            if (!article)
                return res.status(404).json({ message: "no article with that id" })

            await article.save()
            return res.status(200).json(article)

        }
        catch (err) {
            return res.status(400).send(err.message)
        }

    }

}

export default update

