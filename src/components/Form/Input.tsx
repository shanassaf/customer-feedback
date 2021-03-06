import React from 'react';
import styled from 'styled-components';

interface Props {
	setFeedback: (feedback: Feedback) => void;
	feedback: Feedback;
	name: string;
	type: string;
}

const StyledInput = styled.input`
	padding: 10px 4px;
	cursor: pointer;

	:hover {
		border-color: #1b047c;
	}
`;

export const Input = ({ setFeedback, feedback, name, type }: Props): JSX.Element => {
	return (
		<StyledInput
			type={type}
			required
			name={name}
			value={feedback[name]}
			onChange={(ev) => {
				setFeedback({ ...feedback, [ev.target.name]: ev.target.value });
			}}
		/>
	);
};
