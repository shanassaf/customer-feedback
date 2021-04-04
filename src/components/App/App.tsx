import React from 'react';
import styled from 'styled-components';
import { Form } from '../Form';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Feedback } from '../Feedback';
import { Chart } from '../Chart';

const StyledLayout = styled.div`
	display: grid;
	padding: 10px;
	grid-template-areas:
		'head'
		'form'
		'graph'
		'comments'
		'foot ';

	@media (min-width: 720px) {
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			'head head'
			'form graph'
			'comments comments'
			'foot foot';
	}
`;
const StyledForm = styled.div`
	grid-area: form;
	padding: 10px 20px;
	max-width: 640px;
	border: 1px solid black;
	border-radius: 4px;
`;
const StyledChart = styled.div`
	grid-area: graph;
	margin: auto;
	width: 80%;
	padding: 30px;
`;
const StyledFeedback = styled.div`
	grid-area: comments;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	padding: 10px 20px;
`;
const StyledHeader = styled.div`
	grid-area: head;
	height: 50px;
	margin-bottom: 20px;
`;
const StyledFooter = styled.div`
	grid-area: foot;
	padding: 50px 20px;
`;

export const App = () => {
	return (
		<StyledLayout>
			<StyledHeader>
				<Header />
			</StyledHeader>
			<StyledForm>
				<Form />
			</StyledForm>
			<StyledChart>
				<Chart />
			</StyledChart>
			<StyledFeedback>
				<Feedback />
			</StyledFeedback>
			<StyledFooter>
				<Footer />
			</StyledFooter>
		</StyledLayout>
	);
};
