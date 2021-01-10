import { htmlEndTagByStartTag } from './htmlEndTagByStartTag';

xdescribe(htmlEndTagByStartTag.name, () => {
    it('Test 1', () => {
        // arrange
        const startTag = "<button type='button' disabled>";

        // act
        const response = htmlEndTagByStartTag(startTag);

        // assert 
        expect(response).toBe("</button>");
    });

    it('Test 2', () => {
        // arrange
        const startTag = '<i>';

        // act
        const response = htmlEndTagByStartTag(startTag);

        // assert 
        expect(response).toEqual('</i>');
    });
});
