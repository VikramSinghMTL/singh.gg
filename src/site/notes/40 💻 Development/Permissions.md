---
{"dg-publish":true,"permalink":"/40-development/permissions/","title":"Permissions","tags":["macos","unix"],"noteIcon":"","created":"2024.08.29 17:17","updated":"2024.09.09 16:17"}
---


## Create a Shared Group

### Problem

I wanted to create a deep work user account so that I could work without being logged into any communication apps. This made developing annoying because now I had 2 users editing the same `src/` folder and I was running into permission issues.

### Solution

One approach is to create a new group, add both users to this group, and then set the folder's group ownership and permissions to this group.

-   Create a new group through Mac system settings GUI `Users and Groups`.
-   Add both users to the newly created group, again through the GUI.
-   Change the group ownership of the folder to the new group:

    ```bash

    ```

sudo chown:newgroup foldername

````

- Set the group permissions to read and write:

```bash
sudo chmod -R g+rw foldername
````

-   To set the group ID on the directory so that new files inherit this group, use:

    ```bash

    ```

sudo chmod +s foldername

```

### Update (2024.09.03)

This didn't end up working because VS Code and Docker were throwing permissions errors and it was too much to deal with unfortunately. Perhaps the play is to just use git for everything and when I go into the other account, all I have to do is pull.
```
