import React from 'react';
import { tags, pages } from '../../../server/seedData';
// checks to see if setispageview equal to true, if yes, then it returns the default page
export const PagesList = ({pages, setIsPageView, setPageView}) => {
	const clickHandler = (page) => {
		setIsPageView(true)
		setPageView(page)
	}
// iterates through the pages file and assigns id to each map. user is then able to click the handler in order to recieve the data about the clicked title
	return <>
		{
			pages.map((page, idx) => {
				return <h3 key={idx} onClick={() => clickHandler(page)}>{page.title}</h3>
			})
		}

	</>
} 
