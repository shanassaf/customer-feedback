import React from 'react';
import styled from 'styled-components';

interface Props {
	setComment: (comment: Comment) => void;
	comment: Comment;
	name: string;
	pattern?: string;
	type: string;
}

const StyledInput = styled.input`
	padding: 10px 4px;

	:hover {
		cursor: pointer;
	}
`;

export const Input = ({ setComment, comment, name, pattern, type }: Props): JSX.Element => {
	return (
		<StyledInput
			type={type}
			required
			name={name}
			value={comment[name]}
			pattern={pattern}
			onChange={(ev) => {
				setComment({ ...comment, [ev.target.name]: ev.target.value });
			}}
		/>
	);
};
