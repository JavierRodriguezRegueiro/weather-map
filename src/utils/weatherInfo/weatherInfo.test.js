import {weatherInfo} from "./weatherInfo";

describe('weatherInfo function', () => {
    const mockData = {
        lat: 42.81667,
        lng: -1.65
    };
    it('Check weatherInfo result', async () => {
        const {summary, tmp, precProb, hourlyData} = await weatherInfo(mockData.lat, mockData.lng);
        expect(typeof summary).toBe('string');
        expect(typeof tmp).toBe('number');
        expect(typeof precProb).toBe('number');
        expect(typeof  hourlyData).toBe('object')
    });
    it('Check weatherInfo result with bad arguments', async () => {
        const dummyData = {
            lat: 3333333,
            lng: 3333333
        };
        try {
            await weatherInfo(dummyData.lat, dummyData.lng);
        } catch (e) {
            expect(e.message).toEqual('The given location is invalid.');
        }
    });
    it('Check weatherInfo result without arguments', async () => {
        try {
            await weatherInfo();
        } catch (e) {
            expect(e.message).toEqual('You passing arguments.');
        }
    });
});