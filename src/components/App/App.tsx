import React from 'react';
import styled from 'styled-components';
import { Form } from '../Form';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Feedback } from '../Feedback';
import { Chart } from '../Chart';

const StyledLayout = styled.div`
	padding: 20px;
`;
const StyledContent = styled.div`
	display: grid;
	max-width: 1024px;
	margin: auto;
	grid-template-areas:
		'feedback'
		'chart';

	@media (min-width: 1024px) {
		grid-template-areas: 'feedback chart';
		grid-template-columns: 1fr auto;
	}
`;
const StyledForm = styled.div`
	grid-area: feedback;
	padding: 10px 20px;
	border: 1px solid black;
	border-radius: 4px;
`;
const StyledFeedback = styled.div`
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	padding: 10px 20px;
	max-width: 1024px;
	margin: 0 auto;
	margin-top: 50px;
`;
const StyledHeader = styled.div`
	margin-bottom: 20px;
	text-align: center;
`;
const StyledFooter = styled.div`
	padding: 50px 20px;
`;

export const App = () => {
	return (
		<StyledLayout>
			<StyledHeader>
				<Header />
			</StyledHeader>
			<StyledContent>
				<StyledForm>
					<Form />
				</StyledForm>
				<Chart />
			</StyledContent>
			<StyledFeedback>
				<Feedback />
			</StyledFeedback>
			<StyledFooter>
				<Footer />
			</StyledFooter>
		</StyledLayout>
	);
};
