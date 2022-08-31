// src/app/Main.ts
import { parse, UrlWithParsedQuery } from "url";

export class Fun{
    public static parseUrl(url : string) : UrlWithParsedQuery {
        return parse(url, true);
    }
    public static toUpperC(arg : string){
        return arg.toUpperCase();
    }
}