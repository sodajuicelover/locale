import { parse } from 'https://deno.land/std/flags/mod.ts'

import validate from '../validator/validate.ts'

const { locale } = parse(Deno.args)

const defaultLocalePath = './locales/en.json'
const localesPath = Boolean(locale) ? locale : './locales/'
validate(defaultLocalePath, localesPath)
