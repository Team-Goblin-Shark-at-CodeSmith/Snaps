# Snaps

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Future Plans](#future-plans)
- [Usage](#usage)
- [Installation](#installation)
- [Support](#support)

## Introduction

### For people who read a lot online:

- Inconvenience of navigating multiple sources for saved articles or news
- Crowded reading lists or cluttered bookmarks
- Want quick access to key information inside of entire article

Introducing Snaps, a versatile web application designed to curate and store articles effortlessly.

Users can save URLs of interest in their account cache, creating an organized repository of content. The cache/articles page showcases each entry with a title, the original URL, and a concise "snap," providing a summary of the content. On the "Add Snap" page, users can input new URLs. Here's where Snaps stands out: upon submission, our application uses puppeteer to web scrape the article from the given URL and leverages the OpenAI API to analyze the article text and generate key-point summaries. This innovative feature ensures a curated collection tailored to each user's preferences and requirements.

## Features

- Save URLs to create an organized repository of articles
- Automatically generate concise summaries using OpenAI API
- Utilizes puppeteer for web scraping article content
- Dedicated "Add Snap" page for seamless URL input

## Future Plans

- Users will have the flexibility to review and edit the AI-generated summaries before saving them into their personalized Snaps account.
- Implement search functionality for saved snaps.
- Allow users to add tags or categorize their snaps for better organization.


## Installation

To run Snaps locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/snaps.git
