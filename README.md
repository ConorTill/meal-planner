# Meal Planner

## Running with Docker

Once you've checked out the repository, the easiest way to get the Meal Planner up and running locally is to run it using Docker.

### Install Docker Desktop

First, [download and install Docker Desktop](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-win-amd64).

Next, open Docker Desktop. You might have to make a free account. If it opened and ran successfully you should be ready to run the app.

### Build a Docker Image

Open a command prompt with administrator privileges (Windows Key + R, type in cmd and press Ctrl + Shift + Enter, or press the Windows Key to open the start menu, type in cmd to search and then right click Command Prompt -> Run as Administrator in the results).

In the command prompt, navigate to the directory to which you checked out the repository (example command: `cd C:\Users\your-name-here\source\repos\meal-planner`).

Now run the following command: `docker build . -t meal-planner`

This will create a docker image containing everything required to run the web app and its backend API.

### Run the Image in a Container

Finally, run this command: `docker run -d -p 5173:8080 meal-planner`

If this ran successfully, congrats! You should now be able to navigate to http://localhost:5173 on your machine and see the default web page.

Note that the port 5173 in the docker run command can be changed to any port you would prefer, it only changes what port you have to specify in the url. If you change it to 80 you won't need to specify a port at all, but it may require more advanced permissions on your machine.
