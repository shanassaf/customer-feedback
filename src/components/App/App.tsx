import React from 'react';
import styled from 'styled-components';
import { Form } from '../Form';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Comments } from '../Comments';
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
		grid-column-gap: 20px;
	}
`;

export const App = () => {
	return (
		<StyledLayout>
			<Header />
			<StyledContent>
				<Form />
				<Chart />
			</StyledContent>
			<Comments />
			<Footer />
		</StyledLayout>
	);
};
