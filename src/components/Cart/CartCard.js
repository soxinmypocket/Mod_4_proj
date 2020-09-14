
import React from 'react';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const CartCard = (props) => {
  console.log(props)
  const {item, item: {image_url, name, price, description}, handleRemoveFromCart} = props
  return (

    <Table striped borderless hover>
  <tbody>
    <tr>
      <td><img className="item-card-simplified-image" src={image_url}></img></td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td><Button variant="light" size="sm"onClick={() =>  handleRemoveFromCart(item)} className="button">Remove</Button></td>
    </tr>
  </tbody>
</Table>

  )
}

export default CartCard; 


// return (

//   <body class="bg-light">
//           <div class="container">
//               <div class="py-5 text-center">
//               <i className="material-icons">
//                       shopping_cart
//                   </i>
//                   <h2>Checkout</h2>
//                   {/* <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> */}
//               </div>
//           </div>

//       <div class="row">
//       <div class="col-md-4 order-md-2 mb-4">
//       <h4 class="d-flex justify-content-between align-items-center mb-3">
//           <span class="text-muted">Your cart</span>
//           <span class="badge badge-secondary badge-pill">3</span>
//       </h4>
//       <ul class="list-group mb-3">
//           <li class="list-group-item d-flex justify-content-between lh-condensed">
//           <div>
//               <h6 class="my-0">Product name</h6>
//               <small class="text-muted">Brief description</small>
//           </div>
//           <span class="text-muted">$12</span>
//           </li>
//           <li class="list-group-item d-flex justify-content-between lh-condensed">
//           <div>
//               <h6 class="my-0">Second product</h6>
//               <small class="text-muted">Brief description</small>
//           </div>
//           <span class="text-muted">$8</span>
//           </li>
//           <li class="list-group-item d-flex justify-content-between lh-condensed">
//           <div>
//               <h6 class="my-0">Third item</h6>
//               <small class="text-muted">Brief description</small>
//           </div>
//           <span class="text-muted">$5</span>
//           </li>
//           <li class="list-group-item d-flex justify-content-between bg-light">
//           <div class="text-success">
//               <h6 class="my-0">Promo code</h6>
//               <small>EXAMPLECODE</small>
//           </div>
//           <span class="text-success">-$5</span>
//           </li>
//           <li class="list-group-item d-flex justify-content-between">
//           <span>Total (USD)</span>
//           <strong>$20</strong>
//           </li>
//       </ul>


//       <div class="col-md-8 order-md-1">
//           <h4 class="mb-3">Billing address</h4>
//           <form class="needs-validation" novalidate>
//               <div class="row">
//                       <div class="col-md-6 mb-3">
//                           <label for="firstName">First name</label>
//                           <input type="text" class="form-control" id="firstName" placeholder="" value="" required></input>
//                           <div class="invalid-feedback">
//                           Valid first name is required.
//                           </div>
                          
//                       </div>
//                       <div class="col-md-6 mb-3">
//                           <label for="lastName">Last name</label>
//                           <input type="text" class="form-control" id="lastName" placeholder="" value="" required></input>
//                           <div class="invalid-feedback">
//                            Valid last name is required.
//                           </div>
//                       </div>
//               </div>
//               <div class="mb-3">
//                   <label for="email">Email <span class="text-muted">(Optional)</span></label>
//                   <input type="email" class="form-control" id="email" placeholder="you@example.com"></input>
//                   <div class="invalid-feedback">
//                       Please enter a valid email address for shipping updates.
//                    </div>
//               </div>

//               <div class="mb-3">
//                   <label for="address">Address</label>
//                   <input type="text" class="form-control" id="address" placeholder="1234 Main St" required></input>
//                   <div class="invalid-feedback">
//                       Please enter your shipping address.
//                   </div>
//               </div>


//               <div class="mb-3">
//                   <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
//                   <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"></input>
//               </div>

