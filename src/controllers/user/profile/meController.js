import { User } from '../../../models/user.js'

class me {

    static async checkMe(req, res) {
        const personal = req.body
        return res.status(200).json(personal)
    }
}
export default me