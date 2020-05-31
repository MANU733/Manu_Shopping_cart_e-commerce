import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '../../customcomponent/BreadCrumbs/index.js'
import { InputBase } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';



const Home = (props) => {

    React.useEffect(() => {
        props.actionproductList()
    }, [])
    const [filteredres, setfilterresults] = React.useState([])
    const [currentPage, setcurrentPage] = React.useState(1);
    const [rowsPerPage] = React.useState(6);
    const [page, setPage] = React.useState(1);
    const [inputtext, setinputtext] = React.useState('')
    const indexOfLastPage = currentPage * rowsPerPage;
    const indexOfFirstPage = indexOfLastPage - rowsPerPage;
    const currentPagePagination = filteredres.slice(indexOfFirstPage, indexOfLastPage);
    const [noresultfound, setnoresultfound] = React.useState("");
    const [email, setemail] = React.useState("");
    const [password, setpassword] = React.useState("");

console.log(currentPagePagination,'list12')
    const handleChange = (event, value) => {
        setPage(value);
        setcurrentPage(value);
    };

    const handleChangeinput = (e) => {
        setinputtext(e.target.value)
        // const results = props.productList.filter(person =>
        //     person.productName.toLowerCase().includes(inputtext)
        // );
        // setfilterresults(results);
        // setinputtext(e.target.value)
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        const results = props.productList.filter(person =>
            person.productName.toLowerCase().includes(inputtext.toLowerCase())
        );
        setfilterresults(results);
        setnoresultfound(`No Results found for search "${inputtext}"`)
    }



    return (
        <>
            <Breadcrumbs />
            <Paper elevation={3} className="paperhometop">
                {props.signinidToken !== null ? <p className="Hello">{`Hello, ${props.signinusername}`}</p> : <p>Looks like you have not signedIn, Please signin</p>}
                {props.signinidToken !== null ? <Link to="/logout" className="logoutstyle">Log out</Link> :
                    <Link to="/signin" className="signupstyle">Sign in</Link>}</Paper>
            <Grid container>
                <Grid item xs={12}>
                    <div className="inputstyle">
                        <Paper elevation={3} className="inputbasepaper">
                            <form onSubmit={(e) => handlesubmit(e)}>
                                <InputBase
                                    placeholder="Search for products"
                                    className="inputbase"
                                    data-test="inputbase"
                                    onChange={(e) => handleChangeinput(e)}
                                />
                                <IconButton
                                    type="submit"
                                    className="buttonicon"
                                >
                                    <SearchIcon />
                                </IconButton>
                            </form>

                        </Paper>
                        <h5>Search for the products eg:"iphone"</h5>
                    </div>
                </Grid>
            </Grid>

            <div className="ProductListPadding">
                <Grid container spacing={1}>

                    {currentPagePagination.length!== 0 ?  currentPagePagination.map(v => {
                        const [image, productName, productPrice, productdetails, id, quantity] = [v.image, v.productName, v.productPrice, v.productdetails, v.id, v.quantity];
                        return (
                            <>
                                <Grid item xs={4}>
                                    <Paper elevation={3} className="paperproductoutline">
                                        <img src={v.image} className='imageSize' />
                                        <p className="productname">{v.productName}</p>
                                        <p className="productprice">$
                                        {v.productPrice}</p>
                                        <button 
                                        className="productbutton" 
                                        data-test="button"
                                        onClick={() => props.addtocart({ image, productName, productPrice, productdetails, id, quantity })}>ADD TO CART</button>
                                    </Paper>
                                </Grid>
                            </>
                        )
                    }):noresultfound }

                </Grid>
                {filteredres.length === 0 ? "" :
                    <span >
                        <Typography className="pagination"><p className="pagenumber">Page: {page}</p></Typography>
                        <Pagination
                            count={filteredres.length / rowsPerPage}
                            variant="outlined"
                            shape="rounded"
                            page={page}
                            data-test="pagination"
                            onChange={handleChange}
                        />
                    </span>


                }


            </div>

        </>
    );
}


export default Home;