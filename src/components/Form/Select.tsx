import React from 'react';
import styled from 'styled-components';

interface Props {
	setFeedback: (feedback: Feedback) => void;
	feedback: Feedback;
}

const StyledSelect = styled.select`
	padding: 10px;
	width: 50px;
	cursor: pointer;

	:hover {
		border-color: #1b047c;
	}
`;
const StyledOption = styled.option``;

export const Select = ({ setFeedback, feedback }: Props): JSX.Element => {
	return (
		<StyledSelect
			required
			name="rating"
			value={feedback.rating}
			onChange={(ev) => {
				setFeedback({ ...feedback, rating: ev.target.value });
			}}
		>
			<StyledOption value="0">0</StyledOption>
			<StyledOption value="1">1</StyledOption>
			<StyledOption value="2">2</StyledOption>
			<StyledOption value="3">3</StyledOption>
			<StyledOption value="4">4</StyledOption>
			<StyledOption value="5">5</StyledOption>
		</StyledSelect>
	);
};
