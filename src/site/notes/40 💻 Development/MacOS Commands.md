---
{"dg-publish":true,"permalink":"/40-development/mac-os-commands/","noteIcon":"1","created":"Aug 29, 2024 17:17","updated":"Sep 12, 2024 23:24"}
---


## MacOS Commands

### Show/hide dock time delay

```
defaults write com.apple.dock "autohide-delay" -float "5" && killall Dock
```

### Set back to default

```
defaults delete com.apple.dock "autohide-delay" && killall Dock
```

### Turn off dock icon bouncing

```
defaults write com.apple.dock no-bouncing -bool TRUE
```
