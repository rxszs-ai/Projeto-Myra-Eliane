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

const radius = 23;
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
            titulo: "Nova Turma de Desenvolvimento Web",
            img: "imagens/noticia1.jpeg",
            texto: "O Instituto Yolanda e Edson Queiroz iniciou uma nova turma de Desenvolvimento Web, voltada à capacitação dos alunos na área de tecnologia e à preparação para o mercado de trabalho."
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

    // ================= ESTRUTURA =================

const estrutura = [

    {
        titulo: "Creche",
        img: "imagens/creche.jpg",
        texto: "A creche oferece educação infantil com estrutura moderna, salas climatizadas, área de recreação e equipe pedagógica especializada."
    },

    {
        titulo: "Capacitação Profissional",
        img: "imagens/capacitacao.jpg",
        texto: "O centro de capacitação oferece cursos profissionalizantes voltados ao mercado de trabalho, promovendo inclusão e geração de renda."
    },

    {
        titulo: "Centro Cultural",
        img: "imagens/cultural.jpg",
        texto: "O centro cultural é um espaço dedicado à arte, música, teatro e atividades educativas para a comunidade."
    }

];


window.abrirEstrutura = function(index){

    const info = estrutura[index];

    document.getElementById("modal-titulo").innerText = info.titulo;
    document.getElementById("modal-img").src = info.img;
    document.getElementById("modal-texto").innerText = info.texto;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

}

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

      /* ================= BOTÃO LER MAIS ================= */
//* ================= BOTÃO LER MAIS ================= */

window.mostrarMais = function() {

const sobre = document.getElementById("sobre");
const sobreCompleto = document.getElementById("sobre-completo");
const info = document.getElementById("mais-info");
const boxes = info.querySelectorAll(".info-box");

if (sobre.style.display !== "none") {

    // ABRIR

    sobre.style.display = "none";
    sobreCompleto.style.display = "block";

    setTimeout(() => {
        sobreCompleto.classList.add("ativo");
    }, 10);

    boxes.forEach((box, index) => {

        box.style.opacity = 0;
        box.style.transform = "translateY(30px)";

        setTimeout(() => {

            box.style.transition = "0.4s";
            box.style.opacity = 1;
            box.style.transform = "translateY(0)";

        }, index * 120);

    });

    window.scrollTo({
        top: sobreCompleto.offsetTop - 80,
        behavior: "smooth"
    });

} else {

    // FECHAR

    sobreCompleto.classList.remove("ativo");

    boxes.forEach((box, index) => {

        setTimeout(() => {

            box.style.opacity = 0;
            box.style.transform = "translateY(30px)";

        }, index * 80);

    });

    setTimeout(() => {

        sobreCompleto.style.display = "none";
        sobre.style.display = "block";

        window.scrollTo({
            top: sobre.offsetTop - 80,
            behavior: "smooth"
        });

    }, 400);

}

}})