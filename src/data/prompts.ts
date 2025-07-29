export interface Prompt {
  id: number;
  title: string;
  level: string;
  content: string;
}

export const modulePrompts: Record<number, Prompt[]> = {
  1: [
    {
      id: 1,
      title: "Comida",
      level: "iniciante",
      content: "Você é um professor de inglês para iniciantes. Liste 50 palavras comuns relacionadas à comida, incluindo o nome dos alimentos e utensílios de cozinha, com a tradução para o português e uma frase simples em inglês usando cada palavra."
    },
    {
      id: 2,
      title: "Viagens",
      level: "iniciante",
      content: "Atue como um guia turístico poliglota. Apresente 50 palavras e expressões essenciais relacionadas a viagens, acompanhadas de suas definições em inglês e exemplos curtos de uso em frases."
    },
    {
      id: 3,
      title: "Sentimentos e emoções",
      level: "intermediário",
      content: "Você atua como professor de inglês, que nas horas vagas, é psicólogo. Liste 30 palavras que descrevem sentimentos em inglês, com sinônimos e frases que as exemplifiquem, voltadas para estudantes de inglês intermediários."
    },
    {
      id: 4,
      title: "Corpo humano",
      level: "iniciante",
      content: "Você é um professor de inglês para médicos iniciantes. Liste 20 palavras em inglês relacionadas ao corpo humano com tradução em português e use-as em frases simples explicativas."
    },
    {
      id: 5,
      title: "Casa e mobília",
      level: "iniciante",
      content: "Você é um corretor de imóveis bilíngue. Liste 15 termos comuns para peças da casa e tipos de mobília em inglês, acompanhados de exemplos em frases curtas."
    },
    {
      id: 6,
      title: "Animais",
      level: "iniciante",
      content: "Como biólogo bilíngue, liste 20 nomes de animais em inglês com seus respectivos grupos (mamíferos, aves, répteis) e use-os em frases que descrevam características básicas."
    },
    {
      id: 7,
      title: "Escola e estudos",
      level: "iniciante",
      content: "Você é um professor de inglês para estudantes do ensino fundamental. Apresente 35 palavras e expressões relacionadas à escola, materiais escolares e atividades em inglês com tradução e exemplo."
    },
    {
      id: 8,
      title: "Profissões",
      level: "iniciante",
      content: "Como orientador vocacional bilíngue, liste 20 nomes de profissões comuns em inglês, explique brevemente cada uma e faça frases simples com elas."
    },
    {
      id: 9,
      title: "Esportes",
      level: "intermediário",
      content: "Você é um treinador esportivo bilíngue. Apresente 30 palavras relacionadas a esportes populares em inglês, defina cada palavra e use em frases que descrevam uma partida ou treino."
    },
    {
      id: 10,
      title: "Tecnologia",
      level: "intermediário",
      content: "Como professor de inglês para estudantes de tecnologia, liste 30 termos técnicos comuns do universo digital com explicação simples e frases que exemplifiquem seu uso."
    },
    {
      id: 11,
      title: "Roupas e moda",
      level: "iniciante",
      content: "Você é um estilista falante nativo do inglês. Liste 20 termos comuns relacionados a roupas e acessórios em inglês, dê a tradução e crie frases simples para cada palavra."
    },
    {
      id: 12,
      title: "Natureza",
      level: "intermediário",
      content: "Atue como um guia de ecoturismo bilíngue e apresente 15 palavras em inglês relacionadas à natureza (árvores, rios, clima), junto com definição e frase de exemplo para estudantes de inglês intermediários."
    },
    {
      id: 13,
      title: "Lazer e entretenimento",
      level: "intermediário",
      content: "Liste, como um expert, 25 palavras em inglês usadas para descrever atividades de lazer e entretenimento com explicação e exemplo de uso."
    },
    {
      id: 14,
      title: "Transporte",
      level: "intermediário",
      content: "Como instrutor bilíngue, liste 35 palavras comuns relacionadas a meios de transporte em inglês, traduza e exemplifique em frases contextualizadas."
    },
    {
      id: 15,
      title: "Saúde e doenças",
      level: "intermediário",
      content: "Você é enfermeiro bilíngue. Apresente 30 palavras relacionadas à saúde e doenças em inglês, com explicação simples e frases para ajudar na comunicação básica."
    },
    {
      id: 16,
      title: "Clima e estações do ano",
      level: "intermediário",
      content: "Como meteorologista americano, falante nativo da língua inglesa, liste 30 palavras relacionadas ao clima e estações do ano, com explicações e frases que descrevam situações do dia a dia."
    },
    {
      id: 17,
      title: "Família e relacionamentos",
      level: "iniciante",
      content: "Você é um conselheiro familiar bilíngue. Liste 25 palavras e expressões em inglês que descrevam membros da família e relações pessoais, com tradução para o português e frases exemplo."
    },
    {
      id: 18,
      title: "Cores",
      level: "iniciante",
      content: "Atue como professor de inglês para crianças. Ensine 12 cores básicas e algumas combinações, com frases simples para cada cor, focando na descrição de objetos."
    },
    {
      id: 19,
      title: "Verbos comuns",
      level: "iniciante",
      content: "Você é um treinador de gramática. Liste 30 verbos comuns em inglês, com significado em português e frases simples no presente."
    },
    {
      id: 20,
      title: "Adjetivos para descrição física",
      level: "iniciante",
      content: "Como personal stylist, apresente 15 adjetivos para descrever características físicas em inglês, com tradução e uso em frases."
    },
    {
      id: 21,
      title: "Sentidos (visão, olfato, etc.)",
      level: "iniciante",
      content: "Você é professor de inglês para alunos iniciantes. Liste 25 palavras relacionadas aos sentidos humanos e crie frases simples para cada uma."
    },
    {
      id: 22,
      title: "Compras e comércio",
      level: "intermediário",
      content: "Como vendedor falante nativo do idioma inglês, liste os 20 termos mais utilizados em lojas e compras, com explicação e frases de exemplo voltadas para aprendizado prático."
    },
    {
      id: 23,
      title: "Datas e tempo",
      level: "intermediário",
      content: "Você é professor de inglês para adultos. Liste as 20 palavras e expressões mais usadas para falar sobre datas, horas e períodos do dia, com exemplos de uso em cada uma das palavras e expressões."
    },
    {
      id: 24,
      title: "Verbos no passado simples",
      level: "intermediário",
      content: "Como professor de inglês especialista, liste 20 verbos no passado simples, com tradução para o português, e use-os em frases afirmativas para praticar a forma."
    },
    {
      id: 25,
      title: "Hobbies",
      level: "iniciante",
      content: "Como um professor de inglês especialista, me apresente 15 vocábulos em inglês relacionados a hobbies e crie uma série de frases para descrever atividades."
    },
    {
      id: 26,
      title: "Localização e direção",
      level: "intermediário",
      content: "Como guia turístico falante nativo da língua inglesa, liste 15 palavras e expressões para indicar localização e direção, com explicação e frases para uso prático."
    },
    {
      id: 27,
      title: "Sentimentos negativos",
      level: "intermediário",
      content: "Você é um terapeuta dos EUA, falante nativo da língua inglesa . Liste 10 palavras que expressam emoções negativas, com definição, sinônimos e frases explicativas."
    },
    {
      id: 28,
      title: "Agricultura",
      level: "intermediário",
      content: "Como agrônomo bilíngue, liste 15 palavras comuns sobre agricultura em inglês, com tradução e frases que ajudem a compreender o setor."
    },
    {
      id: 29,
      title: "Países e nacionalidades",
      level: "iniciante",
      content: "Você é professor de inglês. Liste 20 países famosos e as nacionalidades correspondentes em inglês, com frases exemplificando cada uma."
    },
    {
      id: 30,
      title: "Transporte público",
      level: "intermediário",
      content: "Liste como um expert 12 palavras e expressões em inglês usadas no transporte público, com explicações e frases para comunicação prática."
    },
    {
      id: 31,
      title: "Animais de estimação",
      level: "iniciante",
      content: "Você é veterinário bilíngue. Apresente 12 nomes de animais domésticos e vocabulário relacionado em inglês, acompanhados de frases simples."
    },
    {
      id: 32,
      title: "Adjetivos de personalidade",
      level: "intermediário",
      content: "Como coach bilíngue, liste 15 adjetivos comuns para descrever a personalidade, com explicações e exemplos em inglês."
    },
    {
      id: 33,
      title: "Partes da casa",
      level: "iniciante",
      content: "Você é um arquiteto bilíngue. Liste 12 nomes das principais partes de uma casa em inglês, com frases que mencionem cada local."
    },
    {
      id: 34,
      title: "Festas e celebrações",
      level: "intermediário",
      content: "Como organizador de eventos bilíngue, apresente 15 palavras em inglês relacionadas a festas, feriados e celebrações, com frases descritivas e traduções para o português."
    },
    {
      id: 35,
      title: "Caráter e comportamento",
      level: "intermediário",
      content: "Você é psicólogo bilíngue. Eu sou um brasileiro aprendendo inglês. Liste 15 termos em inglês que descrevem comportamentos e traços de caráter, com exemplos em frases."
    },
    {
      id: 36,
      title: "Esportes aquáticos",
      level: "intermediário",
      content: "Você é um professor de natação e esportes aquáticos dos EUA, liste para mim, um brasileiro em aprendizado da língua inglesa, 12 termos relacionados aos esportes aquáticos, com definições e frases curtas."
    },
    {
      id: 37,
      title: "Objetos de escritório",
      level: "iniciante",
      content: "Você é um gerente de uma empresa norte-americana de telemarketing. Liste 15 objetos comuns de escritório, com suas traduções para o português e exemplos de uso em frases."
    },
    {
      id: 38,
      title: "Verbos modais",
      level: "intermediário",
      content: "Como professor de inglês, explique 10 verbos modais, com traduções e frases que mostrem diferentes usos."
    },
    {
      id: 39,
      title: "Transportes alternativos (bicicleta, skate, etc.)",
      level: "intermediário",
      content: "Você é um instrutor norte-americano de transportes anti-poluição . Liste 10 termos relacionados a transportes alternativos com exemplos de frases em cada termo."
    },
    {
      id: 40,
      title: "Animais selvagens",
      level: "intermediário",
      content: "Como biólogo, liste 15 animais selvagens em inglês, seus habitats, e use cada um em frase explicativa bem elaborada."
    },
    {
      id: 41,
      title: "Clima e desastres naturais",
      level: "intermediário",
      content: "Você é meteorologista. Liste 12 palavras relacionadas a desastres naturais e fenômenos climáticos em inglês com frases que expliquem cada termo."
    },
    {
      id: 42,
      title: "Lugares na cidade",
      level: "iniciante",
      content: "Considere que você é um urbanista. Como um urbanista americano, falante nativo da língua inglesa, liste 15 palavras que descrevem lugares comuns na cidade, com exemplos de frases para uso cotidiano."
    },
    {
      id: 43,
      title: "Verbos irregulares",
      level: "intermediário",
      content: "Você é professor. Liste 20 verbos irregulares no inglês, com formas (base, passado, particípio) e frases para praticar."
    },
    {
      id: 44,
      title: "Alimentação saudável",
      level: "intermediário",
      content: "Você é um nutricionista. Como um nutricionista americano, falante de inglês nativo , liste 15 palavras relacionadas à alimentação saudável, com frases que enfatizem hábitos saudáveis."
    },
    {
      id: 45,
      title: "Arte e cultura",
      level: "intermediário",
      content: "Você é curador de museu. Liste 15 termos em inglês sobre arte e cultura, com definições simples e frases com exemplos."
    },
    {
      id: 46,
      title: "Meios de comunicação",
      level: "intermediário",
      content: "Você é um jornalista americano, falante nativo da língua inglesa. Liste 12 palavras relacionadas ao jornalismo e comunicação, com uma lista completa de frases exemplares por palavra."
    },
    {
      id: 47,
      title: "Verbos para expressar opinião",
      level: "intermediário",
      content: "Você é meu professor de inglês, apresente 10 verbos comuns para expressar opinião, com tradução e exemplos em frases."
    },
    {
      id: 48,
      title: "Festividades internacionais",
      level: "intermediário",
      content: "Você é guia turístico. Liste 15 festividades internacionais com seus nomes em inglês, breve explicação e frases representativas."
    },
    {
      id: 49,
      title: "Tecnologia móvel",
      level: "intermediário",
      content: "Como especialista em tecnologia, liste 15 termos em inglês relacionados a smartphones e aplicativos, com definições simples e frases contextualizadas."
    },
    {
      id: 50,
      title: "Comida saudável vs. comida rápida",
      level: "intermediário",
      content: "Você é nutricionista. Apresente 10 palavras relacionadas a comida saudável e 10 relacionadas a comida rápida em inglês, faça uma tabela com tradução e frases explicativas para cada grupo."
    }
  ],
  2: [
    {
      id: 1,
      title: "Apresentação Pessoal",
      level: "iniciante",
      content: "Finja que você é meu professor de inglês. Quero praticar como me apresentar. Responda como se fosse uma pessoa real que acabou de me conhecer. Corrija erros ao final da conversa, mas só depois que eu terminar. Vamos começar: 'Hi, my name is...'"
    },
    {
      id: 2,
      title: "Conversa no aeroporto",
      level: "iniciante/intermediário",
      content: "Simule que você é um agente de imigração no aeroporto dos EUA. Quero praticar responder às perguntas mais comuns que me fariam ao chegar no país. Fale como um nativo falaria. No final, corrija meus erros e sugira frases melhores."
    },
    {
      id: 3,
      title: "Pedido em restaurante",
      level: "intermediário",
      content: "Vamos simular uma situação em que estou em um restaurante nos Estados Unidos. Você será o garçom e eu serei o cliente. Use inglês natural e me ajude a praticar vocabulário de pedidos, reclamações e agradecimentos."
    },
    {
      id: 4,
      title: "Conversa sobre hobbies",
      level: "iniciante/intermediário",
      content: "Faça de conta que somos colegas de curso de inglês. Comece uma conversa comigo sobre hobbies e pergunte sobre o que gosto de fazer no meu tempo livre. Use inglês simples, mas natural. Me desafie com perguntas de acompanhamento."
    },
    {
      id: 5,
      title: "Situação de trabalho: reunião com equipe",
      level: "intermediário/avançado",
      content: "Simule que sou um funcionário de uma empresa internacional e estou em uma reunião com minha equipe em inglês. Você será meu colega de equipe e trará temas para discutirmos. Use vocabulário técnico e formal de negócios. No final, corrija meus erros e explique frases melhores."
    },
    {
      id: 6,
      title: "Descrevendo meu dia",
      level: "iniciante",
      content: "Quero praticar como descrever meu dia em inglês. Me pergunte o que fiz hoje e vá interagindo com base nas minhas respostas. Corrija meus erros no final, explicando as correções."
    },
    {
      id: 7,
      title: "Planejando uma viagem",
      level: "intermediário",
      content: "Simule que somos amigos planejando uma viagem para Nova York. Pergunte onde quero ir, o que quero visitar, onde quero me hospedar, e vá aprofundando a conversa com base nas minhas respostas. Corrija meus erros no final."
    },
    {
      id: 8,
      title: "Entrevista de emprego",
      level: "avançado",
      content: "Finja que você é um recrutador e estou fazendo uma entrevista de emprego em inglês. Faça perguntas típicas de entrevistas, como 'Tell me about yourself', 'What are your strengths and weaknesses?', etc. Corrija meus erros e me dê dicas ao final."
    },
    {
      id: 9,
      title: "Comprando em loja de roupas",
      level: "iniciante/intermediário",
      content: "Quero praticar como comprar roupas em inglês. Simule que você é o atendente de uma loja e eu estou procurando uma jaqueta. Faça perguntas comuns como tamanho, cor, preço, e interaja como se fosse um nativo."
    },
    {
      id: 10,
      title: "Discussão sobre um tema polêmico",
      level: "avançado",
      content: "Vamos debater um tema polêmico em inglês: 'Technology is making people more isolated'. Apresente sua opinião primeiro e me peça a minha. Argumente contra o que eu disser para eu praticar defender meu ponto de vista. Use vocabulário avançado e me corrija no final."
    },
    {
      id: 11,
      title: "Encontro Cultural",
      level: "intermediário",
      content: "Finja que você é um amigo americano me recebendo nos EUA pela primeira vez. Me explique algumas diferenças culturais curiosas que devo saber antes de sair para jantar com sua família. Use frases simples, mas realistas. Corrija meus erros e me faça perguntas para praticarmos."
    },
    {
      id: 12,
      title: "Situação de Emergência",
      level: "intermediário/avançado",
      content: "Simule que estou em uma viagem internacional e perdi meu passaporte. Atue como um agente consular que vai me ajudar, me fazendo perguntas e exigindo respostas mais formais em inglês. No final, me explique os termos mais usados nessa situação."
    },
    {
      id: 13,
      title: "Feedback Profissional",
      level: "avançado",
      content: "Finja que sou um estagiário em uma empresa americana e você é meu supervisor. Dê um feedback honesto sobre meu desempenho até agora. Depois, me peça para reagir ao feedback, praticando expressões educadas, perguntas de melhoria e agradecimento."
    },
    {
      id: 14,
      title: "Descrevendo um Filme",
      level: "iniciante/intermediário",
      content: "Me peça para descrever o último filme que assisti, em inglês. Vá me guiando com perguntas específicas (personagens, enredo, partes favoritas). Ao final, corrija erros e me ensine como enriquecer minha descrição com vocabulário útil."
    },
    {
      id: 15,
      title: "Pequenos Problemas do Dia a Dia",
      level: "iniciante",
      content: "Me pergunte como foi meu dia e simule pequenos problemas cotidianos (ex: ônibus atrasado, chuva, celular sem bateria). Me incentive a reagir em inglês com frases curtas, e me ensine formas simples e naturais de contar como resolvi cada situação."
    },
    {
      id: 16,
      title: "Conversa com um Cliente",
      level: "intermediário/avançado",
      content: "Simule uma situação em que estou atendendo um cliente em inglês por telefone. Faça perguntas difíceis, como reclamações, dúvidas técnicas ou atrasos no serviço. Me force a usar vocabulário profissional e treine minha habilidade de manter a calma e a clareza."
    },
    {
      id: 17,
      title: "Planejando um Evento",
      level: "intermediário",
      content: "Vamos planejar um aniversário juntos. Me peça para escolher local, comida, horário e lista de convidados em inglês. Faça perguntas e sugira opções, como se fosse um amigo nativo. Ao final, me corrija e sugira como tornar minha fala mais natural."
    },
    {
      id: 18,
      title: "Check-in em Hotel",
      level: "iniciante",
      content: "Simule um diálogo realista de check-in em um hotel americano. Faça perguntas típicas como tipo de quarto, forma de pagamento, horário do café da manhã etc. Me responda como um recepcionista e me corrija conforme eu falo."
    },
    {
      id: 19,
      title: "Debate de Opiniões",
      level: "avançado",
      content: "Escolha um tema leve mas controverso (ex: redes sociais são boas ou ruins?). Me peça para defender minha opinião em inglês, enquanto você apresenta o ponto de vista oposto. Me ensine formas elegantes de argumentar, discordar e concordar."
    },
    {
      id: 20,
      title: "Dando e recebendo direções na cidade",
      level: "intermediário",
      content: "Estou praticando inglês e gostaria de simular uma conversa em que eu estou perdido em uma cidade estrangeira e peço informações a um morador local. Me faça perguntas e me ajude a praticar como pedir e entender direções para lugares como um museu, uma farmácia ou uma estação de metrô. Use vocabulário típico desse tipo de situação, e corrija minhas respostas quando necessário, explicando como melhorar. No final, faça um pequeno resumo dos erros e acertos."
    },
    {
      id: 21,
      title: "Conversa sobre saúde mental e autocuidado",
      level: "avançado",
      content: "Simule uma conversa entre você (ChatGPT) e um aluno que deseja praticar inglês conversando sobre saúde mental e autocuidado. O aluno está buscando aprender vocabulário emocional, expressões idiomáticas e formas naturais de se comunicar sobre sentimentos e bem-estar. Inicie com uma pergunta como \"How have you been feeling lately?\" e conduza o diálogo abordando temas como ansiedade, estresse, meditação, atividades relaxantes e a importância de procurar ajuda profissional. Responda de forma empática, natural e com correções suaves quando necessário."
    },
    {
      id: 22,
      title: "Debate sobre inteligência artificial no cotidiano",
      level: "avançado",
      content: "Vamos debater em inglês sobre o impacto da inteligência artificial no dia a dia das pessoas. Atue como um debatedor que traz pontos de vista equilibrados: prós, contras, dilemas éticos e possíveis mudanças no mercado de trabalho. O usuário será seu interlocutor e deverá praticar estruturas de opinião (I believe that…, In my opinion…, On the other hand…), além de vocabulário técnico e expressões de argumentação. Corrija os erros de forma didática e incentive a formulação de argumentos."
    },
    {
      id: 23,
      title: "Reclamando sobre um pedido errado em um restaurante",
      level: "intermediário",
      content: "Quero praticar como expressar educadamente uma reclamação em inglês. Finja ser um garçom e me ajude a simular uma situação em que meu pedido veio errado. Me provoque com perguntas e respostas para que eu pratique frases como \"I think there's a mistake with my order\" e \"Can I speak to the manager?\". Corrija meus erros e me ensine vocabulário útil nesse contexto."
    },
    {
      id: 24,
      title: "Planejando uma viagem com um amigo",
      level: "intermediário/avançado",
      content: "Vamos simular que estamos organizando juntos uma viagem para outro país. Me faça perguntas como \"Where do you want to go?\", \"What kind of activities do you enjoy?\" e \"Should we book a hotel or an Airbnb?\". Me ajude a praticar diferentes tempos verbais e frases relacionadas a planejamento, orçamento e preferências."
    },
    {
      id: 25,
      title: "Falando sobre seu país de origem",
      level: "intermediário",
      content: "Simule que você é um turista curioso e eu sou uma pessoa nativa do meu país. Me faça perguntas em inglês sobre cultura, comida típica, clima, pontos turísticos e hábitos locais. Corrija meu vocabulário e estrutura de frases, e me ajude a expandir minhas respostas com expressões naturais."
    },
    {
      id: 26,
      title: "Simulação de atendimento ao cliente — Frases chave",
      level: "avançado",
      content: "Vamos simular que eu sou um atendente de uma empresa internacional e estou lidando com um cliente em inglês. Me ajude a praticar frases como \"I apologize for the inconvenience\", \"Let me check that for you\", e \"I will transfer your request to the appropriate department\". Corrija minha formalidade, tom e clareza de comunicação."
    },
    {
      id: 27,
      title: "Indo ao médico: descrevendo sintomas",
      level: "intermediário",
      content: "Quero praticar como descrever sintomas e problemas de saúde em inglês. Finja ser um médico e me faça perguntas como \"What seems to be the problem?\", \"How long have you been feeling this way?\" e \"Do you have any allergies?\". Me ensine o vocabulário básico para diferentes sintomas e me corrija conforme eu pratico."
    },
    {
      id: 28,
      title: "Entendendo gírias e expressões informais",
      level: "avançado",
      content: "Vamos praticar uma conversa informal como se fôssemos amigos conversando no WhatsApp. Use gírias comuns do inglês americano, como \"What's up?\", \"No way!\", \"You gotta be kidding me\", etc. Me ajude a entender o significado e me incentive a usá-las em frases próprias. Me corrija quando eu usar de forma incorreta ou exagerada."
    },
    {
      id: 29,
      title: "Na Farmácia",
      level: "iniciante",
      content: "Quero treinar uma conversa simples em uma farmácia. Finja que você é o atendente e eu sou o cliente. Quero praticar frases básicas para pedir remédios comuns, perguntar preços e explicar sintomas simples como dor de cabeça, febre ou resfriado. No final, corrija meus erros de vocabulário e gramática, por favor."
    },
    {
      id: 30,
      title: "Alugando um apartamento ou quarto",
      level: "intermediário",
      content: "Simule que estou procurando um lugar para morar. Me ajude a praticar frases como \"How much is the rent?\", \"Are utilities included?\" e \"Is the neighborhood safe?\". Me faça perguntas como se você fosse o corretor ou proprietário e corrija minha fala quando necessário."
    },
    {
      id: 31,
      title: "No Pet Shop",
      level: "iniciante",
      content: "Quero praticar uma conversa simples em um pet shop. Finja que sou cliente e quero comprar ração, brinquedos e perguntar sobre banho para cachorro. Use frases curtas e claras. No final, corrija meu vocabulário se eu errar."
    },
    {
      id: 32,
      title: "Comprando Eletrônicos",
      level: "intermediário",
      content: "Quero praticar inglês em um cenário onde estou comprando eletrônicos, como celular ou fones de ouvido. Você será o vendedor e eu serei o cliente. Me ajude a usar vocabulário útil como 'battery life', 'warranty', 'Bluetooth', etc. Corrija meus erros e me sugira expressões melhores ao final."
    },
    {
      id: 33,
      title: "Emergência no Hotel",
      level: "intermediário",
      content: "Estou em um hotel e preciso praticar uma conversa de emergência em inglês. Algo aconteceu com meu quarto (por exemplo, vazamento de água ou falta de luz). Simule essa situação comigo. Depois, corrija meus erros de gramática e me diga como eu poderia me comunicar de forma mais eficiente."
    },
    {
      id: 34,
      title: "Entrevista de Voluntariado",
      level: "avançado",
      content: "Quero treinar uma entrevista em inglês para uma vaga de voluntariado internacional. Finja que você é o entrevistador. Faça perguntas típicas como 'Why do you want to volunteer with us?', 'How do you handle challenges?', etc. Me corrija e avalie meu nível no final, por favor."
    },
    {
      id: 35,
      title: "Conversa no Parque",
      level: "iniciante",
      content: "Quero praticar inglês com uma conversa bem simples que poderia acontecer em um parque. Algo como cumprimentar alguém, falar sobre o tempo, perguntar se o banco está livre, etc. Use frases curtas e me corrija se eu errar."
    },
    {
      id: 36,
      title: "Compras online e devoluções de produtos",
      level: "iniciante/intermediário",
      content: "Estou praticando conversas em inglês com foco em situações do dia a dia. Quero que você simule um diálogo em uma loja online de eletrônicos. Sou um cliente que comprou um fone de ouvido com defeito e quero solicitar a devolução ou troca. Seja o atendente da loja. Use frases simples, vocabulário acessível e repita palavras-chave importantes. Após a simulação, me explique o vocabulário usado e me proponha alternativas de resposta para cada fala do atendente. Em seguida, me proponha um pequeno exercício de preenchimento de lacunas com o vocabulário aprendido."
    },
    {
      id: 37,
      title: "Sessão de Terapia",
      level: "avançado",
      content: "Quero treinar inglês avançado simulando uma sessão de psicoterapia. Você será o terapeuta e fará perguntas profundas como 'How have you been feeling lately?' ou 'What are your main sources of stress?'. No fim, avalie minha fluência e vocabulário emocional."
    },
    {
      id: 38,
      title: "Comprando uma Bicicleta Usada",
      level: "intermediário",
      content: "Quero praticar uma conversa em inglês onde estou comprando uma bicicleta usada com um vendedor. Finja que você é o vendedor e me ajude a praticar perguntas como 'How old is it?', 'Is it in good condition?', 'Can I test it?'. Me corrija no final."
    },
    {
      id: 39,
      title: "Conversa com Vizinho Novo",
      level: "iniciante",
      content: "Quero praticar o meu inglês com uma conversa bem simples com um novo vizinho. Algo como: cumprimentar, dizer de onde sou, perguntar de onde ele é, se tem filhos, etc. Me corrija se eu errar e me ajude a falar de forma natural."
    },
    {
      id: 40,
      title: "Apresentação de um Projeto Criativo",
      level: "avançado",
      content: "Quero treinar em um nível mais avançado na língua inglesa, apresentando um projeto criativo, como um curta-metragem, peça de teatro ou exposição de arte. Você será um jurado ou investidor e fará perguntas sobre minha ideia, objetivos e processo criativo. Me avalie no final com sugestões de vocabulário mais adequado."
    },
    {
      id: 41,
      title: "Emergência médica simulada",
      level: "intermediário",
      content: "Quero praticar vocabulário e estruturas para lidar com situações de emergência. Simule que estou nos EUA e acabo de testemunhar uma pessoa desmaiando na rua. Seja o atendente do serviço de emergência (911). Me faça perguntas simples, claras e objetivas para coletar informações. Após o diálogo, me explique os termos usados e me ensine frases prontas úteis para este tipo de situação."
    },
    {
      id: 42,
      title: "Agendamento de corte de cabelo",
      level: "iniciante",
      content: "Quero praticar como agendar um horário no salão em inglês. Finja que sou um cliente ligando para marcar um corte de cabelo com um cabeleireiro específico. Use linguagem simples e frases diretas. Depois da simulação, me ensine outras maneiras de marcar horários e alternativas de vocabulário relacionadas a tipos de cortes, horários e profissionais."
    },
    {
      id: 43,
      title: "Adotando um animal de estimação",
      level: "iniciante/intermediário",
      content: "Simule que estou em um abrigo de animais nos EUA querendo adotar um cachorro. Seja o funcionário que irá me ajudar a encontrar o animal ideal. Faça perguntas sobre meu estilo de vida, tipo de lar e preferências. Ao final, me explique o vocabulário utilizado e me proponha um pequeno exercício com perguntas e respostas sobre adoção."
    },
    {
      id: 44,
      title: "Consulta odontológica",
      level: "intermediário",
      content: "Quero praticar conversas sobre saúde bucal em inglês. Simule que sou um paciente em uma clínica odontológica e você é o(a) dentista. Converse comigo sobre o motivo da consulta, descreva o procedimento e dê recomendações pós-atendimento. Depois, me explique os termos médicos usados de forma simples e me proponha um quiz de associação com imagens."
    },
    {
      id: 45,
      title: "Encontro de pais e professores",
      level: "iniciante/intermediário",
      content: "Simule uma conversa entre um pai (eu) e um professor de escola primária nos EUA. Fale sobre o desempenho do aluno (meu filho/filha), comportamento em sala e atividades escolares. Use frases claras, com tom gentil e educado. Ao fim, me ensine expressões úteis para este tipo de interação e me proponha reescrever as falas principais com minhas próprias palavras."
    },
    {
      id: 46,
      title: "Pedindo ajuda no metrô",
      level: "iniciante",
      content: "Estou em Nova York e me perdi no metrô. Simule que sou um turista pedindo ajuda a um funcionário da estação. Faça perguntas curtas e diretas para me ajudar a chegar ao meu destino. Após a simulação, me explique como perguntar por direções em diferentes cenários (ônibus, trem, aeroporto) e me proponha um mini mapa com desafio de rota em inglês."
    },
    {
      id: 47,
      title: "Fazendo compras no brechó",
      level: "iniciante/intermediário",
      content: "Quero praticar uma situação mais específica e culturalmente interessante. Simule que estou comprando roupas em um brechó nos EUA. Seja o(a) vendedor(a) e converse comigo sobre preços, tamanhos e estilos. Use termos comuns nesse contexto, como \"vintage\", \"used\", \"on sale\". Depois, me ensine como descrever roupas e negociar preços."
    },
    {
      id: 48,
      title: "Experiência em um parque de diversões",
      level: "intermediário",
      content: "Crie um diálogo entre um visitante (eu) e um funcionário de um parque de diversões nos EUA. Converse sobre ingressos, atrações e regras de segurança. Use vocabulário específico para o ambiente (fast pass, ride, height requirement). Após a simulação, me proponha escrever um pequeno parágrafo descrevendo minha experiência com base no vocabulário aprendido."
    },
    {
      id: 49,
      title: "Análise crítica de artigo acadêmico na área da saúde",
      level: "avançado",
      content: "Estou participando de um grupo de estudo e preciso apresentar uma análise crítica de um artigo acadêmico na área da saúde. Pode me ajudar a estruturar a apresentação? Aqui está o link/resumo do artigo: [insira aqui]. Meu foco é discutir os métodos utilizados, os resultados, possíveis vieses e implicações práticas dos achados. Pode organizar a resposta em tópicos claros para facilitar meu preparo?"
    },
    {
      id: 50,
      title: "Viagens no tempo e seus paradoxos",
      level: "avançado",
      content: "Você participará de uma conversa sobre as implicações teóricas e filosóficas de viagens no tempo. Vamos discutir paradoxos como o \"paradoxo do avô\", linhas temporais alternativas e suas consequências. Em inglês, você deverá argumentar, levantar hipóteses, questionar cenários e propor soluções plausíveis ou criativas para esses dilemas. Use vocabulário técnico, condicional avançado e expressões de especulação (e.g., \"Had it happened...\", \"It would have led to...\", \"One could argue that...\")."
    }
  ],
  3: [
    {
      id: 1,
      title: "Present Simple vs Present Continuous",
      level: "iniciante",
      content: "Explique as principais diferenças entre os tempos verbais Present Simple e Present Continuous, usando pelo menos 3 exemplos claros para cada. Contexto: Aprender a usar corretamente os tempos verbais em descrições do cotidiano. Formato da resposta: Lista explicativa com exemplos."
    },
    {
      id: 2,
      title: "Correção de erros gramaticais",
      level: "iniciante",
      content: "Corrija o seguinte parágrafo contendo erros gramaticais comuns para quem está aprendendo inglês: \"She go to school every day, but today she is stay home because she sick.\" Explique cada correção. Contexto: Prática em identificar e entender erros frequentes. Formato: Texto corrigido + explicação detalhada linha a linha."
    },
    {
      id: 3,
      title: "Expressões idiomáticas sobre emoções",
      level: "intermediário",
      content: "Liste 10 expressões idiomáticas em inglês relacionadas a emoções, explicando seu significado e dando exemplos de uso em duas frases cada, uma formal e uma informal. Contexto: Expansão do vocabulário para conversas e redações. Formato: Tabela com expressão, significado, frase formal, frase informal."
    },
    {
      id: 4,
      title: "Sinônimos: big, huge, enormous",
      level: "intermediário",
      content: "Explique a diferença entre os sinônimos \"big,\" \"huge\" e \"enormous,\" e escreva um breve parágrafo para cada, mostrando como escolher o termo ideal conforme o contexto. Contexto: Explorar nuances de vocabulário para evitar repetição. Formato: Parágrafos curtos com explicação e exemplos."
    },
    {
      id: 5,
      title: "Análise de coesão textual",
      level: "intermediário",
      content: "Analise o seguinte texto, apontando problemas de coesão e sugerindo 5 melhorias para conectores e transições. Contexto: Aprimorar fluidez e clareza em redações. Texto exemplo: \"I like reading books. Books are interesting. I also watch movies. Movies can be fun.\" Formato: Lista comentada com sugestões de substituição."
    },
    {
      id: 6,
      title: "Introdução de ensaio acadêmico",
      level: "avançado",
      content: "Escreva uma introdução para um ensaio acadêmico sobre os impactos ambientais do uso de plástico descartável, incluindo uma tese clara e 3 objetivos que serão abordados no texto. Contexto: Preparação para trabalhos universitários. Formato: Parágrafo formal com estrutura típica de introdução."
    },
    {
      id: 7,
      title: "Revisão de parágrafo acadêmico",
      level: "avançado",
      content: "Revise o seguinte parágrafo acadêmico, indicando pela marcação [SUGESTÃO] como tornar as frases mais acadêmicas e coerentes: \"Plastic pollution is bad because it harms water and animals. People should use less plastic to help nature.\" Formato: Texto com marcações e explicações específicas para cada sugestão feita."
    },
    {
      id: 8,
      title: "História curta com conflito",
      level: "avançado",
      content: "Crie uma história curta (150-200 palavras) em inglês, com um conflito central envolvendo duas personagens que têm opiniões opostas sobre trabalho remoto. Termine com uma resolução ambígua. Contexto: Praticar narrativa, diálogo e construção de personagens. Formato: Parágrafo narrativo com diálogo incluído."
    },
    {
      id: 9,
      title: "Cena de suspense descritiva",
      level: "avançado",
      content: "Descreva uma cena de suspense usando pelo menos 5 sentidos e um vocabulário emocional rico, para provocar tensão e expectativa no leitor. Contexto: Desenvolvimento de escrita descritiva avançada. Formato: Parágrafo curto (100-120 palavras)."
    },
    {
      id: 10,
      title: "E-mail formal para extensão de prazo",
      level: "intermediário",
      content: "Elabore um e-mail formal em inglês para solicitar uma extensão de prazo para um projeto universitário, justificando o pedido com detalhes claros e mantendo tom respeitoso. Contexto: Comunicação profissional e acadêmica. Formato: E-mail com saudação, corpo e fechamento."
    },
    {
      id: 11,
      title: "Frases de transição para relatórios",
      level: "intermediário",
      content: "Liste 8 frases de transição úteis para relatórios profissionais em inglês, explicando quando e como utilizar cada uma para melhorar a clareza do texto. Formato: Lista com exemplos."
    },
    {
      id: 12,
      title: "Parágrafo persuasivo sobre reciclagem",
      level: "avançado",
      content: "Crie um parágrafo persuasivo defendendo a importância da reciclagem em casa, usando argumentos baseados em dados estatísticos (forneça números fictícios) e apelo emocional. Contexto: Aprender a combinar lógica com emoção para persuadir. Formato: Parágrafo formal com estrutura argumentativa."
    },
    {
      id: 13,
      title: "Análise de estratégias persuasivas",
      level: "avançado",
      content: "Analise dois exemplos de textos persuasivos sobre dieta vegana (fornecidos) e aponte quais estratégias de persuasão (logos, pathos, ethos) são empregadas em cada um, explicando a eficácia delas. Formato: Tabela comparativa."
    },
    {
      id: 14,
      title: "Revisão e feedback de parágrafo",
      level: "todos os níveis",
      content: "Revise este parágrafo enviado por mim e dê uma crítica construtiva, focando na gramática, vocabulário e fluxo: \"I went to the park yesterday and see many bird. It was so beautiful and I enjoy my time.\" Formato: Correção linha a linha + sugestões práticas para melhorar."
    },
    {
      id: 15,
      title: "Títulos alternativos para artigo",
      level: "todos os níveis",
      content: "Sugira 5 títulos alternativos para um artigo em inglês cujo tema é \"The Future of Renewable Energy,\" priorizando criatividade e palavras-chave para SEO. Formato: Lista com justificativas curtas para cada título."
    },
    {
      id: 16,
      title: "Estilos APA vs MLA",
      level: "intermediário",
      content: "Explique a diferença entre os estilos APA e MLA para formatação de citações em trabalhos acadêmicos, exemplificando uma citação do livro \"To Kill a Mockingbird\" em ambos os estilos. Formato: Tabela comparativa."
    },
    {
      id: 17,
      title: "Transformação informal para formal",
      level: "intermediário",
      content: "Transforme o seguinte texto informal em um parágrafo formal adequado para um relatório empresarial: \"Our sales went up a lot this quarter because people really like our new product.\" Formato: Parágrafo formal."
    },
    {
      id: 18,
      title: "Construção de parágrafo sobre hobby",
      level: "iniciante",
      content: "Construa um parágrafo coerente e coeso de 5-7 frases sobre seu hobby favorito, usando conectores para ligar as ideias claramente. Contexto: Prática de desenvolvimento de parágrafos. Formato: Parágrafo com indicação dos conectores usados."
    },
    {
      id: 19,
      title: "Conectores para exemplos",
      level: "iniciante",
      content: "Liste 7 conectores para introduzir exemplos em Inglês e produza uma frase para cada, mostrando seu uso correto. Formato: Lista + frases."
    },
    {
      id: 20,
      title: "Paráfrase sobre mudanças climáticas",
      level: "intermediário",
      content: "Parafraseie o seguinte texto mantendo o significado original, mas usando estruturas e vocabulário diferente: \"Climate change is one of the biggest challenges facing humanity today.\" Formato: 3 versões para treinamento."
    },
    {
      id: 21,
      title: "Tradução idiomática",
      level: "intermediário",
      content: "Traduza esta frase para o inglês de forma natural e idiomática: \"Ele estava tão feliz que decidiu comemorar com seus amigos na praia.\" Formato: Tradução + explicação das escolhas lexicais."
    },
    {
      id: 22,
      title: "IELTS Writing Task 2",
      level: "avançado",
      content: "Escreva uma resposta de 250 palavras para a seguinte questão do IELTS Writing Task 2: \"Some people believe that technology is improving communication, while others think it is having a negative effect. Discuss both views and give your opinion.\" Formato: Ensaio organizado em introdução, corpo e conclusão."
    },
    {
      id: 23,
      title: "Estratégias para expandir respostas",
      level: "avançado",
      content: "Sugira estratégias para expandir respostas curtas em exames de redação, dando exemplos de como desenvolver uma ideia simples em dois parágrafos bem estruturados. Formato: Lista + exemplos."
    },
    {
      id: 24,
      title: "Perfil de personagem detalhado",
      level: "avançado",
      content: "Crie um perfil detalhado de personagem para um protagonista de romance, incluindo nome, idade, background, motivações, e um conflito interno. Use linguagem rica e variada. Formato: Texto descritivo organizado em tópicos."
    },
    {
      id: 25,
      title: "Diálogo com opiniões opostas",
      level: "avançado",
      content: "Escreva um diálogo entre dois personagens com opiniões opostas sobre um dilema moral, demonstrando suas personalidades e o conflito em questão. Formato: Diálogo formatado com indicações de tom."
    },
    {
      id: 26,
      title: "Explicação técnica simplificada",
      level: "avançado",
      content: "Explique em inglês, de forma simples e direta, como funciona um motor de combustão interna, para um público leigo. Formato: Parágrafo curto com linguagem acessível."
    },
    {
      id: 27,
      title: "Simplificação de texto técnico",
      level: "avançado",
      content: "Reescreva o seguinte trecho técnico para torná-lo mais claro e direto: \"The system undergoes a phase change at a certain temperature, resulting in latent heat absorption.\" Formato: Texto simplificado."
    },
    {
      id: 28,
      title: "Narrativa em três perspectivas",
      level: "avançado",
      content: "Escreva o mesmo evento narrado por três perspectivas diferentes: primeira pessoa, terceira pessoa limitada e terceira pessoa onisciente. Evento: \"Uma pessoa encontra uma carteira perdida na rua.\" Formato: Três parágrafos curtos."
    },
    {
      id: 29,
      title: "Níveis de formalidade",
      level: "intermediário",
      content: "Reescreva a frase: \"Thanks for your help!\" em cinco níveis diferentes de formalidade, do mais casual ao mais formal. Formato: Lista com explicação breve sobre o contexto apropriado para cada."
    },
    {
      id: 30,
      title: "Explicação para diferentes públicos",
      level: "intermediário",
      content: "Crie um parágrafo explicando uma regra gramatical para um público de crianças e outro parágrafo explicando a mesma regra para acadêmicos. Formato: Dois parágrafos contrastantes."
    },
    {
      id: 31,
      title: "Meta descrição para SEO",
      level: "intermediário",
      content: "Escreva uma meta descrição de até 160 caracteres para um artigo sobre \"Healthy Eating Habits,\" incluindo duas palavras-chave importantes. Formato: Texto único."
    },
    {
      id: 32,
      title: "Títulos atraentes para blogs",
      level: "intermediário",
      content: "Liste 5 dicas para escrever títulos atraentes para blogs em inglês, com exemplos práticos. Formato: Lista + exemplos."
    },
    {
      id: 33,
      title: "Revisão estilística para concisão",
      level: "avançado",
      content: "Faça uma revisão estilística do seguinte texto para torná-lo mais conciso e impactante, mantendo o significado: \"Due to the fact that the experiment was unsuccessful, it was necessary to perform a repetition of the procedure.\" Formato: Texto revisado + explicação da mudança."
    },
    {
      id: 34,
      title: "Conversão de voz passiva para ativa",
      level: "intermediário",
      content: "Converta este parágrafo da voz passiva para a voz ativa, mantendo o sentido original: \"The reports were submitted by the team after the deadline was extended.\" Formato: Texto ativo + breve explicação sobre quando usar cada voz."
    },
    {
      id: 35,
      title: "Desenvolvimento de tese e argumentos",
      level: "avançado",
      content: "Desenvolva uma tese clara para um ensaio que defenda a educação online, e crie 3 argumentos fortes para sustentá-la, explicando cada um detalhadamente. Formato: Tese + lista com argumentos + explicações."
    },
    {
      id: 36,
      title: "Aprendizado com exemplos",
      level: "intermediário",
      content: "Baseado nos dois exemplos abaixo, escreva um parágrafo sobre o tema \"Benefits of Exercise,\" mantendo o mesmo estilo e estrutura: Exemplo 1: \"Exercise improves physical health by strengthening the heart and muscles.\" Exemplo 2: \"Regular physical activity boosts mental well-being by reducing stress.\" Formato: Parágrafo único seguindo o padrão."
    },
    {
      id: 37,
      title: "Descrição urbana noturna",
      level: "avançado",
      content: "Descreva um cenário urbano à noite, focando no contraste entre luz e sombra, sons e sentimentos evocados, usando linguagem figurativa (metáforas e símiles). Formato: Parágrafo de 120-150 palavras."
    },
    {
      id: 38,
      title: "Correção de erros de preposição",
      level: "iniciante",
      content: "Identifique e corrija os erros de preposição nas frases abaixo, explicando a regra aplicada a cada caso: \"She is good in tennis.\" \"I will arrive to the airport at 7 pm.\" Formato: Correção com explicação."
    },
    {
      id: 39,
      title: "Esboço para texto argumentativo",
      level: "intermediário",
      content: "Crie um esboço detalhado (outline) para um texto argumentativo de 300 palavras sobre a importância da aprendizagem de idiomas estrangeiros. Inclua tópicos para introdução, argumentos e conclusão. Formato: Lista hierárquica de tópicos."
    },
    {
      id: 40,
      title: "Adaptação para público jovem",
      level: "intermediário",
      content: "Reescreva este parágrafo para torná-lo mais acessível para um público jovem (12-15 anos): \"Reading extensively can significantly expand your vocabulary and enhance comprehension abilities.\" Formato: Texto adaptado + lista de estratégias usadas."
    },
    {
      id: 41,
      title: "Cartão-postal de férias",
      level: "iniciante",
      content: "Escreva um cartão-postal em inglês para um amigo descrevendo suas férias na praia, usando pelo menos 5 frases e vocabulário simples. Formato: Texto curto informal."
    },
    {
      id: 42,
      title: "Narrativa no passado",
      level: "intermediário",
      content: "Escreva um parágrafo narrando um evento marcante que aconteceu na sua infância, utilizando os tempos verbais Past Simple e Past Continuous corretamente. Formato: Parágrafo narrativo."
    },
    {
      id: 43,
      title: "Reescrita para variedade lexical",
      level: "intermediário",
      content: "Reescreva o texto abaixo usando sinônimos e estruturas alternativas para ampliar o vocabulário: \"The movie was very good and the actors were great.\" Formato: 3 versões reescritas."
    },
    {
      id: 44,
      title: "Expressão de opinião sobre celulares",
      level: "iniciante",
      content: "Escreva três frases simples em inglês expressando sua opinião sobre o uso de celulares na escola, incluindo pelo menos uma frase positiva, uma negativa e uma neutra. Formato: Lista de frases."
    },
    {
      id: 45,
      title: "Resumo sobre mudanças climáticas",
      level: "intermediário",
      content: "Resuma o seguinte texto em até 4 frases, destacando as principais ideias: \"Climate change affects all regions of the world, causing rising sea levels, extreme weather, and disruption of ecosystems. Governments and individuals must take urgent action to mitigate these effects.\" Formato: Texto resumido."
    },
    {
      id: 46,
      title: "Uso de modal verbs",
      level: "intermediário",
      content: "Explique o uso de \"should,\" \"must,\" e \"might\" em inglês, fornecendo 3 frases exemplares para cada modal. Formato: Lista explicativa com exemplos."
    },
    {
      id: 47,
      title: "Diferenciação accept vs except",
      level: "intermediário",
      content: "Diferencie os significados e usos das palavras \"accept\" e \"except,\" com exemplos práticos em frases. Formato: Definições + exemplos."
    },
    {
      id: 48,
      title: "Argumento e refutação",
      level: "avançado",
      content: "Escreva um parágrafo apresentando um argumento contrário ao uso de tecnologia em salas de aula, seguido por uma refutação lógica de seu próprio argumento. Formato: Parágrafo argumentativo."
    },
    {
      id: 49,
      title: "Adjetivos e advérbios",
      level: "iniciante",
      content: "Liste 10 adjetivos comuns e seus advérbios correspondentes em inglês, usando-os em frases diferentes para mostrar a diferença. Formato: Tabela com exemplos."
    },
    {
      id: 50,
      title: "Introdução sobre benefícios da leitura",
      level: "intermediário",
      content: "Crie uma introdução atraente para um ensaio sobre os benefícios da leitura diária, incluindo um gancho inicial, contexto e tese clara. Formato: Parágrafo introdutório."
    }
  ],
  4: [
    {
      id: 1,
      title: "Entrevista de emprego - apresentação pessoal",
      level: "iniciante",
      content: "Simule um diálogo em inglês entre entrevistador e candidato que se apresenta, falando nome, idade, país e três interesses pessoais com frases simples. Contexto: Estudantes iniciantes praticando apresentações básicas em entrevistas. Formato: Diálogo de 8 falas (4 perguntas e 4 respostas)."
    },
    {
      id: 2,
      title: "Na padaria - fazer um pedido",
      level: "iniciante",
      content: "Crie um diálogo de nativos (english speakers) onde cliente pede tipos de pão e café, pergunta preço e agradece. Contexto: Compra num ambiente cotidiano, vocabulário básico. Formato: Diálogo de 8 falas (4 para cada personagem)."
    },
    {
      id: 3,
      title: "Perguntar as horas na rua",
      level: "iniciante",
      content: "Escreva um diálogo em inglês rápido onde turista pede a hora a um local e agradece. Frases curtas e educadas. Contexto: Conversa cotidiana polida. Formato: 4 falas."
    },
    {
      id: 4,
      title: "No supermercado - perguntar onde encontrar um produto",
      level: "iniciante",
      content: "Crie um diálogo em inglês na qual um cliente pergunta ao funcionário onde fica o leite; funcionário responde indicando o corredor. Contexto: Vocabulário de loja/mercado para iniciantes. Formato: 4 falas."
    },
    {
      id: 5,
      title: "Pedir informação sobre transporte público",
      level: "iniciante",
      content: "Faça um diálogo simulado na qual um passageiro pede a um funcionário qual ônibus pegar para o centro e custo do bilhete; recebe resposta. Contexto: Interação para turistas de primeira viagem. Formato: 4 falas."
    },
    {
      id: 6,
      title: "Agendar consulta médica por telefone",
      level: "iniciante",
      content: "Faça um diálogo simulado de um cliente ligando para clínica para marcar consulta, informando nome, disponibilidade e solicitando horário. Contexto: Vocabulário de saúde em inglês básico. Formato: 6 falas."
    },
    {
      id: 7,
      title: "Perguntar sobre o clima e estação do ano",
      level: "iniciante",
      content: "Diálogo simples onde duas pessoas conversam sobre o tempo e a estação atual, usando verbos básicos e adjetivos do clima. Contexto: Conversação informal para iniciantes no idioma inglês. Formato: 6 falas."
    },
    {
      id: 8,
      title: "Pedir informações sobre preços numa loja",
      level: "iniciante",
      content: "Elabore um diálogo simulado em inglês na qual um cliente pergunta preço de dois produtos diferentes; vendedor responde e explica forma de pagamento. Contexto: Ambiente comum de compras. Formato: 6 falas."
    },
    {
      id: 9,
      title: "Fazer uma reserva simples num restaurante",
      level: "iniciante",
      content: "Elabore um diálogo simulado em inglês na qual um cliente liga para restaurante, pergunta disponibilidade para duas pessoas e confirma reserva com nome e horário. Contexto: Vocabulário telefônico e de lugares simples. Formato: 6 falas."
    },
    {
      id: 10,
      title: "Pedir ajuda para encontrar um endereço",
      level: "iniciante",
      content: "Elabore um diálogo simulado em inglês na qual uma pessoa pede instruções a um estranho para encontrar um endereço próximo, o outro explica com frases simples. Contexto: Uso de direções básicas e localização. Formato: 6 falas."
    },
    {
      id: 11,
      title: "Entrevista de emprego - falar sobre experiência anterior",
      level: "intermediário",
      content: "Elabore um diálogo simulado em inglês, uma entrevista de emprego na qual o candidato explica; sua experiência, cargo e responsabilidades usando verbos no passado simples. Contexto: Entrevista para jovens com níveis intermediários no idioma. Formato: 8 falas."
    },
    {
      id: 12,
      title: "No restaurante - fazer uma reclamação educada",
      level: "intermediário",
      content: "Elabore um diálogo simulado em inglês de uma interação cliente-garçom dentro de um restaurante, na qual o cliente reclama que o prato chegou frio, pede para esquentar, usando linguagem formal e expressões de cortesia. Contexto: Aperfeiçoar reclamações educadas. Formato: 6 falas."
    },
    {
      id: 13,
      title: "Fazer um convite para festa",
      level: "intermediário",
      content: "Simule um diálogo em inglês: convite para uma festa com detalhes de local, data, horário e resposta planejando presença. Contexto: Conversa entre amigos. Formato: 6 falas."
    },
    {
      id: 14,
      title: "Reservar quarto de hotel por telefone",
      level: "intermediário",
      content: "Quero um diálogo em inglês simulado, aonde um cliente em um hotel pergunta datas, tipos de quarto, preço e confirma reserva. Contexto: Comunicação formal por telefone para reservas. Formato: 8 falas."
    },
    {
      id: 15,
      title: "Dar direções na cidade",
      level: "intermediário",
      content: "Diálogo simulado: Morador explica para turista detalhes de percurso a pé até ponto turístico, com uso de imperativos. Contexto: Guiar turistas em inglês. Formato: 6 falas."
    },
    {
      id: 16,
      title: "Pedir desculpas por atraso em reunião",
      level: "intermediário",
      content: "Diálogo simulado em inglês: Pessoa pede desculpas explicando motivo do atraso para colega de trabalho. Contexto: Ambiente profissional, uso de expressões formais. Formato: 4 falas."
    },
    {
      id: 17,
      title: "Fazer pedido especial no restaurante (restrição alimentar)",
      level: "intermediário",
      content: "Diálogo simulado em inglês: Cliente informa garçom restrição alimentar (ex.: vegano, sem glúten) e pergunta sobre opções do cardápio. Contexto: Comunicação clara de necessidades. Formato: 6 falas."
    },
    {
      id: 18,
      title: "Solicitar reembolso após compra com defeito",
      level: "intermediário",
      content: "Diálogo simulado em inglês: Cliente insatisfeito com compra que fez explica problema, pede reembolso, funcionário responde informando procedimento. Contexto: Serviços ao consumidor. Formato: 6 falas."
    },
    {
      id: 19,
      title: "Discutir planos futuros com colega",
      level: "intermediário",
      content: "Elabore um diálogo simulado em inglês: Dois colegas conversam sobre planos de carreira e vida pessoal para os próximos cinco anos. Contexto: Uso do futuro simples e vocabulário intermediário. Formato: 10 falas."
    },
    {
      id: 20,
      title: "Pedir informações sobre cursos numa escola de línguas",
      level: "intermediário",
      content: "Escreva um diálogo simulado em inglês: Pessoa interessada em um curso de idiomas pergunta ao funcionário da escola sobre tipos, duração, preços e horários dos cursos para tomar decisão. Contexto: Convencional para estudo de idiomas. Formato: 6 falas."
    },
    {
      id: 21,
      title: "Entrevista - responder sobre maior fraqueza",
      level: "avançado",
      content: "Simulação de diálogo: Entrevista de emprego onde o candidato responde pergunta difícil \"What is your greatest weakness?\" de forma honesta e construtiva. Contexto: Entrevistas formais avançadas. Formato: 6 falas."
    },
    {
      id: 22,
      title: "Negociar desconto na loja",
      level: "avançado",
      content: "Diálogo simulado: Cliente tenta obter desconto em loja, dando razões e vendedor oferece contraproposta. Contexto: Negociação em inglês, vocabulário avançado. Formato: 8 falas."
    },
    {
      id: 23,
      title: "Fazer uma entrevista para vaga de estágio com perguntas comportamentais",
      level: "avançado",
      content: "Quero que você desenvolva uma simulação de diálogo de uma entrevista de emprego em inglês na qual um entrevistador faz perguntas sobre trabalho em equipe, resolução de conflitos; candidato responde detalhadamente. Contexto: Desenvolvimento de fluência e estratégias de resposta para estágio. Formato: 10 falas."
    },
    {
      id: 24,
      title: "Dar feedback construtivo a colega sobre apresentação",
      level: "avançado",
      content: "Elabore uma simulação de diálogo em inglês: Pessoa elogia pontos positivos e sugere melhorias usando linguagem diplomática. Contexto: Ambiente corporativo, comunicação interpessoal. Formato: 6 falas."
    },
    {
      id: 25,
      title: "Solicitar mudança de horário de trabalho via e-mail e resposta",
      level: "avançado",
      content: "Escreva um modelo de e-mails formais em inglês de um funcionário solicitando alteração em seu horário de trabalho e resposta do gerente explicando possibilidades. Contexto: Comunicação escrita profissional avançada. Formato: Dois e-mails curtos."
    },
    {
      id: 26,
      title: "Simular atendimento ao cliente removendo dúvidas técnicas",
      level: "avançado",
      content: "Diálogo simulado em inglês: Atendente explica funcionalidades técnicas de um smartphone a um cliente interessado. Contexto: Treinamento em vocabulário tecnológico e atendimento avançado. Formato: 8 falas."
    },
    {
      id: 27,
      title: "Discutir diferenças culturais em negócios entre países",
      level: "avançado",
      content: "Diálogo simulado em inglês entre duas pessoas falam sobre barreiras e vantagens culturais na comunicação e negociações globais. Contexto: Profissional e intercultural. Formato: 10 falas."
    },
    {
      id: 28,
      title: "Simular conversa para alterar passagem aérea por telefone",
      level: "avançado",
      content: "Elabore um diálogo simulado em inglês entre um cliente e um funcionário de companhia aérea, na qual o cliente pede alteração de data e destino; atendente explica políticas e preços. Contexto: Atendimento formal e negociação de serviços. Formato: 8 falas."
    },
    {
      id: 29,
      title: "Simular ligação de emergência médica explicando sintomas",
      level: "avançado",
      content: "Diálogo simulado em inglês: Pessoa liga para emergência, descreve sintomas detalhadamente para receber instruções. Contexto: Vocabulário médico e comunicação clara em situações de urgência. Formato: 8 falas."
    },
    {
      id: 30,
      title: "Discutir planos para feriado e viagens entre amigos",
      level: "avançado",
      content: "Elabore um diálogo simulado em inglês, onde dois amigos trocam ideias sobre destinos, custos, datas e organização de viagem. Contexto: Fluência para conversas informais complexas. Formato: 8 falas."
    },
    {
      id: 31,
      title: "Simular entrevista para mestrado numa universidade estrangeira",
      level: "avançado",
      content: "Simule um diálogo-entrevista para mestrado em uma universidade de ponta dos EUA — Candidato responde perguntas sobre sua motivação, pesquisas e experiência acadêmica. Contexto: Inglês acadêmico avançado. Formato: 10 falas."
    },
    {
      id: 32,
      title: "Vender produto numa simulação de telemarketing",
      level: "avançado",
      content: "Simule um diálogo em inglês onde um Vendedor de telemarketing destaca vantagens, responde objeções, e tenta persuadir possível cliente a comprar algo. Contexto: Vocabulário persuasivo e linguagem comercial. Formato: 10 falas."
    },
    {
      id: 33,
      title: "Pedir informações detalhadas sobre seguro de carro",
      level: "avançado",
      content: "Simule um diálogo em inglês entre um cliente e um vendedor de seguro de carro; Cliente pergunta cobertura, custo, franquia e benefícios; atendente esclarece. Contexto: Comunicação profissional detalhada. Formato: 6 falas."
    },
    {
      id: 34,
      title: "Fazer discurso breve de apresentação em evento social",
      level: "avançado",
      content: "Elabore, em inglês, um discurso formal com 100 palavras, apresentando-se e dando boas-vindas aos presentes em um evento social. Contexto: Aperfeiçoamento de fala em público. Formato: Monólogo."
    },
    {
      id: 35,
      title: "Negociar prazo de pagamento em situação financeira difícil",
      level: "avançado",
      content: "Elabore um diálogo em inglês onde um cliente explica dificuldade do pagamento de algo e pede extensão do prazo; fornecedor oferece condições. Contexto: Negociação profissional sensível. Formato: 8 falas."
    },
    {
      id: 36,
      title: "Expressar condolências e apoiar amigo",
      level: "avançado",
      content: "Diálogo simulado em inglês: Pessoa fala confortando amigo em luto, usa expressões de empatia e apoio. Contexto: Comunicação social avançada. Formato: 6 falas."
    },
    {
      id: 37,
      title: "Dialogar com atendente de banco para abrir conta internacional",
      level: "avançado",
      content: "Elabore um diálogo simulado em inglês referente a uma conversa entre uma pessoa e um atendente de banco com finalidade de abrir uma conta internacional: Pessoa pergunta exigências, documentos e serviços relacionados à conta. Contexto: Vocabulário bancário avançado. Formato: 8 falas."
    },
    {
      id: 38,
      title: "Pedir ao vizinho para diminuir volume da música educadamente",
      level: "avançado",
      content: "Elabore um diálogo simulado em inglês entre vizinhos, aonde um deles, incomodado com o volume alto, pede para seu vizinho de forma educada para abaixar o som, justificando seu pedido. Contexto: Interação social delicada. Formato: 6 falas."
    },
    {
      id: 39,
      title: "Dar instruções para montar móvel em inglês",
      level: "avançado",
      content: "Elabore um texto em inglês onde um especialista explica passo a passo como montar um móvel, usando imperativos e sequências. Contexto: Vocabulário técnico e instruções claras. Formato: Monólogo curto."
    },
    {
      id: 40,
      title: "Conversa entre professor e aluno sobre dificuldades acadêmicas",
      level: "avançado",
      content: "Elabore um diálogo simulado em inglês entre um aluno e um professor; Aluno explica dificuldades, professor faz perguntas e dá dicas de estudo. Contexto: Ambiente escolar. Formato: 6 falas."
    },
    {
      id: 41,
      title: "Conversa entre médicos e paciente sobre tratamento",
      level: "avançado",
      content: "Simule, em inglês, uma conversa entre médico e paciente; Médico explica diagnóstico, opções e paciente faz perguntas detalhadas. Contexto: Vocabulário clínico avançado. Formato: 10 falas."
    },
    {
      id: 42,
      title: "Entrevista para voluntário em ONG",
      level: "avançado",
      content: "Simule, em inglês, uma entrevista para voluntário de uma ONG; Entrevistador pergunta motivação e habilidades; candidato responde claramente. Contexto: Entrevista formal para voluntariado. Formato: 8 falas."
    },
    {
      id: 43,
      title: "Tirar dúvidas sobre uso de aplicativos no trabalho remoto",
      level: "avançado",
      content: "Simule, em inglês, um diálogo entre um trabalhador remoto e um especialista em linkedin, sobre como esta ferramenta pode ajudar no trabalho do usuário; usuário faz perguntas técnicas; especialista responde com clareza. Contexto: Tecnologia e comunicação corporativa. Formato: 6 falas."
    },
    {
      id: 44,
      title: "Conversa para justificar atraso em trabalho a chefe",
      level: "avançado",
      content: "Simule, em inglês, uma conversa entre chefe e funcionário; Funcionário explica motivo do atraso e oferece soluções. Contexto: Comunicação profissional avançada. Formato: 6 falas."
    },
    {
      id: 45,
      title: "Planejar reunião com colegas sobre projeto",
      level: "avançado",
      content: "Simule um diálogo em inglês de um areunião de trabalho; Pessoas discutem agenda, datas e responsabilidades. Contexto: Ambiente de trabalho colaborativo. Formato: 8 falas."
    },
    {
      id: 46,
      title: "Pedir recomendação de livros e filmes numa biblioteca",
      level: "avançado",
      content: "Simule, em inglês, uma conversa entre um cliente e um funcionário de uma biblioteca; Pessoa pede indicações e explica preferências; bibliotecário responde. Contexto: Interação cultural. Formato: 6 falas."
    },
    {
      id: 47,
      title: "Efeitos da tecnologia no cotidiano",
      level: "avançado",
      content: "Elabore um diálogo simulado em inglês entre duas pessoas que discutem vantagens e desvantagens das tecnologias da atualidade, utilizando expressões complexas. Contexto: Debate informal avançado. Formato: 8 falas."
    },
    {
      id: 48,
      title: "Discutir diferenças entre sistemas educacionais internacionais",
      level: "avançado",
      content: "Elabore um diálogo argumentativo em inglês entre duas pessoas discutindo diferenças entre sistemas educacionais de países; eles comparam currículo, métodos e resultados. Contexto: Vocabulário educacional avançado. Formato: 8 falas."
    },
    {
      id: 49,
      title: "Organizar evento beneficente",
      level: "avançado",
      content: "Simule, em inglês, uma conversa entre pessoas, com o objetivo de organizar um evento beneficente; Pessoas dividem tarefas e prazos, considerando orçamento. Contexto: Planejamento colaborativo. Formato: 8 falas."
    },
    {
      id: 50,
      title: "Negociar contrato de prestação de serviços",
      level: "avançado",
      content: "Simule, em inglês, uma negociação de contrato de prestação de serviços(de qualquer área). Partes discutem cláusulas, preços e prazos para fechar acordo. Contexto: Vocabulário jurídico e comercial. Formato: 10 falas."
    }
  ],
  5: [
    {
      id: 1,
      title: "Apresentações pessoais detalhadas com correções e explicações",
      content: "Estou começando a aprender inglês e quero praticar apresentações pessoais completas. Simule que estou conhecendo alguém novo num evento social e me faça perguntas sobre meu nome, idade, profissão, hobbies, gostos musicais e planos para o fim de semana. Corrija minhas respostas, explique a estrutura das frases com verbos 'to be' e 'have', pronomes possessivos e o uso das preposições de tempo e lugar. Faça um resumo dos meus erros, acertos e dicas para expressar as informações de forma natural e correta.",
      level: "Iniciante"
    },
    {
      id: 2,
      title: "Diálogo no supermercado para pedir informações e preços com vocabulário detalhado",
      content: "Simule uma situação em que estou no supermercado inglês e quero pedir informações sobre preços, descontos e localização de produtos. Use vocabulário suficiente sobre alimentos, bebidas, produtos de limpeza e utensílios domésticos. Faça perguntas que me obriguem a usar expressões como 'How much is…?', 'Is there any discount on…?', 'Where can I find…?', e corrija minhas respostas. Explique diferenças entre 'some' e 'any', além de expressões úteis para compras. Finalize com um resumo dos pontos a melhorar.",
      level: "Básico a intermediário"
    },
    {
      id: 3,
      title: "Reservar um hotel em Londres – diálogo completo com polidez e vocabulário formal",
      content: "Prepare uma simulação para praticar reservas de hotel em Londres, usando inglês formal e polido. Inclua perguntas sobre tipos de quartos (single, double, suite), preços, horários de check-in/check-out, políticas de cancelamento e facilidades como Wi-Fi, café da manhã e academia. Corrija erros na pronúncia e gramática, sugira formas mais naturais de se expressar, e forneça dicas culturais britânicas sobre etiqueta nesses contextos. Faça um resumo dos erros e acertos, destacando expressões úteis para viagens.",
      level: "Básico a intermediário"
    },
    {
      id: 4,
      title: "Verbos irregulares em três tempos com exercícios e aplicação prática",
      content: "Ensine os principais verbos irregulares em inglês com exemplos no presente, passado simples e particípio passado. Depois, proponha exercícios onde eu tenha que conjugar e usar esses verbos em frases completas, corrigindo meus erros e explicando diferenças de uso. Inclua verbos como 'go', 'eat', 'see', 'take', 'write', 'speak', entre outros. Ao final, faça um resumo dos meus pontos fortes e dificuldades.",
      level: "Iniciante a intermediário"
    },
    {
      id: 5,
      title: "Descrição detalhada de pessoas com nuances emocionais e de personalidade",
      content: "Quero praticar descrições em inglês focando em aparência física, personalidade e emoções. Simule que estou descrevendo um amigo ou familiar a alguém que nunca o viu. Faça perguntas sobre cor de cabelo, altura, sorriso, hábitos, gostos e estado emocional atual. Corrija minhas respostas, explique o uso de adjetivos comparativos e superlativos, bem como expressões para sentimentos (happy, anxious, confident). Apresente um resumo de melhorias para enriquecer minha fala.",
      level: "Intermediário"
    },
    {
      id: 6,
      title: "Atendimento em restaurante – pedido, perguntas sobre ingredientes e reclamações educadas",
      content: "Simule um cenário realista em um restaurante. Quero pedir o cardápio, solicitar pratos específicos, perguntar se possuem ingredientes alergênicos (como nozes, glúten), e reclamar educadamente se meu pedido vier errado. Use expressões típicas, corrija minha pronúncia, gramática e escolha de palavras, e explique por que algumas versões são mais naturais e polidas. Use vocabulário detalhado de comidas, cozinhas, alergias e reclamações suaves. Faça um resumo final dos erros e acertos.",
      level: "Intermediário"
    },
    {
      id: 7,
      title: "Expressar opiniões com diferentes estruturas formais e informais",
      content: "Ensine as várias formas de expressar opinião em inglês, como 'I think', 'In my opinion', 'As far as I'm concerned', e 'From my point of view'. Proponha perguntas sobre temas cotidianos e atuais que me obriguem a usar essas expressões e faça correção completa, explicando o tom de formalidade e indicação do melhor uso em cada contexto. Faça um resumo dos acertos e erros, incentivando variação de linguagem e naturalidade.",
      level: "Intermediário"
    },
    {
      id: 8,
      title: "Present Perfect x Past Simple – explicações com exemplos e exercícios interativos",
      content: "Explique as diferenças entre Present Perfect e Past Simple, com exemplos claros de uso em situações reais – experiência de vida, ações recentes vs ações passadas específicas. Proponha exercícios práticos onde eu complete frases e construa perguntas nos dois tempos, corrigindo meus erros e dando explicações detalhadas por trás das escolhas verbais. Ao final, faça um resumo pedagógico para fixação.",
      level: "Intermediário"
    },
    {
      id: 9,
      title: "Perguntas indiretas – estrutura, uso e prática contextualizada",
      content: "Ajude-me a entender e praticar perguntas indiretas em inglês, explicando a estrutura (como 'Could you tell me where the station is?'). Proponha situações cotidianas e faça perguntas para que eu responda usando perguntas indiretas. Corrija erros, explique dúvidas sobre formação e diferenças com perguntas diretas, e faça um resumo dos pontos principais depois da prática.",
      level: "Intermediário a avançado"
    },
    {
      id: 10,
      title: "Entrevista de emprego para iniciantes – perguntas, respostas e correções",
      content: "Simule uma entrevista de emprego simples para iniciantes, me perguntando sobre experiência, habilidades, formação e objetivos profissionais. Corrija minha pronúncia, gramática, e sugira respostas mais assertivas e profissionais, explicando o que torna uma resposta eficaz. Ao final, faça um resumo com dicas para melhorar clareza e confiança.",
      level: "Iniciante a intermediário"
    },
    {
      id: 11,
      title: "Debate guiado – 'A tecnologia beneficia a sociedade?'",
      content: "Conduza um debate estruturado comigo sobre o tema 'A tecnologia beneficia a sociedade?' Forneça argumentos para ambos os lados e peça que eu apresente minha opinião usando conectores de causa, consequência e contraste. Corrija gramática, vocabulário e evite erros comuns. Explique expressões úteis para debater e finalize com um resumo detalhado dos pontos fortes e aspectos a melhorar.",
      level: "Intermediário a avançado"
    },
    {
      id: 12,
      title: "Phrasal verbs comuns no ambiente de trabalho – explicação e diálogo prático",
      content: "Liste e explique 10 phrasal verbs populares usados no trabalho, como 'follow up', 'set up', 'carry out', 'turn down'. Proponha diálogos simulados no escritório onde eu precise usar esses phrasal verbs corretamente. Corrija todos os erros, explique contextos e diferentes sentidos dos phrasal verbs usados, e compile um resumo com dicas para fixação.",
      level: "Intermediário"
    },
    {
      id: 13,
      title: "Condicional tipo 1, 2 e 3: explicação detalhada e exercícios interativos",
      content: "Quero aprender e praticar os condicionais tipo 1, 2 e 3. Explique as diferenças com exemplos para situações reais, hipotéticas e passadas. Crie exercícios dinâmicos onde eu precise completar e construir frases usando cada tipo de condicional, corrigindo meus erros, explicando a lógica e sugerindo alternativas de uso. Finalize com resumo e dicas para aplicar em conversas cotidianas e escritas.",
      level: "Intermediário a avançado"
    },
    {
      id: 14,
      title: "Redação de e-mail formal para universidade – revisão e melhoria",
      content: "Ajude-me a escrever um e-mail formal para solicitar informações a uma universidade estrangeira. Oriente sobre a estrutura padrão de e-mails formais (saudação, corpo, fechamento), use vocabulário correto e polido e revise o texto que eu produzir, corrigindo erros e sugerindo formas mais naturais e profissionais. Explique as nuances do tom formal e finalize com um resumo dos principais pontos de melhoria.",
      level: "Intermediário a avançado"
    },
    {
      id: 15,
      title: "Apresentação sobre cidade natal com vocabulário descritivo e refinado",
      content: "Oriente-me a preparar uma apresentação oral curta sobre minha cidade natal, focando em vocabulário descritivo, frases coesas e coerentes, além de expressar sentimentos e fatos históricos ou culturais. Faça perguntas para elucidar detalhes, corrija minha fala e escreva sugestões de frases mais naturais e impactantes. Finalize com resumo de pontos fortes e a melhorar.",
      level: "Intermediário"
    },
    {
      id: 16,
      title: "Expressões idiomáticas – lista com exemplos e uso criativo",
      content: "Apresente 10 expressões idiomáticas comuns em inglês (ex: 'break the ice', 'hit the nail on the head'). Explique o significado, dê exemplos em frases e depois faça perguntas para que eu crie respostas usando essas expressões. Corrija os usos incorretos e explique como e quando usar cada uma de forma natural. Faça um resumo final para fixação.",
      level: "Intermediário a avançado"
    },
    {
      id: 17,
      title: "Dar instruções para montar equipamento eletrônico – sequências e vocabulário técnico",
      content: "Simule uma situação em que preciso instruir alguém a montar um aparelho eletrônico, como um roteador ou dispositivo de som. Peça para eu dar as instruções passo a passo, usando vocabulário técnico específico e ordens claras, como 'first, plug in the cable', 'next, press the power button'. Corrija minha sequência, uso dos verbos imperativos e vocabulário, explicando como tornar as instruções mais claras e naturais. Conclua com resumo de erros e acertos.",
      level: "Intermediário"
    },
    {
      id: 18,
      title: "Uso correto de artigos definidos e indefinidos com exercícios variados",
      content: "Explique as regras de uso dos artigos 'a', 'an' e 'the', incluindo contextos gerais, específicos e exceções. Proponha exercícios variados que envolvam completar frases, corrigir sentenças incorretas e justificar as escolhas. Corrija as respostas e explique os erros mais comuns, como o uso ou omissão indevida dos artigos. Finalize com resumo e dicas para lembrar as regras.",
      level: "Iniciante a intermediário"
    },
    {
      id: 19,
      title: "Conversar sobre hobbies e interesses com variedade de tempos verbais",
      content: "Vamos fazer uma conversa detalhada sobre meus hobbies e interesses. Faça perguntas que me desafiem a responder usando presente simples, presente contínuo e passado simples. Corrija a gramática e vocabulário, explique os erros comuns e sugira frases alternativas para maior naturalidade e fluidez. Faça resumo ao final com os principais pontos a melhorar.",
      level: "Iniciante a intermediário"
    },
    {
      id: 20,
      title: "Criar e manter diário de bordo para prática diária da escrita",
      content: "Oriente-me a criar um diário de bordo em inglês para praticar escrita diária. Sugira tópicos para escrever, como minhas atividades do dia, sentimentos, planos e desafios. Incentive o uso de diferentes tempos verbais, adjetivos e vocabulário emocional. Corrija os trechos escritos, explique estrutura, gramática e ofereça sugestões para enriquecer o texto. Faça resumo com feedback geral.",
      level: "Iniciante a intermediário"
    },
    {
      id: 21,
      title: "Palavras similares com pronúncia e uso distintos – exercícios contextualizados",
      content: "Explique e dê exemplos de palavras semelhantes que causam confusão na pronúncia ou uso, como 'lose' / 'loose', 'affect' / 'effect', 'sheet' / 'seat'. Proponha exercícios para que eu pratique o uso correto em frases e releia entendendo a diferença de significado e som. Corrija erros de pronúncia e uso, explicando as diferenças.",
      level: "Intermediário"
    },
    {
      id: 22,
      title: "Diálogo no consultório médico para relatar sintomas e pedir ajuda",
      content: "Simule uma consulta médica em inglês na qual eu preciso descrever sintomas, dores e solicitar ajuda ou recomendações. Use vocabulário médico útil, como tipos de dores, partes do corpo e medicamentos. Corrija minha pronúncia, gramática e escolha de expressões, explicando como soarem mais naturais e apropriadas. Finalize com resumo dos erros comuns e melhorias.",
      level: "Básico a intermediário"
    },
    {
      id: 23,
      title: "Identificar e corrigir erros comuns de preposição em inglês",
      content: "Apresente exemplos curtos de frases com erros típicos de preposição em inglês (como 'in the bus' em vez de 'on the bus'). Peça para eu identificar o erro e corrigi-lo. Explique a regra aplicada em cada caso, e proponha exercícios adicionais de correção. Faça um resumo com as preposições mais usadas e seus usos.",
      level: "Iniciante a intermediário"
    },
    {
      id: 24,
      title: "Conversa sobre temas atuais para melhorar fluência e vocabulário",
      content: "Vamos conversar sobre temas atuais como meio ambiente, economia ou cultura pop, em nível intermediário. Proponha perguntas desafiadoras, corrija gramática, vocabulário e fluidez, explique erros comuns e sugira sinônimos para maior riqueza lexica. Faça resumo com pi dir recomendações para continuar praticando.",
      level: "Intermediário"
    },
    {
      id: 25,
      title: "Escrita de pequenos textos argumentativos – temas, correção e dicas",
      content: "Ajude-me a escrever textos curtos argumentativos em inglês. Sugira temas relevantes e solicite que eu apresente uma tese, argumentos e conclusão simples. Corrija coesão, coerência, conectores e gramática, explicando como organizar melhor as ideias. Finalize com um resumo dos pontos fortes e sugestões para melhoria textual.",
      level: "Intermediário a avançado"
    },
    {
      id: 26,
      title: "Simulação de ligação telefônica para agendar consulta ou serviço",
      content: "Simule uma ligação telefônica formal e informal para agendar uma consulta médica ou um serviço doméstico. Ensine frases e expressões para confirmação, dúvida, cancelamento e reagendamento. Corrija erros de pronúncia, tom, e escolha de palavras, explicando diferenças culturais entre o inglês formal e informal. Faça resumo dos pontos fortes e a melhorar na fala telefônica.",
      level: "Intermediário"
    },
    {
      id: 27,
      title: "Ampliar vocabulário com sinônimos e antônimos – exercícios de substituição",
      content: "Liste sinônimos e antônimos para palavras básicas comuns, como 'happy', 'big', 'important', 'fast'. Dê exemplos de frases e proponha que eu substitua palavras simples por outras mais sofisticadas ou vice-versa, mantendo o sentido. Corrija, explique nuances de significado e registre um resumo para ajudar a memorizar.",
      level: "Intermediário"
    },
    {
      id: 28,
      title: "Uso do futuro – will, going to e present continuous – explicações detalhadas e diálogos",
      content: "Explique quando usar 'will', 'going to' e o presente contínuo para falar do futuro, com exemplos claros para planos, previsões e decisões espontâneas. Proponha diálogos em que eu precise usar cada forma em contextos adequados, corrigindo erros e explicando as nuances. Finalize com resumo e dicas para aplicar no dia a dia.",
      level: "Intermediário"
    },
    {
      id: 29,
      title: "Compreensão auditiva – leitura de diálogos e perguntas para inferência",
      content: "Envie pequenos diálogos escritos para que eu leia como se fosse áudio, focando em entender informações implícitas. Faça perguntas de compreensão que exijam inferência, como 'Why did the speaker say that?' ou 'What can we assume about the character's mood?'. Corrija respostas e explique as estratégias para captar o sentido além do literal.",
      level: "Intermediário a avançado"
    },
    {
      id: 30,
      title: "Contar história curta e responder perguntas para compreensão e vocabulário",
      content: "Conte uma história curta em inglês (eu posso ler ou ouvir a versão escrita). Depois, faça perguntas detalhadas sobre personagens, eventos, motivos e emoções para que eu responda em inglês. Corrija gramática e vocabulário, explique nuances e dicas para melhorar compreensão e narrativa.",
      level: "Intermediário"
    },
    {
      id: 31,
      title: "Voz passiva em diferentes tempos – explicação e exercícios de transformação",
      content: "Explique a voz passiva em Inglês nos tempos presente, passado e futuro, com exemplos claros para cada tempo. Peça que eu transforme frases na voz ativa para passiva e corrija, explicando as diferenças e usos apropriados. Descreva contextos onde a voz passiva é preferida e finalize com resumo pedagógico.",
      level: "Intermediário a avançado"
    },
    {
      id: 32,
      title: "Situação de emergência – dialogar com polícia ou bombeiros usando inglês claro",
      content: "Simule uma emergência onde preciso comunicar a polícia ou bombeiros uma situação urgente. Ensine frases para descrever o local, tipo do problema, pessoas envolvidas e o que está acontecendo, usando vocabulário simples e claro. Pratique pedidos urgentes e respostas oficiais. Corrija uso do vocabulário, gramática e tom, explicando expressões difíceis e fazendo resumo no final.",
      level: "Intermediário"
    },
    {
      id: 33,
      title: "Uso de expressões de tempo (ago, since, for, yet, already) em frases negativas e interrogativas",
      content: "Explique a diferença e uso correto de expressões de tempo como 'ago', 'since', 'for', 'yet' e 'already', especialmente em frases negativas e perguntas. Proponha exercícios variados para completar sentenças e corrigir erros. Ao final, faça um resumo claro e dicas para usar essas expressões corretamente.",
      level: "Intermediário"
    },
    {
      id: 34,
      title: "Small talk comum – clima, esportes, notícias, cultura pop – naturalidade e fluência",
      content: "Pratique small talk focando em tópicos cotidianos como clima, esportes, notícias recentes e cultura pop. Corrija minha naturalidade, fluidez, pronúncia e gramática, explique expressões idiomáticas e gírias comuns nesse tipo de conversa. Dê sugestões para tornar minhas respostas mais espontâneas e interessantes.",
      level: "Intermediário"
    },
    {
      id: 35,
      title: "Diferenças entre inglês britânico e americano – vocabulário e pronúncia com exemplos",
      content: "Explique as principais diferenças de vocabulário e pronúncia entre o inglês britânico e americano, incluindo exemplos práticos para palavras comuns ('lift' vs 'elevator', 'flat' vs 'apartment'). Proponha exercícios para eu usar apropriadamente o vocabulário segundo o contexto. Corrija erros e faça um resumo das diferenças culturais importantes.",
      level: "Intermediário"
    },
    {
      id: 36,
      title: "Exercícios para melhorar pronúncia de sons difíceis (th, r, l)",
      content: "Desenvolva exercícios focados na pronúncia correta dos sons 'th' (como em think e this), e os sons do 'r' e 'l', com palavras e frases comuns. Ouça minhas tentativas, corrija e explique a posição correta da língua e articulação, sugerindo dicas práticas para melhorar minha pronúncia.",
      level: "Iniciante a intermediário"
    },
    {
      id: 37,
      title: "Uso de modais de dedução e certeza (must, might, can't) em contextos reais",
      content: "Ensine o uso dos modais 'must', 'might' e 'can't' para expressar certeza e possibilidade. Dê exemplos e proponha situações práticas para que eu construa frases usando esses modais para deduzir fatos ou situações. Corrija e explique nuances gestuais e semânticas, finalizando com resumo e dicas.",
      level: "Intermediário"
    },
    {
      id: 38,
      title: "Simulação de reunião de negócios – apresentar, concordar e discordar respeitosamente",
      content: "Simule uma reunião de negócios intermediária, onde eu apresente ideias, concorde e discorde de forma respeitosa. Ensine vocabulário formal para reuniões, expressões para introduzir ideias, pedir opiniões, aceitar ou recusar sugestões educadamente. Corrija erros de gramática, vocabulário e tom, explicando estratégias para comunicação eficaz em ambientes profissionais. Faça resumo final.",
      level: "Intermediário a avançado"
    },
    {
      id: 39,
      title: "Perguntas tag – formação, uso e exercícios para fixação",
      content: "Explique como formar perguntas tag (ex: 'isn't it?', 'don't you?'), regras de polaridade e entonação. Proponha exercícios para eu formar e responder perguntas tag em diferentes contextos, corrigindo erros comuns. Faça resumo com exemplos úteis para conversação.",
      level: "Intermediário"
    },
    {
      id: 40,
      title: "Vocabulário tecnológico e internet – termos e explicações simples",
      content: "Liste termos importantes relacionados a tecnologia e internet, como 'browser', 'cloud computing', 'download', 'server'. Explique cada um com palavras simples e peça para que eu explique conceitos em inglês simples, corrigindo e expandindo meu vocabulário. Sugira exercícios para usar os termos em frases relevantes.",
      level: "Intermediário"
    },
    {
      id: 41,
      title: "Escrita de resumos em inglês – textos curtos e exercícios práticos",
      content: "Forneça textos curtos e peça que eu escreva resumos mantendo a essência, coerência e coesão. Corrija erros de estrutura, gramática e vocabulário, explicando como evitar informações irrelevantes e concentrar-se no essencial. Faça resumo final com dicas para escrever resumos eficazes.",
      level: "Intermediário a avançado"
    },
    {
      id: 42,
      title: "Diálogo com agente de imigração no aeroporto – perguntas frequentes e respostas curtas",
      content: "Simule uma entrevista com um agente de imigração ao chegar ao aeroporto. Pratique respostas curtas e objetivas às perguntas frequentes sobre destino, propósito, duração e onde vou me hospedar. Utilize vocabulário específico e expressões essenciais, corrija erros e explique frases alternativas e dicas culturais para facilitar a comunicação.",
      level: "Básico a intermediário"
    },
    {
      id: 43,
      title: "Perguntas no passado com auxiliar 'did' e respostas completas",
      content: "Ensine a estrutura de perguntas no passado com auxiliar 'did' (ex: Did you go?), e como dar respostas completas e negativas. Proponha exercícios práticos variados, corrija erros e explique diferenças em relação ao presente.",
      level: "Iniciante a intermediário"
    },
    {
      id: 44,
      title: "Análise e correção de erros comuns de falantes de português ao falar inglês",
      content: "Liste os erros mais frequentes cometidos por falantes de português, como falsos cognatos, uso incorreto do presente contínuo, preposições e pronúncia. Proponha exercícios para corrigi-los, explique as causas dos erros e dê dicas para evitá-los. Faça resumo pedagógico para facilitar a aprendizagem.",
      level: "Iniciante a intermediário"
    },
    {
      id: 45,
      title: "Preposições de lugar e movimento – exercícios de descrição e movimento",
      content: "Pratique preposições de lugar (in, on, at) e movimento (to, across, into) com atividades descritivas de locais e trajetos de objetos ou pessoas. Peça para eu descrever cenas e corrigir erros de uso. Explique as regras e nuances das preposições e faça resumo com dicas para memorização.",
      level: "Iniciante a intermediário"
    },
    {
      id: 46,
      title: "Descrever filme ou livro – resenhas com vocabulário e correção",
      content: "Simule que eu tenho que descrever um filme ou livro que assisti, passando informações sobre enredo, personagens, ambiente, tema e minha opinião pessoal. Corrija erros, sugira vocabulário útil para resenhas e explique como organizar a descrição para maior clareza.",
      level: "Intermediário a avançado"
    },
    {
      id: 47,
      title: "Uso correto dos advérbios de frequência em diferentes tipos de frases",
      content: "Explique como usar advérbios de frequência ('always', 'sometimes', 'never') em frases afirmativas, negativas e interrogativas. Proponha exercícios variados para aplicação, corrija e explique os erros mais comuns e como evitar confusões.",
      level: "Iniciante a intermediário"
    },
    {
      id: 48,
      title: "Comparativo e superlativo de adjetivos – explicações e exercícios práticos",
      content: "Ensine as regras para formar comparativos e superlativos regulares e irregulares, com exemplos claros. Proponha exercícios em que eu descreva diferenças entre pessoas, lugares e objetos, corrigindo erros e explicando usos específicos (ex: good/better/best).",
      level: "Iniciante a intermediário"
    },
    {
      id: 49,
      title: "Perguntas e respostas com o verbo 'to be' no presente e passado",
      content: "Faça exercícios para que eu forme perguntas e respostas usando o verbo 'to be' no presente e passado (ex: Are you ready? Was he there?). Corrija erros de estrutura e pronúncia e explique diferenças básicas entre os tempos.",
      level: "Iniciante"
    },
    {
      id: 50,
      title: "Organizar festa: planejar atividades, convidar e resolver problemas em inglês",
      content: "Simule que estou organizando uma festa e preciso planejar atividades, convidar pessoas e resolver problemas que surgirem (ex: falta de comida, atraso de convidados). Use vocabulário informal e formal, corrija erros de gramática e expressões, sugerindo alternativas mais naturais e eficazes. Faça resumo dos erros e acertos para aprimorar planejamento e comunicação social.",
      level: "Intermediário"
    }
    // Module 5 prompts will be added here
  ],
  6: [
    {
      id: 1,
      title: "Break the ice",
      content: "Explique detalhadamente a expressão idiomática em inglês \"Break the ice\". Forneça: A definição precisa e origem da expressão. A tradução literal e o equivalente em português, destacando nuances. Um exemplo de uso em uma situação social real (como em uma festa ou reunião), com a frase em inglês e a tradução. Explique os contextos e ocasiões mais comuns para utilizar esta expressão, incluindo variações de formalidade e informalidade.",
      level: "Intermediário"
    },
    {
      id: 2,
      title: "Bite the bullet",
      content: "Apresente a expressão \"Bite the bullet\" explicando seu significado literal e figurado. Traduza para português, destacando se existe alguma expressão similar no Brasil. Dê um exemplo prático, contextualizando em um momento difícil ou de decisão inevitável, com diálogo em inglês e tradução. Diferencie em quais contextos sociais, profissionais ou culturais ela é mais usada e se é considerada formal ou informal.",
      level: "Intermediário"
    },
    {
      id: 3,
      title: "Kick the bucket",
      content: "Descreva com detalhes a expressão idiomática \"Kick the bucket\" utilizada em inglês para falar de morte. Forneça sua tradução literal e o significado equivalente em português, incluindo expressões coloquiais brasileiras similares. Apresente um exemplo realístico de usa numa conversa informal, com diálogo, frase em inglês e tradução. Explique em que contextos culturais essa expressão é apropriada e quando deve ser evitada devido à sensibilidade do tema.",
      level: "Intermediário"
    },
    {
      id: 4,
      title: "Let the cat out of the bag",
      content: "Explique a expressão \"Let the cat out of the bag\" focando em seu significado de revelar segredo ou informação confidencial. Dê a tradução literal e o equivalente usado no português do Brasil. Ilustre com um diálogo contextualizado em ambiente de trabalho ou familiar, em inglês com tradução. Comente sobre variações regionais do inglês e situações formais/informais para aplicação correta da expressão.",
      level: "Intermediário"
    },
    {
      id: 5,
      title: "Spill the beans",
      content: "Apresente e analise a expressão em inglês \"Spill the beans\" explicando seu uso para quando alguém revela um segredo. Faça a tradução literal e indique o equivalente mais comum em português brasileiro. Forneça um exemplo contextualizado, com frases em inglês e tradução, utilizado em uma conversa entre amigos. Explique nuances culturais e sociais de seu uso, incluindo tabus ou alertas para não usar em situações muito formais.",
      level: "Intermediário"
    },
    {
      id: 6,
      title: "Piece of cake",
      content: "Explique detalhadamente a expressão \"Piece of cake\" usada para indicar algo muito fácil de fazer. Forneça a definição precisa e as nuances do significado em inglês. Traduza para o português ressaltando equivalentes, como \"moleza\" ou \"canja\". Dê um exemplo contextualizado num ambiente de trabalho ou estudo, incluindo a frase em inglês e tradução. Comente sobre os contextos formais e informais em que essa expressão pode ser usada.",
      level: "Básico"
    },
    {
      id: 7,
      title: "Hit the sack",
      content: "Apresente a expressão idiomática \"Hit the sack\", explicando seu significado relacionado a ir dormir ou descansar. Traduza a expressão para o português e comente sobre equivalentes culturais. Dê um exemplo prático em diálogo casual em inglês, com tradução para o português. Explique em que situações cotidianas e contextos sociais essa expressão é mais usada.",
      level: "Básico"
    },
    {
      id: 8,
      title: "Under the weather",
      content: "Descreva a expressão \"Under the weather\" que significa sentir-se mal ou doente. Traduza para o português e explore expressões brasileiras similares. Apresente um exemplo contextualizado em conversa cotidiana, com frases em inglês e tradução. Explique os níveis de formalidade e variações regionais do inglês em que essa expressão aparece.",
      level: "Básico"
    },
    {
      id: 9,
      title: "Burn the midnight oil",
      content: "Explique o significado da expressão \"Burn the midnight oil\", associada a trabalhar ou estudar até tarde da noite. Dê a tradução literal e o equivalente em português, indicando sinônimos ou expressões próximas. Forneça um exemplo mostrando alguém se dedicando ao trabalho, com diálogo em inglês e tradução. Comente sobre a aplicação mais comum no meio acadêmico, profissional e sua conotação cultural.",
      level: "Intermediário"
    },
    {
      id: 10,
      title: "Costs an arm and a leg",
      content: "Apresente e explique a expressão \"Costs an arm and a leg\" usada para descrever algo muito caro. Traduza para o português, incluindo explicações sobre expressões brasileiras equivalentes. Dê um exemplo prático num contexto de compra ou negociação, com frase em inglês e tradução. Explique os contextos formais e informais em que essa expressão é utilizada.",
      level: "Intermediário"
    },
    {
      id: 11,
      title: "Hit the nail on the head",
      content: "Descreva a expressão \"Hit the nail on the head\", que significa identificar algo com precisão ou fazer um comentário extremamente correto. Forneça tradução e equivalentes no português brasileiro. Crie um exemplo no contexto de uma reunião de negócios, com diálogo em inglês e tradução. Explique quando e como essa expressão é usada em ambientes formais e informais.",
      level: "Intermediário"
    },
    {
      id: 12,
      title: "Barking up the wrong tree",
      content: "Explique a expressão \"Barking up the wrong tree\", utilizada quando alguém está cometendo um engano ou direcionando uma crítica errada. Traduza para o português e apresente equivalentes culturais. Ofereça um exemplo em contexto de mal-entendido em uma conversa, com frase em inglês e tradução. Discuta os contextos sociais e culturais dessa expressão.",
      level: "Intermediário"
    },
    {
      id: 13,
      title: "The ball is in your court",
      content: "Analise a expressão \"The ball is in your court\" que significa que a responsabilidade ou a próxima ação depende de alguém. Traduza para o português, descrevendo termos equivalentes. Apresente um exemplo em contexto de tomada de decisão, numa conversa real, com tradução. Comente sobre usos formais ou informais e em quais situações essa expressão é adequada.",
      level: "Intermediário"
    },
    {
      id: 14,
      title: "Beat around the bush",
      content: "Explique a expressão \"Beat around the bush\", usada quando a pessoa evita falar algo diretamente. Dê a tradução e seus equivalentes em português. Forneça um exemplo prático em diálogo pessoal, com frases em inglês e português. Explique os contextos comunicativos, culturais e em que situações é comum seu uso.",
      level: "Intermediário"
    },
    {
      id: 15,
      title: "Pull someone's leg",
      content: "Apresente a expressão \"Pull someone's leg\" que significa brincar ou provocar alguém de forma leve e humorada. Traduza e compare com expressões brasileiras similares. Dê um exemplo de uso em conversa entre amigos, com a frase em inglês e a tradução. Explique os aspectos culturais e contextuais do uso dessa expressão.",
      level: "Básico"
    },
    {
      id: 16,
      title: "Throw in the towel",
      content: "Descreva a expressão \"Throw in the towel\" que significa desistir ou reconhecer uma derrota. Traduza para o português e explique sua origem. Apresente um exemplo em contexto de desistência, como em esportes ou negócios, com diálogo em inglês e tradução. Explique seu uso mais comum e a forma como a expressão é percebida culturalmente.",
      level: "Intermediário"
    },
    {
      id: 17,
      title: "By the skin of your teeth",
      content: "Explique a expressão \"By the skin of your teeth\", que significa escapar por pouco ou por um golpe de sorte. Forneça a tradução literal e equivalentes comuns em português. Dê um exemplo contextualizado, mostrando um momento de quase fracasso, com a frase em inglês e tradução. Comente sobre o ambiente onde essa expressão costuma ser usada e seu tom.",
      level: "Intermediário"
    },
    {
      id: 18,
      title: "At the drop of a hat",
      content: "Apresente a expressão \"At the drop of a hat\", que significa fazer algo imediatamente, sem hesitação. Traduza e comente sobre equivalentes no português brasileiro. Ofereça um exemplo em contexto social, com diálogo e tradução. Explique variações de uso e sua intensidade em contextos formais e informais.",
      level: "Intermediário"
    },
    {
      id: 19,
      title: "Back to the drawing board",
      content: "Descreva a expressão \"Back to the drawing board\", usada quando é preciso recomeçar um projeto ou plano. Traduza e explique o significado e uso em português. Dê um exemplo prático em ambiente profissional, com frase em inglês e tradução. Explique a aplicabilidade cultural e profissional da expressão.",
      level: "Intermediário"
    },
    {
      id: 20,
      title: "Hit the road",
      content: "Explique a expressão \"Hit the road\", significando começar uma viagem ou sair rapidamente de um lugar. Traduza para o português e ofereça equivalentes culturais. Forneça um exemplo em conversa casual, com frases em inglês e português. Apresente os contextos mais comuns, tanto literal quanto figurado.",
      level: "Básico"
    },
    {
      id: 21,
      title: "Jump on the bandwagon",
      content: "Apresente a expressão \"Jump on the bandwagon\", que significa aderir a uma moda ou apoio popular. Traduza para o português explicando o sentido figurado. Ofereça um exemplo num contexto social ou de negócio, com diálogo e tradução. Explique a dimensão cultural e os usos típicos da expressão.",
      level: "Intermediário"
    },
    {
      id: 22,
      title: "Let sleeping dogs lie",
      content: "Explique a expressão \"Let sleeping dogs lie\", usada para aconselhar a não provocar problemas desnecessários. Traduza e forneça equivalentes em português. Dê um exemplo em ambiente familiar ou profissional, com frase em inglês e tradução. Analise os contextos formais e informais e por que é importante considerar essa expressão.",
      level: "Intermediário"
    },
    {
      id: 23,
      title: "Burn bridges",
      content: "Descreva a expressão \"Burn bridges\", que significa destruir relacionamentos ou oportunidades irreversivelmente. Traduza e indique expressões equivalentes no português. Apresente um exemplo pertinente ao ambiente profissional, com diálogo em inglês e tradução. Explique a importância cultural e social do termo e seus alertas.",
      level: "Avançado"
    },
    {
      id: 24,
      title: "Cut corners",
      content: "Explique \"Cut corners\", que significa fazer algo de forma apressada ou econômica, geralmente sacrificando a qualidade. Traduza para o português e ofereça explicações detalhadas. Dê um exemplo em cenário de trabalho, com frases em inglês e tradução. Discuta as implicações éticas e culturais do uso dessa expressão.",
      level: "Intermediário"
    },
    {
      id: 25,
      title: "Cry over spilled milk",
      content: "Apresente a expressão \"Cry over spilled milk\", que significa lamentar algo que já aconteceu e não pode ser mudado. Traduza e explore equivalentes em português. Forneça um exemplo emocional, com diálogo em inglês e tradução. Explique o que a expressão ensina culturalmente e quando é aplicada.",
      level: "Intermediário"
    },
    {
      id: 26,
      title: "Devil's advocate",
      content: "Explique a expressão \"Devil's advocate\", que é a pessoa que defende um ponto de vista contrário para estimular o debate. Traduza para o português e explique o conceito detalhadamente. Apresente um exemplo em contexto profissional ou acadêmico, com frase em inglês e tradução. Discuta como essa expressão é percebida na cultura anglófona.",
      level: "Avançado"
    },
    {
      id: 27,
      title: "Don't count your chickens before they hatch",
      content: "Descreva o significado da expressão \"Don't count your chickens before they hatch\", que aconselha não planejar algo antes de ter certeza. Traduza de forma detalhada com equivalentes no português. Ofereça um exemplo concreto e contextualizado de uso em conversas cotidianas, com tradução. Explique o contexto cultural e os riscos associados a ignorar esse conselho.",
      level: "Intermediário"
    },
    {
      id: 28,
      title: "Every cloud has a silver lining",
      content: "Explique a expressão \"Every cloud has a silver lining\", que transmite otimismo em tempos difíceis. Traduza para o português com equivalentes culturais. Forneça um exemplo positivo em situação de dificuldade, com diálogo e tradução. Comente sobre o valor cultural do otimismo contido na expressão.",
      level: "Intermediário"
    },
    {
      id: 29,
      title: "Hit the jackpot",
      content: "Apresente a expressão \"Hit the jackpot\", que significa conseguir um grande sucesso ou sorte repentina. Traduza para o português, explicando nuances de sorte e sucesso. Dê um exemplo contextualizado, como alguém ganhando num jogo ou oportunidade, com diálogo e tradução. Explique os contextos coloquiais e formais de uso.",
      level: "Básico"
    },
    {
      id: 30,
      title: "Keep your chin up",
      content: "Explique a expressão \"Keep your chin up\", usada para encorajar alguém a permanecer positivo em momentos difíceis. Traduza e ofereça expressões semelhantes em português. Dê um exemplo emocional, com diálogo motivacional, em inglês e tradução. Discuta o contexto de uso e a importância do tom de apoio moral.",
      level: "Básico"
    },
    {
      id: 31,
      title: "Miss the boat",
      content: "Descreva a expressão \"Miss the boat\", que indica perder uma oportunidade importante. Traduza para o português e apresente equivalentes. Crie um exemplo realístico, mostrando uma oportunidade perdida em diálogo com tradução. Explique usos comuns e culturalmente relevantes da expressão.",
      level: "Intermediário"
    },
    {
      id: 32,
      title: "Once in a blue moon",
      content: "Explique a expressão \"Once in a blue moon\", que significa algo que acontece muito raramente. Traduza e forneça expressões equivalentes no Brasil. Ofereça um exemplo contextualizado em conversa informal, com frases em inglês e português. Discuta aspectos culturais e quando usar essa expressão.",
      level: "Intermediário"
    },
    {
      id: 33,
      title: "On the fence",
      content: "Apresente a expressão \"On the fence\", usada para descrever indecisão ou neutralidade em uma situação. Traduza para o português e dê equivalentes. Ofereça um exemplo em contexto de decisão difícil, com diálogo em inglês e tradução. Explique os contextos sociais e culturais em que essa expressão é mais usada.",
      level: "Intermediário"
    },
    {
      id: 34,
      title: "Play it by ear",
      content: "Explique a expressão \"Play it by ear\", que significa agir ou decidir conforme as circunstâncias surgem, sem planejamento rígido. Traduza para o português e indique expressões equivalentes. Dê um exemplo prático em contexto social ou profissional, com frases em inglês e tradução. Fale sobre a flexibilidade cultural da expressão e seu uso.",
      level: "Intermediário"
    },
    {
      id: 35,
      title: "Rain on someone's parade",
      content: "Descreva a expressão \"Rain on someone's parade\", que significa atrapalhar ou estragar a alegria ou expectativa de alguém. Traduza para o português e forneça equivalentes culturais. Apresente um exemplo de situação social em inglês e português. Explique quando usar a expressão e as conotações emocionais associadas.",
      level: "Intermediário"
    },
    {
      id: 36,
      title: "See eye to eye",
      content: "Explique a expressão \"See eye to eye\", que indica concordância plena entre pessoas. Traduza para o português e dê exemplos semelhantes. Forneça um exemplo em diálogo real, com frases bilíngues. Comente sobre os ambientes onde essa expressão é mais frequente.",
      level: "Básico"
    },
    {
      id: 37,
      title: "Shoot the breeze",
      content: "Apresente a expressão \"Shoot the breeze\", que significa conversar informalmente, bater papo sem assuntos sérios. Traduza e explique analogias em português. Dê um exemplo prático de conversa casual entre amigos, com idioma bilíngue. Explique a relevância cultural e os locais onde a expressão é mais comum.",
      level: "Básico"
    },
    {
      id: 38,
      title: "Take it with a grain of salt",
      content: "Explique a expressão \"Take it with a grain of salt\", que é usada para indicar ceticismo ou dúvida sobre a veracidade de uma informação. Traduza e forneça equivalentes no português. Conte um exemplo prático em que alguém receba uma notícia com reserva, com diálogo bilíngue. Fale sobre contextos formais e informais para o uso desta expressão.",
      level: "Intermediário"
    },
    {
      id: 39,
      title: "The best of both worlds",
      content: "Descreva a expressão \"The best of both worlds\", que significa desfrutar das vantagens de duas situações distintas. Traduza para o português e dê exemplos semelhantes. Ofereça um exemplo realístico em diálogo, com tradução. Explique quando essa expressão é usada e seu tom positivo.",
      level: "Intermediário"
    },
    {
      id: 40,
      title: "Throw caution to the wind",
      content: "Explique a expressão \"Throw caution to the wind\", que significa agir de forma arriscada ou sem se preocupar com as consequências. Traduza e mostre expressões equivalentes portuguesas. Apresente um exemplo em contextos de decisão arriscada, com diálogo e tradução. Analise o uso cultural e o impacto da expressão.",
      level: "Avançado"
    },
    {
      id: 41,
      title: "Under your nose",
      content: "Apresente a expressão \"Under your nose\", que significa algo óbvio que está bem diante de alguém, mas não foi percebido. Traduza e dê equivalentes no português brasileiro. Dê um exemplo prático de situação cotidiana, com diálogo em inglês e português. Explique usos comuns e o tom usado com essa expressão.",
      level: "Básico"
    },
    {
      id: 42,
      title: "Water under the bridge",
      content: "Explique \"Water under the bridge\", que significa deixar eventos passados e problemas para trás, focando no perdão e reconciliação. Traduza para o português e indique expressões similares. Ofereça um exemplo de diálogo em situação de reconciliação, com tradução bilíngue. Analise o contexto cultural e emocional da expressão.",
      level: "Intermediário"
    },
    {
      id: 43,
      title: "You can't judge a book by its cover",
      content: "Descreva o significado da expressão \"You can't judge a book by its cover\", que aconselha a não julgar pela aparência externa. Traduza e ofereça exemplos em português. Forneça um diálogo realístico, em inglês e português. Explique a importância cultural e situacional dessa expressão.",
      level: "Intermediário"
    },
    {
      id: 44,
      title: "Break a leg",
      content: "Explique a expressão \"Break a leg\", que é uma forma de desejar sorte, especialmente no teatro. Traduza e explique a origem cultural e o significado figurado. Apresente um exemplo de uso em contexto teatral ou acadêmico, com diálogo bilíngue. Analise o uso formal e informal da expressão.",
      level: "Básico"
    },
    {
      id: 45,
      title: "Get your act together",
      content: "Descreva a expressão \"Get your act together\", que significa organizar-se ou melhorar sua performance. Traduza para o português, explicando nuances e equivalentes. Ofereça um exemplo em diálogo motivacional, com frase em inglês e tradução. Comente sobre os contextos onde é usada, seu tom e intenções.",
      level: "Intermediário"
    },
    {
      id: 46,
      title: "In the same boat",
      content: "Explique a expressão \"In the same boat\", que indica que as pessoas estão compartilhando a mesma situação ou problema. Traduza para o português e apresente expressões correlatas. Dê um exemplo contextualizado, com diálogo bilíngue. Comente sobre os aspectos culturais e contextos sociais da expressão.",
      level: "Intermediário"
    },
    {
      id: 47,
      title: "Bite off more than you can chew",
      content: "Apresente a expressão \"Bite off more than you can chew\", usada quando alguém assume mais responsabilidade do que pode cuidar. Traduza para o português, indicando equivalentes. Dê um exemplo em ambiente profissional ou pessoal, com diálogo em inglês e tradução. Explique implicações culturais e quando evitar usar essa expressão.",
      level: "Intermediário"
    },
    {
      id: 48,
      title: "Call it a day",
      content: "Explique a expressão \"Call it a day\", que significa decidir terminar uma atividade ou trabalho para descansar. Traduza para o português e ofereça equivalentes culturais. Forneça um exemplo em ambiente de trabalho ou estudo, com frase bilíngue. Analise o uso formal e informal da expressão.",
      level: "Básico"
    },
    {
      id: 49,
      title: "Cut to the chase",
      content: "Descreva a expressão \"Cut to the chase\", que significa ir direto ao ponto, sem rodeios ou demora. Traduza e apresente expressões brasileiras similares. Apresente um exemplo num contexto de reunião ou conversa direta, com diálogo traduzido. Explique os ambientes mais comuns de uso dessa expressão.",
      level: "Intermediário"
    },
    {
      id: 50,
      title: "Hit the ground running",
      content: "Explique a expressão \"Hit the ground running\", usada para descrever quando alguém começa uma tarefa ou projeto já com muita energia e eficiência. Traduza literal e figuradamente para o português. Forneça um exemplo profissional ou acadêmico, mostrando sua aplicação, com tradução. Comente sobre o contexto e a imagem positiva que essa expressão traz.",
      level: "Intermediário"
    }
    // Module 6 prompts will be added here
  ],
  7: [
    {
      id: 1,
      title: "Present Simple Tense – Uso, Formação e Aplicação",
      content: "Explique detalhadamente a estrutura do Present Simple, incluindo a formação para sujeitos na terceira pessoa do singular (acréscimo de '-s' ou '-es'), usos principais como hábitos, fatos gerais e rotinas. Apresente exemplos afirmativos, negativos e interrogativos. Peça ao usuário para criar 5 frases positivas descrevendo atividades diárias comuns, 5 frases negativas negando hábitos e 5 perguntas para descobrir rotinas de outras pessoas.",
      level: "iniciante"
    },
    {
      id: 2,
      title: "Present Continuous Tense – Definição, Formas e Contextos de Uso",
      content: "Explique a formação do Present Continuous (sujeito + verbo \"to be\" + verbo com '-ing') e seus principais usos para indicar ações acontecendo no momento da fala e planos futuros confirmados. Inclua exemplos de frases afirmativas, interrogativas e negativas. Solicite que o usuário descreva detalhadamente o que diferentes pessoas estão fazendo agora, criando pelo menos 7 frases contextuais e variadas.",
      level: "iniciante"
    },
    {
      id: 3,
      title: "Past Simple – Verbos Regulares e Irregulares com Contexto Temporal",
      content: "Explique a estrutura do Past Simple tanto para verbos regulares (acréscimo de '-ed') quanto para verbos irregulares, incluindo uma lista de exemplos comuns. Diferencie ações concluídas em um tempo específico no passado. Peça para escrever 10 frases narrando eventos passados numa ordem cronológica coerente, utilizando tanto verbos regulares quanto irregulares, e indicando expressões temporais precisas.",
      level: "iniciante"
    },
    {
      id: 4,
      title: "Past Continuous – Uso para Ações em Progresso no Passado",
      content: "Descreva a estrutura do Past Continuous (was/were + verbo + '-ing') e explique suas funções para expressar ações que estavam acontecendo em determinado momento do passado ou ações simultâneas. Solicite a criação de 5 pequenas narrativas ou descrições, cada uma contendo múltiplas sentenças que utilizem o Past Continuous para estabelecer o cenário de uma ação em progresso.",
      level: "iniciante"
    },
    {
      id: 5,
      title: "Present Perfect – Conexão entre Passado e Presente com Exemplos Práticos",
      content: "Explique em detalhes a estrutura do Present Perfect (have/has + particípio passado), seus usos para expressar experiências de vida, ações recentes e resultados presentes. Dê exemplos variados, incluindo frases afirmativas, negativas e interrogativas. Peça para listar pelo menos 10 atividades que o usuário já tenha feito em sua vida, usando o Present Perfect em frases completas, enfatizando a relevância do tempo não especificado.",
      level: "intermediário"
    },
    {
      id: 6,
      title: "Present Perfect vs Past Simple – Diferenças e Aplicações Contextuais",
      content: "Explique detalhadamente a diferença entre Present Perfect (have/has + particípio passado), usado para experiências ou ações sem tempo definido, e Past Simple, usado para ações concluídas em um tempo específico. Apresente exemplos de ambas as formas e situações típicas de uso. Peça para o usuário criar 5 frases usando Present Perfect para relatar experiências de vida e 5 frases usando Past Simple para contar eventos passados com indicação de tempo e, em seguida, identificar qual tempo verbal foi utilizado em cada frase.",
      level: "intermediário"
    },
    {
      id: 7,
      title: "Future Simple (Will) – Formação e Usos para Previsões e Decisões Instantâneas",
      content: "Defina a estrutura do Future Simple (will + verbo base), explicando seu uso para decisões espontâneas, previsões e promessas. Inclua exemplos afirmativos, negativos e interrogativos em diferentes contextos sociais. Peça para o usuário construir 10 frases prevendo situações futuras variadas, desde clima até decisões pessoais inesperadas.",
      level: "iniciante"
    },
    {
      id: 8,
      title: "Going to – Planos e Intenções Futuras com Exemplos Detalhados",
      content: "Informe a estrutura do \"be going to\" (sujeito + verbo \"to be\" + going to + verbo base) para indicar planos ou intenções futuras já decididas. Explique diferenças em relação ao Future Simple. Solicite que o usuário escreva um plano detalhado para o próximo final de semana, utilizando \"going to\" para expressar intenções claras e específicas.",
      level: "iniciante"
    },
    {
      id: 9,
      title: "Zero Conditional – Regras, Estrutura e Aplicação em Fatos Científicos e Hábitos",
      content: "Explique a estrutura do Zero Conditional (If + Present Simple, Present Simple) e seu uso para expressar fatos universais, leis da natureza e hábitos. Dê exemplos típicos de uso científico e cotidiano. Peça para o usuário criar 10 frases aplicando o Zero Conditional em contextos que envolvam regras da natureza ou hábitos frequentes, reforçando a relação causal.",
      level: "intermediário"
    },
    {
      id: 10,
      title: "First Conditional – Expressando Possibilidades Reais no Futuro",
      content: "Descreva a formação do First Conditional (If + Present Simple, Will + verbo base), enfatizando seu uso para falar sobre possibilidades reais e consequências futuras. Inclua exemplos variados e condições plausíveis. Peça para o usuário listar várias consequências possíveis se determinadas condições forem cumpridas, formulando pelo menos 10 frases completas no First Conditional.",
      level: "intermediário"
    },
    {
      id: 11,
      title: "Second Conditional – Situações Hipotéticas e Irreais no Presente ou Futuro",
      content: "Detalhe a estrutura do Second Conditional (If + Past Simple, Would + verbo base) e como é usada para falar de hipóteses irreais, desejos ou situações improváveis no presente ou futuro. Ofereça exemplos para contextos pessoais e sociais. Solicite a criação de 7 frases descrevendo cenários imaginários e seus resultados improváveis, usando o tempo verbal corretamente.",
      level: "intermediário"
    },
    {
      id: 12,
      title: "Third Conditional – Reflexões e Arrependimentos sobre o Passado",
      content: "Explique a estrutura do Third Conditional (If + Past Perfect, Would have + particípio passado) e seu uso para expressar arrependimentos ou situações hipotéticas no passado. Apresente exemplos que mostram causas e efeitos impossíveis. Peça para o usuário criar 5 frases imaginando diferentes resultados no passado, caso as situações tivessem ocorrido de forma distinta.",
      level: "avançado"
    },
    {
      id: 13,
      title: "Modal Verbs for Ability: Can and Could – Presente e Passado",
      content: "Delineie o uso dos modais \"can\" para habilidade presente e \"could\" para habilidade passada. Apresente exemplos afirmativos, negativos e interrogativos nestes contextos. Solicite que o usuário descreva habilidades atuais e passadas suas ou de outras pessoas, criando frases variadas para praticar o uso de \"can\" e \"could\".",
      level: "iniciante"
    },
    {
      id: 14,
      title: "Modal Verbs for Obligation: Must and Have to – Diferenças e Aplicações",
      content: "Explique diferentemente os modais \"must\" (obrigação pessoal) e \"have to\" (obrigação imposta externamente), incluindo exemplos e contextos típicos em que cada um é preferido. Peça para o usuário criar frases que indicam regras pessoais com \"must\" e regras ou leis externas usando \"have to\".",
      level: "intermediário"
    },
    {
      id: 15,
      title: "Modal Verbs for Permission: Can and May – Formalidade e Uso em Pedidos",
      content: "Apresente as diferenças entre \"can\" (informal) e \"may\" (formal) para pedir e conceder permissão. Ilustre com exemplos de diálogos e frases completas. Solicite que o usuário escreva pequenos diálogos simulando pedidos de permissão e respostas afirmativas ou negativas, usando ambos os modais.",
      level: "iniciante"
    },
    {
      id: 16,
      title: "Comparatives and Superlatives – Formação Completa e Uso em Comparações",
      content: "Explique detalhadamente a formação dos comparativos e superlativos, incluindo regras para adjetivos curtos (er/est) e longos (more/most). Dê exemplos práticos e ressalte exceções. Peça ao usuário para comparar diferentes objetos, pessoas e lugares, formando pelo menos 10 frases com comparativos e superlativos variados.",
      level: "iniciante"
    },
    {
      id: 17,
      title: "Countable and Uncountable Nouns – Definição e Quantificadores Comuns",
      content: "Diferencie substantivos contáveis e incontáveis com exemplos claros. Explique o uso de quantificadores como \"many\", \"much\", \"some\", \"any\", entre outros. Peça que liste itens em categorias contáveis e incontáveis e crie pelo menos 10 frases usando os quantificadores corretamente.",
      level: "iniciante"
    },
    {
      id: 18,
      title: "Articles: a, an, the – Regras de Uso e Exceções Importantes",
      content: "Descreva o uso dos artigos indefinidos \"a\" e \"an\" e do definido \"the\", incluindo regras de pronúncia, contagem e especificação. Trate exceções e erros comuns. Peça ao usuário que corrija uma lista de 10 frases com erros nos artigos, explicando cada correção detalhadamente.",
      level: "iniciante"
    },
    {
      id: 19,
      title: "Prepositions of Place and Time – Como e Quando Usar \"in\", \"on\" e \"at\"",
      content: "Explique as principais preposições de lugar (\"in\", \"on\", \"at\") e de tempo, indicando suas diferenças e contextos corretos. Use exemplos concretos para tornar as regras claras. Solicite que o usuário descreva a localização de objetos em uma sala e agende compromissos diários, criando pelo menos 8 frases variadas usando as preposições adequadas.",
      level: "iniciante"
    },
    {
      id: 20,
      title: "Reported Speech – Transformações em Discurso Indireto",
      content: "Explique as regras para converter frases do discurso direto para indireto, focando nas mudanças de tempo verbal, pronomes e expressões de tempo. Apresente exemplos com diferentes verbos introdutórios. Peça para transformar 10 frases do discurso direto para o indireto, explicando cada alteração gramatical detalhadamente.",
      level: "avançado"
    },
    {
      id: 21,
      title: "Question Tags – Formação, Uso e Suas Regras Essenciais",
      content: "Defina o conceito de question tags como confirmações ou pedidos de confirmação. Explique como formar tags negativas e positivas, combinando com o auxílio do verbo e do sujeito correto. Solicite que o usuário complete 15 frases com question tags apropriadas para diferentes contextos.",
      level: "intermediário"
    },
    {
      id: 22,
      title: "Passive Voice – Voz Passiva no Presente e Passado",
      content: "Explique a estrutura da voz passiva com \"to be + particípio passado\", destacando tempos presente e passado e situações adequadas para seu uso (ênfase no objeto da ação). Peça para transformar 12 frases ativas em passivas, indicando quem realizou a ação e quando.",
      level: "intermediário"
    },
    {
      id: 23,
      title: "Gerunds and Infinitives – Regras de Uso e Diferenças Fundamentais",
      content: "Apresente as regras para uso de gerúndios (-ing) e infinitivos (to + verbo), com listas de verbos que exigem cada forma e situações comuns. Inclua exemplos para sentido e função. Solicite que o usuário forme frases combinando gerúndios e infinitivos corretamente, criando ao menos 10 sentenças de níveis variados.",
      level: "intermediário"
    },
    {
      id: 24,
      title: "Relative Clauses – Tipos Definidos e Não Definidos",
      content: "Explique o uso das relative clauses, diferenciando entre as que definem (sem vírgulas) e as que adicionam informação extra (com vírgulas). Ensine o uso correto de \"who\", \"which\", \"that\". Peça para juntar pares de frases usando cláusulas relativas para criar pelo menos 10 frases compostas coerentes.",
      level: "intermediário"
    },
    {
      id: 25,
      title: "Mixed Conditional Sentences – Combinações de Condicionais para Situações Complexas",
      content: "Explique como e quando misturar condições do segundo e terceiro conditionals para expressar resultados presentes ligados a condições passadas. Dê exemplos detalhados. Solicite a criação de 7 frases misturando condicionais em situações complexas com causas passadas e efeitos atuais.",
      level: "avançado"
    },
    {
      id: 26,
      title: "Expressing Future with Present Continuous – Planos Confirmados",
      content: "Explique o uso do Present Continuous para indicar planos fixos e compromissos futuros, diferenciando de outras formas futuras. Apresente exemplos em contextos cotidianos. Peça para o usuário descrever compromissos futuros importantes, criando pelo menos 8 frases utilizando Present Continuous.",
      level: "intermediário"
    },
    {
      id: 27,
      title: "Expressions with 'Used to' – Hábitos Passados que Não Ocorrem Mais",
      content: "Defina o uso de 'used to' para expressar hábitos ou estados no passado que mudaram atualmente. Inclua exemplos simples e negativos. Solicite que o usuário escreva um texto curto sobre mudanças pessoais ou culturais usando 'used to' em frases variadas.",
      level: "intermediário"
    },
    {
      id: 28,
      title: "Indirect Questions – Estrutura e Uso em Discurso Polido",
      content: "Explique a formação das perguntas indiretas, destacando a inversão dos elementos verbais nas perguntas diretas e sua eliminação nas indiretas. Mostre exemplos formais e informais. Peça para reformular 10 perguntas diretas em indiretas, mantendo a clareza e a cortesia.",
      level: "intermediário"
    },
    {
      id: 29,
      title: "Quantifiers: Some, Any, Much, Many, A lot of – Aplicações Práticas",
      content: "Explique o uso dos diferentes quantificadores em frases afirmativas, interrogativas e negativas, diferenciando substantivos contáveis e incontáveis. Apresente exemplos para cada caso. Peça para o usuário completar frases fornecidas com o quantificador correto e criar 10 frases originais usando-os apropriadamente.",
      level: "iniciante"
    },
    {
      id: 30,
      title: "Adverbs of Frequency – Posição e Uso em Frases",
      content: "Descreva os advérbios de frequência (\"always\", \"usually\", \"sometimes\", \"rarely\", \"never\"), explicando sua colocação típica na frase e o grau de frequência que indicam. Peça para o usuário descrever seus hábitos pessoais usando advérbios de frequência em pelo menos 10 frases.",
      level: "iniciante"
    },
    {
      id: 31,
      title: "Tag Questions with Imperatives – Formas e Uso para Ordens Suaves",
      content: "Ensine como formular question tags após imperativos para suavizar pedidos ou ordens, normalmente usando \"will you?\" ou \"won't you?\". Dê exemplos para contextos formais e informais. Solicite que o usuário crie 8 ordens suaves seguidas por question tags adequadas.",
      level: "intermediário"
    },
    {
      id: 32,
      title: "Expressions of Obligation: Should, Ought to, Had better – Conselhos e Obrigações Leves",
      content: "Explique as nuances desses modais para conselhos, sugestões e obrigações mais brandas, mostrando diferenças sutis e exemplos. Peça para o usuário dar conselhos práticos relacionados a saúde, estudos ou trabalho, utilizando as três formas distintas.",
      level: "intermediário"
    },
    {
      id: 33,
      title: "Present Perfect Continuous – Ações Recentes e Duração com Ênfase",
      content: "Descreva a formação (have/has been + verbo com '-ing') e uso para falar de ações que começaram no passado e continuam ou têm efeito no presente. Apresente várias situações. Peça para o usuário descrever atividades recentes que estejam realizando, formando 7 frases no Present Perfect Continuous.",
      level: "intermediário"
    },
    {
      id: 34,
      title: "Past Perfect – Sequência Temporal no Passado",
      content: "Explique o uso do Past Perfect (had + particípio passado) para indicar a ação que aconteceu antes de outra no passado. Dê exemplos de narrativas com ordem temporal clara. Solicite que o usuário escreva um pequeno parágrafo relatando uma sequência de eventos onde a ordem das ações seja destacada através do Past Perfect.",
      level: "intermediário"
    },
    {
      id: 35,
      title: "If Clauses with Imperatives – Instruções Condicionais",
      content: "Explique a estrutura onde a segunda parte da condicional é um imperativo para dar instruções ou ordens condicionais. Exemplifique com frases de segurança ou regras. Peça para o usuário criar 7 frases condicionais com imperativos, focando em regras de segurança, uso em ambientes públicos ou instruções.",
      level: "intermediário"
    },
    {
      id: 36,
      title: "Causative Form (Have/Get Something Done) – Expressando Serviços por Terceiros",
      content: "Descreva como formar expressões causativas com \"have\" e \"get\" para indicar que alguém manda fazer algo por outra pessoa, incluindo exemplos com diferentes tempos verbais. Peça para o usuário descrever serviços que costumam mandar fazer (tipo: cortar cabelo, consertar o carro) em pelo menos 8 frases.",
      level: "avançado"
    },
    {
      id: 37,
      title: "Future Perfect – Ações Completas Antes de um Ponto Futuro",
      content: "Explique o Future Perfect (will have + particípio passado), seu uso para ações que estarão concluídas antes de um momento futuro específico. Dê exemplos detalhados. Peça para formar frases que descrevam o que o usuário ou outras pessoas terão feito até certas datas ou eventos futuros, criando 7 exemplos.",
      level: "avançado"
    },
    {
      id: 38,
      title: "Modal Verbs for Deduction: Must, Can't, Might – Graus de Certeza",
      content: "Explique como usar modais para expressar deduções com diferentes níveis de certeza: \"must\" para certeza, \"can't\" para impossibilidade e \"might\" para possibilidade. Solicite que o usuário analise situações dadas e emita deduções usando os modais recomendados em pelo menos 10 frases.",
      level: "intermediário"
    },
    {
      id: 39,
      title: "Expressions of Quantity with 'Enough' and 'Too' – Regra e Correção de Erros",
      content: "Explique o uso correto de \"enough\" para quantidade adequada e \"too\" para excesso, incluindo posição na frase e erros comuns. Peça que o usuário corrija 8 frases com erros e elabore 7 frases próprias ilustrando o uso correto dos dois termos.",
      level: "intermediário"
    },
    {
      id: 40,
      title: "Inversion in Conditional Sentences – Condicionais Formais com Inversão",
      content: "Explique como inverter sujeito e verbo em frases condicionais formais (sem \"if\"), usando exemplos no segundo e terceiro conditionals para dar ênfase. Peça para o usuário transformar 8 frases condicionais padrões em formas invertidas, explicando o efeito estilístico da inversão.",
      level: "avançado"
    },
    {
      id: 41,
      title: "Sequence Words (First, Then, Finally, etc.) – Ordenação e Clareza do Discurso",
      content: "Apresente os termos sequenciadores usados para ordenar eventos ou ideias, explicando uso e posicionamento na frase. Exemplifique com narrativas e instruções. Solicite que o usuário escreva uma receita culinária ou instruções passo a passo, utilizando corretamente pelo menos 10 palavras sequenciadoras diferentes.",
      level: "iniciante"
    },
    {
      id: 42,
      title: "Indirect Commands – Expressando Comandos de Forma Polida e Indireta",
      content: "Explique como transformar comandos diretos em comandos indiretos usando verbos como \"ask\", \"tell\", \"order\" e estruturas apropriadas. Dê exemplos para contextos formais e informais. Peça para o usuário reescrever 10 comandos diretos na forma indireta, destacando as mudanças estruturais.",
      level: "intermediário"
    },
    {
      id: 43,
      title: "Subjunctive Mood – Uso Formal para Desejos, Exigências e Recomendações",
      content: "Explique o uso do subjuntivo em inglês, principalmente em formulários formais, frases de desejo, exigência ou sugestão. Indique as diferenças para o inglês cotidiano. Solicite a criação de 7 frases com subjuntivo, focando em pedidos, exigências ou recomendações.",
      level: "avançado"
    },
    {
      id: 44,
      title: "Time Clauses with When, Before, After, Until – Ordem e Uso Correto de Verbos",
      content: "Explique o uso de conjunções temporais para inserir eventos em sequências temporais, indicando a ordem dos verbos nas orações. Dê exemplos com diferentes tempos verbais. Peça que o usuário cronologize pequenos relatos usando essas conjunções em pelo menos 8 frases.",
      level: "intermediário"
    },
    {
      id: 45,
      title: "Expressions with 'Used to' vs 'Be used to' – Diferenças Essenciais e Aplicações",
      content: "Descreva a diferença entre \"used to\" para hábitos passados e \"be used to\" para estar acostumado a algo, incluindo formas afirmativa, negativa e interrogativa. Solicite que o usuário compare situações pessoais ou culturais usando ambas as expressões em 8 frases contextuais.",
      level: "intermediário"
    },
    {
      id: 46,
      title: "Phrasal Verbs with Multiple Meanings – Contextos e Variedades Semânticas",
      content: "Explique como certos phrasal verbs mudam de significado dependendo do contexto, exemplificando pelo menos 5 verbos com múltiplos sentidos. Peça que o usuário crie frases usando cada um desses phrasal verbs em pelo menos dois sentidos diferentes, totalizando 10 frases.",
      level: "avançado"
    },
    {
      id: 47,
      title: "Nominalisation – Transformando Verbos em Substantivos para Foco em Conceitos",
      content: "Explique o processo de transformar verbos e adjetivos em substantivos (nominalização) para dar ênfase às ideias ou conceitos nas frases. Dê exemplos e regras comuns de formação. Peça que o usuário transforme 10 frases simples em frases usando nominalização para maior formalidade ou clareza.",
      level: "avançado"
    },
    {
      id: 48,
      title: "Ellipsis and Substitution – Técnicas para Evitar Repetição Excessiva",
      content: "Defina as técnicas de elipse (omissão) e substituição para tornar o texto mais coeso e evitar repetições desnecessárias. Dê exemplos em diálogos, listas ou descrições. Solicite que o usuário reescreva um parágrafo fornecido, reduzindo repetições através de elipse e substituições, mantendo a clareza.",
      level: "avançado"
    },
    {
      id: 49,
      title: "Discourse Markers and Cohesion – Uso de Conectores para Estruturação do Texto",
      content: "Explique a função dos marcadores discursivos (however, therefore, although, etc.) para ligar ideias, criar contraste, causa ou resultado. Liste os mais comuns e seu contexto de uso. Peça que o usuário escreva um texto argumentativo ou narrativo usando pelo menos 10 conectores diferentes para garantir coesão.",
      level: "avançado"
    },
    {
      id: 50,
      title: "Mixed Tenses in Storytelling – Integração de Tempos Verbais para Narrativas Complexas",
      content: "Explique como combinar Present Perfect, Past Simple, Past Continuous e Future em narrativas para transmitir eventos com clareza temporal, destacando a fluidez na mudança dos tempos. Solicite que o usuário escreva uma pequena história, combinando esses tempos verbais para mostrar domínio e coesão temporal.",
      level: "avançado"
    }
    // Module 7 prompts will be added here
  ],
  8: [
    {
      id: 1,
      title: "Análise e Resumo de Texto Acadêmico sobre Mudanças Climáticas",
      content: "Leia o texto abaixo e faça um resumo formal em inglês, destacando os principais argumentos do autor. Explique ainda como os dados fornecidos suportam as conclusões:\n\"Studies show that rising global temperatures have caused sea levels to increase by an average of 3.3 millimeters per year over the past two decades. Melting ice caps contribute significantly to this trend, impacting coastal ecosystems and human settlements. The economic costs of flooding are estimated to rise exponentially if current trends persist.\"\nResposta: resumo formal + análise dos dados e consequências em coesão acadêmica.",
      level: "avançado"
    },
    {
      id: 2,
      title: "Escrita Argumentativa: Ensino à Distância vs. Ensino Presencial",
      content: "Considere a afirmação: \"O ensino à distância oferece mais flexibilidade, mas menos interação social do que o ensino presencial.\" Em inglês, escreva um ensaio de 300 palavras defendendo seu ponto de vista, argumentando com exemplos concretos que abordem vantagens e possíveis desvantagens do ensino remoto, utilizando vocabulário formal e conectores lógicos.",
      level: "avançado"
    },
    {
      id: 3,
      title: "Compreensão e Interpretação de Gráfico de Consumo Energético",
      content: "O gráfico seguinte mostra as porcentagens de consumo de energia renovável em três países entre 2010 e 2020:\nPaís A: 15% em 2010 para 45% em 2020\nPaís B: 30% em 2010 para 50% em 2020\nPaís C: 5% em 2010 para 25% em 2020\nEm inglês, escreva um parágrafo explicando as tendências apresentadas, comparando os desenvolvimentos dos três países e sugerindo possíveis razões para essas mudanças, usando linguagem clara, coerente e precisa.",
      level: "avançado"
    },
    {
      id: 4,
      title: "Produção Oral: Simulação de Entrevista para Emprego",
      content: "Imagine que você está em uma entrevista para uma vaga de analista de sistemas. Em inglês, responda às perguntas abaixo com respostas completas, usando vocabulário profissional e estrutura formal:\n\"Tell me about a challenging project you worked on and how you overcame difficulties.\"\n\"How do you handle tight deadlines and pressure?\"\nInclua exemplos concretos e enfoque suas habilidades de comunicação e resolução de problemas.",
      level: "avançado"
    },
    {
      id: 5,
      title: "Uso Avançado de Tempos Verbais: Present Perfect vs. Past Simple",
      content: "Complete as frases abaixo em inglês, escolhendo entre Present Perfect ou Past Simple, e explique a razão de sua escolha para cada caso:\na) \"I _____ (visit) London three times so far.\"\nb) \"She _____ (finish) her report yesterday afternoon.\"\nc) \"We _____ (live) here since 2010.\"\nDemonstre compreensão detalhada das diferenças entre ações concluídas no passado e experiências acumuladas até o presente.",
      level: "intermediário"
    },
    {
      id: 6,
      title: "Escrita Formal: Carta para Solicitação de Informações Acadêmicas",
      content: "Escreva uma carta formal em inglês para a universidade \"Global Tech University\" solicitando informações detalhadas sobre o curso de Engenharia de Software. Pergunte sobre requisitos de entrada, datas importantes do processo seletivo e documentação necessária. Utilize linguagem formal típica de correspondência institucional e organize a carta com parágrafos claros.",
      level: "avançado"
    },
    {
      id: 7,
      title: "Texto Explicativo: Impactos do Uso Excessivo de Redes Sociais em Adolescentes",
      content: "Explique em inglês os efeitos positivos e negativos do uso exagerado de redes sociais entre adolescentes. Inclua exemplos de problemas psicológicos, como ansiedade; impactos no desempenho escolar; e benefícios sociais, como maior acesso a informações. Use vocabulário acadêmico apropriado e conectores para dar coesão às ideias.",
      level: "avançado"
    },
    {
      id: 8,
      title: "Opinião Argumentativa: \"A Tecnologia Pode Substituir a Educação Tradicional?\"",
      content: "Escreva um texto opinativo em inglês argumentando a favor ou contra a afirmação \"A tecnologia substituirá a educação tradicional\". Apresente pelo menos três argumentos claros, baseados em fatos ou exemplos reais, e use uma estrutura coerente com conectores lógicos para facilitar a leitura.",
      level: "avançado"
    },
    {
      id: 9,
      title: "Relatório de Pesquisa Hipotética sobre Hábitos de Estudo na Pandemia",
      content: "Imagine que realizou uma pesquisa com 100 estudantes universitários sobre métodos de estudo durante a pandemia: 60% preferem aulas online, 25% estudam sozinhos e 15% em grupos virtuais. Em inglês, escreva um relatório resumido descrevendo metodologia, principais resultados e conclusões baseadas nesses dados fictícios, usando linguagem formal.",
      level: "avançado"
    },
    {
      id: 10,
      title: "Apresentação Oral Simulada: Sustentabilidade Ambiental",
      content: "Escreva um script de apresentação oral de 3 minutos em inglês que defina sustentabilidade ambiental, forneça exemplos de práticas sustentáveis (como reciclagem e uso de energia solar) e conclua destacando a importância dessas ações para o futuro do planeta. Use frases de transição para tornar o discurso fluido e impactante.",
      level: "avançado"
    },
    {
      id: 11,
      title: "Simulação de Entrevista de Emprego na Área de TI",
      content: "Responda, em inglês, as seguintes perguntas frequentes em entrevistas para analista de sistemas, utilizando vocabulário técnico e profissional:\n\"Describe a challenging project you worked on and how you handled it.\"\n\"How do you prioritize tasks under tight deadlines?\"\nInclua exemplos concretos para demonstrar suas habilidades e competências.",
      level: "avançado"
    },
    {
      id: 12,
      title: "Debate Simulado: Vacinação Obrigatória",
      content: "Escreva um diálogo em inglês entre você (defendendo a vacinação obrigatória) e um interlocutor que discorda. Inclua, pelo menos, três argumentos seus e três respostas a objeções. Mostre como discordar respeitosamente, apresentando contra-argumentos e mantendo a clareza e coerência do discurso.",
      level: "avançado"
    },
    {
      id: 13,
      title: "Relato Pessoal com Uso Correto de Tempos Verbais e Expressões Idiomáticas",
      content: "Conte uma experiência marcante de viagem em inglês, incorporando o uso correto de passado simples, present perfect, e ao menos três expressões idiomáticas como \"hit the road\" (começar a viagem), \"a breath of fresh air\" (algo refrescante) e \"off the beaten track\" (lugares pouco visitados).",
      level: "intermediário"
    },
    {
      id: 14,
      title: "Diálogo em Contexto de Aeroporto",
      content: "Escreva um diálogo detalhado em inglês em que um passageiro realiza check-in, pergunta sobre bagagem extra e lida com um atraso imprevisto no voo. Use expressões típicas do aeroporto, vocabulário específico e estruturas para pedidos formais e perguntas.",
      level: "intermediário"
    },
    {
      id: 15,
      title: "Resumo Oral a partir de Informação Auditiva (Escrito)",
      content: "Com base na informação auditiva hipotética: \"Solar and wind energy increased by 20% worldwide from 2015 to 2020, enquanto o uso de carvão diminuiu significativamente devido a preocupações ambientais.\" Escreva em inglês um resumo oral de 3-4 frases que destaque as informações principais, enfatizando a relevância ambiental.",
      level: "intermediário"
    },
    {
      id: 16,
      title: "Explicação de Expressões Idiomáticas em Contexto Profissional",
      content: "Leia estas frases:\n\"We need to hit the ground running to meet the deadline.\"\n\"Don't bite off more than you can chew.\"\nExplique em inglês o sentido literal e o significado figurado das expressões, ilustrando como refletem a atitude dos executivos em situações de trabalho pressionado.",
      level: "intermediário"
    },
    {
      id: 17,
      title: "Características e Diferenças de Sotaques Ingleses",
      content: "Descreva em inglês as diferenças principais entre sotaques britânico, americano e australiano. Cite pelo menos duas características de pronúncia para cada sotaque, com exemplos de palavras e expressões idiomáticas típicas exclusivas de cada variante.",
      level: "avançado"
    },
    {
      id: 18,
      title: "Parágrafo Reflexivo Após Ouvir Podcast sobre Hábitos de Estudo",
      content: "Depois de ouvir um podcast em inglês que recomenda técnicas para melhorar concentração no estudo, escreva um parágrafo descrevendo as dicas mais importantes apresentadas (ex: pausas estratégicas, ambiente silencioso) e sua opinião pessoal sobre a eficácia delas.",
      level: "intermediário"
    },
    {
      id: 19,
      title: "Anotação de Informações Específicas em Diálogo de Reserva de Hotel",
      content: "Dado o seguinte diálogo em inglês: \"Your reservation is under John Smith, from July 10th to July 15th. You requested a double room with sea view and early check-in.\" Escreva frases completas em inglês que contenham o nome do cliente, datas de reserva, tipo de quarto e solicitações especiais.",
      level: "básico"
    },
    {
      id: 20,
      title: "Lista e Explicação de 15 Expressões Idiomáticas Acadêmicas",
      content: "Liste em inglês 15 expressões idiomáticas comuns em textos acadêmicos, tais como: \"in light of\", \"by and large\", \"cutting-edge\". Para cada, forneça um exemplo de frase que mostre seu uso correto em contexto formal.",
      level: "avançado"
    },
    {
      id: 21,
      title: "Exemplos e Explicações Detalhadas: Present Perfect vs. Past Simple",
      content: "Crie 10 frases em inglês que utilizem Present Perfect para ações com conexão ao presente e Past Simple para ações finalizadas. Para cada frase, explique por que o tempo verbal foi escolhido com base na situação descrita.",
      level: "intermediário"
    },
    {
      id: 22,
      title: "Exercício de Substituição com Sinônimos Avançados",
      content: "Reescreva estas frases simples em inglês substituindo as palavras entre aspas por sinônimos mais sofisticados:\n\"The big problem requires a fast solution.\"\n\"She gave a nice explanation during the meeting.\"\nJustifique as escolhas de vocabulário para melhorar o registro formal.",
      level: "avançado"
    },
    {
      id: 23,
      title: "Reescrita de Texto Informal para Formal",
      content: "Transforme este texto informal em inglês em um texto acadêmico formal:\n\"Kids nowadays use their phones all the time. It's kinda bad for their social skills and might affect their grades.\"\nUse vocabulário acadêmico e estruturas gramaticais mais complexas para dar tom formal.",
      level: "avançado"
    },
    {
      id: 24,
      title: "Tabela Comparativa de Preposições de Tempo \"in\", \"on\" e \"at\"",
      content: "Escreva em inglês uma explicação detalhada das regras para usar cada preposição com exemplos:\n\"in\" para meses e anos: in July, in 2020\n\"on\" para dias: on Monday, on July 4th\n\"at\" para horas e momentos específicos: at 5 p.m., at midnight\nInclua ao menos duas exceções para cada preposição.",
      level: "intermediário"
    },
    {
      id: 25,
      title: "Plano de Estudo de 8 Semanas para Preparação ao TOEFL",
      content: "Elabore em inglês um plano semanal para os próximos 8 semanas visando proficiência no TOEFL. Defina objetivos semanais para leitura, escrita, listening e speaking, com recomendações diárias e estratégias específicas para cada habilidade.",
      level: "avançado"
    },
    {
      id: 26,
      title: "Técnica para Responder Perguntas de Leitura no IELTS",
      content: "Descreva em inglês um método eficaz para identificar rapidamente tipos de perguntas comuns no IELTS Reading (ex: \"multiple choice\", \"true/false/not given\") e estratégias para encontrar respostas no texto, exemplificando com uma pergunta fictícia.",
      level: "avançado"
    },
    {
      id: 27,
      title: "Roteiro para Resposta Oral em Provas de Proficiência",
      content: "Escreva um roteiro em inglês para responder uma pergunta de speaking em exames como o IELTS ou TOEFL, destacando estrutura de introdução, desenvolvimento de ideias e conclusão dentro do limite de 1 a 2 minutos.",
      level: "avançado"
    },
    {
      id: 28,
      title: "Estratégias para Gerenciar Ansiedade em Provas Orais",
      content: "Liste e explique em inglês dez técnicas para controlar nervosismo durante a prova oral, como respiração controlada, ensaio prévio, visualização positiva, pausas naturais e foco na clareza da fala.",
      level: "intermediário"
    },
    {
      id: 29,
      title: "Métodos para Anotar Rápido Durante a Escuta em Provas",
      content: "Explique em inglês cinco métodos eficazes para tomar notas rápidas durante a seção de listening, incluindo uso de abreviações, símbolos, identificação de palavras-chave e organização das anotações para respostas claras.",
      level: "intermediário"
    },
    {
      id: 30,
      title: "Redação no Formato IELTS Writing Task 2: Educação Tecnológica",
      content: "Escreva uma redação de aproximadamente 250 palavras respondendo à questão: \"To what extent does technology improve education? Discuss both advantages and disadvantages, providing examples.\" Use estrutura formal com tese clara, argumentos e conclusão.",
      level: "avançado"
    },
    {
      id: 31,
      title: "Redação para TOEFL Integrated Writing Task",
      content: "Baseado nas informações: Texto afirma que o uso de energia solar reduz emissão de carbono; áudio ressalta dificuldades na instalação inicial dos painéis. Escreva um texto integrando essas informações, explicando o tema e comparando os pontos de vista de texto e áudio.",
      level: "avançado"
    },
    {
      id: 32,
      title: "Conjunto de 10 Perguntas Múltipla Escolha em Texto Expositivo",
      content: "Crie 10 perguntas de escolha múltipla em inglês sobre um texto hipotético que fala sobre o impacto da globalização econômica, incluindo perguntas que testem vocabulário e inferência, e forneça as respostas corretas.",
      level: "avançado"
    },
    {
      id: 33,
      title: "Diálogo TOEFL Speaking: Discussão de Projeto em Grupo",
      content: "Elabore um diálogo breve em inglês simulando uma conversa entre três estudantes de engenharia discutindo a divisão de tarefas em um projeto, incluindo sugestões, concordância e resolução de conflitos.",
      level: "avançado"
    },
    {
      id: 34,
      title: "Exercício de Tradução: Português para Inglês com Frases Complexas",
      content: "Traduza para o inglês as frases complexas abaixo, mantendo coerência e fluidez:\n\"Apesar das dificuldades, conseguimos concluir o projeto dentro do prazo estipulado.\"\n\"Se tivéssemos acesso a mais recursos, os resultados teriam sido melhores.\"",
      level: "avançado"
    },
    {
      id: 35,
      title: "Ensaio Sobre Impactos Econômicos da Globalização com Dados Fictícios",
      content: "Escreva um ensaio acadêmico em inglês explorando os efeitos econômicos da globalização, citando como países emergentes tiveram crescimento médio de 5% ao ano, mas também aumento da desigualdade social. Use dados fictícios para reforçar os argumentos.",
      level: "avançado"
    },
    {
      id: 36,
      title: "Apresentação sobre Benefícios e Riscos da Inteligência Artificial",
      content: "Prepare um texto em inglês que apresente os benefícios da IA, como automação e análise de dados, e seus riscos, incluindo perda de empregos e questões éticas, usando vocabulário técnico e frases de opinião.",
      level: "avançado"
    },
    {
      id: 37,
      title: "Debate Escrito: Impactos do Trabalho Remoto na Produtividade",
      content: "Crie um debate fictício em inglês entre dois personagens: um defende que o trabalho remoto aumenta a produtividade pela flexibilidade, o outro argumenta que há distrações e falta de controle. Use linguagem persuasiva e contra-argumentação.",
      level: "avançado"
    },
    {
      id: 38,
      title: "Reflexão Escrita Sobre Cultura e Tradição na Educação Moderna",
      content: "Escreva um texto em inglês refletindo sobre o papel da cultura e tradição na educação atual, considerando aspectos positivos como manutenção de identidade e desafios como resistência a mudanças tecnológicas.",
      level: "avançado"
    },
    {
      id: 39,
      title: "Descrição Detalhada de Imagem para Speaking Test",
      content: "Descreva em inglês uma imagem hipotética que mostra um gráfico de barras representando o aumento da alfabetização mundial em 20 anos, explicando cada detalhe do gráfico, tendências percebidas e possíveis causas.",
      level: "intermediário"
    },
    {
      id: 40,
      title: "Revisão e Correção de Texto com Erros Comuns",
      content: "Apresente um texto escrito com erros comuns de gramática e vocabulário em inglês; depois ofereça uma versão corrigida explicando as correções para melhorar a coesão e precisão do discurso.",
      level: "intermediário"
    },
    {
      id: 41,
      title: "Feedback Simulado sobre Apresentação Oral",
      content: "Escreva em inglês um feedback simulado que você daria a um aluno após uma apresentação, destacando pontos positivos, correções de pronúncia, sugestões para fluência e aspectos a melhorar para maior clareza.",
      level: "avançado"
    },
    {
      id: 42,
      title: "Comparação de Duas Versões Escritas com Explicações",
      content: "Compare em inglês duas versões do mesmo texto, destacando as melhorias feitas na versão final em termos de formalidade, clareza, organização e uso de vocabulário, justificando mudanças.",
      level: "avançado"
    },
    {
      id: 43,
      title: "Checklist para Autoavaliação em Provas de Inglês",
      content: "Crie uma lista em inglês de 10 critérios para autoavaliação do desempenho em provas orais e escritas, incluindo fluência, vocabulário, gramática, coerência, resposta às perguntas, entre outros.",
      level: "intermediário"
    },
    {
      id: 44,
      title: "Plano para Aprender com Erros Frequentes",
      content: "Escreva um plano em inglês para identificar e analisar erros comuns em inglês, propondo ciclos de estudo focados em corrigir esses erros e evitar repetições em provas futuras, incluindo autoavaliação e revisão contínua.",
      level: "intermediário"
    },
    {
      id: 45,
      title: "Plano de Estudos Personalizado (Nível Intermediário) para Listening e Speaking",
      content: "Baseado num aluno de nível intermediário, crie um plano semanal em inglês para reforçar habilidades de compreensão auditiva e expressão oral, incluindo exercícios práticos, materiais recomendados e metas realistas.",
      level: "intermediário"
    },
    {
      id: 46,
      title: "Perguntas e Respostas Frequentes em Entrevistas para Engenharia/Informática",
      content: "Liste em inglês 10 perguntas comuns em entrevistas para vagas na área de informática/engenharia, junto com respostas modelo detalhadas que evidenciem competências técnicas e comportamentais.",
      level: "avançado"
    },
    {
      id: 47,
      title: "Sessão de Coaching Simulada para Melhorar Debate em Inglês",
      content: "Elabore um roteiro em inglês de uma sessão de coaching para ajudar um aluno a melhorar suas habilidades de debate, incluindo dicas sobre estrutura de argumentos, uso de linguagem persuasiva e resposta a contra-argumentos.",
      level: "avançado"
    },
    {
      id: 48,
      title: "Exercícios para Dominar Phrasal Verbs Complexos em Contextos Acadêmicos",
      content: "Crie cinco exercícios em inglês que incluam phrasal verbs complexos como \"carry out\", \"come up with\", \"look into\", \"set up\", \"turn down\", explicando seus significados e usos em frases acadêmicas e profissionais.",
      level: "avançado"
    },
    {
      id: 49,
      title: "Desafio Semanal de Tarefas Sequenciais para Desenvolvimento Gradual",
      content: "Projete um desafio semanal detalhado em inglês com atividades de escrita, leitura, áudio e fala que aumentam em complexidade progressivamente, para ser usado por oito semanas numa rotina estruturada de estudos.",
      level: "avançado"
    },
    {
      id: 50,
      title: "Redação Avançada: Implicações Éticas da Inteligência Artificial",
      content: "Escreva um ensaio em inglês que explore os desafios éticos da inteligência artificial, como privacidade, responsabilidade por decisões automatizadas e impacto social, usando vocabulário técnico e argumentação profunda.",
      level: "avançado"
    }
    // Module 8 prompts already exist
  ],
  9: [
    {
      id: 1,
      title: "Instruções para Prática Interativa de Compreensão Auditiva",
      content: "Instrução para prática interativa de compreensão auditiva em inglês com TTS\n\nPreparação do material:\nPegue o texto gerado pelo prompt escolhido em inglês. Utilize uma ferramenta de conversão de texto para fala (TTS) que permita escolher voz natural (de preferência com sotaque britânico ou americano, conforme o foco) e ajustar a velocidade da fala para um ritmo confortável ao seu nível.\n\nPrimeira audição atenta:\nOuça o áudio gerado pelo TTS uma vez sem olhar para o texto. Tente captar a ideia geral, o tema e os detalhes principais que reconhecer. Se possível, evite pausas e anote mentalmente ou em um papel as palavras/chaves que você conseguir identificar.\n\nSegunda audição com escrita:\nOuça o áudio novamente, agora tentando escrever uma transcrição ou um resumo do que ouviu, sem consultar o texto original ainda. Fique atento à grafia, vocabulário e estrutura das sentenças para exercitar a escrita guiada pela escuta.\n\nComparação e autocorreção:\nApós a tentativa de escrita, compare seu texto com o original gerado pelo prompt. Marque os erros de compreensão, vocabulário mal entendido, palavras omitidas, erros gramaticais ou de ortografia. Escreva correções pontuais e anote as palavras/expressões novas que aprendeu.\n\nRepetição focada:\nEscute novamente trechos específicos do áudio que causaram dificuldade, pausando e repetindo quantas vezes precisar. Tente repetir em voz alta as frases para praticar pronúncia, ritmo e entonação, aproximando sua fala da do TTS.\n\nAutoavaliação:\nAvalie seu desempenho considerando: quantos detalhes conseguiu captar, quantidade e tipos de erros, melhora na pronúncia ao repetir e evolução na escrita. Registre seus pontos fortes e o que precisa praticar mais na próxima sessão.\n\nRegistro do progresso:\nMantenha um diário ou planilha com o material usado, seu resumo escrito, os erros corrigidos e comentários sobre sua autoavaliação. Isso ajuda a monitorar a evolução e focar nas dificuldades específicas.\n\nCiclos regulares de treino:\nRepita esse processo com diferentes textos gerados pelos prompts, variando o tema, o tipo de linguagem (formal, informal), o nível de dificuldade e o sotaque do TTS, para expandir seu repertório auditivo e textual.\n\nEssa prática integrada — ouvir com TTS, escrever sem ver o texto, comparar, corrigir e repetir — é altamente eficaz para desenvolver compreensão auditiva, ampliar vocabulário, melhorar a ortografia e a pronúncia em inglês. Além disso, promove autonomia e consciência crítica sobre o próprio aprendizado.",
      level: "Instruções de uso"
    },
    {
      id: 2,
      title: "Diálogo sobre planos de viagem",
      content: "Crie um diálogo em inglês entre duas pessoas discutindo planos para viajar no próximo verão. Inclua menção a pelo menos três destinos diferentes, explicações sobre as preferências de cada um e argumentos para escolher o melhor lugar. Em seguida, responda perguntas de compreensão sobre o diálogo.",
      level: "Básico"
    },
    {
      id: 3,
      title: "Narrativa sobre festa surpresa",
      content: "Escreva um texto narrativo curto em inglês contando a história de uma festa surpresa para um amigo. Descreva personagens, ambiente e sequência dos acontecimentos. Depois, responda perguntas que testem detalhes explícitos e inferências do texto.",
      level: "Básico"
    },
    {
      id: 4,
      title: "Podcast fictício sobre invenções",
      content: "Imagine um podcast em inglês de 5 minutos onde um apresentador explica três invenções recentes que mudaram o mundo. Redija o roteiro do podcast e elabore um resumo com os pontos principais, respondendo perguntas que avaliem o entendimento global.",
      level: "Intermediário"
    },
    {
      id: 5,
      title: "Notícia simulada sobre proteção ambiental",
      content: "Produza uma notícia curta em inglês sobre uma nova lei que protege florestas tropicais. Inclua causas, soluções propostas e opiniões conflitantes. Em seguida, apresente um questionário com perguntas para analisar vocabulário e compreensão.",
      level: "Intermediário"
    },
    {
      id: 6,
      title: "Entrevista com especialista em tecnologia",
      content: "Crie uma entrevista em inglês com um especialista que fala sobre cinco tecnologias emergentes. Formule perguntas e respostas detalhadas, explicando vantagens e desafios de cada tecnologia. Depois, responda perguntas que explorem o conteúdo e o vocabulário.",
      level: "Intermediário"
    },
    {
      id: 7,
      title: "Carta formal de reclamação e resposta",
      content: "Escreva uma carta formal em inglês reclamando sobre um problema em uma reserva de hotel. Depois, produza a resposta da empresa com tom profissional, soluções e justificativas. Finalize com perguntas que estimulem o estudo de formalidade, tom e vocabulário.",
      level: "Intermediário"
    },
    {
      id: 8,
      title: "Conversa tensa em restaurante",
      content: "Elabore uma situação em inglês onde clientes reclamam sobre um pedido errado no restaurante. Desenvolva o diálogo entre clientes e gerente, com expressões de insatisfação e tentativas de resolução. Inclua perguntas que testem compreensão e interpretação.",
      level: "Básico"
    },
    {
      id: 9,
      title: "Artigo simples sobre inteligência artificial",
      content: "Redija um artigo em inglês destinado a iniciantes, explicando o que é inteligência artificial, exemplos de uso cotidiano e impactos éticos. Proponha perguntas para verificar entendimento geral, vocabulário técnico e opiniões.",
      level: "Intermediário"
    },
    {
      id: 10,
      title: "Continuação criativa de conto",
      content: "Forneça um pequeno texto em inglês narrando um acontecimento misterioso. Depois, crie uma continuação coerente de 100 palavras, mantendo o tom e estilo. Inclua perguntas para análise de coesão e escolha lexical.",
      level: "Intermediário"
    },
    {
      id: 11,
      title: "Discussão sobre projeto escolar",
      content: "Crie um diálogo em inglês entre dois estudantes planejando um projeto. Inclua dúvidas, sugestões e planos de ação. Finalize com perguntas inferenciais para aprofundar a compreensão do significado implícito.",
      level: "Básico"
    },
    {
      id: 12,
      title: "Transcrição e análise de diálogo fictício",
      content: "Produza um diálogo em inglês entre colegas de trabalho sobre um desafio diário. Transcreva e destaque três expressões idiomáticas. Explique em inglês o sentido das expressões e discuta o impacto no tom da conversa.",
      level: "Intermediário"
    },
    {
      id: 13,
      title: "Debate sobre turismo sustentável",
      content: "Simule uma postagem em inglês defendendo ou criticando o turismo sustentável. Apresente argumentos pró e contra e, depois, responda perguntas para avaliar compreensão crítica e vocabulário ambiental.",
      level: "Avançado"
    },
    {
      id: 14,
      title: "Receita tradicional com variações",
      content: "Descreva em inglês detalhadamente a receita de um prato tradicional britânico, como fish and chips. Em seguida, sugira e explique três variações para dietas especiais, com justificativas técnicas.",
      level: "Intermediário"
    },
    {
      id: 15,
      title: "E-mail informal com gírias",
      content: "Imite um e-mail informal em inglês onde um amigo conta novidades da faculdade. Produza uma resposta igualmente informal, usando gírias e expressões coloquiais. Finalize com perguntas sobre o uso correto da linguagem casual.",
      level: "Intermediário"
    },
    {
      id: 16,
      title: "Resumo de palestra sobre saúde mental",
      content: "Imagine uma palestra curta em inglês sobre técnicas para melhorar a saúde mental (mindfulness, exercícios, rotina). Escreva um resumo com os principais pontos e responda perguntas interpretativas sobre aplicação prática.",
      level: "Intermediário"
    },
    {
      id: 17,
      title: "Avaliação detalhada de smartphone",
      content: "Descreva em inglês as características, vantagens e desvantagens de um smartphone inventado por você. Elabore uma lista clara de prós e contras e finalize com perguntas sobre vocabulário tecnológico.",
      level: "Intermediário"
    },
    {
      id: 18,
      title: "Anotação de informações em conversa telefônica",
      content: "Crie um diálogo telefônico em inglês combinando uma reunião, contendo nome, local, data e hora. Anote claramente as informações essenciais e escreva uma confirmação formal, respondendo perguntas para fixar compreensão auditiva.",
      level: "Básico"
    },
    {
      id: 19,
      title: "Análise de metáforas em trecho literário",
      content: "Escreva um pequeno poema ou texto literário em inglês que utilize pelo menos três metáforas. Depois, explique em inglês o significado de cada metáfora e o efeito que causam no leitor, respondendo perguntas reflexivas.",
      level: "Avançado"
    },
    {
      id: 20,
      title: "Mapa mental de relato de viagem",
      content: "Descreva oralmente (em texto) uma viagem fictícia em inglês pela costa da Califórnia. Organize as informações em um mapa mental, descrevendo em inglês os pontos turísticos, atividades e emoções vividas. Proponha perguntas para testar compreensão e organização textual.",
      level: "Intermediário"
    },
    {
      id: 21,
      title: "Carta de desculpa formal e empática",
      content: "Crie uma carta formal em inglês pedindo desculpas por um atraso na entrega de um produto, com explicações e propostas para compensar o cliente. Inclua perguntas para análise do registro formal e expressões de empatia.",
      level: "Intermediário"
    },
    {
      id: 22,
      title: "Resumo de notícia econômica com análise",
      content: "Escreva uma notícia fictícia em inglês sobre uma mudança na taxa de juros e seu impacto no mercado. Produza um resumo claro e responda perguntas que avaliem a compreensão dos efeitos econômicos descritos.",
      level: "Avançado"
    },
    {
      id: 23,
      title: "Glossário de termos sobre mudanças climáticas",
      content: "Elabore em inglês um texto simples explicando as mudanças climáticas. Inclua dez palavras-chave com definições e exemplos de uso. Finalize com perguntas que desafiem o uso dessas palavras em contextos variados.",
      level: "Intermediário"
    },
    {
      id: 24,
      title: "Instruções dadas em aeroporto",
      content: "Crie um diálogo em inglês entre um atendente de aeroporto e um passageiro, com instruções detalhadas sobre embarque, documentos e portões. Depois, escreva um resumo das instruções e perguntas que testem o entendimento de detalhes.",
      level: "Básico"
    },
    {
      id: 25,
      title: "História de mistério com pistas para resolução",
      content: "Escreva um conto curto em inglês sobre um mistério (roubo ou desaparecimento). Inclua pistas sutis ao longo do texto. Liste as pistas e elabore perguntas que estimulem o raciocínio para solucionar o caso.",
      level: "Intermediário"
    },
    {
      id: 26,
      title: "Explicação de regras de jogo com perguntas",
      content: "Descreva em inglês, passo a passo, as regras de um jogo de tabuleiro inventado. Inclua estratégias básicas. Finalize criando perguntas em inglês para confirmar a compreensão dessas regras.",
      level: "Básico"
    },
    {
      id: 27,
      title: "Resposta a fórum técnico com soluções alternativas",
      content: "Imagine um post em fórum técnico em inglês descrevendo um problema comum de computador. Crie uma resposta detalhada sugerindo soluções alternativas. Proponha perguntas para analisar vocabulário técnico e alternativas sugeridas.",
      level: "Intermediário"
    },
    {
      id: 28,
      title: "Simulação de entrevista de emprego e respostas",
      content: "Monte uma entrevista de emprego típica em inglês com perguntas frequentes (experiência, pontos fortes, fraquezas). Produza respostas completas e, em seguida, perguntas para analisar a adequação e clareza das respostas.",
      level: "Intermediário"
    },
    {
      id: 29,
      title: "Artigo de opinião sobre redes sociais",
      content: "Escreva um artigo em inglês apresentando opiniões a favor e contra o uso intensivo de redes sociais. Elabore perguntas para confrontar argumentos e explorar vocabulário de opinião.",
      level: "Avançado"
    },
    {
      id: 30,
      title: "Discurso motivacional e pontos impactantes",
      content: "Crie um discurso curto em inglês para motivar jovens estudantes. Destaque frases de impacto e explique por que são poderosas. Proponha perguntas que explorem interpretação emocional e linguística.",
      level: "Avançado"
    },
    {
      id: 31,
      title: "Análise e criação de anúncios publicitários",
      content: "Analise um anúncio fictício em inglês, destacando linguagem persuasiva e técnicas usadas. Depois, produza um anúncio original para um produto, aplicando o que foi aprendido. Finalize com perguntas sobre estratégias persuasivas.",
      level: "Avançado"
    },
    {
      id: 32,
      title: "Notícia jornalística com resposta contextualizada",
      content: "Produza um texto em inglês de notícias locais relacionadas a eventos climáticos. Escreva depois um texto conectado mencionando fatos da sua cidade ou de sua experiência. Elabore perguntas para completar compreensão e produção.",
      level: "Intermediário"
    },
    {
      id: 33,
      title: "Relato pessoal com reflexão cultural",
      content: "Escreva em inglês um relato pessoal sobre uma experiência cultural marcante. Inclua descrição, sentimentos e reflexões. Crie perguntas que exploram valores culturais e interpretação de sentimentos.",
      level: "Intermediário"
    },
    {
      id: 34,
      title: "Explicação científica simplificada para crianças",
      content: "Crie uma explicação em inglês, simples e clara, sobre o funcionamento do sistema solar, direcionada a crianças. Use linguagem acessível e exemplos divertidos. Proponha perguntas que verifiquem entendimento infantil.",
      level: "Básico"
    },
    {
      id: 35,
      title: "Criação de roteiro de viagem para turista",
      content: "Desenvolva um roteiro detalhado em inglês para turistas visitarem Londres em 3 dias. Inclua lugares, horários, dicas culturais e refeições. Finalize com perguntas para fixar vocabulário turístico e organização.",
      level: "Intermediário"
    },
    {
      id: 36,
      title: "Desafio de pronúncia e entonação",
      content: "Liste em inglês frases desafiadoras para a pronúncia (ex: tongue twisters). Grave a leitura imaginária corrigida dessas frases com foco em entonação e ritmo. Proponha exercícios de repetição e perguntas sobre sons específicos.",
      level: "Intermediário"
    },
    {
      id: 37,
      title: "Adaptação de receita para dietas específicas",
      content: "Transforme uma receita tradicional inglesa em versões adaptadas para dietas vegana, sem glúten e baixa caloria, explicando em inglês as substituições e motivos. Finalize com perguntas que testem o vocabulário culinário.",
      level: "Intermediário"
    },
    {
      id: 38,
      title: "Detecção e correção de erros gramaticais em conversa",
      content: "Crie um diálogo informal em inglês cheio de erros comuns. Depois, escreva a versão corrigida e explique cada correção. Proponha perguntas para fixar regras gramaticais envolvidas.",
      level: "Intermediário"
    },
    {
      id: 39,
      title: "Interpretação teatral de diálogo em inglês",
      content: "Apresente um pequeno diálogo teatral em inglês com emoções fortes. Simule a interpretação de um personagem, indicando expressões faciais e entonação ideais. Crie perguntas para aprofundar o entendimento do texto e emoção.",
      level: "Avançado"
    },
    {
      id: 40,
      title: "Negociação de compra e venda com inventário",
      content: "Escreva uma negociação complexa entre comprador e vendedor em inglês, mencionando vários itens e condições. Liste após todos os produtos negociados em forma de inventário detalhado em inglês. Elabore perguntas para revisar números e vocabulário comercial.",
      level: "Avançado"
    },
    {
      id: 41,
      title: "Crítica de filme e produção própria",
      content: "Produza uma crítica em inglês sobre um filme inventado, destacando pontos fortes e fracos. Escreva depois sua própria crítica sobre o mesmo tema ou estilo. Inclua perguntas que analisem gênero e opinião.",
      level: "Avançado"
    },
    {
      id: 42,
      title: "Resumo sobre cultura pop com referências históricas",
      content: "Desenvolva um texto em inglês resumindo uma palestra fictícia sobre cultura pop, incluindo referências históricas. Elabore perguntas para exercitar o entendimento do contexto histórico e cultural.",
      level: "Avançado"
    },
    {
      id: 43,
      title: "Explicação de termos técnicos com exemplos",
      content: "Explique em inglês dez termos técnicos usados em informática, com definições claras e exemplos práticos. Proponha perguntas para usar corretamente esses termos em frases.",
      level: "Intermediário"
    },
    {
      id: 44,
      title: "Previsão meteorológica para cidade fictícia",
      content: "Crie em inglês uma previsão do tempo para uma cidade fictícia, com detalhes sobre temperatura, vento, chuva e alertas. Pergunte sobre interpretação dos dados meteorológicos e vocabulário.",
      level: "Básico"
    },
    {
      id: 45,
      title: "Análise métrica e temática de poema",
      content: "Escreva um poema curto em inglês com métrica clara. Faça uma análise detalhada explicando ritmo, rimas e temas. Desenvolva perguntas para explorar a compreensão poética.",
      level: "Avançado"
    },
    {
      id: 46,
      title: "Simulação de conversa entre turistas e guia",
      content: "Monte uma conversa em inglês entre turistas e um guia local, com perguntas e respostas sobre pontos turísticos. Inclua vocabulário específico para ampliar o aprendizado. Proponha perguntas sobre expressões e respostas.",
      level: "Intermediário"
    },
    {
      id: 47,
      title: "Produção de vídeo explicativo em inglês",
      content: "Escreva um roteiro em inglês para um vídeo explicativo direcionado a iniciantes, ensinando o uso básico de um objeto cotidiano (ex: micro-ondas). Inclua linguagem simples e instruções passo a passo. Pergunte sobre clareza e vocabulário.",
      level: "Básico"
    },
    {
      id: 48,
      title: "Documentário curto sobre fauna e flora",
      content: "Crie um texto em inglês descrevendo animais e plantas de uma região tropical, como em documentário. Liste características importantes e curiosidades. Finalize com perguntas que avaliem a compreensão detalhada.",
      level: "Intermediário"
    },
    {
      id: 49,
      title: "Diálogo alternativo em história em quadrinhos",
      content: "Imagine uma cena em quadrinhos onde dois personagens discutem um problema. Escreva um diálogo alternativo em inglês que mostre um desfecho diferente, mantendo o estilo. Crie perguntas para analisar estilo e coerência.",
      level: "Intermediário"
    },
    {
      id: 50,
      title: "Síntese de palestra sobre arte moderna",
      content: "Desenvolva um resumo em inglês de uma palestra fictícia sobre arte moderna, destacando principais características e artistas. Elabore perguntas para consolidar o entendimento crítico.",
      level: "Avançado"
    },
    {
      id: 51,
      title: "Debate entre tecnologia e impactos sociais",
      content: "Escreva um texto argumentativo em inglês que apresente os benefícios e malefícios da tecnologia na sociedade. Crie contra-argumentos e finalize com perguntas para que o aprendiz defenda seu ponto de vista.",
      level: "Avançado"
    }
  ],
  10: [
    {
      id: 1,
      title: "Diferença entre Present Perfect e Past Simple",
      content: "Você é o meu professor de inglês. Professor, poderia me ajudar a entender exatamente qual a diferença entre o Present Perfect e o Past Simple? Quero saber quando usar um e quando usar o outro, principalmente como o tempo indicado afeta o significado da frase e a ligação com o presente. Por favor, dê exemplos positivos, negativos e perguntas, para eu conseguir aplicar na prática sem confusão.",
      level: "intermediário"
    },
    {
      id: 2,
      title: "Usos do Futuro: \"Will\" vs \"Going to\"",
      content: "Você é o meu professor de inglês. Poderia me explicar em detalhes quando devo usar \"will\" e quando usar \"going to\" para falar do futuro? Gostaria de entender as diferenças entre planos, decisões feitas na hora, predições e intenções, com exemplos claros que mostrem como usar em situações do dia a dia, assim posso reconhecer melhor essas nuances.",
      level: "intermediário"
    },
    {
      id: 3,
      title: "Uso Correto dos Artigos \"a\", \"an\" e \"the\"",
      content: "Você é o meu professor de inglês. Pode me explicar como usar corretamente os artigos \"a\", \"an\" e \"the\"? Tenho dúvidas sobre as regras para artigos definidos e indefinidos, quando não usar artigo e como as exceções funcionam, especialmente em relação aos substantivos contáveis, incontáveis e nomes próprios. Exemplos práticos seriam muito úteis.",
      level: "básico a intermediário"
    },
    {
      id: 4,
      title: "Subjuntivo em Inglês: O Que É e Quando Usar",
      content: "Você é o meu professor de inglês. O que é o subjuntivo e quando eu devo usá-lo? Quero entender as estruturas típicas que envolvem esse modo verbal, como nas expressões de desejo, hipótese ou situações irreais, e gostaria de ver exemplos que me ajudem a identificar quando é obrigatório usá-lo, além de possíveis erros comuns para evitar.",
      level: "avançado"
    },
    {
      id: 5,
      title: "Diferenças entre \"Few\" e \"A Few\"; \"Little\" e \"A Little\"",
      content: "Você é o meu professor de inglês. Poderia me explicar a diferença entre \"few\" e \"a few\", assim como entre \"little\" e \"a little\"? Quero entender o que muda no sentido das frases, principalmente em relação à quantidade suficiente ou insuficiente, com exemplos em diferentes contextos para eu saber escolher a forma correta.",
      level: "intermediário"
    },
    {
      id: 6,
      title: "Como Formar e Usar Perguntas Indiretas",
      content: "Você é o meu professor de inglês. Professor, pode me explicar como formar perguntas indiretas em inglês? Gostaria de entender as diferenças na estrutura em relação às perguntas diretas, e quando usar cada uma. Por favor, dê exemplos claros para perguntas formais e informais, e dicas para não errar na ordem das palavras.",
      level: "intermediário a avançado"
    },
    {
      id: 7,
      title: "Explicação dos Conditionals: Zero, First, Second e Third",
      content: "Você é o meu professor de inglês. Poderia explicar detalhadamente os tipos de \"conditionals\" (zero, first, second e third)? Quero saber a estrutura de cada um, quando usar e como elas expressam situações reais, possíveis e irreais. Exemplos práticos em frases afirmativas, negativas e interrogativas seriam muito úteis.",
      level: "intermediário a avançado"
    },
    {
      id: 8,
      title: "Phrasal Verbs Comuns: Uso e Exemplos",
      content: "Você é o meu professor de inglês. Gostaria que o senhor me ajudasse a entender os phrasal verbs mais usados no inglês falado. Poderia apresentar uma lista de 10 phrasal verbs comuns, explicando o significado de cada um e dando frases de exemplo para que eu possa praticar e entender seu uso em contextos reais?",
      level: "intermediário"
    },
    {
      id: 9,
      title: "Diferenças entre \"Say\", \"Tell\" e \"Speak\"",
      content: "Você é o meu professor de inglês. Poderia me explicar as diferenças entre os verbos \"say\", \"tell\" e \"speak\"? Tenho dificuldade em saber quando usar cada um adequadamente em frases, especialmente para expressar relatórios de fala e comunicação. Exemplos práticos e contextos de uso seriam muito úteis.",
      level: "básico a intermediário"
    },
    {
      id: 10,
      title: "Entendendo a Voz Passiva: Uso e Estrutura",
      content: "Você é o meu professor de inglês. Professor, o que é a voz passiva e quando devo usá-la? Por favor, explique a estrutura gramatical, como transformar uma frase ativa em passiva, e em que situações a voz passiva é mais apropriada. Exemplos em diferentes tempos verbais também ajudariam a fixar o conceito.",
      level: "intermediário a avançado"
    },
    {
      id: 11,
      title: "Pronomes Possessivos e Adjetivos Possessivos: Diferenças e Uso",
      content: "Você é o meu professor de inglês. Professor, poderia me explicar claramente qual a diferença entre pronomes possessivos e adjetivos possessivos? Gostaria de entender como e quando usar cada um dentro de uma frase, com exemplos que me ajudem a reconhecer e empregar corretamente em contextos diversos.",
      level: "básico a intermediário"
    },
    {
      id: 12,
      title: "Comparativos e Superlativos: Formas Regulares e Irregulares",
      content: "Você é o meu professor de inglês. Poderia me mostrar como usar os comparativos e superlativos em inglês? Quero aprender tanto as formas regulares quanto as irregulares, entender regras para adjetivos curtos e longos, e ver exemplos práticos para que eu possa identificar e usar corretamente em minha fala e escrita.",
      level: "básico a intermediário"
    },
    {
      id: 13,
      title: "Uso de \"Some\" e \"Any\" em Diferentes Tipos de Frases",
      content: "Você é o meu professor de inglês. Professor, pode me ajudar a entender quando e como usar \"some\" e \"any\" em frases afirmativas, negativas e interrogativas? Tenho dúvidas sobre como escolher entre eles em diferentes contextos, e seria ótimo ver exemplos que esclareçam essas diferenças para que eu possa usar com confiança.",
      level: "básico a intermediário"
    },
    {
      id: 14,
      title: "Present Simple vs Present Continuous: Hábitos, Rotinas e Ações Temporárias",
      content: "Você é o meu professor de inglês. Poderia me explicar como diferenciar o uso do Present Simple e do Present Continuous? Quero entender quais tempos usar para hábitos, rotinas, ações que ocorrem agora e situações temporárias, com exemplos que me ajudem a perceber essa distinção no dia a dia.",
      level: "básico a intermediário"
    },
    {
      id: 15,
      title: "Diferença entre \"Must\" e \"Have to\" para Expressar Obrigação",
      content: "Você é o meu professor de inglês. Gostaria que o senhor me explicasse a diferença entre \"must\" e \"have to\" quando usamos para expressar obrigação. Quero saber se existe diferença de intensidade, formalidade, ou outras nuances, e ver exemplos que me ajudem a escolher corretamente cada um.",
      level: "intermediário"
    },
    {
      id: 16,
      title: "Advérbios de Frequência: Uso Correto e Exemplos Práticos",
      content: "Você é o meu professor de inglês. Professor, poderia me explicar como usar os advérbios de frequência, como \"always\", \"usually\", \"often\", \"sometimes\" e \"never\"? Quero entender sua posição na frase e o impacto no sentido, com exemplos que ampliem minha compreensão e prática.",
      level: "básico a intermediário"
    },
    {
      id: 17,
      title: "Gerúndio e Infinitivo: Quando Usar \"-ing\" ou \"to + verbo\"",
      content: "Você é o meu professor de inglês. Poderia me ajudar a entender a diferença entre usar gerúndio e infinitivo? Quero aprender as regras para quando usar \"-ing\" e quando usar \"to + verbo\" depois de certos verbos, além de exemplos que ilustrem essas diferenças com clareza.",
      level: "intermediário a avançado"
    },
    {
      id: 18,
      title: "Perguntas com \"Wh-questions\": Estrutura e Exemplos",
      content: "Você é o meu professor de inglês. Poderia me explicar como formar perguntas com pronomes interrogativos iniciados por \"wh-\" (what, where, when, etc.)? Quero entender a estrutura correta dessas perguntas, diferenças entre perguntas diretas e indiretas, e ver exemplos para diversos contextos.",
      level: "básico a intermediário"
    },
    {
      id: 19,
      title: "Verbos Modais: Funções e Exemplos em Diferentes Contextos",
      content: "Você é o meu professor de inglês. Professor, pode me explicar quais são as funções dos verbos modais como \"can\", \"could\", \"may\", \"might\", \"shall\", \"should\", \"will\", \"would\" e \"must\"? Quero entender para que servem e ver exemplos de como usar cada um para pedir permissão, fazer pedidos, dar conselhos, e expressar possibilidade.",
      level: "intermediário"
    },
    {
      id: 20,
      title: "Diferença entre \"Who\", \"Whom\" e \"Whose\"",
      content: "Você é o meu professor de inglês. Gostaria que o senhor me ajudasse a entender as diferenças entre \"who\", \"whom\" e \"whose\". Quero saber quando usar cada pronome relativo ou interrogativo, com exemplos que me ajudem a entender o papel sintático dessas palavras nas frases.",
      level: "intermediário a avançado"
    },
    {
      id: 21,
      title: "Uso de \"Used to\" para Hábitos Passados",
      content: "Você é o meu professor de inglês. Pode me explicar como usar \"used to\" para falar de hábitos ou situações que aconteciam no passado, mas que não ocorrem mais? Quero entender tanto a forma afirmativa quanto negativa, e ver exemplos que mostrem claramente esse conceito.",
      level: "intermediário"
    },
    {
      id: 22,
      title: "Como Formar Frases Negativas em Diferentes Tempos Verbais",
      content: "Você é o meu professor de inglês. Poderia explicar para mim como formar frases negativas nos tempos Present Simple, Present Perfect e Past Simple? Quero entender as estruturas, os auxiliares usados e ver exemplos para cada tempo, para aplicar corretamente em minhas respostas.",
      level: "básico a intermediário"
    },
    {
      id: 23,
      title: "Preposições de Tempo: Uso Correto de \"At\", \"On\" e \"In\"",
      content: "Você é o meu professor de inglês. Poderia me ajudar a entender o uso correto das preposições de tempo \"at\", \"on\" e \"in\"? Quero aprender as regras que indicam momentos, dias, meses, anos, partes do dia e outras expressões temporais, com exemplos claros que facilitam o entendimento.",
      level: "básico a intermediário"
    },
    {
      id: 24,
      title: "Quantifiers: Uso de \"Much\", \"Many\", \"A Lot Of\", \"Few\" e \"Little\"",
      content: "Você é o meu professor de inglês. Professor, poderia me explicar como usar os quantifiers para expressar quantidade, como \"much\", \"many\", \"a lot of\", \"few\" e \"little\"? Gostaria de entender quais são usados com substantivos contáveis e incontáveis, em frases afirmativas e negativas, com exemplos para cada caso.",
      level: "básico a intermediário"
    },
    {
      id: 25,
      title: "Diferença entre \"Make\" e \"Do\": Expressões Comuns e Exemplos",
      content: "Você é o meu professor de inglês. Pode me explicar a diferença entre os verbos \"make\" e \"do\"? Quero aprender as expressões mais comuns que usam cada um, e entender em que contextos usar corretamente para falar de ações, tarefas e criações, com exemplos.",
      level: "básico a intermediário"
    },
    {
      id: 26,
      title: "Como Usar Conjunções Coordenativas e Subordinativas",
      content: "Você é o meu professor de inglês. Professor, poderia me ajudar a entender como usar conjunções coordenativas e subordinativas para ligar ideias em frases? Quero exemplos que mostrem claramente a diferença entre elas e como usá-las para expressar contraste, causa, adição, e consequência.",
      level: "intermediário a avançado"
    },
    {
      id: 27,
      title: "Diferenças entre Inglês Britânico e Americano em Vocabulário e Gramática",
      content: "Você é o meu professor de inglês. Poderia me explicar as principais diferenças entre o inglês britânico e o americano, tanto em vocabulário quanto em gramática? Gostaria de saber exemplos práticos e cuidados para não confundir os dois em situações formais e informais.",
      level: "intermediário"
    },
    {
      id: 28,
      title: "Tipos de Advérbios: Modo, Tempo, Frequência e Intensidade",
      content: "Você é o meu professor de inglês. Pode explicar para mim os diferentes tipos de advérbios – de modo, tempo, frequência e intensidade? Quero saber como reconhecer e usar cada tipo nas frases, com exemplos que me ajudem a identificar rápido e usar corretamente.",
      level: "intermediário"
    },
    {
      id: 29,
      title: "Pronomes Reflexivos: Uso e Exemplos Práticos",
      content: "Você é o meu professor de inglês. Professor, pode explicar o que são os pronomes reflexivos e quando devemos usá-los? Gostaria de ver exemplos que mostrem ações feitas pelo sujeito sobre si mesmo, e dicas para evitar erros comuns no uso desses pronomes.",
      level: "básico a intermediário"
    },
    {
      id: 30,
      title: "Tags Questions: O Que São e Como Usar na Conversação",
      content: "Você é o meu professor de inglês. Poderia me explicar o que são as tag questions e como usá-las corretamente na conversação? Quero aprender as formas afirmativas e negativas, a concordância de tempos e exemplos que me ajudem a praticar e entender esses question tags.",
      level: "intermediário"
    },
    {
      id: 31,
      title: "Diferença entre \"Since\" e \"For\" para Expressar Tempo e Duração",
      content: "Você é o meu professor de inglês. Pode me explicar a diferença entre \"since\" e \"for\" quando falamos de tempo e duração? Quero entender quando usar cada um, especialmente no Present Perfect, e ver exemplos para aplicar corretamente na fala e na escrita.",
      level: "intermediário"
    },
    {
      id: 32,
      title: "Conectores para Expressar Causa, Consequência, Contraste e Adição",
      content: "Você é o meu professor de inglês. Professor, poderia me ajudar a identificar os principais conectores para ligar ideias que expressam causa, consequência, contraste e adição? Quero exemplos práticos para que eu possa usá-los para organizar melhor meus textos e fala.",
      level: "intermediário a avançado"
    },
    {
      id: 33,
      title: "Uso dos Artigos com Nomes Próprios, Lugares e Nomes Incontáveis",
      content: "Você é o meu professor de inglês. Pode explicar para mim como usar os artigos \"a\", \"an\" e \"the\" com nomes próprios, nomes de lugares e substantivos incontáveis? Quero entender quando usamos ou deixamos de usar o artigo nesses casos, com exemplos claros.",
      level: "intermediário"
    },
    {
      id: 34,
      title: "Uso de \"Already\", \"Yet\" e \"Still\" no Present Perfect",
      content: "Você é o meu professor de inglês. Poderia me explicar como usar corretamente as palavras \"already\", \"yet\" e \"still\" em frases no Present Perfect? Gostaria de entender suas posições na frase e o significado que transmitem, com exemplos para eu praticar.",
      level: "intermediário"
    },
    {
      id: 35,
      title: "Diferença entre \"Then\" e \"Than\": Uso e Exemplos Simples",
      content: "Você é o meu professor de inglês. Pode me explicar a diferença entre \"then\" e \"than\"? Quero entender o significado de cada palavra e ver frases curtas que mostrem o uso correto para não confundí-las nas minhas conversas e escritas.",
      level: "básico"
    },
    {
      id: 36,
      title: "Passado Contínuo (Past Continuous): Uso para Ações Interrompidas",
      content: "Você é o meu professor de inglês. Professor, poderia me ajudar a entender como usar o Past Continuous para descrever ações que estavam ocorrendo e foram interrompidas? Gostaria de ver exemplos que mostrem claramente essa função em frases afirmativas, negativas e interrogativas.",
      level: "básico a intermediário"
    },
    {
      id: 37,
      title: "O Que São Collocations e Como Reconhecê-las?",
      content: "Você é o meu professor de inglês. Pode me explicar o que são \"collocations\" (combinações fixas de palavras) em inglês? Quero aprender a reconhecê-las e usá-las para falar e escrever de forma mais natural, com 10 exemplos comuns que eu possa praticar.",
      level: "intermediário a avançado"
    },
    {
      id: 38,
      title: "Tipos de Perguntas Indiretas e Como Formá-las Corretamente",
      content: "Você é o meu professor de inglês. Poderia me explicar os diferentes tipos de perguntas indiretas e como formá-las corretamente? Quero entender as variações e estrutura para usar em contextos formais e informais, com exemplos que facilitem meu aprendizado.",
      level: "intermediário a avançado"
    },
    {
      id: 39,
      title: "\"Have\" vs \"Have Got\": Diferenças em Expressar Posse",
      content: "Você é o meu professor de inglês. Pode me explicar as diferenças entre \"have\" e \"have got\" para expressar posse? Quero saber se há variações regionais ou de contexto, e exemplos que me ajudem a usar cada um adequadamente no inglês falado e escrito.",
      level: "básico a intermediário"
    },
    {
      id: 40,
      title: "Futuro com \"Will\", \"Going to\" e Present Continuous para Planos",
      content: "Você é o meu professor de inglês. Gostaria que o senhor me ajudasse a entender como usar o futuro com \"will\", \"going to\" e Present Continuous para falar de planos. Quero exemplos claros para distinguir quando usamos cada forma para expressar intenção, previsão e planos definidos.",
      level: "intermediário"
    },
    {
      id: 41,
      title: "Funções do Verbo \"To Be\" e Seus Usos Principais",
      content: "Você é o meu professor de inglês. Poderia me explicar as principais funções do verbo \"to be\" em inglês? Quero saber seus usos nas formas afirmativa, negativa e interrogativa, e como ele funciona em tempos diferentes, com exemplos para esclarecer.",
      level: "básico"
    },
    {
      id: 42,
      title: "Uso dos Adjetivos Possessivos: Exemplos Curtos e Longos",
      content: "Você é o meu professor de inglês. Pode me explicar como usar os adjetivos possessivos corretamente? Quero ver exemplos simples e frases mais complexas que mostrem o uso em diferentes contextos e com diferentes sujeitos.",
      level: "básico"
    },
    {
      id: 43,
      title: "Números Ordinais e Cardinais: Como Usar na Fala e Escrita",
      content: "Você é o meu professor de inglês. Professor, pode me ajudar a entender como usar números ordinais e cardinais corretamente no inglês falado e escrito? Gostaria de ver exemplos que mostrem a aplicação em datas, endereços, contagens e classificações.",
      level: "básico a intermediário"
    },
    {
      id: 44,
      title: "Uso de \"Shall\" no Inglês Formal e Informal",
      content: "Você é o meu professor de inglês. Pode me explicar quando usar \"shall\" em inglês, tanto no contexto formal quanto informal? Quero entender as situações típicas e ver exemplos para que eu possa usar corretamente e soar natural.",
      level: "intermediário a avançado"
    },
    {
      id: 45,
      title: "Verbos Modais para Permissão, Pedido, Conselho e Possibilidade",
      content: "Você é o meu professor de inglês. Por favor, me explique como usar os verbos modais para pedir permissão, fazer pedidos, dar conselhos e expressar possibilidade. Gostaria de exemplos claros para cada função, para que eu possa praticar e compreender as diferenças.",
      level: "intermediário"
    },
    {
      id: 46,
      title: "Diferenças entre \"Each\", \"Every\" e \"All\"",
      content: "Você é o meu professor de inglês. Poderia me explicar a diferença entre \"each\", \"every\" e \"all\"? Quero entender quando usar cada palavra, com exemplos que mostrem suas nuances no sentido de singularidade e totalidade.",
      level: "intermediário"
    },
    {
      id: 47,
      title: "Como Usar \"Let's\" para Fazer Sugestões",
      content: "Você é o meu professor de inglês. Professor, pode me ajudar a aprender como usar as frases com \"let's\" para fazer sugestões? Quero ver variações comuns para que eu possa me expressar de forma educada e natural em diferentes situações.",
      level: "básico a intermediário"
    },
    {
      id: 48,
      title: "Diferença entre \"Say\", \"Speak\" e \"Talk\" em Contextos Formais e Informais",
      content: "Você é o meu professor de inglês. Pode me explicar a diferença entre os verbos \"say\", \"speak\" e \"talk\"? Gostaria de saber como e quando usar cada um em situações formais e informais, com exemplos práticos.",
      level: "básico a intermediário"
    },
    {
      id: 49,
      title: "Negação com \"Never\" e \"Any\" em Diferentes Tipos de Frases",
      content: "Você é o meu professor de inglês. Pode me ensinar como usar corretamente a negação com \"never\" e \"any\"? Quero entender em quais tipos de frases usar cada palavra, e ver exemplos para evitar erros comuns.",
      level: "básico a intermediário"
    },
    {
      id: 50,
      title: "Modos Afirmativo, Interrogativo, Exclamativo e Imperativo: Uso e Exemplos",
      content: "Você é o meu professor de inglês. Por favor, explique as diferenças entre os modos afirmativo, interrogativo, exclamativo e imperativo. Quero entender a função e estrutura de cada um, com exemplos para aplicar em fala e escrita.",
      level: "básico a intermediário"
    }
  ]
};