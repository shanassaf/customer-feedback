import React from 'react';
import styled from 'styled-components';

interface Props {
	setFeedback: (feedback: Feedback) => void;
	feedback: Feedback;
}
const StyledTextArea = styled.textarea`
	padding: 10px 4px;
	cursor: pointer;

	:hover {
		border-color: #1b047c;
	}
`;

export const TextArea = ({ setFeedback, feedback }: Props) => {
	return (
		<StyledTextArea
			required
			name="comment"
			value={feedback.comment}
			onChange={(ev) => {
				setFeedback({ ...feedback, comment: ev.target.value });
			}}
		/>
	);
};
