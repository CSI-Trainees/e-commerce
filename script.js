let carts=document.querySelectorAll('.addcart');

let products=[
{


	name :'VAN HEUSEN GREY SHIRT',
	tag:  'vhg',
	price: 1499,
	incart: 0
},
{


	name :'VAN HEUSEN BLUE SHIRT',
	tag:  'greyshirts2',
	price: 2499,
	incart: 0
},
{


	name :'VAN HEUSEN YELLOW SHIRT',
	tag:  'greyshirts3',
	price: 1999,
	incart: 0
},
{


	name :'VAN HEUSEN PINK SHIRT4',
	tag:  'greyshirts4',
	price: 3999,
	incart: 0
},
{


	name :'ALLEN SOLLEY BROWN SHOES',
	tag:  'greyshirts5',
	price: 3999,
	incart: 0
},
{


	name :'ALLEN SOLLEY WHITE SHOES',
	tag:  'greyshirts6',
	price: 2999,
	incart: 0
},
{


	name :'ALLEN SOLLEY GREY SHOES',
	tag:  'greyshirts7',
	price: 4999,
	incart: 0
},
{


	name :'ALLEN SOLLEY BROWN SHOES',
	tag:  'greyshirts8',
	price: 5999,
	incart: 0
},
{


	name :'ALLEN SOLLEY BELT',
	tag:  'greyshirts7',
	price: 1199,
	incart: 0
},
{


	name :'ALLEN SOLLEY WALLET',
	tag:  'greyshirts7',
	price: 1599,
	incart: 0
},
{


	name :'ALLEN SOLLEY BLACK BEG',
	tag:  'greyshirts7',
	price: 1899,
	incart: 0
},
{


	name :'ALLEN SOLLEY MASKS',
	tag:  'greyshirts7',
	price: 499,
	incart: 0
},
{


	name :'ALLEN SOLEY TOP',
	tag:  'greyshirts1',
	price: 2499,
	incart: 0
},
{


	name :'ALLEN SOLLEY TOP',
	tag:  'greyshirts1',
	price: 3499,
	incart: 0
},{


	name :'ALLEN SOLLEY TOP',
	tag:  'greyshirts1',
	price: 4499,
	incart: 0
},
{


	name :'VAN HEUSEN TOP',
	tag:  'greyshirts1',
	price: 2499,
	incart: 0
}






];


for(let i=0;i<carts.length;i++){
  carts[i].addEventListener('click', () =>{

cartNumbers(products[i]);
totalCost(products[i]);




  })



}
function onLoadCartNumbers(){
	let productNumbers =localStorage.getItem('cartNumbers');
	if(productNumbers){
		document.querySelector('.carts span' ).textContent=productNumbers;
	}
}
function cartNumbers(products){
	let productNumbers =localStorage.getItem('cartNumbers');

	
	productNumbers=parseInt(productNumbers);
	if(productNumbers){
		localStorage.setItem('cartNumbers',productNumbers+1);
		document.querySelector('.carts span' ).textContent=productNumbers+1;

	}else{
		localStorage.setItem('cartNumbers',1);
		document.querySelector('.carts span' ).textContent=1;
	}
	
setItems(products);

}



function setItems(products){
	let cartitems =localStorage.getItem('productsINCart');
	cartitems=JSON.parse(cartitems);
	if(cartitems!=null){
		if(cartitems[products.tag] ==undefined){
			cartitems={
				...cartitems,
				[products.tag]:products
			}
		}

		cartitems[products.tag].incart +=1;

	}else{
		products.incart=1;
 cartitems ={
	[products.tag]:products
}
		
	}

	

localStorage.setItem("productsINCart", JSON.stringify(cartitems));


}


function totalCost(products){
   let cartCost=localStorage.getItem('tatalCost')
  
   if(cartCost!=null){
   	 cartCost=parseInt(cartCost);
     localStorage.setItem("totalCost",cartCost +products.price);

   }else{
   	localStorage.setItem("tatalCost",products.price);

   }



	





}
function displayCart(){
	let cartitems=localStorage.getItem('productsINCart');
	cartitems=JSON.parse(cartitems);
	let Productscontainer=document.querySelector(".Products-container");

	if(cartitems && Productscontainer){
	Productscontainer.innerHTML='';
	Object.values(cartitems).map(item  =>{
		Productscontainer.innerHTML +=`
         <div class ="product">
         <i class="fa fa-trash" aria-hidden="true"></i> 
         <img src ="./img/shirts/$(item.tag).jpg">
         <span>${item.name}<span>
         </div>
  <div class="price">${item.price}</div>
  <div class="incart">${item.incart}</div>
   ${item.incart * item.price}
  
 

		`


	})
	
	}

}


onLoadCartNumbers();
displayCart();
