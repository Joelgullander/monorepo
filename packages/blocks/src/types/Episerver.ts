// TODO, restructure this into own files.

export interface IContentLink {
    id: number;
    workId: number;
    guidValue: string;
    providerName: string | null;
    url: string;
    expanded: any; // TODO What is this
}

export interface ILanguage {
    displayName: string;
    link: string;
    name: string;
}

export enum EpiserverPropertyReferences {
    PropertyContentReference = 'PropertyContentReference'
}

export interface IEpiserverProperty<T extends EpiserverPropertyReferences> {
    value: string | null, // If value differs when different propertyDataType we need to rethink this
    propertyDataType: T
} 