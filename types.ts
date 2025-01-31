import { OptionalId,ObjectId } from "mongodb";

export type ContactModel = {
    _id?: ObjectId;  // _id is optional because MongoDB can auto-generate it
    name: string;
    phone: string;
    country: string;
    timezone: string;
};


export type APIPhone = {
    isValid:boolean,
    country:string,
    timezones:string[],
};

// https://api.api-ninjas.com/v1/worldtime?city=london

export type APITime = {
    dateTime:string,
}