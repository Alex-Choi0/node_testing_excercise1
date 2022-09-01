// src/app/Main.ts
import { parse, UrlWithParsedQuery } from "url";

export class Fun{
    public static parseUrl(url : string) : UrlWithParsedQuery {
        if(!url || url.length <=0) throw Error('url is empty') // url이 비어있을시 에러발생
        return parse(url, true);
    }
    public static toUpperC(arg : string){
        return arg.toUpperCase();
    }
}