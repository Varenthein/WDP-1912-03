export const getActiveProducts = ({ compare }, { name }) =>
  compare.products.map(({ id }) => id);

const reducerName = 'compare';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');
const REMOVE_FROM_COMPARE = createActionName('REMOVE_FROM_COMPARE');

/* action creators */
export const addToCompare = payload => ({ payload, type: ADD_TO_COMPARE });
export const removeFromCompare = payload => ({ payload, type: REMOVE_FROM_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_COMPARE: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    case REMOVE_FROM_COMPARE: {
      return {
        ...statePart,
        products: [
          ...statePart.products.filter(({ image }) => image != action.payload),
        ],
      };
    }
    default:
      return statePart;
  }
}
