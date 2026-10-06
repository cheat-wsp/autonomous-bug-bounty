# Autonomous Bug Bounty Research

Apresentação visual da arquitetura de um **agente autônomo de pesquisa de segurança**: o OpenCode como cérebro, Kali Linux como ambiente, ferramentas como instrumentos, arquivos/estados como memória e a VM como laboratório — sempre com o pesquisador no controle da decisão final.

> Site estático publicado via **GitHub Pages**. Sem build, sem dependências, sem backend.

## Objetivo

Explicar a ideia do projeto para um público não necessariamente técnico, mostrando:

- a ideia geral (30 segundos),
- a arquitetura (2 minutos),
- o funcionamento completo (5 minutos).

## Visão geral

```
Pesquisador → Programa + Regras → OpenCode 🧠 → Kali + Tools + Memória
→ Investigação → Análise → Hipóteses → Validação → Evidência → Relatório → Revisão humana
```

Conceito central:

| Elemento | Papel |
|---|---|
| OpenCode | Cérebro — planeja, analisa, decide |
| Kali Linux | Ambiente — laboratório |
| Ferramentas | Instrumentos — usadas sob decisão do agente |
| Memória (`program_state`) | Contexto persistente |
| VM | Laboratório isolado (snapshots, recuperação) |
| Pesquisador | Define programa/escopo/regras, revisa e submete |

## Estrutura

```
autonomous-bug-bounty/
├── index.html
├── css/styles.css
├── js/main.js
├── assets/
└── README.md
```

## Stack

- HTML semântico + CSS puro + JavaScript simples
- Diagramas em SVG inline (sem imagens externas)
- Zero dependências — carregamento rápido e GitHub Pages trivial

## Execução local

```bash
# opção 1: abrir direto
open index.html

# opção 2: servidor local
python3 -m http.server 8000
# http://localhost:8000
```

## GitHub Pages

O deploy é a partir da branch `main`, pasta `/ (root)`.

1. Push para `main`
2. GitHub → Settings → Pages → Deploy from branch → `main` / `/ (root)`
3. Aguardar o deploy e abrir a URL pública

Verificação:

```bash
curl -sI https://<user>.github.io/autonomous-bug-bounty/ | head -5
```

## Roadmap (6 fases, sem dashboard)

- **Phase 01 — Environment:** VM → Kali → Git → OpenCode
- **Phase 02 — Primeiro agente:** terminal → ferramentas → programa
- **Phase 03 — Memória:** estado → histórico → persistência
- **Phase 04 — Investigação:** reconhecimento → mapeamento → hipóteses
- **Phase 05 — Validação:** achados → validação → evidências
- **Phase 06 — Relatórios:** finding → relatório → revisão humana

## Segurança

Pesquisa apenas em programas e ativos autorizados. Em dúvida sobre escopo: pausar, registrar e pedir decisão humana.
