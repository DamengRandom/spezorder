import productFetcher from '../utils/productFetcher';

describe("get products data", () => {
  const mockedResult = [{
    createdAt: "2020-08-18T01:11:59.252Z",
    description: "Take care client kid for one day in case client is very busy and kid needs to go somewhere and play",
    id: "98e6fd40-6cfe-486e-a310-9152f738b3fa",
    imageUrl: "https://res.cloudinary.com/dameng/image/upload/v1530543589/sky-bg_iqkips.jpg",
    name: "daycare service",
    price: "160",
    userId: "114440364100592721568"
  }];

  it("get products when API returns 200", async () => {
    global.fetch = jest.fn(() => Promise.resolve({json: () => Promise.resolve(mockedResult)}));
    const fetched = await productFetcher(123);

    expect(fetched[0].name).toBe('daycare service');
    expect(fetched[0].price).toBe('160');
  });

  it("get failed response", async () => {
    global.fetch = jest.fn(() => Promise.reject('failed'));
    const fetched = await productFetcher(123);

    expect(fetched).toEqual('failed');
  });
  // reference: https://www.leighhalliday.com/mock-fetch-jest
});
