# Changelog Website

> **Nota**: O changelog não inclui mini-updates.

<sub>O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-br/1.0.0/). Este changelog segue um formato semelhante.<sub>

---

# [0.2.0-remake] - 2026-02-03
## Adicionado
- [Política de Privacidade](/br/terms/privacy "Política de Privacidade").
- Menu lateral de configurações.
- Opções de tema: **Tema Claro** / **Tema Escuro**.
- Footer com informações básicas.

## Alterado
- **Domínio**: de **[https://galinhasdomexico.github.io/](https://galinhasdomexico.github.io/ "Domínio do GitHub.io")** para **[https://cofm.site](https://cofm.site "Domínio atual")**
- **Licença**: alterada de **MIT License** para [**GNU General Public License**](https://www.gnu.org/licenses/gpl-3.0.pt-br.html "GNU General Public License")
- **Navegação**: voltou a usar páginas HTML (ex.: `/br/`, `/us/`) em vez de hashes.
- **Tradução**: migrada de **Query Parameter-Based Translation** com **Data Attribute Translation System** para tradução por caminho de **URL (URL Path-Based Translation)**.

## Removido
- Sistema antigo de tradução por **Query Parameter-Based Translation** com **Data Attribute Translation System**.
- Página de pesquisa da galeria (`/br/gallery`).
- Avatar "Camila" (imagem na página inicial).

---

# [0.1.0-remake] - 2025-02-19
## Adicionado
- Avatar "Camila" (imagem na página inicial).
- `gallery.json` — dados para pesquisa da galeria.
- `translations.json` — arquivos de tradução.

## Alterado
- Site totalmente refeito com layout mais minimalista.
- Navegação por seções usando hashes (ex.: `/#home`, `/#changelog/website`).
- **Tradução**: passou de URL path-based para **Query Parameter-Based Translation** com **Data Attribute Translation System**; traduções armazenadas em `localStorage`.
- **Pesquisa**: suporte a múltiplas tags simultâneas; disponível em `/#gallery/`.
- Menu móvel ocupa a tela inteira.
- **Otimizações**: lazy-loading de imagens e sistema de carregamento de páginas.

## Removido
- Footer.
- Algumas imagens da galeria.

---