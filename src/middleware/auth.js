import jwt from 'jsonwebtoken';
export default function auth(req,res,next){
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if(!token) return res.status(401).json({message:'No token'});
  try{
    const data = jwt.verify(token, process.env.JWT_SECRET || 'devsecret');
    req.user = data;
    next();
  }catch(e){
    res.status(401).json({message:'Invalid token'});
  }
}
