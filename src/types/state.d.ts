interface State {
	feedback: Feedback[];
}

interface Feedback {
	name: string;
	email: string;
  comment: string
	rating: string;
  uuid: string;
}

interface Action {
  type: string;
  feedback: Feedback;
}

interface ContextType {
	state: State;
	dispatch: (action: Action) => void;
}
