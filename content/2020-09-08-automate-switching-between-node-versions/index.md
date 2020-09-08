---
title: "Automate switching between node versions"
path: blog/automate-switching-between-node-versions
tags: [nodejs]
cover: ./nvm.png
date: 2020-09-08
excerpt: Manage node versions with ease.
---

# What is nvm? 🤔

_"nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL"._

# How do I install nvm? 🤔

Simple, just head on over to their [GitHub](https://github.com/nvm-sh/nvm) repository and follow the install instructions.

# Why should I use nvm? 🤔

If you're developing software using the NodeJS runtime environment you're probably aware that you might want have multiple projects using different node versions, say one using `10` and another `12`. This could be due to a number of reasons. It gets annoying switching between node versions manually.

# Manual usage of nvm 🐌

The project nvm solves this problem by allowing the user to install node versions on the fly by using a simple command:

```
nvm install <NODE_VERSION_NUMBER>
```

You can also easily switch between node versions using a simple command:

```
nvm use <NODE_VERSION_NUMBER>
```

# Automated usage of nvm 🤖

Let's face it, you're going to forget to switch to the correct node version at some point.

We can in a sense, automate the switching between versions.

It's a simple solution which only requires a one-time setup consisting of two steps:

1. Create a `.nvmrc` file in the root of your project folder with the version number you want to use.

```
12
```

2. Add the below snippet to your `.zshrc` file

```
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

Now when you change directory it will look for a `.nvmrc` file automatically and switch to the correct version.

```
Found '/Users/thomaschaplin/projects/dummy_project/.nvmrc' with version <12>
Now using node v12.18.2 (npm v6.14.5)
```
