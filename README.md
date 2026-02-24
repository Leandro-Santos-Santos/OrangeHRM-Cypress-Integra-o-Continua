# OrangeHRM-Cypress-Integra-o-Continua

## 🚀 Integração Contínua (CI)

Este projeto está configurado para rodar testes automatizados via **GitLab CI**. 

**Recursos implementados:**
- **Pipeline Automático:** Execução de testes a cada push.
- **Docker:** Utilização da imagem oficial `cypress/browsers` para garantir o ambiente.
- **Cypress Cloud:** Integração para gravação de vídeos e logs das execuções.
- **Caching:** Configuração de cache do `npm` para acelerar os builds.

Você pode conferir as configurações no arquivo [`.gitlab-ci.yml`](./.gitlab-ci.yml).
