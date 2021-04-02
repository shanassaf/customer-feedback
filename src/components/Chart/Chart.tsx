import React, { useContext } from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import { Context } from '../../state/StoreProvider';

const StyledChart = styled.div`
	height: 100px;
	padding: auto 0;
`;

const Chart = (): JSX.Element => {
	const {
		state: { comments },
	} = useContext(Context);
	const labelsArray = ['0', '1', '2', '3', '4', '5'];
	let dataArray = [0, 0, 0, 0, 0, 0];

	const ratingsArray = comments.map(({ rating }) => rating);

	ratingsArray.forEach((rating) => {
		dataArray[rating]++;
	});

	const data = {
		labels: labelsArray,
		datasets: [
			{
				label: 'Ratings',
				backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 2,
				data: dataArray,
			},
		],
	};

	const options = {
		title: {
			display: true,
			text: 'Ratings',
			fontSize: 20,
		},
		legend: {
			display: true,
		},
	};

	if (comments.length === 0) {
		return null;
	}

	return (
		<StyledChart>
			<Pie data={data} options={options} />
		</StyledChart>
	);
};

export default Chart;
