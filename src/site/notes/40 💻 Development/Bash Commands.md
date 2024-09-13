---
{"dg-publish":true,"permalink":"/40-development/bash-commands/","title":"Bash Commands","tags":["bash"],"noteIcon":"1","created":"Aug 29, 2024 17:17","updated":"Sep 12, 2024 23:24"}
---


## Remove all common folder prefixes

```bash
find . -maxdepth 1 -type d -name "assignment-2-controllers-*" -execdir sh -c 'mv {} $(basename {} | cut -d "-" -f4)' \;
```

ex. `assignment-2-controllers-vik` => `vik`
