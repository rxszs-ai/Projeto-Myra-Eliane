document.addEventListener("DOMContentLoaded", () => {

    // ================= SELEÇÃO DE ELEMENTOS =================
    const scrollBtn = document.getElementById("scrollTopBtn");
    const circle = document.querySelector(".progress-ring-circle");
    const modal = document.getElementById("modal");
    const menuMobile = document.getElementById("menuMobile");
    const btnMenu = document.getElementById("btnMenu");
    

    // ================= FUNÇÕES DE MENU =================
    function abrirMenu() {
        if (menuMobile) {
            menuMobile.classList.add("ativo");
            document.body.style.overflow = "hidden";
        }
    }

    function fecharMenu() {
        if (menuMobile && menuMobile.classList.contains("ativo")) {
            menuMobile.classList.remove("ativo");
            document.body.style.overflow = "auto";
        }
    }

    window.toggleMenu = function () {
        if (menuMobile.classList.contains("ativo")) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    };

    // Fecha ao clicar fora
    document.addEventListener("click", (e) => {
        if (
            menuMobile &&
            menuMobile.classList.contains("ativo") &&
            !menuMobile.contains(e.target) &&
            !btnMenu.contains(e.target)
        ) {
            fecharMenu();
        }
    });

    // ================= SCROLL SUAVE =================
    window.scrollSection = function (id) {
        const section = document.getElementById(id);

        if (section) {
            fecharMenu(); // 🔥 fecha o menu corretamente

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    // ================= CÍRCULO DE PROGRESSO =================
    // ================= CÍRCULO DE PROGRESSO =================

const radius = 26;
const circumference = 2 * Math.PI * radius;

if (circle) {
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;
}

function setProgress(percent) {
    if (!circle) return;

    const offset = circumference - percent * circumference;
    circle.style.strokeDashoffset = offset;
}


// ================= BOTÃO SCROLL TOP =================

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollTop / scrollHeight;

    setProgress(progress);

    if (scrollTop > 200) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }

});


if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

    // ================= SISTEMA DE NOTÍCIAS =================
    const noticias = [
        {
            titulo: "Espaço Cultural Arandu conclui formações",
            img: "imagens/noticia1.jpg",
            texto: "O Espaço Cultural Arandu concluiu formações do projeto Barca em parceria com a Porto Iracema das Artes, promovendo o desenvolvimento artístico na região."
        },
        {
            titulo: "CEI Olga e Parsifal Barroso celebra seis anos",
            img: "imagens/noticia2.jpg",
            texto: "Comemorando seis anos de excelência, o CEI Olga e Parsifal Barroso reafirma seu compromisso com a educação integral e os valores humanos na primeira infância."
        },
        {
            titulo: "Projeto Mulheres de Negócios",
            img: "imagens/noticia3.jpg",
            texto: "O Centro de Formação Profissional Yolanda e Edson Queiroz realizou mais uma edição do projeto focado no empreendedorismo feminino."
        }
    ];

    window.abrirNoticia = function (index) {
        if (!modal) return;

        const info = noticias[index];

        document.getElementById("modal-titulo").innerText = info.titulo;
        document.getElementById("modal-img").src = info.img;
        document.getElementById("modal-texto").innerText = info.texto;

        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    };

    window.fecharModal = function () {
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };

    // Fecha modal ao clicar fora
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            fecharModal();
        }
    });

});