# Gerador de senhas
Gerador de senhas com base no nome do usuário e data de nascimento, indicado para gerar senhas para um primeiro acesso.
Esse modelo de senha era usado pela PUCPR para gerar o primeiro acesso aos calouros da universidade.

## Funcionamento
Envia-se um json para a rota "/password" contendo nome do usuário e data de nascimento.
```
{
    "name": "Leona Ceschin",
    "birth": "05/11/1987"
}
```
O sistema responde com a senha formada tendo como base as informações passadas.
```
{
    "password": "Leo@2003"
}
```
