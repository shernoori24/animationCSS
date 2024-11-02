// Look for .hamburger
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");



// On click
hamburger.addEventListener("click", () => {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  //display nav
  nav.classList.toggle("show");
});



// ++++++++++++++++ les ports  de la page +++++++++++++++++++++++



const cardsGrid = document.querySelector(".cards-grid");
const cards = document.querySelectorAll(".card");

const loadContent = async () => {
  const results = await fetch("https://picsum.photos/v2/list")
  const data = await results.json()
  createCards(data)
}
loadContent()


const createCards = data => {

  let cardsList = '';

  for(let i = 0; i < cards.length; i++) {

    const newCard = `
    <div class="card">
      <img src=${data[i].download_url} class="top-img" />
      <div class="content">
        <h3 class="card-title">Lorem, ipsum dolor sit amet</h3>
        <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus.</p>
        <p class="card-text">Lorem, ipsum dolor</p>
      </div>
    </div>
    `
    cardsList += newCard;
    console.log(data[i].download_url);

  }

  cardsGrid.innerHTML = cardsList;

}
// +++++++++++++++++ backgroune ++++++++++++++++++ 

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

const count_particles = document.querySelector(".js-count-particles");
const stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);

function update() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
}

requestAnimationFrame(update);



