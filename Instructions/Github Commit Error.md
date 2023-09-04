How to Reset Repository if it does not commit

1. Reset Git **git reset**

2. Remove master or main file from project folder
   **/my_project_directory/./git/refs/heads/master**

3. Get the last hash code for the effected repository and enter in the command below.
   **git reset --hard <my_hash_of_last_commit_on_remote_branch>**
