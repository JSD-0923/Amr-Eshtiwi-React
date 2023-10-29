import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { IconButton, InputBase, Paper, useTheme } from '@mui/material'
import React, { useState } from 'react'
import './searchContainer.css'
import CustomSelect from '../select/select'
import { useNavigate } from 'react-router-dom'


function SearchContainer({ setUrl, topics ,setTopics ,allTopics }) {
    let SearchedTopics = [...topics];

    const theme = useTheme();

    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');

    const navigate = useNavigate();
    // const [searchParams, setSearchParams] = useSearchParams();


    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        // setSearchParams({ query: e.target.value, filter: filter, sort: sort });
        navigate(`?query=${e.target.value}&filter=${filter}&sort=${sort}`);
        handleSearchFunctionalty(e.target.value,filter,sort);
    };

    const handleFilter = (e) => {
        setFilter(e.target.value);
        // setSearchParams({ query: searchQuery, filter: e.target.value, sort: sort });
        navigate(`?query=${searchQuery}&filter=${e.target.value}&sort=${sort}`);
        handleSearchFunctionalty(searchQuery,e.target.value,sort);
    }

    const handleSort = (e) => {
        setSort(e.target.value);
        // setSearchParams({ query: searchQuery, filter: filter, sort: e.target.value });
        navigate(`?query=${searchQuery}&filter=${filter}&sort=${e.target.value}`);
        handleSearchFunctionalty(searchQuery,filter,e.target.value);
    }


    const handleSearchFunctionalty = (searchQuery,filter,sort) => {
        // let searchQuery = searchParams.get('query');
        // let filter = searchParams.get('filter');
        // let sort = searchParams.get('sort');

    
        setTopics([...allTopics]);

        if (searchQuery) {
            setUrl(`https://tap-web-1.herokuapp.com/topics/list?phrase=${searchQuery}`);
        }

        if (filter) {
           console.log(filter);
            SearchedTopics = [...allTopics].filter((topic) =>{
                return topic.category === filter;
            });

            setTopics(SearchedTopics);
        }

        if (sort) {
            if(sort === 'Title'){
                SearchedTopics = [...topics].sort((a,b) => a.topic.localeCompare(b.topic));
            }else if(sort === 'Author'){
                SearchedTopics = [...topics].sort((a,b) => a.name.localeCompare(b.name));
            }

            setTopics(SearchedTopics);
        }

        
    }

    // useEffect(() => {
    //     const urlObject = new URL(window.location.href);
    //     urlObject.searchParams.set('search', searchQuery);
    // }, [searchQuery])
    return (
        <div className="search-section">
            <Paper
                className='search-input'
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', backgroundColor: theme.palette.body.main }}
            >
                <IconButton sx={{ p: '10px' }} >
                    <SearchOutlinedIcon sx={{ color: theme.palette.text.main }} />
                </IconButton>

                <InputBase
                    sx={{ ml: 1, flex: 1, backgroundColor: theme.palette.body.main, color: theme.palette.text.main }}
                    placeholder="Search the website..."
                    value={searchQuery}
                    onChange={(e) => {
                        handleSearch(e);
                    }}
                />
            </Paper>


            <div className="select-container" style={{ backgroundColor: theme.palette.body.main }}>
                <CustomSelect label={'Sort By:'} selectValues={['Title', 'Author']} value={sort} handleChange={handleSort}  />
            </div>
            <div className="select-container" style={{ backgroundColor: theme.palette.body.main }}>
                <CustomSelect label={'Filter By:'} selectValues={['Web Development Languages', 'Frontend Frameworks and Libraries', 'Backend Frameworks and Libraries', 'Databases and APIs', 'Web Development Concepts and Technologies']} value={filter} handleChange={handleFilter}/>
            </div>
        </div>
    )
}

export default SearchContainer