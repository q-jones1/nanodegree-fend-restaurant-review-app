# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Stage 1
#### Note:
Also forming part of the **Udactiy Front-End Web Developer Nanodegree programme**.

## Table of Contents

* [Introduction](#introduction)
* [Prerequisites](#prerequisites)
* [External components](#external-components)
* [Background](#background)
* [License and Attribution](#license-and-attribution)

## Introduction

This **Restaurant Reviews** - **Stage One** project, was part of a Udacity course assessment, that turned a [static design](https://github.com/udacity/mws-restaurant-stage-1) website with issues, into a responsive and accessible site fit for different sized displays and screen reader use. A service worker and (cache only at this stage), were also implemented to begin the process of creating a seamless offline experience for users.

## Prerequisites

To get started, ensure:

1. That you have an up to date version installed of any modern web browser for your device e.g. such as _Chrome, Firefox, Safari._
2. That you have extracted all the files in the .zip or from the github repository, into a single folder on your device.
3. From a terminal cd (change directory) to the root of the extracted folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
4. With your server running, within your modern web browser visit the site: `http://localhost:8000`.
5. You should now land at a website that is fully responsive, accessible and works offline (cache only), when required (for assets hosted in the folder where the `http://localhost:8000` server was started).

## External components

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to ensure a token from [Mapbox](https://www.mapbox.com/) is added to
`<your MAPBOX API KEY HERE>` sections within the `main.js` and `restaurant_info.js` files, inside the extracted folder.
To obtain a token, you need to sign up for an account with Mapbox and at time of writing, Mapbox is free to use, within the set limits that Mapbox details on their [website](https://www.mapbox.com/).

## Background

To see the detail of the specific requirements that the project needed to meet, look at the project instructions on the [Udacity website](https://classroom.udacity.com/).

## License and Attribution

This project just added to the initial application builds from [Udacity's starter code GitHub repo](https://github.com/udacity/mws-restaurant-stage-1), so additional code is licensed under the same terms. See the **LICENSE file** for license rights and limitations.

Attribution for any project dependencies or reference resources used during this project, are detailed, either in the attribution section of the relevant .html, .css and .js files or the dependencies folder, within this project.
