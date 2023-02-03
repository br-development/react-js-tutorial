import helloUser from "../services/helloUser";

describe('Assert Hello User function', () => {
    it('when name is null, it should print Anon', function () {
        expect(helloUser()).toEqual("Hello World, I'm Anon")
    });

    it('when name is not null, it should print passed name', function () {
        expect(helloUser('User')).toEqual("Hello World, I'm User")
    });
})