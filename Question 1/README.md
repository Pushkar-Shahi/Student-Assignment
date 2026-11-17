# Question 1: Git and GitHub Setup & First Webpage

## Question Statement
Explain the steps to set up Git and GitHub. Create a repository, add your first HTML webpage, commit the changes, and push the repository to GitHub.

---

## Aim
To install Git, connect it with GitHub, create a repository, add the first HTML webpage, commit it, and push it to GitHub.

---

## Names & Configuration Used
| Item | Name / Value |
| :--- | :--- |
| **Repository** | `Mirai-Webdev-Assignment` (ESC101-Internet-Web-Lab) |
| **Branch** | `main` |
| **First File** | `index.html` |
| **Commit Message** | `Added home page for ESC-101 lab repository` |

---

## Step-by-Step Procedure
1. **Install Git**: Download Git from [git-scm.com](https://git-scm.com/) and check the installed version:
   ```bash
   git --version
   ```
2. **Create GitHub Account**: Create a free account on [github.com](https://github.com/).
3. **Configure User Identity**: Set your name and email in Git (run once per computer):
   ```bash
   git config --global user.name "Pushkar Shahi"
   git config --global user.email "riseinspirethrive2008@gmail.com"
   git config --list
   ```
4. **Create GitHub Repository**: On GitHub, click `+` then **New repository**. Name it `Mirai-Webdev-Assignment`, choose **Public**, keep Add README unchecked, and click **Create repository**.
5. **Initialize Local Folder**:
   ```bash
   mkdir Mirai-Webdev-Assignment
   cd Mirai-Webdev-Assignment
   git init
   ```
6. **Create First Webpage**: Create `index.html` with HTML5 structure.
7. **Commit and Push**:
   ```bash
   git status
   git add index.html
   git commit -m "Added home page for ESC-101 lab repository"
   git branch -M main
   git remote add origin https://github.com/Pushkar-Shahi/Mirai-Webdev-Assignment.git
   git push -u origin main
   ```
8. **Verify on Remote**: Refresh the GitHub repository page to verify `index.html` is listed.

---

## Common Git Commands
| Command | Purpose |
| :--- | :--- |
| `git init` | Start a repository in the current folder |
| `git status` | Show changed and untracked files |
| `git add <file>` | Stage a file for commit |
| `git commit -m "message"` | Save staged changes with a commit message |
| `git remote add origin <url>` | Link the local repository to GitHub |
| `git push -u origin main` | Upload commits to GitHub |
| `git log --oneline` | View history of commits in compact format |
| `git remote -v` | Verify connected remote repository URLs |

---

## Result
The repository was successfully initialized, `index.html` was created and committed, and the changes were pushed and displayed on GitHub.
