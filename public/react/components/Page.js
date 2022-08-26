import React from 'react';
import {pages, users, tags} from '../../../server/seedData';
import {fetchPages} from '../components/App'
import apiURL from '../api';



export const Page = ({page, setIsPageView}) => {

// returning the title, author,publish date, content and tags of the page data
// the button is used to return back to the previous page by setting the page view to false
  return <>
    <h3>{page.title}</h3>
    <h4>Author: {page.authorId}</h4>
    <h4>Published: {page.status}</h4>  
    <p>{page.content}</p>
    <h4>Tags: {tags.name}</h4>

    <button onClick={() => setIsPageView(false)}> Back to Wiki list </button>
  </> 
}
	