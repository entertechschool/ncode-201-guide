Formularios:  
```HTML
<div class="form">
	<form id="new-store-form">
		<fieldset>
				<legend>Enter New Cookie Store:</legend>
				<label for="name-input">Store Name:</label>
				<input name="name" id="name-input" type="text" />
				<label for="min-cust-input">Min Customers / hour:</label>
				<input name="minCust" id="min-cust-input" type="text" />
				<label for="max-cust-input">Max Customers / hour:</label>
				<input name="maxCust" id="max-cust-input" type="text" />
				<label for="avg-cookies-input">Average Cookies sold / hour:</label>
				<input name="avgCookies" id="avg-cookies-input" type="text" />
				<button id="submit-button" type="submit">SUBMIT</button>
		</fieldset>
	</form>
</div>
```  

EventListeners:  
```javascript
console.log('----------------Event Listeners-----------------');

const submitButtonEl = document.getElementById('new-store-form');

submitButtonEl.addEventListener('submit', function(event){
  event.preventDefault(); //hablen acerca de esto
  event.stopPropagation(); //hablen acerca de esto

  const storeNameInput = event.target.name.value;
  const maxCustInput = event.target.maxCust.value;
  const minCustInput = event.target.minCust.value;
  const avgCookieInput = event.target.avgCookies.value;

  console.log(event.target);

  console.log('------NEW STORE DETAILS:-----');

  const newStore = new CookieStore(storeNameInput, maxCustInput, minCustInput, avgCookieInput);

  console.log(newStore);

});
```
