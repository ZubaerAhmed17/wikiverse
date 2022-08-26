// import React, { useState, useEffect } from 'react';
// import { PagesList } from './PagesList';
// import { Page } from './Page';
// import { Form } from './Form'

// // import and prepend the api url to any fetch calls
// import apiURL from '../api';

// export const App = () => {

// 	const [pagesCollection, setPagesCollection] = useState([]);
// 	const [isPageView, setIsPageView] = useState(false)
// 	const [pageView, setPageView] = useState({})

// // fetches the api from the api url. the function then converts the data into a json file and then inserts data into the useState
// 	async function fetchPages(){
// 		try {
// 			const response = await fetch(`${apiURL}/wiki`);
// 			const pagesData = await response.json();
// 			setPagesCollection(pagesData);
// 			setAuthorsList()
// 			console.log(pagesData)
// 		} catch (err) {
// 			console.log("Oh no an error! ", err)
// 		}
// 	}
// 	useEffect(() => {
// 		fetchPages();
// 	}, []);
// // Sets and returns the default view for our page which is shown to the user. the setIsPage is currently considered true therefore displaying the default page
// 	return (
// 		<main>	
//       <h1>WikiVerse</h1>
// 			{
// 				isPageView
// 				  ? <Page page={pageView} setIsPageView = {setIsPageView}/>
// 				  : [<h2 key={0} >Title</h2>, 
// 				  <PagesList key={1} setPageView={setPageView} setIsPageView={setIsPageView} pages={pagesCollection} />]
// 			}	
// 		</main>
// 	)
// }


import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Page } from './Page';
import { Form } from './Form'

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
 	const [isPageView, setIsPageView] = useState(false);
    const [pagesCollection, setPagesCollection] = useState([]);
    const [currentPageView, setCurrentPageView] = useState(0)
    const [pageView, setPageView] = useState({})

    const currentPageContent = [
        [
            <h2 key={0} >Current Articles</h2>,
            <p key={1} onClick={() =>setCurrentPageView(2)}>Add Article</p>, 
            <PagesList key={2} setPageView={setPageView} setCurrentPageView={setCurrentPageView} pages={pagesCollection} />
        ],
        <Page page={pageView} setPageView={setPageView} setCurrentPageView={setCurrentPageView}/>,
        <Form setCurrentPageView={setCurrentPageView}/>
        ]
    
// fetches the api from the api url. the function then converts the data into a json file and then inserts data into the useState
    async function fetchPages(){
        try {
            const response = await fetch(`${apiURL}/wiki`);
            const pagesData = await response.json();
            setPagesCollection(pagesData);
        } catch (err) {
            console.log("Oh no an error! ", err)
        }
    }

    useEffect(() => {
        fetchPages();
    },[]);

    return (
        <main>    
      <h1>WikiVerse</h1>

            {
                currentPageContent[currentPageView]
			}{
 				isPageView
 				  ? <Page page={pageView} setIsPageView = {setIsPageView}/>
 				  : [<h2 key={0} >Title</h2>, 
 				  <PagesList key={1} setPageView={setPageView} setIsPageView={setIsPageView} pages={pagesCollection} />]
	
            }

             
            
            
        </main>
    )
}























