import { excuteQuery } from '../../../database/db';

const AllWorks = async (req, res)=>{

    var cons = "SELECT * FROM Trable2";
    var values = "";

    var querys = {
        query: cons,
        value: values,   
    }

    const result = await excuteQuery(querys);

            const length = result.length;
            res.status(200).json({data: result, length: length});

    }

export default AllWorks;

