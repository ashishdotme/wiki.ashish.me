---

title: Setup dev environment on ubuntu

description: ""

date: 2024-08-26T13:27:51.978Z

preview: ""

draft: true

tags: []

categories: []

---

  
  

# Zsh ===================================

# Install Zsh

```

sudo apt update && sudo apt upgrade -y

`sudo apt install zsh -y`

`sudo apt install unzip -y`

`sudo apt install wget -y`

sudo apt-get install build-essential

```

# Install brew

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

`val "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"`

  

# Install FNM for Zsh

brew install fnm

Add the following to your .zshrc profile:

eval "$(fnm env --use-on-cd --shell zsh)"

fnm install 20

fnm use 20

  

# Install Nerdfont

```

wget -P ~/.local/share/fonts https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/JetBrainsMono.zip \

&& cd ~/.local/share/fonts \

&& unzip JetBrainsMono.zip \

&& rm JetBrainsMono.zip \

&& fc-cache -fv

```

  

# Install starship

curl -fsSL https://starship.rs/install.sh | bash

echo 'eval "$(starship init zsh)"' >> ~/.zshrc