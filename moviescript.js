function _0x7566(_0xa54345,_0x1934f9){const _0x5ddda5=_0x5ddd();return _0x7566=function(_0x756680,_0x5bc5ad){_0x756680=_0x756680-0x6f;let _0x4f0064=_0x5ddda5[_0x756680];return _0x4f0064;},_0x7566(_0xa54345,_0x1934f9);}const _0x42d5dc=_0x7566;function _0x5ddd(){const _0x8995b3=[&#39;5952208QIjJuT&#39;,&#39;marvel&#39;,&#39;323321Hhrcpv&#39;,&#39;8PYpRNm&#39;,&#39;379995IncmrB&#39;,&#39;anime&#39;,&#39;movies&#39;,&#39;netflix&#39;,&#39;526692gYhAHX&#39;,&#39;getElementById&#39;,&#39;mediaSelect&#39;,&#39;13362JpGzMh&#39;,&#39;853347mSzSst&#39;,&#39;1336795xaFGwB&#39;,&#39;vivamax&#39;];_0x5ddd=function(){return _0x8995b3;};return _0x5ddd();}(function(_0xf703bb,_0x548121){const _0x48511c=_0x7566,_0x308997=_0xf703bb();while(!![]){try{const _0x298fdd=-parseInt(_0x48511c(0x76))/0x1+parseInt(_0x48511c(0x7c))/0x2+parseInt(_0x48511c(0x71))/0x3*(-parseInt(_0x48511c(0x77))/0x4)+parseInt(_0x48511c(0x72))/0x5+-parseInt(_0x48511c(0x70))/0x6+-parseInt(_0x48511c(0x78))/0x7+parseInt(_0x48511c(0x74))/0x8;if(_0x298fdd===_0x548121)break;else _0x308997[&#39;push&#39;](_0x308997[&#39;shift&#39;]());}catch(_0x44665d){_0x308997[&#39;push&#39;](_0x308997[&#39;shift&#39;]());}}}(_0x5ddd,0x4f970));const apiKey=&#39;47a1a7df542d3d483227f758a7317dff&#39;,moviesContainer=document[_0x42d5dc(0x7d)](_0x42d5dc(0x7a)),tvSeriesContainer=document[&#39;getElementById&#39;](&#39;tvSeries&#39;),marvelContainer=document[_0x42d5dc(0x7d)](_0x42d5dc(0x75)),animeContainer=document[_0x42d5dc(0x7d)](_0x42d5dc(0x79)),netflixContainer=document[&#39;getElementById&#39;](_0x42d5dc(0x7b)),vivamaxContainer=document[_0x42d5dc(0x7d)](_0x42d5dc(0x73)),searchInput=document[_0x42d5dc(0x7d)](&#39;search&#39;),searchResultsContainer=document[_0x42d5dc(0x7d)](&#39;searchResults&#39;),mediaSelect=document[_0x42d5dc(0x7d)](_0x42d5dc(0x6f)),companyId=0x24696;
    const horrorContainer = document.getElementById(&quot;horror&quot;);

    // Function to fetch and display popular movies
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
      );
      const data = await response.json();
      displayMovies(data.results);
    }
    
    
    
    
