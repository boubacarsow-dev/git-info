# git-info CLI

A lightweight, zero-dependency command-line interface tool to fetch and display GitHub developer information directly from your terminal.

## Description

`git-info` allows you to quickly retrieve a developer's GitHub profile details by simply providing their username. It interacts with the public GitHub API to fetch the user's name, biography, and the number of public repositories they have. 

Built entirely with pure Node.js, this project demonstrates how to handle HTTP requests, parse JSON data, and manage CLI inputs without relying on any external packages.

## Features

* Fast and lightweight execution.
* Retrieves essential developer information: Name, Bio, and Project Count (Public Repositories).
* Zero external dependencies (uses purely Node.js built-in modules).
* Error handling for non-existent users or network issues.

## Prerequisites

* Node.js installed on your local machine.

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone <your-repository-url>
