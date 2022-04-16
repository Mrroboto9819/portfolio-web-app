import { excuteQuery } from '../../../database/db';

const AllTetch = async (req , res) => {
    var cons = "SELECT * FROM Table";
    var values = "";

    var querys = {
        query: cons,
        value: values,   
    }

    const result = await excuteQuery(querys);

    const length = result.length;
    res.status(200).json({data: result, length: length});
}

export default AllTetch