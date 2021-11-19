export interface GeneratorType {
  description: string
  prompts: {
    type: string
    name: string
    message: string
  }[]
  actions: {
    type: string
    path: string
    templateFile: string
  }[]
}
