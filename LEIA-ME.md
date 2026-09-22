# Oficina da Fala — como instalar

Jogos em casa para treinar o som **s** e a boca. Tudo corre no próprio dispositivo: nenhuma imagem, som ou nome sai dele.

Para o browser **se lembrar das permissões da câmara e do microfone e da calibração**, a app tem de ter uma morada própria (um site). Aberta como ficheiro, o Safari esquece tudo ao fechar.

## Opção A — GitHub Pages (recomendado, 5 minutos)

1. Cria um repositório novo no GitHub, por exemplo `oficina-da-fala`.
2. Carrega para lá o conteúdo desta pasta: `index.html`, `manifest.webmanifest`, `sw.js` e a pasta `icons`.
3. No repositório: **Settings › Pages › Build and deployment › Deploy from a branch** → `main` / `(root)` → **Save**.
4. Passado um minuto fica disponível em `https://<o-teu-utilizador>.github.io/oficina-da-fala/`.

A app não tem dados pessoais: o nome da criança e a calibração ficam só no browser de quem a usa.

## Opção B — no próprio computador

Na pasta desta app, num terminal:

```
python3 -m http.server 8000
```

Depois abre `http://localhost:8000` no browser. As permissões e a calibração ficam guardadas para esse endereço, desde que uses sempre a mesma porta.

## Permissões que ficam guardadas

**Safari (Mac):** abre o site e usa a câmara uma vez. Depois vai a **Safari › Definições › Sites › Câmara**, e escolhe **Permitir** para o site. Faz o mesmo em **Microfone**.

**Chrome ou Edge:** na primeira vez escolhe **Permitir**. Fica guardado para o site.

## Como app, com ícone próprio

- **Safari (macOS Sonoma ou mais recente):** menu **Ficheiro › Adicionar à Dock**.
- **Chrome ou Edge:** ícone de instalar na barra de endereço.
- **iPad:** botão Partilhar › **Adicionar ao ecrã principal**.

Depois da primeira visita com internet, funciona sem internet.

## Calibração

Faz-se uma vez, no ecrã **Calibrar microfone**, à distância a que a criança vai estar. Fica guardada no site. Em **Guardar num ficheiro** fica também uma cópia de segurança, que se pode abrir noutro browser ou computador com **Abrir ficheiro**.
