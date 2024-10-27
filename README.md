
# Testando a versão do NodeJS 22

### Padrão de projeto generator implementado puramente com javascript porém com tipagens (typescript) sem nenhuma lib instalada.

Essa versão do nodejs implementou (experimentalmente) essa feature que permite nativamente no javascript utilizar liguagem tipada como no typescript porém de um jeito muito mais fácil, sem a necessidade de instalar ts-node, tsc ou o propio typescript e o mais importante sem a necessidade de transpilar o projeto para subir em servidores (aquela famosa pastinha dist ahaha).

## PROJETO

Este é apenas um exemplo da utilizacao da typagem nativa do javascript.

### ESTRUTURA

- src
    - **entities** : representa os objetos que iremos persistir
    - **factories** : é o padrão de projeto utilizado para gerar nossas instâncias
    - **repositories** : camada que conversa com o banco de dados
    - **services** : camada intermediaria que conversa com repositorio e controllers (quando existir)
    - **index.ts**  : aqui representa o controller e que vai retornar as informacoes que sao requisitadas conversando com a camada de service
- package.json


## CONCLUSÕES

O javascript cada dia lança uma coisa nova, e esta ficando cada vez melhor, ainda tem muitas features que nao conheço entao vou começar a fazer pequenas pocs como essa para avaliar as features que me chamam atenção.

_Chears_
