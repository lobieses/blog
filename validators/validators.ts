import {savePostType} from '../types/types';

function objectKeys<Obj extends object>(obj: Obj): (keyof Obj)[] {
    return Object.keys(obj) as (keyof Obj)[];
}

export const savePostValidator = (obj: savePostType): Array<string> => {
    let error: Array<string> = [];

    objectKeys(obj).forEach(key => {
        if(empty(obj[key])) error.push(`${key} must be not empty`);
        if(maxLength(obj[key])) error.push(`${key} must be less than 20 characters`);
    });

    return error;
}

const empty = (string: string): boolean => {
    if(string.length === 0) {
        return true
    } else {
        return false
    }
}

const maxLength = (string: string): boolean => {
    if(string.length > 20) {
        return true
    } else {
        return false
    }
}