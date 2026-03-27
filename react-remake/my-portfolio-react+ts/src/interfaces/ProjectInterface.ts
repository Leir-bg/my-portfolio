export interface ProjectInterface {
    name: string,
    key: string,
    desc: string,
    tools: string[],
    img: string,
    maxwidth: string,
    repo: string,
    link: string
}

export interface ProjectTypeInterface {
    major: ProjectInterface[],
    minor: ProjectInterface[]
}