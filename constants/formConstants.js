export const formFields = [
  {
    label: 'Product Name',
    name: 'name',
    register: {
      required: `Name is required`,
      maxLength: {
        value: 30,
        message: 'This input max length is 30 characters.',
      },
    }
  },
  {
    label: 'Product Image URL',
    name: 'imageUrl',
    register: {
      required: `Image URL is required`,
      pattern: {
        value: /((http)?s?:\/\/.*\.(?:png|jpg|jpeg))/i,
        message: 'Image URL should be image URL format (eg: http://www.test.com/test.jpeg)'
      }
    }
  },
  {
    label: 'Product Description',
    name: 'description',
    register: {
      required: `Description is required`,
      maxLength: {
        value: 255,
        message: 'This input max length is 255 characters.',
      },
    }
  },
  {
    label: 'Product Price',
    name: 'price',
    register: {
      required: 'Price is required',
      pattern: {
        value: /^\d+$/,
        message: 'Price value should be a number'
      }
    }
  }
];
