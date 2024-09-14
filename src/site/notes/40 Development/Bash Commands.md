---
{"dg-publish":true,"permalink":"/40-development/bash-commands/","title":"Bash Commands","tags":["bash"],"created":"2024-08-29","updated":"2024-09-13"}
---


## Remove all common folder prefixes

```bash
find . -maxdepth 1 -type d -name "assignment-2-controllers-*" -execdir sh -c 'mv {} $(basename {} | cut -d "-" -f4)' \;
```

ex. `assignment-2-controllers-vik` => `vik`
