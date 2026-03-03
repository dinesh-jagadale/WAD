PS C:\Web_Development> cd C:\Web_Development\WAD
PS C:\Web_Development\WAD> tree /f 
Folder PATH listing for volume Windows
Volume serial number is 4888-EF0D
C:.
├───E-commerse_admin
│       index.html
│       style.css
│
└───Registration
        display.js
        list.html
        registration.html
        registration.js

PS C:\Web_Development\WAD> git init
PS C:\Web_Development\WAD> git add .
PS C:\Web_Development\WAD> git commit -m "First commit - WAD "       
[main (root-commit) 2bee0e4] First commit - WAD
 6 files changed, 312 insertions(+)
 create mode 100644 E-commerse_admin/index.html
 create mode 100644 E-commerse_admin/style.css
 create mode 100644 Registration/display.js
 create mode 100644 Registration/list.html
 create mode 100644 Registration/registration.html
 create mode 100644 Registration/registration.js
PS C:\Web_Development\WAD> git branch -M main
PS C:\Web_Development\WAD> git remote -v
origin  https://github.com/dinesh-jagadale/WAD.git (fetch)
origin  https://github.com/dinesh-jagadale/WAD.git (push)
PS C:\Web_Development\WAD> git remote add origin https://github.com/dinesh-jagadale/WAD.git
error: remote origin already exists.
PS C:\Web_Development\WAD> git push -u origin main
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 12 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (10/10), 3.59 KiB | 918.00 KiB/s, done.
Total 10 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/dinesh-jagadale/WAD.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS C:\Web_Development\WAD> 
