# OrangeHRM-Cypress-Integra-o-Continua

## 🚀 Integração Contínua (CI)

Este projeto está configurado para rodar testes automatizados via **GitLab CI**. 

**Recursos implementados:**
- **Pipeline Automático:** Execução de testes a cada push.
- **Docker:** Utilização da imagem oficial `cypress/browsers` para garantir o ambiente.
- **Cypress Cloud:** Integração para gravação de vídeos e logs das execuções.
- **Caching:** Configuração de cache do `npm` para acelerar os builds.

Você pode conferir as configurações no arquivo [`.gitlab-ci.yml`](./.gitlab-ci.yml).


 (Run Starting)
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        13.6.4                                                                         │
  │ Browser:        Chrome 118 (headless)                                                          │
  │ Node Version:   v20.9.0 (/usr/local/bin/node)                                                  │
  │ Specs:          1 found (login.cy.js)                                                          │
  │ Searched:       cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                            │
  │ Params:         Tag: false, Group: false, Parallel: false                                      │
  │ Run URL:        https://cloud.cypress.io/projects/pwxho8/runs/2                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  login.cy.js                                                                     (1 of 1)
  Teste de Login
    ✓ Deve fazer login com sucesso (10452ms)
  1 passing (14s)
  (Results)
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     14 seconds                                                                       │
  │ Spec Ran:     login.cy.js                                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
  (Uploading Cloud Artifacts)
  - Video - Nothing to upload 
  - Screenshot - Nothing to upload 
  - Test Replay - 1.59 MB
  Uploading Cloud Artifacts: . 
  (Uploaded Cloud Artifacts)
  - Test Replay - Done Uploading 1.59 MB in 346.65ms 1/1
====================================================================================================
  (Run Finished)
       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  login.cy.js                              00:14        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:14        1        1        -        -        -  
───────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                       
  Recorded Run: https://cloud.cypress.io/projects/pwxho8/runs/2
Saving cache for successful job
00:01
Creating cache 0_package-lock-cf8897a6b16c953f8f46b8ee74f429b66a03cf23-protected...
.npm/: found 956 matching artifact files and directories 
Uploading cache.zip to https://storage.googleapis.com/gitlab-com-runners-cache/project/79698825/0_package-lock-cf8897a6b16c953f8f46b8ee74f429b66a03cf23-protected 
Created cache
Cleaning up project directory and file based variables
00:01
Job succeeded
