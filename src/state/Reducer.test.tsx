import Reducer from './Reducer';

describe('Reducer', () => {
	const initialState = {
		feedback: [
			{
				name: 'Shannon',
				email: 'shannon@shan.shan',
				comment: 'I am Shannon',
				rating: '1',
			},
		],
	} as State;

	const feedback = {
		name: 'Checkout',
		email: 'checkout@check.out',
		comment: 'I am Checkout',
		rating: '5',
	} as Feedback;

	const newState = { feedback: [...initialState.feedback, feedback] };

	test('returns original state with unknown action type', () => {
		const action = { type: 'UNKNOWN_TYPE', feedback };
		const result = Reducer(initialState, action);
		expect(result).toEqual(initialState);
	});

	test('returns new state with ADD_FEEDBACK action type', () => {
		const action = { type: 'ADD_FEEDBACK', feedback };
		const result = Reducer(initialState, action);
		expect(result).toEqual(newState);
	});
});
