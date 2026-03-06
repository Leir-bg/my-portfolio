export interface ProjectInterface {
    name: string,
    key: string,
    desc: string,
    tools: string[],
    img: string,
    repo: string
}

export interface ProjectTypeInterface {
    major: ProjectInterface[],
    minor: ProjectInterface[]
}