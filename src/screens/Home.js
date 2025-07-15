import React,{useEffect,useState} from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {

  const [search,setSearch] = useState('');
  const [foodCat,setFoodCat] = useState([]);
  const [foodItem,setFoodItem] = useState([]);
  
  const loadData =async ()=>{
    let response = await fetch("http://localhost:5000/api/foodData",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
    });
    response =await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0],response[1]);
  }

  useEffect(()=>{
    loadData()
  },[])
  

  return (
    <div>
      <div> <Navbar /></div>
      <div> 
      <div id="carouselExampleFade" className="carousel slide carousel-fade"  data-bs-ride="carousel" style={{objectFit:"contain !importent"}}>

        <div className="carousel-inner" id="carousel">
            <div className='carousel-caption' style={{zIndex:"10"}}>
                <div className="d-flex justify-content-center">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                    {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                </div>
            </div>

            <div className="carousel-item active">
            <img src="https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y=" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..." />
            </div>
            <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>

      </div>
      <div className="container"> 
      {
        foodCat !==[]
        ? foodCat.map((data)=>{
          return(
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3" >{data.CategoryName}</div>
                <hr/>

                {
                  foodItem !==[]
                  ? foodItem.filter((item)=> (item.CategoryName === data.CategoryName)&& (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                  .map(filterItems=>{
                    return(
                      <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                        <Card 
                          foodItem={filterItems}
                          // foodName={filterItems.name}
                          options={filterItems.options[0]}
                          // imgSrc ={filterItems.img}
                        />
                      </div>
                    )
                  }): <div>No Such Data Found</div>
                }
              </div>
          )
        })
        : <div>"""""""""""</div>
      }

      {/* <Card /> */}
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
