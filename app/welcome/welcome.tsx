import anh1Content4 from "./images/anh-1-content-4.png";
import anh2Content4 from "./images/anh-2-content-4.png";
import anh3Content4 from "./images/anh-3-content-4.png";
import anh4Content4 from "./images/anh-4-content-4.png";
import anh5Content4 from "./images/anh-5-content-4.png";
import anh6Content4 from "./images/anh-6-content-4.png";
import anh7Content4 from "./images/anh-7-content-4.png";
import anh8Content4 from "./images/anh-8-content-4.png";
import anhBatMiFontContentOne from "./images/anh-bat-mi-font-content-one.png";
import anhBatMiIntroduce from "./images/anh-bat-mi-introduce.png";
import anhBatMiOneContentOne from "./images/anh-bat-mi-one-content-one.png";
import anhBatMiThreeContentOne from "./images/anh-bat-mi-three-content-one.png";
import anhBatMiTwoContentOne from "./images/anh-bat-mi-two-content-one.png";
import anhDtContent7 from "./images/anh-dt-content-7.png";
import avatar1Content4 from "./images/avatar-1-content-4.png";
import avatar2Content4 from "./images/avatar-2-content-4.png";
import avatar3Content4 from "./images/avatar-3-content-4.png";
import avatar4Content4 from "./images/avatar-4-content-4.png";
import avatar5Content4 from "./images/avatar-5-content-4.png";
import avatar6Content4 from "./images/avatar-6-content-4.png";
import avatar7Content4 from "./images/avatar-7-content-4.png";
import avatar8Content4 from "./images/avatar-8-content-4.png";
import banhNgotContentThree from "./images/banh-ngot-content-three.png";
import banhNgotNhoContentThree from "./images/banh-ngot-nho-content-three.png";
import hambogoContentThree from "./images/hambogo-content-three.png";
import icon1Content4 from "./images/icon-1-content-4.png";
import icon1Content6 from "./images/icon-1-content-6.png";
import icon1Content7 from "./images/icon-1-content-7.png";
import icon1Fooder from "./images/icon-1-fooder.png";
import icon2Content4 from "./images/icon-2-content-4.png";
import icon2Content6 from "./images/icon-2-content-6.png";
import icon2Content7 from "./images/icon-2-content-7.png";
import icon2Fooder from "./images/icon-2-fooder.png";
import icon3Content6 from "./images/icon-3-content-6.png";
import icon3Fooder from "./images/icon-3-fooder.png";
import icon4Fooder from "./images/icon-4-fooder.png";
import icon5Fooder from "./images/icon-5-fooder.png";
import iconBanhContentTwo from "./images/icon-banh-content-two.png";
import iconChuongContentTwo from "./images/icon-chuong-content-two.png";
import iconDiaChiContentThree from "./images/icon-dia-chi-content-three.png";
import iconDiaChiContentTwo from "./images/icon-dia-chi-content-two.png";
import iconDiaChiIntroduce from "./images/icon-dia-chi-introduce.png";
import iconKinhLupButtumHeader from "./images/icon-kinh-lup-buttum-header.png";
import iconMapHeader from "./images/icon-map-header.png";
import iconNguoiButtumHeader from "./images/icon-nguoi-buttum-header.png";
import iconSaoContent4 from "./images/icon-sao-content-4.png";
import iconTienContentTwo from "./images/icon-tien-content-two.png";
import iconTuiIntroduce from "./images/icon-tui-introduce.png";
import iconXeMayIntroduce from "./images/icon-xe-may-introduce.png";
import image1Content8 from "./images/image-1-content-8.png";
import image2Content8 from "./images/image-2-content-8.png";
import image3Content8 from "./images/image-3-content-8.png";
import logoHeader from "./images/logo-header.png";
import monAn1Content5 from "./images/mon-an-1-content-5.png";
import monAn2Content5 from "./images/mon-an-2-content-5.png";
import monAn4Content5 from "./images/mon-an-4-content-5.png";
import monAn5Content5 from "./images/mon-an-5-content-5.png";
import monAn6Content5 from "./images/mon-an-6-content-5.png";
import sanguycContentThree from "./images/sanguyc-content-three.png";
import sotChamContentThree from "./images/sot-cham-content-three.png";
import "./index.css";
export function Welcome() {
  return (
    <>
      {/* HEADER */}
      <div className="header">
        <div className="logo-header">
          <img src={logoHeader} alt="" />
          <div className="text-header">
            <span>food</span>
            <span>wagon</span>
          </div>
        </div>

        <div className="menu-header">
          <div>Deliver to:</div>
          <img src={iconMapHeader} alt="" />
          <div>Current Location</div>
          <div>Mohammadpur Bus Stand, Dhaka</div>
        </div>

        <div className="buttum-header">
          <div className="buttum-one">
            <img src={iconKinhLupButtumHeader} alt="" />
            <div>Search Food</div>
          </div>
          <div className="buttum-two">
            <img src={iconNguoiButtumHeader} alt="" />
            <div>Login</div>
          </div>
        </div>
      </div>

      {/* INTRODUCE */}
      <div className="introduce">
        <div className="child-1-introduce">
          <div>Are you starving?</div>
          <div>
            Within a few clicks, find meals that are accessible near you
          </div>
          <div className="fill-in-form">
            <div className="menu-introduce">
              <div className="button-1-introduce">
                <img src={iconXeMayIntroduce} alt="" />
                <div>Delivery</div>
              </div>
              <div className="button-1-introduce">
                <img src={iconTuiIntroduce} alt="" />
                <div>Piclup</div>
              </div>
            </div>
            <div className="input-button">
              <div className="input-introduce">
                <img src={iconDiaChiIntroduce} alt="" />
                <input type="text" placeholder="Enter Your Address" />
              </div>
              <div className="button-3-introduce">
                <img src={iconKinhLupButtumHeader} alt="" />
                <div>Find Food</div>
              </div>
            </div>
          </div>
        </div>
        <div className="images-introduce">
          <img src={anhBatMiIntroduce} alt="" />
        </div>
      </div>

      {/* CONTENT-1 */}
      <div className="content-1">
        <div className="menu-1-content-1">
          <div className="images-content-1">
            <img src={anhBatMiOneContentOne} alt="" />
            <div className="discount">
              <div>15</div>
              <div className="off">
                <div>%</div>
                <div>Off</div>
              </div>
            </div>
          </div>
          <div>Greys Vage</div>
          <div>6 Days Remaining</div>
        </div>

        <div className="menu-1-content-1">
          <div className="images-content-1">
            <img src={anhBatMiTwoContentOne} alt="" />
            <div className="discount">
              <div>10</div>
              <div className="off">
                <div>%</div>
                <div>Off</div>
              </div>
            </div>
          </div>
          <div>Greys Vage</div>
          <div>6 Days Remaining</div>
        </div>

        <div className="menu-1-content-1">
          <div className="images-content-1">
            <img src={anhBatMiThreeContentOne} alt="" />
            <div className="discount">
              <div>25</div>
              <div className="off">
                <div>%</div>
                <div>Off</div>
              </div>
            </div>
          </div>
          <div>Greys Vage</div>
          <div>7 Days Remaining</div>
        </div>

        <div className="menu-1-content-1">
          <div className="images-content-1">
            <img src={anhBatMiFontContentOne} alt="" />
            <div className="discount">
              <div>20</div>
              <div className="off">
                <div>%</div>
                <div>Off</div>
              </div>
            </div>
          </div>
          <div>Greys Vage</div>
          <div>8 Days Remaining</div>
        </div>
      </div>

      {/* CONTENT-2 */}
      <div className="content-2">
        <div>How does it work</div>

        <div className="menu-content-2">
          <div className="child-1-content-2">
            <div className="images-content-2">
              <img src={iconDiaChiContentTwo} alt="" />
            </div>
            <div>Select location</div>
            <div>Choose the location where your food will be delivered.</div>
          </div>

          <div className="child-1-content-2">
            <div className="images-content-2">
              <img src={iconChuongContentTwo} alt="" />
            </div>
            <div>Choose order</div>
            <div>Check over hundreds of menus to pick your favorite food</div>
          </div>

          <div className="child-1-content-2">
            <div className="images-content-2">
              <img src={iconTienContentTwo} alt="" />
            </div>
            <div>Pay advanced</div>
            <div>
              It's quick, safe, and simple. Select several methods of payment
            </div>
          </div>

          <div className="child-1-content-2">
            <div className="images-content-2">
              <img src={iconBanhContentTwo} alt="" />
            </div>
            <div>Enjoy meals</div>
            <div>Food is made and delivered directly to your home.</div>
          </div>
        </div>
      </div>

      {/* CONTENT-3 */}
      <div className="content-3">
        <div className="title-content-3">Popular items</div>
        <div className="menu-content-3">
          <div className="child-content-3">
            <div className="image-content-3">
              <img src={hambogoContentThree} alt="" />
              <div className="buttom-one-content-3">&lt;</div>
            </div>
            <div className="content-menu">
              <div>Cheese Burger</div>
              <div className="adderss-content-3">
                <img src={iconDiaChiContentThree} alt="" />
                <div>Burger Arena</div>
              </div>
              <div>$3.88</div>
              <div className="buttom-small-content-3">Order Now</div>
            </div>
          </div>

          <div className="child-content-3">
            <div className="image-content-3">
              <img src={banhNgotContentThree} alt="" />
            </div>
            <div className="content-menu">
              <div>Toffe's Cake</div>
              <div className="adderss-content-3">
                <img src={iconDiaChiContentThree} alt="" />
                <div>Top Sticks</div>
              </div>
              <div>$4.00</div>
              <div className="buttom-small-content-3">Order Now</div>
            </div>
          </div>

          <div className="child-content-3">
            <div className="image-content-3">
              <img src={banhNgotNhoContentThree} alt="" />
            </div>
            <div className="content-menu">
              <div>Cake World</div>
              <div className="adderss-content-3">
                <img src={iconDiaChiContentThree} alt="" />
                <div>Dancake</div>
              </div>
              <div>$1.99</div>
              <div className="buttom-small-content-3">Order Now</div>
            </div>
          </div>

          <div className="child-content-3">
            <div className="image-content-3">
              <img src={sanguycContentThree} alt="" />
            </div>
            <div className="content-menu">
              <div>Crispy Sandwitch</div>
              <div className="adderss-content-3">
                <img src={iconDiaChiContentThree} alt="" />
                <div>Fastfood dine</div>
              </div>
              <div>$3.00</div>
              <div className="buttom-small-content-3">Order Now</div>
            </div>
          </div>

          <div className="child-content-3">
            <div className="image-content-3">
              <img src={sotChamContentThree} alt="" />
              <div className="buttom-two-content-3">&gt;</div>
            </div>
            <div className="content-menu">
              <div>Thai Soup</div>
              <div className="adderss-content-3">
                <img src={iconDiaChiContentThree} alt="" />
                <div>Foody man</div>
              </div>
              <div>$2.79</div>
              <div className="buttom-small-content-3">Order Now</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content-4 */}
      <div className="content-4">
        <div className="title-content-4">Featured Restaurants</div>
        <div className="image-menu">
          <div className="product">
            <div className="food-photos-content-4">
              <img src={anh1Content4} alt="" />
              <div className="buttum-content-4">
                <div className="buttum-one-content-4">
                  <img src={icon1Content4} alt="" />
                  <div>20% off</div>
                </div>
                <div className="buttum-two-content-4">
                  <img src={icon2Content4} alt="" />
                  <div>Fast</div>
                </div>
              </div>
            </div>
            <div className="child-2-content-4">
              <div className="trademark">
                <img src={avatar1Content4} alt="" />
                <div className="ratings">
                  <div>Foodworld</div>
                  <div>
                    <img src={iconSaoContent4} alt="" />
                    <div>46</div>
                  </div>
                </div>
              </div>
              <div id="buttum-button-content-4">Opens tomorrow</div>
            </div>
          </div>

          <div className="product">
            <div className="food-photos-content-4">
              <img src={anh2Content4} alt="" />
              <div className="buttum-content-4">
                <div className="buttum-one-content-4">
                  <img src={icon1Content4} alt="" />
                  <div>15% off</div>
                </div>
                <div className="buttum-two-content-4">
                  <img src={icon2Content4} alt="" />
                  <div>Fast</div>
                </div>
              </div>
            </div>
            <div className="child-2-content-4">
              <div className="trademark">
                <img src={avatar2Content4} alt="" />
                <div className="ratings">
                  <div>Pizzahub</div>
                  <div>
                    <img src={iconSaoContent4} alt="" />
                    <div>40</div>
                  </div>
                </div>
              </div>
              <div id="buttum-button-content-4">Opens tomorrow</div>
            </div>
          </div>

          <div className="product">
            <div className="food-photos-content-4">
              <img src={anh3Content4} alt="" />
              <div className="buttum-content-4">
                <div className="buttum-one-content-4">
                  <img src={icon1Content4} alt="" />
                  <div>10% off</div>
                </div>
                <div className="buttum-two-content-4">
                  <img src={icon2Content4} alt="" />
                  <div>Fast</div>
                </div>
              </div>
            </div>
            <div className="child-2-content-4">
              <div className="trademark">
                <img src={avatar3Content4} alt="" />
                <div className="ratings">
                  <div>Donuts hut</div>
                  <div>
                    <img src={iconSaoContent4} alt="" />
                    <div>20</div>
                  </div>
                </div>
              </div>
              <div>Open Now</div>
            </div>
          </div>

          <div className="product">
            <div className="food-photos-content-4">
              <img src={anh4Content4} alt="" />
              <div className="buttum-content-4">
                <div className="buttum-one-content-4">
                  <img src={icon1Content4} alt="" />
                  <div>15% off</div>
                </div>
                <div className="buttum-two-content-4">
                  <img src={icon2Content4} alt="" />
                  <div>Fast</div>
                </div>
              </div>
            </div>
            <div className="child-2-content-4">
              <div className="trademark">
                <img src={avatar4Content4} alt="" />
                <div className="ratings">
                  <div>Donuts hut</div>
                  <div>
                    <img src={iconSaoContent4} alt="" />
                    <div>50</div>
                  </div>
                </div>
              </div>
              <div>Open Now</div>
            </div>
          </div>

          <div className="product">
            <div className="food-photos-content-4">
              <img src={anh5Content4} alt="" />
              <div className="buttum-content-4">
                <div className="buttum-one-content-4">
                  <img src={icon1Content4} alt="" />
                  <div>10% off</div>
                </div>
                <div className="buttum-two-content-4">
                  <img src={icon2Content4} alt="" />
                  <div>Fast</div>
                </div>
              </div>
            </div>
            <div className="child-2-content-4">
              <div className="trademark">
                <img src={avatar5Content4} alt="" />
                <div className="ratings">
                  <div>Ruby Tuesday</div>
                  <div>
                    <img src={iconSaoContent4} alt="" />
                    <div>26</div>
                  </div>
                </div>
              </div>
              <div>Open Now</div>
            </div>
          </div>

          <div className="product">
            <div className="food-photos-content-4">
              <img src={anh6Content4} alt="" />
              <div className="buttum-content-4">
                <div className="buttum-one-content-4">
                  <img src={icon1Content4} alt="" />
                  <div>25% off</div>
                </div>
                <div className="buttum-two-content-4">
                  <img src={icon2Content4} alt="" />
                  <div>Fast</div>
                </div>
              </div>
            </div>
            <div className="child-2-content-4">
              <div className="trademark">
                <img src={avatar6Content4} alt="" />
                <div className="ratings">
                  <div>Kuakata Fried Chicken</div>
                  <div>
                    <img src={iconSaoContent4} alt="" />
                    <div>53</div>
                  </div>
                </div>
              </div>
              <div>Open Now</div>
            </div>
          </div>

          <div className="product">
            <div className="food-photos-content-4">
              <img src={anh7Content4} alt="" />
              <div className="buttum-content-4">
                <div className="buttum-one-content-4">
                  <img src={icon1Content4} alt="" />
                  <div>10% off</div>
                </div>
                <div className="buttum-two-content-4">
                  <img src={icon2Content4} alt="" />
                  <div>Fast</div>
                </div>
              </div>
            </div>
            <div className="child-2-content-4">
              <div className="trademark">
                <img src={avatar7Content4} alt="" />
                <div className="ratings">
                  <div>Red Square</div>
                  <div>
                    <img src={iconSaoContent4} alt="" />
                    <div>45</div>
                  </div>
                </div>
              </div>
              <div>Open Now</div>
            </div>
          </div>

          <div className="product">
            <div className="food-photos-content-4">
              <img src={anh8Content4} alt="" />
              <div className="buttum-content-4">
                <div className="buttum-one-content-4">
                  <img src={icon1Content4} alt="" />
                  <div>10% off</div>
                </div>
                <div className="buttum-two-content-4">
                  <img src={icon2Content4} alt="" />
                  <div>Fast</div>
                </div>
              </div>
            </div>
            <div className="child-2-content-4">
              <div className="trademark">
                <img src={avatar8Content4} alt="" />
                <div className="ratings">
                  <div>Taco Bell</div>
                  <div>
                    <img src={iconSaoContent4} alt="" />
                    <div>35</div>
                  </div>
                </div>
              </div>
              <div>Open Now</div>
            </div>
          </div>
        </div>
        <div>View ALL &gt;</div>
      </div>

      {/* Content-5 */}
      <div className="content-5">
        <div className="title-content-5">
          <div>Search by Food</div>
          <div className="buttom-content-5">
            <div>
              <a className="link" href="">
                View ALL &gt;
              </a>
            </div>
            <div className="two-buttom">
              <div>&lt;</div>
              <div>&gt;</div>
            </div>
          </div>
        </div>
        <div className="menu-content-5">
          <div className="child-1-content-5">
            <div className="image-menu-content-5">
              <img src={monAn1Content5} alt="" />
            </div>
            <div>Pizza</div>
          </div>
          <div className="child-1-content-5">
            <div className="image-menu-content-5">
              <img src={monAn2Content5} alt="" />
            </div>
            <div>Burger</div>
          </div>
          <div className="child-1-content-5">
            <div className="image-menu-content-5">
              <img src={monAn1Content5} alt="" />
            </div>
            <div>Noodies</div>
          </div>
          <div className="child-1-content-5">
            <div className="image-menu-content-5">
              <img src={monAn4Content5} alt="" />
            </div>
            <div>Sub-sandiwch</div>
          </div>
          <div className="child-1-content-5">
            <div className="image-menu-content-5">
              <img src={monAn5Content5} alt="" />
            </div>
            <div>Chowmein</div>
          </div>
          <div className="child-1-content-5">
            <div className="image-menu-content-5">
              <img src={monAn6Content5} alt="" />
            </div>
            <div>Steak</div>
          </div>
        </div>
      </div>

      {/* Content-6 */}
      <div className="content-6">
        <div className="image-content-6">
          <div className="child-content-6">
            <img src={icon1Content6} alt="" />
            <div>Daily Discounts</div>
          </div>
          <div className="column"></div>
          <div className="child-content-6">
            <img src={icon2Content6} alt="" />
            <div>Live Tracing</div>
          </div>
          <div className="column"></div>
          <div className="child-content-6">
            <img src={icon3Content6} alt="" />
            <div>Quick Delivery</div>
          </div>
        </div>
      </div>

      {/* Content-7 */}
      <div className="content-7">
        <div className="image-content-7">
          <img src={anhDtContent7} alt="" />
        </div>
        <div className="title-content-7">
          <div>Install the app</div>
          <div>
            It's never been easier to order food. Look for the finest discounts
            and you'll be lost in a world of delectable food.
          </div>
          <div className="child-content-7">
            <div className="buttom-content-7">
              <img src={icon1Content7} alt="" />
              <div className="logo-name-content-7">
                <div>GET IT ON</div>
                <div>Google Play</div>
              </div>
            </div>
            <div className="buttom-content-7">
              <img src={icon2Content7} alt="" />
              <div className="logo-name-content-7">
                <div>DOWNLOAD ON THE</div>
                <div>App Store</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content-8 */}
      <div className="content-8">
        <div className="menu-content-8">
          <div className="title-content-8">
            <div className="title">
              <span>Best deals</span>
              <span>Crispy Sandwiches</span>
            </div>
            <div>
              Enjoy the large size of sandwiches. Complete perfect slice of
              sandwiches.
            </div>
            <div>Proceed to order &gt;</div>
          </div>
          <div className="images-content-8">
            <img src={image1Content8} alt="" />
          </div>
        </div>

        <div className="menu-content-8">
          <div className="images-content-8">
            <img src={image2Content8} alt="" />
          </div>
          <div className="title-content-8">
            <div className="title">
              <span>Celebrate partieswith</span>
              <span>Fried Chicken</span>
            </div>
            <div>
              Get the best fried chicken smeared with a lip smacking lemon chili
              flavor. Check out best deals for fried chicken.
            </div>
            <div>Proceed to order &gt;</div>
          </div>
        </div>

        <div className="menu-content-8">
          <div className="title-content-8">
            <div className="title">
              <span>Wanna eat hot & spicy</span>
              <span>Pizza?</span>
            </div>
            <div>
              Pair up with a friend and enjoy the hot and crispy pizza pops. Try
              it with the best deals.
            </div>
            <div>Proceed to order &gt;</div>
          </div>
          <div className="images-content-8">
            <img src={image3Content8} alt="" />
          </div>
        </div>
      </div>

      {/* Content-9 */}
      <div className="outer-content-9">
        <div className="content-9">
          <div>Are you ready to order with the best deals?</div>
          <div>Proceed to order &gt;</div>
        </div>
      </div>

      {/* fooder */}
      <div className="fooder">
        <div className="content-fooder">
          <div className="title-fooder">Our top cities</div>
          <div className="menu-fooder">
            <div className="child-menu-fooder">
              <div>San Francisco</div>
              <div>Miami</div>
              <div>San Diego</div>
              <div>East Bay</div>
              <div>LongBeach</div>
            </div>
            <div className="child-menu-fooder">
              <div>Los Angeles</div>
              <div>Washington DC</div>
              <div>Seattle</div>
              <div>Portland</div>
              <div>Nashville</div>
            </div>
            <div className="child-menu-fooder">
              <div>New York City</div>
              <div>Orange County</div>
              <div>Atlanta</div>
              <div>Charlotte</div>
              <div>Denver</div>
            </div>
            <div className="child-menu-fooder">
              <div>Chicago</div>
              <div>Phoenix</div>
              <div>Las Vegas</div>
              <div>Sarcamento</div>
              <div>Oklahoma City</div>
            </div>
            <div className="child-menu-fooder">
              <div>Columbus</div>
              <div>New Mexico</div>
              <div>Albuqaurque</div>
              <div>Sacramento</div>
              <div>New orleans</div>
            </div>
          </div>
        </div>
        <div className="row"></div>
        <div className="menu-2-fooder">
          <div className="child-1-fooder">
            <div className="child-menu-fooder-2">
              <div>Company</div>
              <div>About us</div>
              <div>Team</div>
              <div>Careers</div>
              <div>Blog</div>
            </div>
            <div className="child-menu-fooder-2">
              <div>Contact</div>
              <div>Help & Support</div>
              <div>Partner with us</div>
              <div>Ride with</div>
            </div>
            <div className="child-menu-fooder-2">
              <div>Legal</div>
              <div>Terms & Conditions</div>
              <div>refund & Cancellation</div>
              <div>Privacy policy</div>
              <div>Cookie Policy</div>
            </div>
          </div>
          <div className="child-2-fooder">
            <div>Follow Us</div>
            <div className="icon-fooder">
              <img src={icon1Fooder} alt="" />
              <img src={icon2Fooder} alt="" />
              <img src={icon3Fooder} alt="" />
            </div>
            <div>Receive exclusive offers in your mailbox</div>
            <div className="input-buttom-fooder">
              <div className="input-fooder">
                <img src={icon4Fooder} alt="" />
                <input
                  className="input-fooder-small"
                  type="email"
                  placeholder="Enter Your email"
                />
              </div>
              <div className="buttom-fooder">Subscribe</div>
            </div>
          </div>
        </div>
        <div className="row-2"></div>
        <div className="supplementary-content">
          <div className="all-rights-reserved">
            <span>All rights Reserved</span>
            <img src={icon5Fooder} alt="" />
            <span>Your Company, 2021</span>
          </div>
          <div className="themewagon">
            <span>Made with by</span>
            <span>Themewagon</span>
          </div>
        </div>
      </div>
    </>
  );
}
