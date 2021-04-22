import {maxBy} from './maxBy';

describe('maxBy', () => {
    it('Should work', () => {
        const arr = [{key: 0}, {key: 1}];
        expect(maxBy(arr, i => i.key)).toEqual(arr[0]);
    });
    
    it('Should work 2', () => {
        const arr = [{key2: 0}, {key2: 1}];
        expect(maxBy(arr, i => i.key2)).toEqual(arr[0]);
    });
})