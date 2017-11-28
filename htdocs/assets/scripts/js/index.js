(function(){
 const app = (function(){
 	
 	'user strict';

 	const xhr = new XMLHttpRequest();
 	const box_spotlight = document.querySelector('[data-js="content-spotlight"]');
 	const box_brazil = document.querySelector('[data-js="content-brazil"]');
 	const box_world = document.querySelector('[data-js="content-world"]');

 	function requestData(){
 		xhr.open('GET', '../../data.json');
 		xhr.send();
 		xhr.addEventListener('readystatechange', handleStatus, false);
 	}

 	function handleStatus(){
    if(isRequestOk(xhr)){
    	const data = parseData(xhr);
    	templateSpotlight(data.section);
    	templateBrazil(data.section);
    	templateWorld(data.section);
    }
 	}

 	function isRequestOk(data){
 	  return data.readyState === 4 && data.status === 200;
 	}

 	function parseData(data){
 	  return JSON.parse(data.responseText);
 	}


 	function templateSpotlight(obj){
 		const info = getData(obj,0);
    
    let markup = `
	    <div class="col-xs-6 col-md-6 col-lg-6">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[0].image}">
					</figure>
					<figcaption>
		         <span>${info[0].label}</span>
		         <p>${info[0].title}</p>
		         <p>${info[0].description}</p>
		      </figcaption>
			  </div>
			</div>
			<div class="col-xs-6 col-md-6 col-lg-6">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[1].image}">
					</figure>
					<figcaption>
	           <span>${info[1].label}</span>
		         <p>${info[1].title}</p>
		         <p>${info[1].description}</p>
	        </figcaption>
	     	</div>
			</div>
			<div class="col-xs-6 col-md-6 col-lg-6">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[2].image}">
					</figure>
					<figcaption>
	           <span>${info[2].label}</span>
		         <p>${info[2].title}</p>
		         <p>${info[2].description}</p>
	        </figcaption>
	     	</div>
			</div>
			<div class="col-xs-6 col-md-6 col-lg-6">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[3].image}">
					</figure>
					<figcaption>
	           <span>${info[3].label}</span>
		         <p>${info[3].title}</p>
		         <p>${info[3].description}</p>
	        </figcaption>
	     	</div>
			</div>
			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[4].image}">
					</figure>
					<figcaption>
	           <span>${info[4].label}</span>
		         <p>${info[4].title}</p>
		         <p>${info[4].description}</p>
	        </figcaption>
		    </div>
			</div>
			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[5].image}">
					</figure>
					<figcaption>
	           <span>${info[5].label}</span>
		         <p>${info[5].title}</p>
		         <p>${info[5].description}</p>
	        </figcaption>
		    </div>
			</div>
			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[6].image}">
					</figure>
					<figcaption>
	           <span>${info[6].label}</span>
		         <p>${info[6].title}</p>
		         <p>${info[6].description}</p>
	        </figcaption>
		    </div>
			</div>
			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[7].image}">
					</figure>
					<figcaption>
	           <span>${info[7].label}</span>
		         <p>${info[7].title}</p>
		         <p>${info[7].description}</p>
	        </figcaption>
		    </div>
			</div>
    `
    box_spotlight.innerHTML = markup;
 	}

 	function templateBrazil(obj){
 		const info = getData(obj,1);

 		let markup = `
 			<h2>Brasil</h2>
 			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[0].image}">
					</figure>
					<figcaption>
	           <span>${info[0].label}</span>
		         <p>${info[0].title}</p>
		         <p>${info[0].description}</p>
	        </figcaption>
		    </div>
			</div>
			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[1].image}">
					</figure>
					<figcaption>
	           <span>${info[1].label}</span>
		         <p>${info[1].title}</p>
		         <p>${info[1].description}</p>
	        </figcaption>
		    </div>
			</div>
			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[2].image}">
					</figure>
					<figcaption>
	           <span>${info[2].label}</span>
		         <p>${info[2].title}</p>
		         <p>${info[2].description}</p>
	        </figcaption>
		    </div>
			</div>
			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[3].image}">
					</figure>
					<figcaption>
	           <span>${info[3].label}</span>
		         <p>${info[3].title}</p>
		         <p>${info[3].description}</p>
	        </figcaption>
		    </div>
			</div>

			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[4].image}">
					</figure>
					<figcaption>
	           <span>${info[4].label}</span>
		         <p>${info[4].title}</p>
		         <p>${info[4].description}</p>
	        </figcaption>
		    </div>
			</div>
			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[5].image}">
					</figure>
					<figcaption>
	           <span>${info[5].label}</span>
		         <p>${info[5].title}</p>
		         <p>${info[5].description}</p>
	        </figcaption>
		    </div>
			</div>
			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[6].image}">
					</figure>
					<figcaption>
	           <span>${info[6].label}</span>
		         <p>${info[6].title}</p>
		         <p>${info[6].description}</p>
	        </figcaption>
		    </div>
			</div>
			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[7].image}">
					</figure>
					<figcaption>
	           <span>${info[7].label}</span>
		         <p>${info[7].title}</p>
		         <p>${info[7].description}</p>
	        </figcaption>
		    </div>
			</div>
 		`
 		box_brazil.innerHTML = markup;
 	}

 	function templateWorld(obj){
 		const info = getData(obj,2);

 		let markup = `
 			<h3>Mundo</h3>
	    <div class="col-xs-6 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[0].image}">
					</figure>
					<figcaption>
		         <span>${info[0].label}</span>
		         <p>${info[0].title}</p>
		         <p>${info[0].description}</p>
		      </figcaption>
			  </div>
			</div>
			<div class="col-xs-6 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[1].image}">
					</figure>
					<figcaption>
	           <span>${info[1].label}</span>
		         <p>${info[1].title}</p>
		         <p>${info[1].description}</p>
	        </figcaption>
	     	</div>
			</div>
			<div class="col-xs-6 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[2].image}">
					</figure>
					<figcaption>
	           <span>${info[2].label}</span>
		         <p>${info[2].title}</p>
		         <p>${info[2].description}</p>
	        </figcaption>
	     	</div>
			</div>
			<div class="col-xs-6 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[3].image}">
					</figure>
					<figcaption>
	           <span>${info[3].label}</span>
		         <p>${info[3].title}</p>
		         <p>${info[3].description}</p>
	        </figcaption>
	     	</div>
			</div>
			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[4].image}">
					</figure>
					<figcaption>
	           <span>${info[4].label}</span>
		         <p>${info[4].title}</p>
		         <p>${info[4].description}</p>
	        </figcaption>
		    </div>
			</div>
			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[5].image}">
					</figure>
					<figcaption>
	           <span>${info[5].label}</span>
		         <p>${info[5].title}</p>
		         <p>${info[5].description}</p>
	        </figcaption>
		    </div>
			</div>
			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[6].image}">
					</figure>
					<figcaption>
	           <span>${info[6].label}</span>
		         <p>${info[6].title}</p>
		         <p>${info[6].description}</p>
	        </figcaption>
		    </div>
			</div>
			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="common-box-spotlight">
					<figure>
						<img src="../../assets/media/${info[7].image}">
					</figure>
					<figcaption>
	           <span>${info[7].label}</span>
		         <p>${info[7].title}</p>
		         <p>${info[7].description}</p>
	        </figcaption>
		    </div>
			</div>
    `
    box_world.innerHTML = markup;
 	}

 	function getData(elem,index){
    	const elements = elem.map((item)=> item);
    	const properties = elements[index].data.map((item)=> item);

    	return properties;
 	}

 	return {
 		requestData
 	};
 })();

 app.requestData();
})();