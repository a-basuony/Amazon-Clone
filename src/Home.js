import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      
        <div className="card__imageSlider home__image " >
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item">
            <img src="https://m.media-amazon.com/images/I/71ydqTGrflL._SX3000_.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item active">
            <img src="https://m.media-amazon.com/images/I/616gGDCH6LL._SX3000_.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://m.media-amazon.com/images/I/615WFa7ZkYL._SX3000_.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://m.media-amazon.com/images/I/7102I1D+77L._SX3000_.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://m.media-amazon.com/images/I/615qQvjJw3L._SX3000_.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://m.media-amazon.com/images/I/619xcE1JVEL._SX3000_.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://m.media-amazon.com/images/I/61TpbnyJiWL._SX3000_.jpg" className="d-block w-100" alt="..."/>
            </div>
            
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
            
            <Product 
              id={12321341}
              title = {"Banbao - Turbo Power Dragon Building Set 102pcs"}
              price={11.96}
              rating={5}
              image ={"https://m.media-amazon.com/images/I/51Dw8+L+0PL._AC_.jpg"}
              />
            <Product 
              id={12321341}
              title = {"Banbao - Fire Truck Building Kit 290pcs"}
              price={11.96}
              rating={5}
              image ={"https://m.media-amazon.com/images/I/71pY0jixT+L._AC_SX679_.jpg"}
              />
            <Product 
              id={12321341}
              title = {"BanBao Police Station Toy Building Set, 718-Piece"}
              price={11.96}
              rating={5}
              image ={"https://m.media-amazon.com/images/I/51M6u5hv3eL._AC_.jpg"}
              />
            <Product 
              id={12321341}
              title = {"Paw Patrol, True Metal Total City Rescue Movie Track Set with Exclusive Marshall Vehicle, 1:55 Scale"}
              price={11.96}
              rating={5}
              image ={"https://images-eu.ssl-images-amazon.com/images/I/71VKpfI59EL._AC_UL232_SR232,232_.jpg"}
              />
              </div>
              
              <div className="home__row ">
          <Product 
            id={12321341}
            title = {"Kitchen essentials | Up to 15% off"}
            price={11.96}
            rating={5}
            image ={"https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/Gateway/XCM_Manual_1466738_4981387_379x304_1X._SY304_CB609258982_.jpg"}
            />
          <Product 
            id={12321341}
            title = {"New arrivals | Bags & Wallets"}
            price={11.96}
            rating={5}
            image ={"https://images-eu.ssl-images-amazon.com/images/G/42/SL/DEC/GW/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg"}
            />
          <Product 
          
            id={12321341}
            title = {"Women's Shoes | Up to 25% off"}
            price={11.96}
            rating={5}
            image ={"https://images-eu.ssl-images-amazon.com/images/G/42/SL/October/XCM_Manual_1478080_5091646_379x304_1X._SY304_CB606174996_.jpg"}
            />
          <Product 
            
            id={12321341}
            title = {"Men's Clothes | Up to 40%"}
            price={11.96}
            rating={5}
            image ={"https://images-eu.ssl-images-amazon.com/images/G/42/SL/October/XCM_Manual_1478080_5091637_379x304_1X._SY304_CB606163859_.jpg"}
            />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
