import User from "../../models/User";
import data from "../../utils/data";
import db from "../../utils/db";

const hendler = async (req, res)=>{
    await db.connect();
    await User.deleteMany();
    await User.insertMany(data.users);
    await db.disconnect();
    res.send({message: 'seeded sucessfull'});
}
export default hendler;