import { GetTitleBlock } from '@/helper/propshelper';
import { MongoClient, ObjectId } from 'mongodb';


async function handler(req:any,res:any){
  if(req.method==='GET'){
    const {id} = req.query;
    const data = await GetTitleBlock(id);
    res.status('200').json({data:data.result})
  }
}

export default handler;