//               <div class="row">
//                   <div class="col-md-5 mb-3">
//                       <label for="country">Country</label>
//                       <select class="custom-select d-block w-100" id="country" required>
//                       <option value="">Choose...</option>
//                       <option>United States</option>
//                       <option value="AF">Afghanistan</option>
//                           <option value="AX">Åland Islands</option>
//                           <option value="AL">Albania</option>
//                           <option value="DZ">Algeria</option>
//                           <option value="AS">American Samoa</option>
//                           <option value="AD">Andorra</option>
//                           <option value="AO">Angola</option>
//                           <option value="AI">Anguilla</option>
//                           <option value="AQ">Antarctica</option>
//                           <option value="AG">Antigua and Barbuda</option>
//                           <option value="AR">Argentina</option>
//                           <option value="AM">Armenia</option>
//                           <option value="AW">Aruba</option>
//                           <option value="AU">Australia</option>
//                           <option value="AT">Austria</option>
//                           <option value="AZ">Azerbaijan</option>
//                           <option value="BS">Bahamas</option>
//                           <option value="BH">Bahrain</option>
//                           <option value="BD">Bangladesh</option>
//                           <option value="BB">Barbados</option>
//                           <option value="BY">Belarus</option>
//                           <option value="BE">Belgium</option>
//                           <option value="BZ">Belize</option>
//                           <option value="BJ">Benin</option>
//                           <option value="BM">Bermuda</option>
//                           <option value="BT">Bhutan</option>
//                           <option value="BO">Bolivia, Plurinational State of</option>
//                           <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
//                           <option value="BA">Bosnia and Herzegovina</option>
//                           <option value="BW">Botswana</option>
//                           <option value="BV">Bouvet Island</option>
//                           <option value="BR">Brazil</option>
//                           <option value="IO">British Indian Ocean Territory</option>
//                           <option value="BN">Brunei Darussalam</option>
//                           <option value="BG">Bulgaria</option>
//                           <option value="BF">Burkina Faso</option>
//                           <option value="BI">Burundi</option>
//                           <option value="KH">Cambodia</option>
//                           <option value="CM">Cameroon</option>
//                           <option value="CA">Canada</option>
//                           <option value="CV">Cape Verde</option>
//                           <option value="KY">Cayman Islands</option>
//                           <option value="CF">Central African Republic</option>
//                           <option value="TD">Chad</option>
//                           <option value="CL">Chile</option>
//                           <option value="CN">China</option>
//                           <option value="CX">Christmas Island</option>
//                           <option value="CC">Cocos (Keeling) Islands</option>
//                           <option value="CO">Colombia</option>
//                           <option value="KM">Comoros</option>
//                           <option value="CG">Congo</option>
//                           <option value="CD">Congo, the Democratic Republic of the</option>
//                           <option value="CK">Cook Islands</option>
//                           <option value="CR">Costa Rica</option>
//                           <option value="CI">Côte d'Ivoire</option>
//                           <option value="HR">Croatia</option>
//                           <option value="CU">Cuba</option>
//                           <option value="CW">Curaçao</option>
//                           <option value="CY">Cyprus</option>
//                           <option value="CZ">Czech Republic</option>
//                           <option value="DK">Denmark</option>
//                           <option value="DJ">Djibouti</option>
//                           <option value="DM">Dominica</option>
//                           <option value="DO">Dominican Republic</option>
//                           <option value="EC">Ecuador</option>
//                           <option value="EG">Egypt</option>
//                           <option value="SV">El Salvador</option>
//                           <option value="GQ">Equatorial Guinea</option>
//                           <option value="ER">Eritrea</option>
//                           <option value="EE">Estonia</option>
//                           <option value="ET">Ethiopia</option>
//                           <option value="FK">Falkland Islands (Malvinas)</option>
//                           <option value="FO">Faroe Islands</option>
//                           <option value="FJ">Fiji</option>
//                           <option value="FI">Finland</option>
//                           <option value="FR">France</option>
//                           <option value="GF">French Guiana</option>
//                           <option value="PF">French Polynesia</option>
//                           <option value="TF">French Southern Territories</option>
//                           <option value="GA">Gabon</option>
//                           <option value="GM">Gambia</option>
//                           <option value="GE">Georgia</option>
//                           <option value="DE">Germany</option>
//                           <option value="GH">Ghana</option>
//                           <option value="GI">Gibraltar</option>
//                           <option value="GR">Greece</option>
//                           <option value="GL">Greenland</option>
//                           <option value="GD">Grenada</option>
//                           <option value="GP">Guadeloupe</option>
//                           <option value="GU">Guam</option>
//                           <option value="GT">Guatemala</option>
//                           <option value="GG">Guernsey</option>
//                           <option value="GN">Guinea</option>
//                           <option value="GW">Guinea-Bissau</option>
//                           <option value="GY">Guyana</option>
//                           <option value="HT">Haiti</option>
//                           <option value="HM">Heard Island and McDonald Islands</option>
//                           <option value="VA">Holy See (Vatican City State)</option>
//                           <option value="HN">Honduras</option>
//                           <option value="HK">Hong Kong</option>
//                           <option value="HU">Hungary</option>
//                           <option value="IS">Iceland</option>
//                           <option value="IN">India</option>
//                           <option value="ID">Indonesia</option>
//                           <option value="IR">Iran, Islamic Republic of</option>
//                           <option value="IQ">Iraq</option>
//                           <option value="IE">Ireland</option>
//                           <option value="IM">Isle of Man</option>
//                           <option value="IL">Israel</option>
//                           <option value="IT">Italy</option>
//                           <option value="JM">Jamaica</option>
//                           <option value="JP">Japan</option>
//                           <option value="JE">Jersey</option>
//                           <option value="JO">Jordan</option>
//                           <option value="KZ">Kazakhstan</option>
//                           <option value="KE">Kenya</option>
//                           <option value="KI">Kiribati</option>
//                           <option value="KP">Korea, Democratic People's Republic of</option>
//                           <option value="KR">Korea, Republic of</option>
//                           <option value="KW">Kuwait</option>
//                           <option value="KG">Kyrgyzstan</option>
//                           <option value="LA">Lao People's Democratic Republic</option>
//                           <option value="LV">Latvia</option>
//                           <option value="LB">Lebanon</option>
//                           <option value="LS">Lesotho</option>
//                           <option value="LR">Liberia</option>
//                           <option value="LY">Libya</option>
//                           <option value="LI">Liechtenstein</option>
//                           <option value="LT">Lithuania</option>
//                           <option value="LU">Luxembourg</option>
//                           <option value="MO">Macao</option>
//                           <option value="MK">Macedonia, the former Yugoslav Republic of</option>
//                           <option value="MG">Madagascar</option>
//                           <option value="MW">Malawi</option>
//                           <option value="MY">Malaysia</option>
//                           <option value="MV">Maldives</option>
//                           <option value="ML">Mali</option>
//                           <option value="MT">Malta</option>
//                           <option value="MH">Marshall Islands</option>
//                           <option value="MQ">Martinique</option>
//                           <option value="MR">Mauritania</option>
//                           <option value="MU">Mauritius</option>
//                           <option value="YT">Mayotte</option>
//                           <option value="MX">Mexico</option>
//                           <option value="FM">Micronesia, Federated States of</option>
//                           <option value="MD">Moldova, Republic of</option>
//                           <option value="MC">Monaco</option>
//                           <option value="MN">Mongolia</option>
//                           <option value="ME">Montenegro</option>
//                           <option value="MS">Montserrat</option>
//                           <option value="MA">Morocco</option>
//                           <option value="MZ">Mozambique</option>
//                           <option value="MM">Myanmar</option>
//                           <option value="NA">Namibia</option>
//                           <option value="NR">Nauru</option>
//                           <option value="NP">Nepal</option>
//                           <option value="NL">Netherlands</option>
//                           <option value="NC">New Caledonia</option>
//                           <option value="NZ">New Zealand</option>
//                           <option value="NI">Nicaragua</option>
//                           <option value="NE">Niger</option>
//                           <option value="NG">Nigeria</option>
//                           <option value="NU">Niue</option>
//                           <option value="NF">Norfolk Island</option>
//                           <option value="MP">Northern Mariana Islands</option>
//                           <option value="NO">Norway</option>
//                           <option value="OM">Oman</option>
//                           <option value="PK">Pakistan</option>
//                           <option value="PW">Palau</option>
//                           <option value="PS">Palestinian Territory, Occupied</option>
//                           <option value="PA">Panama</option>
//                           <option value="PG">Papua New Guinea</option>
//                           <option value="PY">Paraguay</option>
//                           <option value="PE">Peru</option>
//                           <option value="PH">Philippines</option>
//                           <option value="PN">Pitcairn</option>
//                           <option value="PL">Poland</option>
//                           <option value="PT">Portugal</option>
//                           <option value="PR">Puerto Rico</option>
//                           <option value="QA">Qatar</option>
//                           <option value="RE">Réunion</option>
//                           <option value="RO">Romania</option>
//                           <option value="RU">Russian Federation</option>
//                           <option value="RW">Rwanda</option>
//                           <option value="BL">Saint Barthélemy</option>
//                           <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
//                           <option value="KN">Saint Kitts and Nevis</option>
//                           <option value="LC">Saint Lucia</option>
//                           <option value="MF">Saint Martin (French part)</option>
//                           <option value="PM">Saint Pierre and Miquelon</option>
//                           <option value="VC">Saint Vincent and the Grenadines</option>
//                           <option value="WS">Samoa</option>
//                           <option value="SM">San Marino</option>
//                           <option value="ST">Sao Tome and Principe</option>
//                           <option value="SA">Saudi Arabia</option>
//                           <option value="SN">Senegal</option>
//                           <option value="RS">Serbia</option>
//                           <option value="SC">Seychelles</option>
//                           <option value="SL">Sierra Leone</option>
//                           <option value="SG">Singapore</option>
//                           <option value="SX">Sint Maarten (Dutch part)</option>
//                           <option value="SK">Slovakia</option>
//                           <option value="SI">Slovenia</option>
//                           <option value="SB">Solomon Islands</option>
//                           <option value="SO">Somalia</option>
//                           <option value="ZA">South Africa</option>
//                           <option value="GS">South Georgia and the South Sandwich Islands</option>
//                           <option value="SS">South Sudan</option>
//                           <option value="ES">Spain</option>
//                           <option value="LK">Sri Lanka</option>
//                           <option value="SD">Sudan</option>
//                           <option value="SR">Suriname</option>
//                           <option value="SJ">Svalbard and Jan Mayen</option>
//                           <option value="SZ">Swaziland</option>
//                           <option value="SE">Sweden</option>
//                           <option value="CH">Switzerland</option>
//                           <option value="SY">Syrian Arab Republic</option>
//                           <option value="TW">Taiwan, Province of China</option>
//                           <option value="TJ">Tajikistan</option>
//                           <option value="TZ">Tanzania, United Republic of</option>
//                           <option value="TH">Thailand</option>
//                           <option value="TL">Timor-Leste</option>
//                           <option value="TG">Togo</option>
//                           <option value="TK">Tokelau</option>
//                           <option value="TO">Tonga</option>
//                           <option value="TT">Trinidad and Tobago</option>
//                           <option value="TN">Tunisia</option>
//                           <option value="TR">Turkey</option>
//                           <option value="TM">Turkmenistan</option>
//                           <option value="TC">Turks and Caicos Islands</option>
//                           <option value="TV">Tuvalu</option>
//                           <option value="UG">Uganda</option>
//                           <option value="UA">Ukraine</option>
//                           <option value="AE">United Arab Emirates</option>
//                           <option value="GB">United Kingdom</option>
//                           <option value="UM">United States Minor Outlying Islands</option>
//                           <option value="UY">Uruguay</option>
//                           <option value="UZ">Uzbekistan</option>
//                           <option value="VU">Vanuatu</option>
//                           <option value="VE">Venezuela, Bolivarian Republic of</option>
//                           <option value="VN">Viet Nam</option>
//                           <option value="VG">Virgin Islands, British</option>
//                           <option value="VI">Virgin Islands, U.S.</option>
//                           <option value="WF">Wallis and Futuna</option>
//                           <option value="EH">Western Sahara</option>
//                           <option value="YE">Yemen</option>
//                           <option value="ZM">Zambia</option>
//                           <option value="ZW">Zimbabwe</option>
//                       </select>
//                       <div class="invalid-feedback">
//                       Please select a valid country.
//                       </div>
//                   </div>
//                   <div class="col-md-4 mb-3">
//                       <label for="state">State</label>
//                       <select class="custom-select d-block w-100" id="state" required>
//                       <option value="">Choose...</option>
//                           <option value="AL">Alabama</option>
//                           <option value="AK">Alaska</option>
//                           <option value="AZ">Arizona</option>
//                           <option value="AR">Arkansas</option>
//                           <option value="CA">California</option>
//                           <option value="CO">Colorado</option>
//                           <option value="CT">Connecticut</option>
//                           <option value="DE">Delaware</option>
//                           <option value="DC">District Of Columbia</option>
//                           <option value="FL">Florida</option>
//                           <option value="GA">Georgia</option>
//                           <option value="HI">Hawaii</option>
//                           <option value="ID">Idaho</option>
//                           <option value="IL">Illinois</option>
//                           <option value="IN">Indiana</option>
//                           <option value="IA">Iowa</option>
//                           <option value="KS">Kansas</option>
//                           <option value="KY">Kentucky</option>
//                           <option value="LA">Louisiana</option>
//                           <option value="ME">Maine</option>
//                           <option value="MD">Maryland</option>
//                           <option value="MA">Massachusetts</option>
//                           <option value="MI">Michigan</option>
//                           <option value="MN">Minnesota</option>
//                           <option value="MS">Mississippi</option>
//                           <option value="MO">Missouri</option>
//                           <option value="MT">Montana</option>
//                           <option value="NE">Nebraska</option>
//                           <option value="NV">Nevada</option>
//                           <option value="NH">New Hampshire</option>
//                           <option value="NJ">New Jersey</option>
//                           <option value="NM">New Mexico</option>
//                           <option value="NY">New York</option>
//                           <option value="NC">North Carolina</option>
//                           <option value="ND">North Dakota</option>
//                           <option value="OH">Ohio</option>
//                           <option value="OK">Oklahoma</option>
//                           <option value="OR">Oregon</option>
//                           <option value="PA">Pennsylvania</option>
//                           <option value="RI">Rhode Island</option>
//                           <option value="SC">South Carolina</option>
//                           <option value="SD">South Dakota</option>
//                           <option value="TN">Tennessee</option>
//                           <option value="TX">Texas</option>
//                           <option value="UT">Utah</option>
//                           <option value="VT">Vermont</option>
//                           <option value="VA">Virginia</option>
//                           <option value="WA">Washington</option>
//                           <option value="WV">West Virginia</option>
//                           <option value="WI">Wisconsin</option>
//                           <option value="WY">Wyoming</option>
//                       </select>
//                       <div class="invalid-feedback">
//                       Please provide a valid state.
//                       </div>
//                   </div>
//                   <div class="col-md-3 mb-3">
//                       <label for="zip">Zip</label>
//                       <input type="text" class="form-control" id="zip" placeholder="" required></input>
//                       <div class="invalid-feedback">
//                       Zip code required.
//                       </div>
//                   </div>
//               </div>

