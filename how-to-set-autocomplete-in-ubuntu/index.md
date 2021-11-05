# How to set autocomplete in Ubuntu


**Mofidy bash.bashrc**

```bash
sudo vi /etc/bash.bashrc
```

**Find those code in the file**

```bash
#enable bash completion in interactive shells
#if ! shopt -oq posix; then
#      if [-f  /usr/share/bash-completion/bash_completion ]; then
#          . /usr/share/bash-completion/bash_completion
#      elif [ -f /etc/bash_completion]; then
#           . /etc/bash_completion
#      fi
#fi
```

**Remove #**

Like below:

```bash
#enable bash completion in interactive shells
if ! shopt -oq posix; then
     if [-f  /usr/share/bash-completion/bash_completion ]; then
          . /usr/share/bash-completion/bash_completion
      elif [ -f /etc/bash_completion]; then
           . /etc/bash_completion
      fi
fi
```

**Source it**

```bash
sudo source /etc/bash.bashrc
```

Now you can use Tab to autocomplete your command

