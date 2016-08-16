import { Inject, Injectable } from '@angular/core';
import {Jsonp, JSONP_PROVIDERS} from '@angular/http'

@Injectable()
@Inject('Jsonp')
export class FlickrService{
    
    url:string="http://api.flickr.com/services/feeds/photos_public.gne";    
    currentPic:any={};
    photos=[];
    
    constructor(public jsonp: Jsonp){
        
    }
    
    getPics(seacrhTags: string):Promise<any[]>{
        
        return new Promise((resolve, reject) => {
        var jsonpResp:any = this.jsonp.get(this.url+"?tags="+seacrhTags+"&format=json&jsoncallback=JSONP_CALLBACK");          
        jsonpResp.map(res => res.json())      
        .subscribe(
               data =>{data.items.forEach(photo=>{
                   this.photos.push({'src':photo.media.m,
                                      'author':photo.author,
                                    'tags':photo.tags,
                                'desc':photo.description})
               }
               );
            resolve(this.photos);},
               error =>{console.log(error)}
           )
        });       
    }
}