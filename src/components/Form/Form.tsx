import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidGenerator } from 'uuid';
import { Context } from '../../state/StoreProvider';
import { Input } from './Input';
import { Select } from './Select';

const StyledTitle = styled.h1`
	font-size: 20px;
`;
const StyledSubTitle = styled.h2`
	font-size: 12px;
`;
const StyledForm = styled.form`
	font-size: 10px;
	margin: 10px 0;
`;
const StyledInputButton = styled.input`
	margin-top: 20px;
	height: 40px;
	width: 100px;
	background-color: white;
	border-radius: 5px;
	border-width: 1px;
	font-size: 12px;

	:hover {
		cursor: pointer;
	}
`;
const StyledTextArea = styled.textarea`
	padding: 10px 4px;
	max-width: 720px;
`;
const StyledLabel = styled.label`
	padding: 20px 0 10px;
`;
const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 0;
`;

const initialState = {
	name: '',
	email: '',
	rating: '0',
	text: '',
	uuid: '',
} as Comment;

export const Form = (): JSX.Element => {
	const { dispatch } = useContext(Context);
	const [comment, setComment] = useState<Comment>(initialState);

	const onSubmit = (ev: React.FormEvent): void => {
		ev.preventDefault();
		dispatch({ type: 'ADD_COMMENT', comment: { ...comment, uuid: uuidGenerator() } });
		setComment(initialState);
	};

	return (
		<>
			<StyledTitle>Customer Feedback Form</StyledTitle>
			<StyledSubTitle>Please leave a review of our product here!</StyledSubTitle>
			<StyledForm onSubmit={onSubmit}>
				<StyledContainer>
					<StyledLabel>Name *</StyledLabel>
					<Input setComment={setComment} comment={comment} name="name" type="text" />
				</StyledContainer>
				<StyledContainer>
					<StyledLabel>Email *</StyledLabel>
					<Input setComment={setComment} comment={comment} name="email" type="email" />
				</StyledContainer>
				<StyledContainer>
					<StyledLabel>Comment</StyledLabel>
					<StyledTextArea
						value={comment.text}
						onChange={(ev) => {
							setComment({ ...comment, text: ev.target.value });
						}}
					/>
				</StyledContainer>
				<StyledContainer>
					<StyledLabel>Rating *</StyledLabel>
					<Select setComment={setComment} comment={comment} value={comment.rating} />
				</StyledContainer>
				<StyledContainer>
					<StyledInputButton type="submit" value="Submit" />
				</StyledContainer>
			</StyledForm>
		</>
	);
};