//               <hr class="mb-4"></hr>
//                   <div class="custom-control custom-checkbox">
//                       <input type="checkbox" class="custom-control-input" id="same-address"></input>
//                       <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
//                   </div>
//                   <div class="custom-control custom-checkbox">
//                       <input type="checkbox" class="custom-control-input" id="save-info"></input>
//                       <label class="custom-control-label" for="save-info">Save this information for next time</label>
//                   </div>
                  
//                   <h4 class="mb-3">Payment</h4>

//                   <div class="d-block my-3">
//                   <div class="custom-control custom-radio">
//                       <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required></input>
//                       <label class="custom-control-label" for="credit">Credit card</label>
//                   </div>
//                   <div class="custom-control custom-radio">
//                       <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required></input>
//                       <label class="custom-control-label" for="debit">Debit card</label>
//                   </div>
//                   <div class="custom-control custom-radio">
//                       <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required></input>
//                       <label class="custom-control-label" for="paypal">PayPal</label>
//                   </div>
//                   </div>
//           <div class="row">
//               <div class="col-md-6 mb-3">
//                   <label for="cc-name">Name on card</label>
//                   <input type="text" class="form-control" id="cc-name" placeholder="" required></input>
//                   <small class="text-muted">Full name as displayed on card</small>
//               <div class="invalid-feedback">
//                Name on card is required
//               </div>
//               </div>
//           </div>