async function fetchHorrorMovies() {
  
    const trendingUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&amp;with_genres=27`;

    try {
        const response = await fetch(trendingUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Filter movies by horror genre (ID: 27)
        const horrorMovies = data.results.filter(movie =&gt; 
            movie.genre_ids &amp;&amp; movie.genre_ids.includes(27) // Check for horror genre
        );

        // Display the filtered horror movies
        displayHorrorMovies(horrorMovies);
    } catch (error) {
        console.error(&#39;Error fetching trending horror movies:&#39;, error);
    }
}
    
    
    // Function to fetch and display popular TV series
    async function fetchTVSeries() {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&amp;language=en-US&amp;page=1`
      );
      const data = await response.json();
      displayTVSeries(data.results);
    }
   
  
    
      async function fetchAnimeTVShows() {
      const animeGenreId = 16;
      const response = await fetch(
        `https://api.themoviedb.org/3/keyword/210024/movies?api_key=${apiKey}&amp;language=en-US&amp;page=1`
      );
      const data = await response.json();
      displayAnime(data.results);
    }


    // Function to fetch Vivamax movies
    async function fetchVivamaxMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/company/${companyId}/movies?api_key=${apiKey}&amp;language=en-US`
      );
      const data = await response.json();
      displayVivamax(data.results);
    }
    
   
 
  function initializeSwiper1() {
  new Swiper(&quot;.swiper-popular&quot;, {
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1000,
    grabCursor: true,
    spaceBetween: 15,
    centeredSlides: false,
    freeMode: true,
    slidesPerView: &quot;auto&quot;,
    autoplay: { delay: 2000 },
    scrollbar: { el: &quot;.swiper-scrollbar&quot;, hide: true }
  });
}
   
    
function initializeSwiper2() {  
  new Swiper(&quot;.swiper-2&quot;, {
    loop: true,
    speed: 1000,
    grabCursor: true,
    spaceBetween: 15,
    centeredSlides: false,
    freeMode: true,
    slidesPerView: &quot;auto&quot;,
    
    lazy: {
      loadOnTransitionStart: true,   // Starts loading images when transitioning to a new slide
      loadPrevNext: true,            // Loads images in neighboring slides for smoother navigation
    },

    // Scrollbar settings
    scrollbar: {
      el: &quot;.swiper-scrollbar&quot;,
      draggable: true,
      hide: false,
    },
    
    observer: true,
    observeParents: true,

    on: {
      init: function() {
        this.update();
      },
    },
  });
}
    
    
    
    function initializeProgressBars() {
  document.querySelectorAll(&quot;.circular-progress&quot;).forEach((progressBar) =&gt; {
    const ratingValue = parseFloat(progressBar.getAttribute(&quot;data-rating&quot;));
    const progressColor = progressBar.getAttribute(&quot;data-progress-color&quot;);
    const bgColor = progressBar.getAttribute(&quot;data-bg-color&quot;);
    

    // Set the background based on the rating instantly
    progressBar.style.background = `conic-gradient(
      ${progressColor} ${ratingValue * 36}deg, 
      ${bgColor} ${ratingValue * 36}deg
    )`;
  });
}
    
    
    async function fetchMovieImages(movieId) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}&amp;language=en`);
  const data = await response.json();

  // Check if there are any English backdrops
  if (data.backdrops.length &gt; 0) {
    return data.backdrops[0].file_path; // Return the first English backdrop path
  }

  // Fallback: fetch backdrops without specifying language if English is not available
  const fallbackResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`);
  const fallbackData = await fallbackResponse.json();

  return fallbackData.backdrops.length &gt; 0 ? fallbackData.backdrops[0].file_path : null; // Return any available backdrop or null
}

async function displayDetails(card, movie, rating) {
  const backdropPath = await fetchMovieImages(movie.id);
 const imageUrl = backdropPath ? `https://image.tmdb.org/t/p/w500${backdropPath}` : &#39;https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-VLNDBGMO8xZGWlbLfDKXa2RCqhljShc38FN-h7tFSTRnBAdqvf-5m6GQp3dxhQozWbRAe7d2AHlBae3sII-p0w9tDHVY1_nvg45mAs6K9b-fNnmvGFyhOcTqxzuYxNEW1MoEbHdeNvNoTM4QG3XCe5S_QBhSLfjSXnl9EIL4Kns3t0B175ymTH6d/s1600/QQQ.jpg&#39;;
 // Fallback image if no backdrop is found

  card.innerHTML = `
    <a href='https://www.zxcstream.site/p/visitzxcstreamonfacebook.html?movieId=${movie.id}' onclick='adLink()'>
      <div class='poster-wrapper'>
        <div class='play-hover'>
          <div class='playBut'>
            <svg enable-background='new 0 0 213.7 213.7' height='100%' version='1.1' viewBox='0 0 213.7 213.7' width='100%' x='0px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'>
              <polygon class='triangle' fill='none' points='73.5,62.5 148.5,105.8 73.5,149.1' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='7'/>
              <circle class='circle' cx='106.8' cy='106.8' fill='none' r='103.3' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='7'/>
            </svg>
          </div>
        </div>
        <img alt='${movie.title}' src='${imageUrl}'/>
      </div>
      
      
      
      <div class='circular-progress' data-bg-color='black' data-inner-circle-color='lightgrey' data-progress-color='crimson' data-rating='${rating}'>
        <div class='inner-circle'/>
        <p class='rating'>${rating.toFixed(1)}</p>
      </div>
      <div class='title-year-wrapper'>
        <h3>${movie.title}</h3>
        <p class='released-year'>${new Date(movie.release_date).getFullYear()}</p>
      </div>
    </a>`;
  initializeProgressBars();
}


async function fetchTVImages(tvId) {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${tvId}/images?api_key=${apiKey}&amp;language=en`);
  const data = await response.json();

  // Check if there are any English backdrops
  if (data.backdrops.length &gt; 0) {
    return data.backdrops[0].file_path; // Return the first English backdrop path
  }

  // Fallback: fetch backdrops without specifying language if English is not available
  const fallbackResponse = await fetch(`https://api.themoviedb.org/3/tv/${tvId}/images?api_key=${apiKey}`);
  const fallbackData = await fallbackResponse.json();

  return fallbackData.backdrops.length &gt; 0 ? fallbackData.backdrops[0].file_path : null; // Return any available backdrop or null
}

