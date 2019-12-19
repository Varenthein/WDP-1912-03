export const getProductsToCompare = ({stickyBar}) => stickyBar.products;


const reducerName = 'stickyBar';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TOCOMPARE = createActionName('ADD_TOCOMPARE');

/* action creators */
export const addToCompare = payload => ({ payload, type: ADD_TOCOMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TOCOMPARE: {
      return {
        stickyBar: {...action.payload},
      };
    }
    default:
      return statePart;
  }
}
