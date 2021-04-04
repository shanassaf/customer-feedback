const Reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'ADD_FEEDBACK':
			return {
				...state,
				feedback: [...state.feedback, action.feedback],
			};
		default:
			return state;
	}
};

export default Reducer;
