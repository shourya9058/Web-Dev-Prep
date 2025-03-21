document.addEventListener('DOMContentLoaded', function() {
    let url = "https://catfact.ninja/fact";
    let buttn = document.getElementById("btn");
    let text = document.getElementById("text");
    let catAnimation = document.getElementById("catAnimation");

    // Import axios
    // Add this line to import axios.  You'll need to include the axios library in your HTML file.  For example: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    
    function req() {
        return getFact();
        async function getFact() {
            try {
                let res = await axios.get(url);
                return res.data.fact;
            } catch (e) {
                console.log("Error: ", e);
                return "Oops! Our cat got tangled in the yarn. Please try again!";
            }
        }
    }

    function setLoadingState(isLoading) {
        if (isLoading) {
            buttn.innerHTML = '<div class="yarn-ball"></div><span>Fetching...</span>';
            buttn.disabled = true;
            buttn.style.opacity = "0.7";
            catAnimation.classList.add('show');
        } else {
            buttn.innerHTML = '<div class="yarn-ball"></div><span>Fetch Fact</span>';
            buttn.disabled = false;
            buttn.style.opacity = "1";
            setTimeout(() => {
                catAnimation.classList.remove('show');
            }, 1000);
        }
    }

    (async function() {
        setLoadingState(true);
        let fact = await req();
        text.innerText = fact;
        text.classList.add("show");
        setLoadingState(false);
    })();

    buttn.addEventListener("click", async () => {
        setLoadingState(true);
        text.classList.remove("show");
        
        setTimeout(async () => {
            let fact = await req();
            text.innerText = fact;
            text.classList.add("show");
            setLoadingState(false);
        }, 300);
    });

    // Optional: Add meow sound on button click
    buttn.addEventListener("click", () => {
        let meow = new Audio('https://www.soundjay.com/misc/sounds/meow-1.mp3');
        meow.play();
    });
});

