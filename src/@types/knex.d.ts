// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id: string
      email: string
      password: string
    }
    meals: {
      id: string
      name: string
      description: string
      date: date
      diet: boolean
      userId: string
    }
  }
}
