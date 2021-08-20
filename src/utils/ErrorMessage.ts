import { Response } from "express";

import fs from 'fs';

export default function ErrorMessage(res: Response, message: string) {
  LogError(res,message,);
  return res.status(400).send({ status: false, error: message });
}

async function LogError(res: Response, text: string) { 

  await fs.readFile(__dirname + '/debug.log', function(err, buf) {

    text = `${text}, ${res.req.originalUrl} , ${new Date()}`

    let data = `${buf.toString()}\n${text}`

    fs.writeFile(__dirname + '/debug.log', data, (err) => { if (err) console.log(err); });

  });
};