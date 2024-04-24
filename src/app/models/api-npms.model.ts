export interface ApiNpms {
    total: number;
    results?: (ResultsEntity)[] | null;
}
export interface ResultsEntity {
    package: Package;
    score: Score;
    searchScore: number;
    flags?: Flags | null;
}
export interface Package {
    name: string;
    scope: string;
    version: string;
    description: string;
    keywords?: (string)[] | null;
    date: string;
    links: Links;
    author?: Author | null;
    publisher: MaintainersEntityOrPublisher;
    maintainers?: (MaintainersEntityOrPublisher)[] | null;
}
export interface Links {
    npm: string;
    homepage?: string | null;
    repository?: string | null;
    bugs?: string | null;
}
export interface Author {
    name: string;
}
export interface MaintainersEntityOrPublisher {
    username: string;
    email: string;
}
export interface Score {
    final: number;
    detail: Detail;
}
export interface Detail {
    quality: number;
    popularity: number;
    maintenance: number;
}
export interface Flags {
    unstable: boolean;
}
