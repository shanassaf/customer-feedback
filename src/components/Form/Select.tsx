import React from 'react';
import styled from 'styled-components';

interface Props {
	setComment: (comment: Comment) => void;
	comment: Comment;
	value: string;
}

const StyledSelect = styled.select`
	padding: 10px;
	width: 50px;
`;
const StyledOption = styled.option``;

export const Select = ({ setComment, comment, value }: Props): JSX.Element => {
	return (
		<StyledSelect
			value={value}
			onChange={(ev) => {
				setComment({ ...comment, rating: ev.target.value });
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
