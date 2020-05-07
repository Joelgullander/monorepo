import { IContentLink, ILanguage } from './Episerver';
import { BlockTypes } from './BlockTypes';

export interface IBaseBlock {
    contentLink?: IContentLink,
    name?: string,
    language?: ILanguage,
    existingLanguages?: ILanguage[],
    masterLanguage?: ILanguage,
    contentType?: string[],
    customContentType: BlockTypes,
    parentLink?: IContentLink,
    routeSegment?: string,
    category?: string[],
    changed?: string,
    created?: string,
    saved?: string,
    startPublish?: string,
    status?: string, // TODO union or enum, "Published", etc etc
    stopPublish?: string,
}

export enum IOpacity {
    NONE = '0',
    TEN = '10',
    TWENTY = '20',
    THIRTY = '30',
    FORTY = '40',
}

export enum IAlign {
    LEFT = 'left',
    RIGHT = 'right',
}