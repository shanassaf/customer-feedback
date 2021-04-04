import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidGenerator } from 'uuid';
import { Context } from '../../state/StoreProvider';
import { Input } from './Input';
import { Select } from './Select';
import { TextArea } from './TextArea';

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
		border-color: #1b047c;
		background: #c5dadd;
	}
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
	comment: '',
	uuid: '',
} as Feedback;

export const Form = (): JSX.Element => {
	const { dispatch } = useContext(Context);
	const [feedback, setFeedback] = useState<Feedback>(initialState);

	const onSubmit = (ev: React.FormEvent): void => {
		ev.preventDefault();
		dispatch({ type: 'ADD_FEEDBACK', feedback: { ...feedback, uuid: uuidGenerator() } });
		setFeedback(initialState);
	};

	return (
		<>
			<StyledTitle>Customer Feedback Form</StyledTitle>
			<StyledSubTitle>Please leave a review of our product here!</StyledSubTitle>
			<StyledForm onSubmit={onSubmit}>
				<StyledContainer>
					<StyledLabel htmlFor="name">Name *</StyledLabel>
					<Input setFeedback={setFeedback} feedback={feedback} name="name" type="text" />
				</StyledContainer>
				<StyledContainer>
					<StyledLabel htmlFor="email">Email *</StyledLabel>
					<Input setFeedback={setFeedback} feedback={feedback} name="email" type="email" />
				</StyledContainer>
				<StyledContainer>
					<StyledLabel htmlFor="comment">Comment *</StyledLabel>
					<TextArea setFeedback={setFeedback} feedback={feedback} />
				</StyledContainer>
				<StyledContainer>
					<StyledLabel htmlFor="rating">Rating *</StyledLabel>
					<Select setFeedback={setFeedback} feedback={feedback} />
				</StyledContainer>
				<StyledContainer>
					<StyledInputButton type="submit" value="Submit" />
				</StyledContainer>
			</StyledForm>
		</>
	);
};