//           <div class="row">
//           <div class="col-md-6 mb-3">
//           <label for="cc-number">Credit card number</label>
//           <input type="text" class="form-control" id="cc-number" placeholder="" required></input>
//           <div class="invalid-feedback">
//             Credit card number is required
//           </div>
//         </div>
//         </div>

          

//         <div class="row">
//         <div class="col-md-3 mb-3">
//           <label for="cc-expiration">Expiration</label>
//           <input type="text" class="form-control" id="cc-expiration" placeholder="" required></input>
//           <div class="invalid-feedback">
//             Expiration date required
//           </div>
//           </div>
//       </div>


//       <div class="row">
//       <div class="col-md-3 mb-3">
//           <label for="cc-cvv">CVV</label>
//           <input type="text" class="form-control" id="cc-cvv" placeholder="" required></input>
//           <div class="invalid-feedback">
//             Security code required
//           </div>
//         </div>
//         </div>
//         <hr class="mb-4"></hr>
//       <button class="btn btn-dark btn-lg btn-block" onClick={() => placeOrder(cart)} type="submit">Checkout</button>


//           </form>
//       </div>
//   </div>
// </div>
// <footer class="my-5 pt-5 text-muted text-center text-small">
//   <p class="mb-1">&copy; 2020 Elm</p>
//   <ul class="list-inline">
//     <li class="list-inline-item"><a href="#">Privacy</a></li>
//     <li class="list-inline-item"><a href="#">Terms</a></li>
//     <li class="list-inline-item"><a href="#">Support</a></li>
//   </ul>
// </footer>
// </body>
  
// )
// }