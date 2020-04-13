import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '../../customcomponent/BreadCrumbs/index.js'
import { InputBase} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';



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
    const [noresultfound,setnoresultfound]=React.useState("");


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

    const handlesubmit=(e)=>{
        e.preventDefault(); 
        const results = props.productList.filter(person =>
            person.productName.toLowerCase().includes(inputtext)
        );
        setfilterresults(results);
        setnoresultfound(`No Results found for search "${inputtext}"`)
    }

    return (
        <>
            <Breadcrumbs />
            <Grid container>
                <Grid item xs={12}>
                    <div className="inputstyle">
                        <Paper elevation={3} className="inputbasepaper">
                            <form onSubmit={(e)=>handlesubmit(e)}>
                                <InputBase
                                    placeholder="Search for products"
                                    className="inputbase"
                                    onChange={(e)=>handleChangeinput(e)}
                                />
                                <IconButton
                                    type="submit"
                                    className="buttonicon"
                                >
                                    <SearchIcon />
                                </IconButton>
                            </form>

                        </Paper>
                    </div>
                </Grid>
            </Grid>

            <div className="ProductListPadding">
                <Grid container spacing={1}>

                    {currentPagePagination.length===0?noresultfound:currentPagePagination.map(v => {
                        const [image, productName, productPrice, productdetails, id,quantity] = [v.image, v.productName, v.productPrice, v.productdetails, v.id,v.quantity];
                        return (
                            <>
                                <Grid item xs={4}>
                                    <Paper elevation={3} className="paperproductoutline">
                                        <img src={v.image} className='imageSize' />
                                        <p className="productname">{v.productName}</p>
                                        <p className="productprice">$
                                        {v.productPrice}</p>
                                        <button className="productbutton" onClick={() => props.addtocart({ image, productName, productPrice, productdetails, id ,quantity})}>ADD TO CART</button>
                                    </Paper>
                                </Grid>
                            </>
                        )
                    })}

                </Grid>
                {filteredres.length===0?"":
                <span >
                    <Typography className="pagination"><p className="pagenumber">Page: {page}</p></Typography>
                    <Pagination
                        count={filteredres.length / rowsPerPage}
                        variant="outlined"
                        shape="rounded"
                        page={page}
                        onChange={handleChange}
                    />
                </span>
}
            </div>

        </>
    );
}


export default Home;