// Função responsável por exibir o conteúdo do parágrafo
function showContent(sectionId) {

    // Conteúdo a ser exibido em cada uma das seções, mapeado por ID da seção
    const content = {
        'frontend_backend': 'Front End e Back End são conceitos fundamentais no desenvolvimento web. Saber diferenciá-los é essencial para entender como a web funciona. <a href="https://www.youtube.com/watch?v=LDU4BCSxPp4" target="_blank">Saiba mais</a>',
        'web_ide': 'IDEs e editores de texto são ferramentas usadas para escrever código. Cada desenvolvedor tem suas preferências. <a href="https://www.alura.com.br/apostila-html-css-javascript/01CA-baixando-os-arquivos-do-curso#web-site-ou-aplicacao-web" target="_blank"> Saiba mais</a>',
        'primeiros_passos': 'Os primeiros passos na programação envolvem aprender <a href="https://sp.senai.br/curso/competencia-transversal-logica-de-programacao/95088?unidade=568" target="_blank">lógica de programação</a>, algoritmos e uma linguagem de programação. <a href="https://www.alura.com.br/artigos/como-comecar-programar" target="_blank"> Saiba mais</a>',
        'html_css_js': 'HTML, CSS e JavaScript são a base de qualquer site na web. Dominar esses três é o primeiro passo para quem quer trabalhar com front-end. <a href="https://www.alura.com.br/apostila-html-css-javascript?srsltid=AfmBOoqR5WJRoRhOtcvMCWMyBc0yHxKX5_G7TNW-2Y5Bv-vHQIOgDJPo" target="_blank"> Saiba mais</a>',
        'ferramentas': 'Ferramentas e softwares, como <a href="https://www.alura.com.br/artigos/o-que-e-git-github?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=164068945139&hsa_ad=703934879696&hsa_src=g&hsa_tgt=aud-1295637864136:dsa-1298415354460&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwreW2BhBhEiwAavLwfGFknyRDjJjO5Zf73-fmLpRhLHGwb0Z_iYG0DqZsT9UvaOxuC84h9hoCXWAQAvD_BwE" target="_blank">Git</a>, <a href="https://www.alura.com.br/artigos/o-que-e-git-github?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=164068945139&hsa_ad=703934879696&hsa_src=g&hsa_tgt=aud-1295637864136:dsa-1298415354460&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwreW2BhBhEiwAavLwfGFknyRDjJjO5Zf73-fmLpRhLHGwb0Z_iYG0DqZsT9UvaOxuC84h9hoCXWAQAvD_BwE" target="_blank">GitHub</a> e editores de código, são essenciais para aumentar a produtividade de um desenvolvedor. <a href="https://coodesh.com/blog/candidates/dicas/os-melhores-editores-de-codigo-fonte-e-ide-para-programar/" target="_blank"> Saiba mais</a>',
        'comunidades': 'Participar de comunidades de programação pode ser um diferencial no seu aprendizado. <a href="https://www.brasilcode.com.br/7-melhores-sites-para-tirar-suas-duvidas-de-programacao/" target="_blank"> Saiba mais</a>',
        'continuar_aprendendo': 'Na web existem muitos recursos gratuitos para continuar seu aprendizado. Não pare nunca de estudar! Algumas das principais plataformas de ensino gratuito, que possuem cursos na área de programação, são: <a href="https://www.ev.org.br/areas-de-interesse/programacao" target="_blank">Fundação Bradesco</a> e <a href="https://on.fiap.com.br/local/nanocourses/index.php" target="_blank">FIAP Nano Courses</a>. Já algumas das melhores soluções pagas, são: <a href="https://www.alura.com.br/cursos-online-programacao?utm_term=alura&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Institucional&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=386166608&hsa_grp=21666755648&hsa_ad=696280649243&hsa_src=g&hsa_tgt=aud-546438175126:kwd-300088401&hsa_kw=alura&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwreW2BhBhEiwAavLwfJgPT4Fkn83S0kOp4DB2Qv6qXw-eF0W8B8RShDJBZS8bz7MyAfMwkhoCap0QAvD_BwE" target="_blank">Alura</a> e <a href="https://www.fiap.com.br/" target="_blank">FIAP (graduação/pós-graduação)</a>. <a href="https://www.hostinger.com.br/tutoriais/11-sites-aprender-como-programar-de-graca" target="_blank"> Saiba mais</a>'
    };

    // Verifica se já existe um parágrafo aberto para a seção selecionada
    const existingParagraph = document.querySelector(`#${sectionId} .content-paragraph`);
    // Se um parágrafo já estiver presente, remove-o e encerra a função
    if (existingParagraph) {
        existingParagraph.remove();
        return; // Se o parágrafo já estiver aberto, ele será removido e a função não faz mais nada
    }

    // Cria um novo elemento de parágrafo
    const paragraph = document.createElement('p');
    // Define a classe do parágrafo para aplicar estilos
    paragraph.className = 'content-paragraph';
    // Define o conteúdo HTML do parágrafo com base no ID da seção
    paragraph.innerHTML = content[sectionId];

    // Adiciona o novo parágrafo como um filho do elemento da seção selecionada
    document.getElementById(sectionId).appendChild(paragraph);
}