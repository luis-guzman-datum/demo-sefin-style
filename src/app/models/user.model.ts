export interface UserModel{
    id?:number;
    numeros?:number[];
    textarea?:string;
    name:string;
    select?:number;
    option?:number;
    username:string;
    email:string;
    address:AdrressModel;
    phone:string;
    website:string;
    company:CompanyModel
}

export interface AdrressModel{
    street:string;
    suite:string;
    city:string;
    cityNumberSelect?:number;
    zipcode:string;
    geo:GeoModel
}

export interface GeoModel{
    lat:string;
    lng:string;
}

export interface CompanyModel{
    catchPhrase:string;
    name:string;
    bs:string;
}