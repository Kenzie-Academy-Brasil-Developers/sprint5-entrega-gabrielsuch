export interface ICreateUser {
    name: string
    email: string
    password: string
    age: number
}

export interface IUpdateUser {
    email?: string
    name?: string
    password?: string
    age?: number
    updated_at: Date
}