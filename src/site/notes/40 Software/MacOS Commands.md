---
{"dg-publish":true,"created":"2024-08-29","modified":"2024-09-13","permalink":"/40-software/mac-os-commands/","dgPassFrontmatter":true,"updated":"2024-09-13"}
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
