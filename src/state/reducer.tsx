const Reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'ADD_COMMENT':
			return {
				...state,
				comments: [...state.comments, action.comment],
			};
		default:
			return state;
	}
};

export default Reducer;