async function displaytvDetails(card, tv, rating) {
  const backdropPath = await fetchTVImages(tv.id);
  const imageUrl = backdropPath ? `https://image.tmdb.org/t/p/w500${backdropPath}` : &#39;https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-VLNDBGMO8xZGWlbLfDKXa2RCqhljShc38FN-h7tFSTRnBAdqvf-5m6GQp3dxhQozWbRAe7d2AHlBae3sII-p0w9tDHVY1_nvg45mAs6K9b-fNnmvGFyhOcTqxzuYxNEW1MoEbHdeNvNoTM4QG3XCe5S_QBhSLfjSXnl9EIL4Kns3t0B175ymTH6d/s1600/QQQ.jpg&#39;; // Fallback image if no backdrop is found

  card.innerHTML = `
    <a href='https://www.zxcstream.site/p/visitzxcstreamonfacebook.html?tvId=${tv.id}' onclick='adLink()'>
     <div class='poster-wrapper'>
    <div class='play-hover'>
      <div class='playBut'>
        <svg enable-background='new 0 0 213.7 213.7' height='100%' version='1.1' viewBox='0 0 213.7 213.7' width='100%' x='0px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'>
          <polygon class='triangle' fill='none' points='73.5,62.5 148.5,105.8 73.5,149.1' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='7'/>
          <circle class='circle' cx='106.8' cy='106.8' fill='none' r='103.3' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='7'/>
        </svg>
      </div>
    </div>
        <img alt='${tv.name}' src='${imageUrl}'/>
        </div>
    
     
         <div class='circular-progress' data-bg-color='black' data-inner-circle-color='lightgrey' data-progress-color='crimson' data-rating='${rating}'>
        <div class='inner-circle'/>
        <p class='rating'>${rating.toFixed(1)}</p> <!-- Display rating in the center -->
      </div>
      
       <div class='title-year-wrapper'>
      <h3>${tv.name}</h3>
      <p class='released-year'>${new Date(tv.first_air_date).getFullYear()}</p>
        </div>
   
    </a>`;
      initializeProgressBars();
}
 
function displayMovies(movies) {
  moviesContainer.innerHTML = &quot;&quot;; // Clear existing movies
  movies.forEach(async (movie) =&gt; {
    const card = document.createElement(&quot;div&quot;);
    card.className = &quot;swiper-slide&quot;;
    const rating = movie.vote_average; // Use actual rating  
    await displayDetails(card, movie, rating); // Await displayDetails to ensure image fetch is completed
    moviesContainer.appendChild(card);
  });
  initializeSwiper1();
}
    
function displayTVSeries(tvSeries) {
  tvSeriesContainer.innerHTML = &quot;&quot;; // Clear existing TV series
  tvSeries.forEach(async (tv) =&gt; {
    const rating = tv.vote_average; // Use actual rating for TV series
    const card = document.createElement(&quot;div&quot;);
    card.className = &quot;swiper-slide&quot;;
    await displaytvDetails(card, tv, rating); // Await displaytvDetails to ensure image fetch is completed
    tvSeriesContainer.appendChild(card);
  });

  // Initialize Swiper after all TV series cards are appended
  initializeSwiper2();
} 
    

