document.addEventListener("DOMContentLoaded", () => {
    // Seleção de Elementos
    const scrollBtn = document.getElementById("scrollTopBtn");
    const circle = document.querySelector(".progress-ring-circle");
    const modal = document.getElementById("modal");
    const menuMobile = document.getElementById("menuMobile");

    // ================= CONFIGURAÇÃO DO CÍRCULO DE PROGRESSO =================
    // Cálculo baseado em um raio de 23px (para um botão de 50px de largura)
    const radius = 23; 
    const circumference = 2 * Math.PI * radius;

    if (circle) {
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
    }

    function setProgress(percent) {
        if (!circle) return;
        const offset = circumference - (percent * circumference);
        circle.style.strokeDashoffset = offset;
    }

    // ================= SCROLL SUAVE (LINKS E BOTÕES) =================
    window.scrollSection = function(id) {
        const section = document.getElementById(id);
        if (section) {
            // Fecha o menu mobile se estiver aberto ao clicar em um link
            if (menuMobile && menuMobile.classList.contains("ativo")) {
                menuMobile.classList.remove("ativo");
            }
            
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    // ================= CONTROLE DO BOTÃO FLUTUANTE (SUBIR) =================
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollTop / scrollHeight;

        // Atualiza o progresso visual no círculo
        setProgress(progress);

        // Mostra o botão apenas após rolar 300px (evita poluição visual no início)
        if (scrollTop > 300) {
            scrollBtn.style.opacity = "1";
            scrollBtn.style.visibility = "visible";
            scrollBtn.style.transform = "scale(1)";
        } else {
            scrollBtn.style.opacity = "0";
            scrollBtn.style.visibility = "hidden";
            scrollBtn.style.transform = "scale(0.8)";
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

    // ================= MENU MOBILE =================
    window.toggleMenu = function() {
    const menuMobile = document.getElementById("menuMobile");
    const btnMenu = document.getElementById("btnMenu");
    
    if (menuMobile) {
        menuMobile.classList.toggle("ativo");
        
        // Bloqueia o scroll da página ao abrir o menu
        if (menuMobile.classList.contains("ativo")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }
};

// Fecha o menu se o usuário clicar na área escura (fora da gaveta)
document.addEventListener("click", (e) => {
    const menu = document.getElementById("menuMobile");
    const btn = document.getElementById("btnMenu");
    
    if (menu.classList.contains("ativo") && !menu.contains(e.target) && !btn.contains(e.target)) {
        toggleMenu();
    }
});
    // ================= SISTEMA DE NOTÍCIAS (MODAL) =================
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

    window.abrirNoticia = function(index) {
        if (!modal) return;

        const info = noticias[index];
        document.getElementById("modal-titulo").innerText = info.titulo;
        document.getElementById("modal-img").src = info.img;
        document.getElementById("modal-texto").innerText = info.texto;

        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Trava o scroll da página ao abrir
    };

    window.fecharModal = function() {
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // Libera o scroll
        }
    };

    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            fecharModal();
        }
    });
});