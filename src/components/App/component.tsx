import React from 'react';
import styled from 'styled-components';
import { Form } from '../Form/Form';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Comments } from '../Comments/Comments';
import Chart from '../Chart/Chart';

const StyledLayout = styled.div`
	display: grid;
	padding: 10px;
	grid-template-areas:
		'head'
		'form'
		'graph'
		'comments '
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
`;
const StyledChart = styled.div`
	grid-area: graph;
`;
const StyledComments = styled.div`
	grid-area: comments;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	padding: 10px 20px;
`;
const StyledHeader = styled.div`
	grid-area: head;
	height: 50px;
`;
const StyledFooter = styled.div`
	grid-area: foot;
	padding: 10px 20px;
	height: 50px;
`;

const App = () => {
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
			<StyledComments>
				<Comments />
			</StyledComments>
			<StyledFooter>
				<Footer />
			</StyledFooter>
		</StyledLayout>
	);
};

export default App;
