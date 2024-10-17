document.addEventListener('DOMContentLoaded', function() {
  const frasesSemImagem = [
      "Às vezes não olhar para trás é a melhor opção",
      "Nunca esconda seus sentimentos, isso pode te atrapalhar mais <br> para frente ou você pode se arrepender de não ter dito",
      "Eu te vejo, eu do passado, e vejo como a minha vida era bela",
      "Às vezes podemos pensar que a morte é uma opção, <br> mas na verdade, ela nunca foi",
      "Ok Google, como parar de sofrer?"
  ];

  const frasesComImagem = [
      {
          frase: "Let me be sad; Even for a little while, just a chance to catch my breath",
          imagem: "https://i.scdn.co/image/ab67616d0000b27324261dc1d55e438883664bfd",
          textoImagem: "I Prevail - Let Me Be Sad"
      },
      {
          frase: "And I don't wanna make you feel bad; But you kinda ruined my life; You hurt me and ruined my life",
          imagem: "https://images.genius.com/9cd2072c53c835225556dbe3aeb656bf.1000x1000x1.jpg",
          textoImagem: "Coopex, EBEN & Shiah Maisel - Ruined My Life"
      },
      {
          frase: "For ya love; I would cross oceans; All the hurt; And the pain; You could take it all away",
          imagem: "https://images.genius.com/767eaa85f415431ac7a41e576114272f.1000x1000x1.png",
          textoImagem: "SLANDER, Said The Sky & JT Roach - Potions"
      }
  ];

  const textElement = document.getElementById('text');
  const imagemElement = document.getElementById('imagem');
  const textImagemContentElement = document.getElementById('text-imagem-content');
  const textImagemElement = document.getElementById('text-imagem');

  const usarImagem = Math.random() < 0.5;

  if (usarImagem) {
      const randomIndex = Math.floor(Math.random() * frasesComImagem.length);
      const fraseComImagem = frasesComImagem[randomIndex];

      textElement.innerHTML = `<b style="font-size: 20px;" class="text">❝</b>${fraseComImagem.frase}<b style="font-size: 20px;" class="text">❞</b>`;
      imagemElement.src = fraseComImagem.imagem;
      textImagemContentElement.innerText = fraseComImagem.textoImagem;

      textImagemElement.style.display = 'block';
  } else {
      const randomIndex = Math.floor(Math.random() * frasesSemImagem.length);
      const novaFrase = frasesSemImagem[randomIndex];

      textElement.innerHTML = `<b style="font-size: 20px;" class="text">❝</b>${novaFrase}<b style="font-size: 20px;" class="text">❞</b>`;
      
      textImagemElement.style.display = 'none';
  }
});