// Function to display horror movies
function displayHorrorMovies(movies) {
  horrorContainer.innerHTML = &quot;&quot;; // Clear existing content
  movies.forEach((movie) =&gt; {
    const card = document.createElement(&quot;div&quot;);
    card.className = &quot;swiper-slide&quot;;
    const rating = movie.vote_average; // Use actual rating for horror movies
    displayDetails(card, movie, rating)
    horrorContainer.appendChild(card);
  });
  initializeSwiper2();
  
}
    
    // Function to display anime
 function  displayAnime(movies) {
   animeContainer.innerHTML = &quot;&quot;; // Clear existing content
  movies.forEach((movie) =&gt; {
    const card = document.createElement(&quot;div&quot;);
    card.className = &quot;swiper-slide&quot;;
    const rating = movie.vote_average; // Use actual rating for horror movies
    displayDetails(card, movie, rating)
    animeContainer.appendChild(card);
  });
  initializeSwiper2();
 
}  
    
    
        // Function to display Vivamax movies
 function  displayVivamax(movies) {
   vivamaxContainer.innerHTML = &quot;&quot;; // Clear existing content
  movies.forEach((movie) =&gt; {
    const card = document.createElement(&quot;div&quot;);
    card.className = &quot;swiper-slide&quot;;
    const rating = movie.vote_average; // Use actual rating for horror movies
    displayDetails(card, movie, rating)
    vivamaxContainer.appendChild(card);
  });
  initializeSwiper2();
 
}   
    
    
    
    
    
    
    
    



   

    // Search function
 // Search function

    async function searchMedia() {
      const query = searchInput.value.trim();
      const mediaType = mediaSelect.value;
      const PopularMovies = document.getElementById(&quot;PopularMovies&quot;);
      const Horror = document.getElementById(&quot;Horror&quot;);
      const TVSeries = document.getElementById(&quot;TVSeries&quot;);
      const Anime = document.getElementById(&quot;Anime&quot;);
      const Vivamax = document.getElementById(&quot;Vivamax&quot;);
      const bgWrapper = document.getElementById(&quot;backgroundWrapper&quot;);

      if (query.length &lt; 1) {
        PopularMovies.style.display = &quot;block&quot;;
 	    Horror.style.display = &quot;block&quot;;
        TVSeries.style.display = &quot;block&quot;;
        Anime.style.display = &quot;block&quot;;   
        Vivamax.style.display = &quot;block&quot;;
        bgWrapper.style.display = &quot;block&quot;;
        searchResultsContainer.innerHTML = &quot;&quot;;

        return;
      } else {
        PopularMovies.style.display = &quot;none&quot;;
  	    Horror.style.display = &quot;none&quot;;
        TVSeries.style.display = &quot;none&quot;;
        Anime.style.display = &quot;none&quot;;
        Vivamax.style.display = &quot;none&quot;;
        bgWrapper.style.display = &quot;none&quot;;
      }

      const response = await fetch(
        `https://api.themoviedb.org/3/search/${mediaType}?api_key=${apiKey}&amp;query=${query}&amp;include_adult=false`
      );
      const data = await response.json();
      displaySearchResults(data.results, mediaType);
    }

    function displaySearchResults(results, mediaType) {
      searchResultsContainer.innerHTML = &quot;&quot;;

      results.forEach((item) =&gt; {
        if (item.vote_average &gt; 0 &amp;&amp; item.poster_path) {
          const card = document.createElement(&quot;div&quot;);
          card.className = &quot;search-image&quot;;
    const rating = item.vote_average; // Rating to pass to the progress bar
          card.innerHTML = `
    
    		 <a href='https://www.zxcstream.site/p/visitzxcstreamonfacebook.html?${mediaType}Id=${             item.id           }' onclick='adLink()'>
           <div class='search-poster-container'>    
           <div class='play-hover'>
          <div class='playBut'>
            <svg enable-background='new 0 0 213.7 213.7' height='100%' version='1.1' viewBox='0 0 213.7 213.7' width='100%' x='0px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'>
              <polygon class='triangle' fill='none' points='73.5,62.5 148.5,105.8 73.5,149.1' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='7'/>
              <circle class='circle' cx='106.8' cy='106.8' fill='none' r='103.3' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='7'/>
            </svg>
          </div>
        </div>
           <img alt='${item.title || item.name}' src='https://image.tmdb.org/t/p/w500${                       item.poster_path                     }'/>
		  </div>
                  
                   <div class='circular-progress' data-bg-color='black' data-inner-circle-color='lightgrey' data-progress-color='crimson' data-rating='${rating}'>
           		   <div class='inner-circle'>
            		<p class='rating'>${rating.toFixed(1)}</p>
                   </div>
         		   </div>
               
               <div class='search-title-year'>
               <h3 class='search-title'>${item.title || item.name}</h3> 
                    <h3 class='search-year'>${
                      mediaType === &quot;movie&quot;
                        ? `${new Date(item.release_date).getFullYear()}`
                        : `${new Date(item.first_air_date).getFullYear()}`
                    }</h3>
                </div>
                </a>

                
            `;
          searchResultsContainer.appendChild(card);
     initializeProgressBars();
        }
    
      });
    }

    searchInput.addEventListener(&quot;input&quot;, searchMedia);
    mediaSelect.addEventListener(&quot;change&quot;, () =&gt; {
      searchInput.value = &quot;&quot;;
      searchResultsContainer.innerHTML = &quot;&quot;;
    });
    
    
    
    
         document.addEventListener(&quot;contextmenu&quot;, event =&gt; event.preventDefault());
document.addEventListener(&quot;keydown&quot;, event =&gt; {
  if (event.key === &quot;F12&quot; || (event.ctrlKey &amp;&amp; event.shiftKey &amp;&amp; event.key === &quot;I&quot;)) {
    event.preventDefault(); // Disable DevTools shortcuts
  }
});
    
    


    
      document.addEventListener(&quot;DOMContentLoaded&quot;, () =&gt; {
         fetchMovies();
    fetchHorrorMovies();
    fetchTVSeries();
    fetchAnimeTVShows();
    fetchVivamaxMovies();
    fetchMarvelMovies();
    fetchNetflixMovies();
    });

