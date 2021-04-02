interface State {
	comments: Comment[];
}

interface Comment {
	name: string;
	email: string;
  text: string
	rating: string;
  uuid: string;
}

interface Action {
  type: string;
  comment: Comment;
}

interface ContextType {
	state: State;
	dispatch: (action: Action) => void;
}
