import {geolocation} from "../geolocation";

describe('Geolocation function', () => {
    const mockData = {
        address: 'Pamplona',
        lat: 42.81667,
        lng: -1.65
    };
    it('Check geolocation result', async () => {
        expect.assertions(2);
        const {lng, lat} = await geolocation(mockData.address);
        expect(lng).toBe(mockData.lng);
        expect(lat).toBe(mockData.lat);
    });
    it('Check geolocation result with bad address', async () => {
        const dummyAddress = 'shidfiwrbc';
        expect.assertions(2);
        const {lng, lat} = await geolocation(dummyAddress);
        expect(lng).toBeNull();
        expect(lat).toBeNull();
    })
    it('Check geolocation result without address', async () => {
        expect.assertions(1);
        try {
            await geolocation();
        } catch (e) {
            expect(e.message).toEqual('You must pass address argument to make this works');
        }
    })
});