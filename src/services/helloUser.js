// eslint-disable-next-line import/no-anonymous-default-export
export default (name = null) => {
    return `Hello World, I'm ${name ?? 'Anon'}`;
}