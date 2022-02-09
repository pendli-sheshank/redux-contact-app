const initialState = [
  {
    id: 0,
    name: "sheshank",
    number: 9963246005,
    email: "sheshank@gmail.com",
  },
  {
    id: 1,
    name: "Ramu",
    number: 9876543211,
    email: "ramu@gmail.com",
  },
];

const contactRerducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id == action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContact = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContact;
      return state;
    default:
      return state;
  }
};
export default contactRerducer;
