---
{"title":"Bash Commands","tags":["bash"],"dg-publish":true,"created":"2024-08-29","modified":"2024-09-13","permalink":"/40-software/bash-commands/","dgPassFrontmatter":true,"updated":"2024-09-13"}
---


## Remove all common folder prefixes

```bash
find . -maxdepth 1 -type d -name "assignment-2-controllers-*" -execdir sh -c 'mv {} $(basename {} | cut -d "-" -f4)' \;
```

ex. `assignment-2-controllers-vik` => `vik`
