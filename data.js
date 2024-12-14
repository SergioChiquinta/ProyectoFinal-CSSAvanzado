document.getElementById('theme-toggle').addEventListener('click', function() {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'is-light') {
        html.setAttribute('data-theme', 'is-dark');
        this.textContent = 'Cambiar a Modo Claro';
    } else {
        html.setAttribute('data-theme', 'is-light');
        this.textContent = 'Cambiar a Modo Oscuro';
    }
    handleThemeChange();
});

const handleThemeChange = () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'is-dark';
    document.querySelectorAll('.card').forEach(card => {
        card.classList.toggle('is-dark', isDark);
        card.classList.toggle('is-light', !isDark);
    });
};

document.getElementById('add-post').addEventListener('click', function() {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    if (title && content) {
        const date = new Date();
        const formattedDate = date.toLocaleString();
        const postSection = document.getElementById('posts');
        const post = document.createElement('div');
        post.classList.add('card');

        // Verificar el tema actual y aplicar clases adecuadas
        const isDark = document.documentElement.getAttribute('data-theme') === 'is-dark';
        post.innerHTML = `
            <div class="card-content">
                <p class="title">${title}</p>
                <p class="subtitle">${formattedDate}</p>
                <div class="content">${content}</div>
            </div>
        `;
        
        // Aplicar clase de tema oscuro si es necesario
        if (isDark) {
            post.classList.add('is-dark'); // Asegúrate de que este estilo esté definido en tu CSS
        } else {
            post.classList.add('is-light'); // Asegúrate de que este estilo esté definido en tu CSS
        }

        postSection.appendChild(post);
        document.getElementById('post-title').value = '';
        document.getElementById('post-content').value = '';
    }
});

// Funcionalidad del carrusel
let currentAboutIndex = 0;
let currentContactIndex = 0;

const aboutCarouselItems = document.querySelectorAll('#about-carousel .carousel-item');
const contactCarouselItems = document.querySelectorAll('#contact-carousel .carousel-item');

const updateCarousel = (carouselItems, currentIndex) => {
    carouselItems.forEach((item, index) => {
        item.classList.toggle('is-hidden', index !== currentIndex);
    });
};

document.querySelector('#about-carousel .carousel-prev').addEventListener('click', () => {
    currentAboutIndex = (currentAboutIndex > 0) ? currentAboutIndex - 1 : aboutCarouselItems.length - 1;
    updateCarousel(aboutCarouselItems, currentAboutIndex);
});

document.querySelector('#about-carousel .carousel-next').addEventListener('click', () => {
    currentAboutIndex = (currentAboutIndex < aboutCarouselItems.length - 1) ? currentAboutIndex + 1 : 0;
    updateCarousel(aboutCarouselItems, currentAboutIndex);
});

document.querySelector('#contact-carousel .carousel-prev').addEventListener('click', () => {
    currentContactIndex = (currentContactIndex > 0) ? currentContactIndex - 1 : contactCarouselItems.length - 1;
    updateCarousel(contactCarouselItems, currentContactIndex);
});

document.querySelector('#contact-carousel .carousel-next').addEventListener('click', () => {
    currentContactIndex = (currentContactIndex < contactCarouselItems.length - 1) ? currentContactIndex + 1 : 0;
    updateCarousel(contactCarouselItems, currentContactIndex);
});

// Inicializar los carruseles
updateCarousel(aboutCarouselItems, currentAboutIndex);
updateCarousel(contactCarouselItems, currentContactIndex);
// Script para manejar la apertura y cierre del modal
document.addEventListener("DOMContentLoaded", () => {
    const contactButtons = document.querySelectorAll(".contact-button");
    const modal = document.getElementById("contact-modal");
    const modalCloseButton = document.querySelector(".modal-close");
    const modalBackground = document.querySelector(".modal-background");

    // Datos para los contactos (puedes personalizar o cargar dinámicamente)
    const contactDetails = {
        1: {
            name: "Sergio André Chiquinta Veramendi",
            email: "sergiochiquinta@gmail.com",
            phone: "967548512",
            description: "Ingeniero en Sistemas, apasionado por el desarrollo web y la tecnología."
        },
        2: {
            name: "Jeremy Kevin Marcelo Valladolid",
            email: "jeremymarcelo92@gmail.com",
            phone: "963333412",
            description: "Ingeniero en Sistemas UX/UI, con experiencia en crear interfaces amigables."
        },
        3: {
            name: "Javier Moises Rojas Espinoza",
            email: "moisesree2014@gmail.com",
            phone: "943202702",
            description: "Desarrollador Backend especializado en soluciones escalables."
        },
        4: {
            name: "Lucía Ramírez",
            email: "serchivera76@gmail.com",
            phone: "967548512",
            description: "Ingeniera de software apasionada por la inteligencia artificial."
        }
    };

    // Abrir el modal al hacer clic en el botón "Contactar"
    contactButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const contactId = e.target.getAttribute("data-contact-id");
            const contact = contactDetails[contactId];

            // Establecer contenido del modal
            document.getElementById("modal-name").innerText = contact.name;
            document.getElementById("modal-email").innerText = `Correo: ${contact.email}`;
            document.getElementById("modal-phone").innerText = `Teléfono: ${contact.phone}`;
            document.getElementById("modal-description").innerText = contact.description;

            // Mostrar el modal
            modal.classList.add("is-active");
        });
    });

    // Cerrar el modal al hacer clic en el botón de cierre
    modalCloseButton.addEventListener("click", () => {
        modal.classList.remove("is-active");
    });

    // Evitar que el modal se cierre cuando se hace clic fuera del contenido del modal
    modalBackground.addEventListener("click", (e) => {
        // Prevenir que el clic fuera del modal cierre el modal
        e.stopPropagation();
    });

    // Cerrar el modal al hacer clic en el botón de cerrar (dentro del modal)
    modalCloseButton.addEventListener("click", () => {
        modal.classList.remove("is-active");
    });
});


