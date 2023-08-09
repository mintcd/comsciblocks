declare module 'react-latex'
declare module 'd3'

type statement = {
    id: string,
    type: string,
    name?: string,
    content: string,
    short?: string,
    proof?: string,
    depending?: Array<string>,
}