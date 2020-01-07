/* selectors */
export const getAll = ({ brands }) => brands;
export const getCount = ({ brands }) => brands.length;

// export const getNew = ({ brands }) =>
//   brands.filter(item => item.newFurniture === true);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
