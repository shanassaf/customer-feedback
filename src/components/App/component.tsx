import React from 'react';
import styled from 'styled-components';
import { Form } from './Form';
import { Header } from './Header';
import { Footer } from './Footer';

const StyledLayout = styled.div`
	display: grid;
	grid-template-areas:
		'head'
		'form'
		'graph'
		'comments '
		'foot ';

	@media (min-width: 720px) {
		grid-template-areas:
			'head head'
			'form graph'
			'comments comments'
			'foot foot';
	}
`;
const StyledForm = styled.div`
	grid-area: form;
	width: 100%;
`;
const StyledGraph = styled.div`
	grid-area: graph;
	width: 100%;
	height: 100px;
	background-color: yellow;
`;
const StyledComments = styled.div`
	grid-area: comments;
	width: 100%;
	height: 100px;
	background-color: purple;
`;
const StyledHeader = styled.div`
	grid-area: head;
	width: 100%;
	height: 100px;
	background-color: blue;
`;
const StyledFooter = styled.div`
	grid-area: foot;
	width: 100%;
	height: 100px;
	background-color: green;
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
			<StyledGraph>Graph</StyledGraph>
			<StyledComments>Comments</StyledComments>
			<StyledFooter>
				<Footer />
			</StyledFooter>
		</StyledLayout>
	);
};

export default App;
