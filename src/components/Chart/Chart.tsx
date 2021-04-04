import React, { useContext } from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import { Context } from '../../state/StoreProvider';

const StyledChart = styled.div``;

export const Chart = (): JSX.Element => {
	const {
		state: { feedback },
	} = useContext(Context);

	const labelsArray = ['0', '1', '2', '3', '4', '5'];
	let dataArray = [0, 0, 0, 0, 0, 0];

	const ratingsArray = feedback.map(({ rating }) => rating);

	ratingsArray.forEach((rating) => {
		dataArray[rating]++;
	});

	const data = {
		labels: labelsArray,
		datasets: [
			{
				label: 'Ratings',
				backgroundColor: ['#FFAACC', '#CCFFCC', '#CCAAFF', '#FFFFCC', '#00FFFF', '#FFBC90'],
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 2,
				data: dataArray,
			},
		],
	};

	const options = {
		title: {
			display: true,
			text: 'See what others rated us!',
			fontSize: 20,
		},
		legend: {
			display: true,
			position: 'top',
		},
	};

	if (feedback.length === 0) {
		return null;
	}

	return (
		<StyledChart>
			<Pie data={data} options={options} />
		</StyledChart>
	);
};
