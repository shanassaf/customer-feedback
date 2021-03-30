import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form``;
const StyledInput = styled.input``;
const StyledLabel = styled.label``;
const StyledContainer = styled.div``;
const StyledOption = styled.option``;
const StyledSelect = styled.select``;

export const Form = () => {
	return (
		<StyledForm>
			<StyledContainer>
				<StyledLabel>Name</StyledLabel>
				<StyledInput type="text" />
			</StyledContainer>
			<StyledContainer>
				<StyledLabel>Email</StyledLabel>
				<StyledInput type="text" />
			</StyledContainer>
			<StyledContainer>
				<StyledLabel>Rating</StyledLabel>
				<StyledSelect>
					<StyledOption value="1">1</StyledOption>
					<StyledOption value="2">2</StyledOption>
					<StyledOption value="3">3</StyledOption>
					<StyledOption value="4">4</StyledOption>
					<StyledOption value="5">5</StyledOption>
				</StyledSelect>
			</StyledContainer>
			<StyledContainer>
				<StyledInput type="submit" />
			</StyledContainer>
		</StyledForm>
	);
};
